"use client";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Eye, Target } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MissionVision() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 34,
          autoAlpha: 0,
          duration: 0.85,
          delay: Number(el.dataset.delay || 0),
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: { trigger: el, start: "top 91%", toggleActions: "play none none reverse", invalidateOnRefresh: true },
        });
      });

      gsap.from(".about-mv__card--mission", { x: -60, autoAlpha: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".about-mv__cards", start: "top 82%" } });
      gsap.from(".about-mv__card--vision", { x: 60, autoAlpha: 0, duration: 1, delay: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".about-mv__cards", start: "top 82%" } });
      gsap.to(".about-mv__card--vision", { y: 18, ease: "none", scrollTrigger: { trigger: ".about-mv__cards", start: "top bottom", end: "bottom top", scrub: 1 } });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-mv" id="mission" aria-labelledby="mv-title" ref={rootRef}>
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <p className="about-eyebrow" data-reveal>Mission &amp; Vision</p>
            <h2 id="mv-title" className="about-title" data-reveal>
              Our Purpose Drives Everything <em>We Do.</em>
            </h2>
            <span className="about-mv__rule" data-reveal />
            <p className="about-text" data-reveal>
              We&apos;re on a mission to empower businesses through digital innovation and create a future where every
              brand can reach its full potential.
            </p>
          </Col>

          <Col lg={8}>
            <Row className="about-mv__cards g-4">
              <Col md={6}>
                <article className="about-mv__card about-mv__card--mission">
                  <Target size={40} strokeWidth={1.6} aria-hidden="true" />
                  <h3>Our Mission</h3>
                  <p>To deliver innovative and result-driven digital marketing solutions that help businesses grow, compete and succeed in the digital world.</p>
                  <span className="about-mv__go" aria-hidden="true"><ArrowRight size={20} /></span>
                </article>
              </Col>
              <Col md={6}>
                <article className="about-mv__card about-mv__card--vision">
                  <Eye size={40} strokeWidth={1.6} aria-hidden="true" />
                  <h3>Our Vision</h3>
                  <p>To be a leading digital marketing partner, known for creativity, performance and long-term client success.</p>
                  <span className="about-mv__go" aria-hidden="true"><ArrowRight size={20} /></span>
                </article>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
