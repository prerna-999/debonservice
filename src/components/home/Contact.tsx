


"use client";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber, getCountryCallingCode } from "react-phone-number-input";
import type { Country } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import en from "react-phone-number-input/locale/en.json";
import "react-phone-number-input/style.css";

const SERVICE_GROUPS = [
  {
    label: "Digital Marketing Services",
    items: [
      "SEO & AI SEO",
      "Paid Media & Performance Marketing",
      "Content & Social",
      "Customer Engagement",
      "Reputation & Optimization",
    ],
  },
  {
    label: "Web and App Development Services",
    items: ["Web Development", "Software & App Development", "AI Solutions"],
  },
];

const SINGLE_SERVICES = ["Business Operations", "Flexible Workspaces"];

const COUNTRY_NAMES = en as Record<string, string>;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

const MIN_FILL_TIME_MS = 3000; // isse jaldi submit = bot
const THANK_YOU_URL = "/thank-you";

type CountryOption = { value?: Country; label: string; divider?: boolean };

type CountrySelectProps = {
  value?: Country;
  onChange: (value?: Country) => void;
  options: CountryOption[];
  disabled?: boolean;
  readOnly?: boolean;
};

function CountrySelect({ value, onChange, options, disabled, readOnly }: CountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const items = useMemo(
    () =>
      options
        .filter((o): o is CountryOption & { value: Country } => !!o.value)
        .map((o) => ({ code: o.value, name: o.label, dial: getCountryCallingCode(o.value) })),
    [options]
  );

  const q = query.trim().toLowerCase().replace(/^\+/, "");
  const filtered = q
    ? items.filter((i) => i.name.toLowerCase().includes(q) || i.dial.startsWith(q) || i.code.toLowerCase() === q)
    : items;

  const SelectedFlag = value ? flags[value] : undefined;

  return (
    <div className="home-contact__phone-country" ref={wrapRef}>
      <button
        type="button"
        className="home-contact__phone-country-button"
        onClick={() => setOpen((o) => !o)}
        disabled={disabled || readOnly}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select country code"
      >
        {SelectedFlag && (
          <span className="home-contact__phone-country-flag">
            <SelectedFlag title={value ? COUNTRY_NAMES[value] : ""} />
          </span>
        )}
        <span className="home-contact__phone-country-code">{value ? `+${getCountryCallingCode(value)}` : ""}</span>
        <span className="home-contact__phone-country-arrow" aria-hidden="true" />
      </button>

      {open && (
        <div className="home-contact__phone-country-menu">
          <input
            type="text"
            className="home-contact__phone-country-search"
            placeholder="Search country or code"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            autoComplete="off"
            aria-label="Search country"
          />
          <ul className="home-contact__phone-country-list" role="listbox">
            {filtered.map((i) => {
              const Flag = flags[i.code];
              return (
                <li key={i.code} role="option" aria-selected={i.code === value}>
                  <button
                    type="button"
                    className={
                      "home-contact__phone-country-option" +
                      (i.code === value ? " home-contact__phone-country-option--active" : "")
                    }
                    onClick={() => {
                      onChange(i.code);
                      setOpen(false);
                      setQuery("");
                    }}
                  >
                    <span className="home-contact__phone-country-flag">{Flag && <Flag title={i.name} />}</span>
                    <span className="home-contact__phone-country-name">{i.name}</span>
                    <span className="home-contact__phone-country-dial">+{i.dial}</span>
                  </button>
                </li>
              );
            })}
            {filtered.length === 0 && <li className="home-contact__phone-country-empty">No country found</li>}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const router = useRouter();
  const rootRef = useRef<HTMLElement>(null);

  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [phone, setPhone] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState("");

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const loadedAt = useRef<number>(Date.now());

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 34,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: { trigger: el, start: "top 91%", toggleActions: "play none none reverse", invalidateOnRefresh: true },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const resetAll = (form: HTMLFormElement) => {
    form.reset();
    setPhone(undefined);
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
    loadedAt.current = Date.now();
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Bot check: honeypot bhara hua ya bahut jaldi submit
    if (fd.get("website") || Date.now() - loadedAt.current < MIN_FILL_TIME_MS) {
      resetAll(form);
      router.push(THANK_YOU_URL);
      return;
    }

    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError("Enter a valid phone number.");
      return;
    }
    setPhoneError("");

    if (!captchaToken) {
      setCaptchaError("Please verify that you are not a robot.");
      return;
    }
    setCaptchaError("");

    const countryCode = parsePhoneNumber(phone)?.country;

    const templateParams = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone,
      country: countryCode ? COUNTRY_NAMES[countryCode] : "",
      service: fd.get("service"),
      message: fd.get("message"),
      "g-recaptcha-response": captchaToken,
    };

    setStatus("sending");
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      resetAll(form);
      setStatus("idle");
      router.push(THANK_YOU_URL);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    }
  };

  return (
    <section className="home-contact" id="contact" aria-labelledby="contact-title" ref={rootRef}>
      <Container>
        <Row className="home-contact__layout">
          {/* ---- Left copy ---- */}
          <Col lg={5}>
            <h2 id="contact-title" className="home-contact__title" data-reveal>
              Big Ideas Deserve
              <br />
              Better <em>Execution.</em>
            </h2>
            <p className="home-contact__intro" data-reveal>
              Your key takeaway awaits. Get the right strategy, smarter technology and advanced AI solutions today.
            </p>
          </Col>

          {/* ---- Form ---- */}
          <Col lg={7}>
            <form className="home-contact__form" id="enquiry-form" onSubmit={onSubmit} data-reveal>
              {/* Honeypot: bots bhar dete hain, insaan nahi dekhta */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
              />

              <div className="home-contact__pair">
                <label className="home-contact__label">
                  Your name
                  <input name="name" autoComplete="name" required placeholder="Your name" />
                </label>
                <label className="home-contact__label">
                  Work email
                  <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
                </label>
              </div>

              <div className="home-contact__pair">
                <label className="home-contact__label">
                  Phone
                  <PhoneInput
                    defaultCountry="SG"
                    addInternationalOption={false}
                    countrySelectComponent={CountrySelect}
                    value={phone}
                    onChange={(v) => {
                      setPhone(v);
                      if (phoneError) setPhoneError("");
                    }}
                    placeholder="Phone number"
                    autoComplete="tel"
                    aria-invalid={!!phoneError}
                  />
                  {phoneError && (
                    <span className="home-contact__error">{phoneError}</span>
                  )}
                </label>

                <label className="home-contact__label">
                  Service interest
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_GROUPS.map((g) => (
                      <optgroup key={g.label} label={g.label}>
                        {g.items.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    {SINGLE_SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="home-contact__label">
                What are you working toward?
                <textarea name="message" rows={4} required placeholder="A little about your business and goals" />
              </label>

              <div className="home-contact__captcha">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(token) => {
                    setCaptchaToken(token);
                    if (token) setCaptchaError("");
                  }}
                  onExpired={() => setCaptchaToken(null)}
                />
                {captchaError && <span className="home-contact__error">{captchaError}</span>}
              </div>

              <button className="home-contact__btn" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"} <span aria-hidden="true">↗</span>
              </button>

              <p className="home-contact__status" role="status" aria-live="polite">
                {status === "error" && "Something went wrong. Please try again."}
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}