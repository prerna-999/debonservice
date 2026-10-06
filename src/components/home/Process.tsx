"use client";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = [
  { title: "Discover", text: "Understand your business, audience, competitors and existing performance." },
  { title: "Plan", text: "Prioritise the channels and messages most likely to move your goal." },
  { title: "Build", text: "Launch content, campaigns and customer journeys with tracking in place." },
  { title: "Improve", text: "Test, review, report and scale what the evidence supports." },
];

export default function Process() {
  const rootRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // gsap.registerPlugin(ScrollTrigger);

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

      const path = pathRef.current;
      if (!path) return;
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1200px)", () => {
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });
      mm.add("(max-width: 1199px)", () => {
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-process" id="process" aria-labelledby="process-title" ref={rootRef}>
      <Container  className="home-process__container">
        <Row className="home-process__head align-items-end">
          <Col md={7}>
            <p className="home-process__eyebrow" data-reveal>
              05 / How we work
            </p>
            <h2 id="process-title" className="home-process__title" data-reveal>
              From first question
              <br />
              to <em>forward motion</em>
            </h2>
          </Col>
          <Col md={5}>
            <p className="home-process__intro" data-reveal>
              Our process keeps the work focused while leaving room to learn from the market as it changes.
            </p>
          </Col>
        </Row>

        <div className="home-process__grid" ref={gridRef}>
          <div className="home-process__line" aria-hidden="true">
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path ref={pathRef} d="M0 50H1000" />
            </svg>
          </div>

          <Row className="home-process__steps">
            {STEPS.map((step, i) => (
              <Col key={step.title} xs={12} sm={6} xl={3}>
                <article className="home-process__step" data-reveal>
                  <span className="home-process__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="home-process__step-title">{step.title}</h3>
                  <p className="home-process__text">{step.text}</p>
                </article>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}