

// "use client";
// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import PhoneInput, { isValidPhoneNumber, getCountries } from "react-phone-number-input";
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
// const COUNTRY_OPTIONS = getCountries()
//   .map((code) => ({ code, name: COUNTRY_NAMES[code] }))
//   .filter((c) => c.name)
//   .sort((a, b) => a.name.localeCompare(b.name));

// const ADDRESS = "111 North Bridge Road, #21-01, Peninsula Plaza, Singapore 179098";
// const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

// export default function ContactMain() {
//   const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
//   const [phone, setPhone] = useState<string | undefined>();
//   const [phoneError, setPhoneError] = useState("");

//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     if (!phone || !isValidPhoneNumber(phone)) {
//       setPhoneError("Enter a valid phone number.");
//       return;
//     }
//     setPhoneError("");

//     const data = { ...Object.fromEntries(new FormData(form).entries()), phone };
//     setStatus("sending");
//     try {
//       console.log("contact form:", data);
//       setStatus("sent");
//       form.reset();
//       setPhone(undefined);
//     } catch {
//       setStatus("error");
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
//                 <Col md={6}>
//                   <div className="contact-main__field">
//                     <label htmlFor="cf-phone">Phone</label>
                  
//                     <PhoneInput
//                       id="cf-phone"
//                       international
//                       withCountryCallingCode
//                       countrySelectComponent={() => null}
//                       defaultCountry="SG"
//                       value={phone}
//                       onChange={(v) => {
//                         setPhone(v);
//                         if (phoneError) setPhoneError("");
//                       }}
//                       placeholder="Phone number"
//                       autoComplete="tel"
//                       aria-invalid={!!phoneError}
//                       required
//                     />
//                     {phoneError && <span className="contact-main__error">{phoneError}</span>}
//                   </div>
//                 </Col>
//                 <Col md={6}>
//                   <div className="contact-main__field">
//                     <label htmlFor="cf-country">Country</label>
//                     <select id="cf-country" name="country" defaultValue="" autoComplete="country-name" required>
//                       <option value="" disabled>
//                         Select your country
//                       </option>
//                       {COUNTRY_OPTIONS.map((c) => (
//                         <option key={c.code} value={c.name}>
//                           {c.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </Col>
//                 <Col xs={12}>
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
//               </Row>

//               <button type="submit" className="contact-main__btn" disabled={status === "sending"}>
//                 {status === "sending" ? "Sending..." : "Send Message"}
//               </button>

//               <p className="contact-main__status" role="status" aria-live="polite">
//                 {status === "sent" && "Thank you! Your message has been sent."}
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
import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput, { isValidPhoneNumber, getCountries } from "react-phone-number-input";
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
const COUNTRY_OPTIONS = getCountries()
  .map((code) => ({ code, name: COUNTRY_NAMES[code] }))
  .filter((c) => c.name)
  .sort((a, b) => a.name.localeCompare(b.name));

const ADDRESS = "111 North Bridge Road, #21-01, Peninsula Plaza, Singapore 179098";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

const MIN_FILL_TIME_MS = 3000; // isse jaldi submit = bot

export default function ContactMain() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
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

   
    if (fd.get("website") || Date.now() - loadedAt.current < MIN_FILL_TIME_MS) {
      setStatus("sent"); 
      resetAll(form);
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

    const templateParams = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone,
      country: fd.get("country"),
      service: fd.get("service"),
      message: fd.get("message"),
      "g-recaptcha-response": captchaToken, 
    };

    setStatus("sending");
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("sent");
      resetAll(form);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      // token ek baar hi use hota hai, isliye reset zaroori hai
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
                <Col md={6}>
                  <div className="contact-main__field">
                    <label htmlFor="cf-phone">Phone</label>

                    <PhoneInput
                      id="cf-phone"
                      international
                      withCountryCallingCode
                      countrySelectComponent={() => null}
                      defaultCountry="SG"
                      value={phone}
                      onChange={(v) => {
                        setPhone(v);
                        if (phoneError) setPhoneError("");
                      }}
                      placeholder="Phone number"
                      autoComplete="tel"
                      aria-invalid={!!phoneError}
                      required
                    />
                    {phoneError && <span className="contact-main__error">{phoneError}</span>}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="contact-main__field">
                    <label htmlFor="cf-country">Country</label>
                    <select id="cf-country" name="country" defaultValue="" autoComplete="country-name" required>
                      <option value="" disabled>
                        Select your country
                      </option>
                      {COUNTRY_OPTIONS.map((c) => (
                        <option key={c.code} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col xs={12}>
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
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={(token) => {
                        setCaptchaToken(token);
                        if (token) setCaptchaError("");
                      }}
                      onExpired={() => setCaptchaToken(null)}
                    />
                    {captchaError && <span className="contact-main__error">{captchaError}</span>}
                  </div>
                </Col>
              </Row>

              <button type="submit" className="contact-main__btn" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <p className="contact-main__status" role="status" aria-live="polite">
                {status === "sent" && "Thank you! Your message has been sent."}
                {status === "error" && "Something went wrong. Please try again."}
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

