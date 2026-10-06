"use client";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PRINCIPLES = [
  {
    title: "Outcomes over noise",
    text: "Relevant visitors, qualified conversations and useful action matter more than an impressive looking chart.",
  },
  {
    title: "Transparency earns trust",
    text: "Clear access to work, reporting and decisions creates better partnerships.",
  },
  {
    title: "Prepare for the next search",
    text: "Brand visibility now spans search results, AI answers and social discovery.",
  },
  {
    title: "Consistency compounds",
    text: "Strong marketing is built through thoughtful, sustained improvement.",
  },
];

export default function Principles() {
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
    <section className="home-principles" id="principles" aria-labelledby="principles-title" ref={rootRef}>
      <Container >
        <p className="home-principles__eyebrow" data-reveal>
          09 / Principles
        </p>
        <h2 id="principles-title" className="home-principles__title" data-reveal>
          What we believe
          <br />
          about <em>growth</em>
        </h2>

        <div className="home-principles__list">
          {PRINCIPLES.map((p, i) => (
            <article key={p.title} className="home-principles__item" data-reveal>
              <Row className="home-principles__row align-items-center">
                <Col xs="auto" md={1} className="home-principles__col-num">
                  <span className="home-principles__num">{String(i + 1).padStart(2, "0")}</span>
                </Col>
                <Col xs md={5}>
                  <h3 className="home-principles__item-title">{p.title}</h3>
                </Col>
                <Col xs={12} md={6} className="home-principles__col-text">
                  <p className="home-principles__text">{p.text}</p>
                </Col>
              </Row>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}