// "use client";
// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Clock3, X } from "lucide-react";

// const WORKING_TIME = [
//   { day: "Monday - Friday : 9AM-6PM", open: true },
//   { day: "Saturday 9AM-2PM", open: true },
//   { day: "Sunday (Holiday)", open: false },
// ];
// const MAP_SRC = "https://www.google.com/maps?q=London+Eye&output=embed";

// export default function ContactMain() {
//   const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const data = Object.fromEntries(new FormData(form).entries());
//     setStatus("sending");
//     try {
      
//       console.log("contact form:", data);
//       setStatus("sent");
//       form.reset();
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <section className="contact-main" id="contact" aria-label="Working time, location and contact form">
//       <Container>
//         <Row className="contact-main__row">
//           <Col lg={6}>
//             <h2 className="contact-main__heading">Our Working Time</h2>
//             <p className="contact-main__text">
//               We are available during the hours below. Outside these times, leave us a message and we will reply
//               on the next working day.
//             </p>

//             <ul className="contact-main__hours">
//               {WORKING_TIME.map((t) => (
//                 <li key={t.day}>
//                   {t.open ? <Clock3 size={18} strokeWidth={2.4} aria-hidden="true" /> : <X size={18} strokeWidth={2.4} aria-hidden="true" />}
//                   <span>{t.day}</span>
//                 </li>
//               ))}
//             </ul>

//             <h3 className="contact-main__heading contact-main__heading--sm" id="location">
//               Location :
//             </h3>
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
//             <span className="contact-main__pill">Contact Us</span>
//             <h2 className="contact-main__title">Get In Touch !</h2>

//             <form className="contact-main__form" id="enquiry-form" onSubmit={onSubmit}>
//               <div className="contact-main__field">
//                 <label htmlFor="cf-email">Email</label>
//                 <input id="cf-email" name="email" type="email" placeholder="Email" autoComplete="email" required />
//               </div>
//               <div className="contact-main__field">
//                 <label htmlFor="cf-name">Name</label>
//                 <input id="cf-name" name="name" type="text" placeholder="Name" autoComplete="name" required />
//               </div>
//               <div className="contact-main__field">
//                 <label htmlFor="cf-message">Message</label>
//                 <textarea id="cf-message" name="message" rows={5} placeholder="Message" required />
//               </div>

//               <button type="submit" className="contact-main__btn" disabled={status === "sending"}>
//                 {status === "sending" ? "Sending..." : "Submit Button"}
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
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { X } from "lucide-react";

const WORKING_TIME = [
  { day: "Monday - Friday : 9AM-6PM", open: true },
  { day: "Saturday 9AM-2PM", open: true },
  { day: "Sunday (Holiday)", open: false },
];
function SolidClock() {
  return (
    <svg viewBox="0 0 512 512" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </svg>
  );
}

const MAP_SRC = "https://www.google.com/maps?q=London+Eye&output=embed";

export default function ContactMain() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      
      console.log("contact form:", data);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-main" id="contact" aria-label="Working time, location and contact form">
      <Container>
        <Row className="contact-main__row">
          {/* ---- Left: working time + map ---- */}
          <Col lg={6}>
            <h2 className="contact-main__heading">Our Working Time</h2>
            <p className="contact-main__text">
              We are available during the hours below. Outside these times, leave us a message and we will reply
              on the next working day.
            </p>

            <ul className="contact-main__hours">
              {WORKING_TIME.map((t) => (
                <li key={t.day}>
                  {t.open ? <SolidClock /> : <X size={18} strokeWidth={3} aria-hidden="true" />}
                  <span>{t.day}</span>
                </li>
              ))}
            </ul>

            <h3 className="contact-main__heading contact-main__heading--sm" id="location">
              Location :
            </h3>
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

          {/* ---- Right: form ---- */}
          <Col lg={6}>
            <span className="contact-main__pill">Contact Us</span>
            <h2 className="contact-main__title">Get In Touch !</h2>

            <form className="contact-main__form" id="enquiry-form" onSubmit={onSubmit}>
              <div className="contact-main__field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" placeholder="Email" autoComplete="email" required />
              </div>
              <div className="contact-main__field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" type="text" placeholder="Name" autoComplete="name" required />
              </div>
              <div className="contact-main__field">
                <label htmlFor="cf-message">Message</label>
                <textarea id="cf-message" name="message" rows={5} placeholder="Message" required />
              </div>

              <button type="submit" className="contact-main__btn" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Submit Button"}
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