
// "use client";
// import { useEffect, useMemo, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Container, Row, Col } from "react-bootstrap";
// import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";
// import PhoneInput, { isValidPhoneNumber, parsePhoneNumber, getCountryCallingCode } from "react-phone-number-input";
// import type { Country } from "react-phone-number-input";
// import flags from "react-phone-number-input/flags";
// import en from "react-phone-number-input/locale/en.json";
// import "react-phone-number-input/style.css";

// const SERVICE_GROUPS = [
//   {
//     label: "Digital Marketing Services",
//     items: [
//       "SEO & AI SEO",
//       "Paid Media & Performance Marketing",
//       "Content & Social",
//       "Customer Engagement",
//       "Reputation & Optimization",
//     ],
//   },
//   {
//     label: "Web and App Development Services",
//     items: ["Web Development", "Software & App Development", "AI Solutions"],
//   },
// ];

// const SINGLE_SERVICES = ["Business Operations", "Flexible Workspaces"];

// const COUNTRY_NAMES = en as Record<string, string>;

// const ADDRESS = "111 North Bridge Road, #21-01, Peninsula Plaza, Singapore 179098";
// const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

// const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
// const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
// const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
// const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

// const MIN_FILL_TIME_MS = 3000; 

// const THANK_YOU_URL = "/thank-you";

// type CountryOption = { value?: Country; label: string; divider?: boolean };

// type CountrySelectProps = {
//   value?: Country;
//   onChange: (value?: Country) => void;
//   options: CountryOption[];
//   disabled?: boolean;
//   readOnly?: boolean;
// };

// function CountrySelect({ value, onChange, options, disabled, readOnly }: CountrySelectProps) {
//   const [open, setOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const wrapRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!open) return;
//     const onDown = (e: MouseEvent) => {
//       if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
//     };
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setOpen(false);
//     };
//     document.addEventListener("mousedown", onDown);
//     document.addEventListener("keydown", onKey);
//     return () => {
//       document.removeEventListener("mousedown", onDown);
//       document.removeEventListener("keydown", onKey);
//     };
//   }, [open]);

//   const items = useMemo(
//     () =>
//       options
//         .filter((o): o is CountryOption & { value: Country } => !!o.value)
//         .map((o) => ({ code: o.value, name: o.label, dial: getCountryCallingCode(o.value) })),
//     [options]
//   );

//   const q = query.trim().toLowerCase().replace(/^\+/, "");
//   const filtered = q
//     ? items.filter((i) => i.name.toLowerCase().includes(q) || i.dial.startsWith(q) || i.code.toLowerCase() === q)
//     : items;

//   const SelectedFlag = value ? flags[value] : undefined;

//   return (
//     <div className="contact-main__phone-country" ref={wrapRef}>
//       <button
//         type="button"
//         className="contact-main__phone-country-button"
//         onClick={() => setOpen((o) => !o)}
//         disabled={disabled || readOnly}
//         aria-haspopup="listbox"
//         aria-expanded={open}
//         aria-label="Select country code"
//       >
//         {SelectedFlag && (
//           <span className="contact-main__phone-country-flag">
//             <SelectedFlag title={value ? COUNTRY_NAMES[value] : ""} />
//           </span>
//         )}
//         <span className="contact-main__phone-country-code">{value ? `+${getCountryCallingCode(value)}` : ""}</span>
//         <span className="contact-main__phone-country-arrow" aria-hidden="true" />
//       </button>

//       {open && (
//         <div className="contact-main__phone-country-menu">
//           <input
//             type="text"
//             className="contact-main__phone-country-search"
//             placeholder="Search country or code"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             autoFocus
//             autoComplete="off"
//             aria-label="Search country"
//           />
//           <ul className="contact-main__phone-country-list" role="listbox">
//             {filtered.map((i) => {
//               const Flag = flags[i.code];
//               return (
//                 <li key={i.code} role="option" aria-selected={i.code === value}>
//                   <button
//                     type="button"
//                     className={
//                       "contact-main__phone-country-option" +
//                       (i.code === value ? " contact-main__phone-country-option--active" : "")
//                     }
//                     onClick={() => {
//                       onChange(i.code);
//                       setOpen(false);
//                       setQuery("");
//                     }}
//                   >
//                     <span className="contact-main__phone-country-flag">{Flag && <Flag title={i.name} />}</span>
//                     <span className="contact-main__phone-country-name">{i.name}</span>
//                     <span className="contact-main__phone-country-dial">+{i.dial}</span>
//                   </button>
//                 </li>
//               );
//             })}
//             {filtered.length === 0 && <li className="contact-main__phone-country-empty">No country found</li>}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function ContactMain() {
//   const router = useRouter();

//   const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
//   const [phone, setPhone] = useState<string | undefined>();
//   const [phoneError, setPhoneError] = useState("");
//   const [captchaToken, setCaptchaToken] = useState<string | null>(null);
//   const [captchaError, setCaptchaError] = useState("");

