"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CARDS = [
  { tag: "01 / EXPLAIN", title: ["Make the complex", "feel simple."], from: "EDUCATION", to: "CONFIDENCE" },
  { tag: "02 / SHOW", title: ["Let your work", "speak clearly."], from: "PROOF", to: "TRUST" },
  { tag: "03 / CONNECT", title: ["Start conversations", "that matter."], from: "COMMUNITY", to: "MOMENTUM" },
];

export default function Social() {
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
    <section className="home-social" id="social" aria-labelledby="social-title" ref={rootRef}>
      <Container fluid className="home-social__container">
        <Row className="home-social__row align-items-center">
          {/* ---- Copy ---- */}
          <Col lg={4}>
            <p className="home-social__eyebrow" data-reveal>
              08 / Beyond the feed
            </p>
            <h2 id="social-title" className="home-social__title" data-reveal>
              Ideas worth
              <br />
              <em>sharing</em>
            </h2>
            <p className="home-social__text" data-reveal>
              Good social content earns attention by being useful. Here are three themes we build into a
              brand&apos;s ongoing conversation.
            </p>
            <Link href="#content" className="home-social__link" data-reveal>
              Explore content creation
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </Link>
          </Col>

          {/* ---- 3 cards ---- */}
          <Col lg={8}>
            <Row className="home-social__cards">
              {CARDS.map((c, i) => (
                <Col key={c.tag} xs={12} md={4} className={`home-social__col home-social__col--${i + 1}`}>
                  <article className={`home-social__card home-social__card--${i + 1}`} data-reveal>
                    <div className="home-social__tag">{c.tag}</div>
                    <strong className="home-social__card-title">
                      {c.title[0]}
                      <br />
                      {c.title[1]}
                    </strong>
                    <span className="home-social__flow">
                      {c.from}
                      <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                      {c.to}
                    </span>
                  </article>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}