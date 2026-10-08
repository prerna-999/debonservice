

"use client";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const INDUSTRIES = [
  { title: "Real estate", text: "Local discovery and qualified property enquiries." },
  { title: "Healthcare & clinics", text: "Helpful information and trust through the care journey." },
  { title: "Education & coaching", text: "Clear programmes and stronger student interest." },
  { title: "E-commerce", text: "Product discovery and more effective purchase paths." },
  { title: "Professional services", text: "Authority, clarity and meaningful enquiries." },
  { title: "Hospitality & travel", text: "Inspiration that leads to confident booking." },
  { title: "Local businesses", text: "More visibility where nearby customers are looking." },
  { title: "Technology & SaaS", text: "Simpler stories for complex products and buying teams." },
];

export default function Industries() {
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

  return (
    <section className="home-industries" id="industries" aria-labelledby="industries-title" ref={rootRef}>
      <Container>
        <Row className="home-industries__head align-items-end">
          <Col md={7}>
            <p className="home-industries__eyebrow" data-reveal>
              07 / Industries
            </p>
            <h2 id="industries-title" className="home-industries__title" data-reveal>
              Marketing shaped by
              <br />
              <em>your industry</em>
            </h2>
          </Col>
          <Col md={5}>
            <p className="home-industries__intro" data-reveal>
              We adapt channel choices and messages to the way buyers research and decide in each market.
            </p>
          </Col>
        </Row>

        <Row className="home-industries__grid g-0">
          {INDUSTRIES.map((item, i) => (
            <Col key={item.title} xs={12} sm={6} md={3} className="home-industries__cell">
              <article className="home-industries__card" data-reveal>
                <span className="home-industries__num">{String(i + 1).padStart(2, "0")}</span>
                <div className="home-industries__body">
                  <h3 className="home-industries__card-title">{item.title}</h3>
                  <p className="home-industries__text">{item.text}</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}