//   const recaptchaRef = useRef<ReCAPTCHA>(null);
//   const loadedAt = useRef<number>(Date.now());

//   const resetAll = (form: HTMLFormElement) => {
//     form.reset();
//     setPhone(undefined);
//     setCaptchaToken(null);
//     recaptchaRef.current?.reset();
//     loadedAt.current = Date.now();
//   };

//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const fd = new FormData(form);

//     // Bot check: honeypot bhara hua ya bahut jaldi submit
//     if (fd.get("website") || Date.now() - loadedAt.current < MIN_FILL_TIME_MS) {
//       resetAll(form);
//       router.push(THANK_YOU_URL);
//       return;
//     }

//     if (!phone || !isValidPhoneNumber(phone)) {
//       setPhoneError("Enter a valid phone number.");
//       return;
//     }
//     setPhoneError("");

//     if (!captchaToken) {
//       setCaptchaError("Please verify that you are not a robot.");
//       return;
//     }
//     setCaptchaError("");

//     const countryCode = parsePhoneNumber(phone)?.country;

//     const templateParams = {
//       name: fd.get("name"),
//       email: fd.get("email"),
//       phone, 
//       country: countryCode ? COUNTRY_NAMES[countryCode] : "", 
//       service: fd.get("service"),
//       message: fd.get("message"),
//       "g-recaptcha-response": captchaToken,
//     };

//     setStatus("sending");
//     try {
//       await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
//         publicKey: EMAILJS_PUBLIC_KEY,
//       });
//       resetAll(form);
//       router.push(THANK_YOU_URL);
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       setStatus("error");
     
//       setCaptchaToken(null);
//       recaptchaRef.current?.reset();
//     }
//   };

//   return (
//     <section className="contact-main" id="contact" aria-label="Location and contact form">
//       <Container>
//         <Row className="contact-main__row">
//           <Col lg={6}>
//             <h2 className="contact-main__heading contact-main__heading--sm" id="location">
//               Location :
//             </h2>
//             <p className="contact-main__address mb-30">{ADDRESS}</p>
//             <div className="contact-main__map">
//               <iframe
//                 title="Office location map"
//                 src={MAP_SRC}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 allowFullScreen
//               />
//             </div>
//           </Col>

//           <Col lg={6}>
//             <h2 className="contact-main__title">Get In Touch !</h2>

//             <form className="contact-main__form" id="enquiry-form" onSubmit={onSubmit}>
//               <input
//                 type="text"
//                 name="website"
//                 tabIndex={-1}
//                 autoComplete="off"
//                 aria-hidden="true"
//                 style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
//               />

//               <Row className="contact-main__fields">
//                 <Col md={6}>
//                   <div className="contact-main__field">
//                     <label htmlFor="cf-name">Your name</label>
//                     <input id="cf-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
//                   </div>
//                 </Col>
//                 <Col md={6}>
//                   <div className="contact-main__field">
//                     <label htmlFor="cf-email">Work email</label>
//                     <input id="cf-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
//                   </div>
//                 </Col>

//                 <Col xs={6}>
//                   <div className="contact-main__field">
//                     <label htmlFor="cf-phone">Phone Number</label>
//                     <PhoneInput
//                       id="cf-phone"
//                       defaultCountry="IN"
//                       addInternationalOption={false}
//                       countrySelectComponent={CountrySelect}
//                       value={phone}
//                       onChange={(v) => {
//                         setPhone(v);
//                         if (phoneError) setPhoneError("");
//                       }}
//                       placeholder="Phone number"
//                       autoComplete="tel"
//                       aria-invalid={!!phoneError}
//                     />
//                     {phoneError && <span className="contact-main__error">{phoneError}</span>}
//                   </div>
//                 </Col>

//                 <Col xs={6}>
//                   <div className="contact-main__field">
//                     <label htmlFor="cf-service">Service interest</label>
//                     <select id="cf-service" name="service" defaultValue="" required>
//                       <option value="" disabled>
//                         Select a service
//                       </option>
//                       {SERVICE_GROUPS.map((g) => (
//                         <optgroup key={g.label} label={g.label}>
//                           {g.items.map((s) => (
//                             <option key={s} value={s}>
//                               {s}
//                             </option>
//                           ))}
//                         </optgroup>
//                       ))}
//                       {SINGLE_SERVICES.map((s) => (
//                         <option key={s} value={s}>
//                           {s}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </Col>
//                 <Col xs={12}>
//                   <div className="contact-main__field">
//                     <label htmlFor="cf-message">What are you working toward?</label>
//                     <textarea
//                       id="cf-message"
//                       name="message"
//                       rows={5}
//                       placeholder="A little about your business and goals"
//                       required
//                     />
//                   </div>
//                 </Col>
//                 <Col xs={12}>
//                   <div className="contact-main__field">
//                     <ReCAPTCHA
//                       ref={recaptchaRef}
//                       sitekey={RECAPTCHA_SITE_KEY}
//                       onChange={(token) => {
//                         setCaptchaToken(token);
//                         if (token) setCaptchaError("");
//                       }}
//                       onExpired={() => setCaptchaToken(null)}
//                     />
//                     {captchaError && <span className="contact-main__error">{captchaError}</span>}
//                   </div>
//                 </Col>
//               </Row>

