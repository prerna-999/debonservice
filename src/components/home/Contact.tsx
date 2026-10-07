"use client";
import { useEffect, useRef, type FormEvent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EMAIL = "hello@debonservices.com";

const SERVICES = [
  "Organic Search Optimization",
  "AI-Powered SEO",
  "Social Media Growth Management",
  "Performance Marketing",
  "Conversion & Reputation",
  "Content Creation",
];

export default function Contact() {
  const rootRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const subject = `Enquiry: ${get("service") || "General enquiry"}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "-"}`,
      `Service: ${get("service") || "General enquiry"}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="home-contact" id="contact" aria-labelledby="contact-title" ref={rootRef}>
      <Container>
        <Row className="home-contact__layout">
          {/* ---- Left copy ---- */}
          <Col lg={5}>
            <p className="home-contact__eyebrow" data-reveal>
              14 / Contact
            </p>
            <h2 id="contact-title" className="home-contact__title" data-reveal>
              Tell us what
              <br />
              you want to <em>grow</em>
            </h2>
            <p className="home-contact__intro" data-reveal>
              Share your challenge and the best way to reach you. We will start with a useful conversation about your
              goals.
            </p>
            <a className="home-contact__mail" href={`mailto:${EMAIL}`} data-reveal>
              {EMAIL} <span aria-hidden="true">↗</span>
            </a>
          </Col>

          {/* ---- Form ---- */}
          <Col lg={7}>
            <form className="home-contact__form" id="enquiry-form" onSubmit={handleSubmit} data-reveal>
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
                  Phone, optional
                  <input name="phone" type="tel" autoComplete="tel" placeholder="+91 ..." />
                </label>
                <label className="home-contact__label">
                  Service interest
                  <select name="service" defaultValue="General enquiry">
                    <option value="General enquiry">Select a service</option>
                    {SERVICES.map((s) => (
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

              <button className="home-contact__btn" type="submit">
                Prepare email enquiry <span aria-hidden="true">↗</span>
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}