"use client";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const POINTS = [
  "Agreed goals before launch",
  "Clear channel and campaign reporting",
  "Regular tests and next steps",
];

const METRICS = ["VISIBILITY", "ENGAGEMENT", "CONVERSION"];

export default function Proof() {
  const rootRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

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

      const path = pathRef.current;
      if (path) {
        const length = path.getTotalLength();
        gsap.fromTo(
          path,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-proof" id="proof" aria-labelledby="proof-title" ref={rootRef}>
      <Container >
        <Row className="home-proof__row align-items-center">
          <Col lg={5}>
            <p className="home-proof__eyebrow" data-reveal>
              04 / How we earn trust
            </p>
            <h2 id="proof-title" className="home-proof__title" data-reveal>
              See the work
              <br />
              <em>See the why</em>
            </h2>
            <p className="home-proof__text" data-reveal>
              Good reporting should help you make a decision. We define the goal, share the work and show what
              the data actually says, including what needs to change.
            </p>

            <div className="home-proof__list" data-reveal>
              {POINTS.map((point, i) => (
                <div className="home-proof__item" key={point}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={7}>
            <div className="home-proof__display" data-reveal>
              <div className="home-proof__panel">
                <div className="home-proof__panel-top">
                  <span>PERFORMANCE REVIEW</span>
                  <span>DEBON / LIVE THINKING</span>
                </div>

                <div className="home-proof__chart">
                  <svg viewBox="0 0 520 250" role="img" aria-label="Illustration of a growth trend">
                    <path className="home-proof__grid" d="M0 50H520M0 110H520M0 170H520M0 230H520" />
                    <path
                      ref={pathRef}
                      className="home-proof__line"
                      d="M8 212C48 209 57 180 99 184S147 141 184 150 228 181 267 134 318 126 352 107 390 126 429 65 480 73 510 22"
                    />
                  </svg>
                </div>

                <div className="home-proof__panel-bottom">
                  {METRICS.map((m) => (
                    <span key={m}>
                      {m} <ArrowUpRight size={16} strokeWidth={2.6} aria-hidden="true" />
                    </span>
                  ))}
                </div>
              </div>

              <div className="home-proof__caption">
                An example of the decision framework. Actual reporting uses your own data.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}