//               <button type="submit" className="contact-main__btn" disabled={status === "sending"}>
//                 {status === "sending" ? "Sending..." : "Send Message"}
//               </button>

//               <p className="contact-main__status" role="status" aria-live="polite">
//                 {status === "error" && "Something went wrong. Please try again."}
//               </p>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }



"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
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

const ADDRESS = "111 North Bridge Road, #21-01, Peninsula Plaza, Singapore 179098";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

const MIN_FILL_TIME_MS = 3000; 

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
    <div className="contact-main__phone-country" ref={wrapRef}>
      <button
        type="button"
        className="contact-main__phone-country-button"
        onClick={() => setOpen((o) => !o)}
        disabled={disabled || readOnly}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select country code"
      >
        {SelectedFlag && (
          <span className="contact-main__phone-country-flag">
            <SelectedFlag title={value ? COUNTRY_NAMES[value] : ""} />
          </span>
        )}
        <span className="contact-main__phone-country-code">{value ? `+${getCountryCallingCode(value)}` : ""}</span>
        <span className="contact-main__phone-country-arrow" aria-hidden="true" />
      </button>

      {open && (
        <div className="contact-main__phone-country-menu">
          <input
            type="text"
            className="contact-main__phone-country-search"
            placeholder="Search country or code"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            autoComplete="off"
            aria-label="Search country"
          />
          <ul className="contact-main__phone-country-list" role="listbox">
            {filtered.map((i) => {
              const Flag = flags[i.code];
              return (
                <li key={i.code} role="option" aria-selected={i.code === value}>
                  <button
                    type="button"
                    className={
                      "contact-main__phone-country-option" +
                      (i.code === value ? " contact-main__phone-country-option--active" : "")
                    }
                    onClick={() => {
                      onChange(i.code);
                      setOpen(false);
                      setQuery("");
                    }}
                  >
                    <span className="contact-main__phone-country-flag">{Flag && <Flag title={i.name} />}</span>
                    <span className="contact-main__phone-country-name">{i.name}</span>
                    <span className="contact-main__phone-country-dial">+{i.dial}</span>
                  </button>
                </li>
              );
            })}
            {filtered.length === 0 && <li className="contact-main__phone-country-empty">No country found</li>}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ContactMain() {
  const router = useRouter();

  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [phone, setPhone] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState("");

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const loadedAt = useRef<number>(Date.now());

  const resetAll = (form: HTMLFormElement) => {
    form.reset();
    setPhone(undefined);
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
    loadedAt.current = Date.now();
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      router.push(THANK_YOU_URL);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
     
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    }
  };

  return (
    <section className="contact-main" id="contact" aria-label="Location and contact form">
      <Container>
        <Row className="contact-main__row">
          <Col lg={6}>
            <h2 className="contact-main__heading contact-main__heading--sm" id="location">
              Location :
            </h2>
            <p className="contact-main__address mb-30">{ADDRESS}</p>
            <div className="contact-main__map">
              <iframe
                title="Office location map"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Col>

          <Col lg={6}>
            <h2 className="contact-main__title">Get In Touch !</h2>

            <form className="contact-main__form" id="enquiry-form" onSubmit={onSubmit}>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
              />

              <Row className="contact-main__fields">
                <Col md={6}>
                  <div className="contact-main__field">
                    <label htmlFor="cf-name">Your name</label>
                    <input id="cf-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="contact-main__field">
                    <label htmlFor="cf-email">Work email</label>
                    <input id="cf-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
                  </div>
                </Col>

                <Col xs={6}>
                  <div className="contact-main__field">
                    <label htmlFor="cf-phone">Phone Number</label>
                    <PhoneInput
                      id="cf-phone"
                      defaultCountry="IN"
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
                    {phoneError && <span className="contact-main__error">{phoneError}</span>}
                  </div>
                </Col>

                <Col xs={6}>
                  <div className="contact-main__field">
                    <label htmlFor="cf-service">Service interest</label>
                    <select id="cf-service" name="service" defaultValue="" required>
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
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="contact-main__field">
                    <label htmlFor="cf-message">What are you working toward?</label>
                    <textarea
                      id="cf-message"
                      name="message"
                      rows={5}
                      placeholder="A little about your business and goals"
                      required
                    />
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="contact-main__field">
                    {RECAPTCHA_SITE_KEY && (
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(token) => {
                          setCaptchaToken(token);
                          if (token) setCaptchaError("");
                        }}
                        onExpired={() => setCaptchaToken(null)}
                      />
                    )}
                    {captchaError && <span className="contact-main__error">{captchaError}</span>}
                  </div>
                </Col>
              </Row>

              <button type="submit" className="contact-main__btn" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <p className="contact-main__status" role="status" aria-live="polite">
                {status === "error" && "Something went wrong. Please try again."}
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}