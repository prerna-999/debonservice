
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WorkTogether() {
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

      gsap.from(".about-cta__line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: { trigger: ".about-cta__line", start: "top 92%" },
      });

      gsap.to(".about-cta__blob", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: ".about-cta", start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-cta" id="contact" aria-labelledby="cta-title" ref={rootRef}>
      <span className="about-cta__blob" aria-hidden="true" />
      <Container className="about-cta__container">
        <h2 id="cta-title" className="about-title" data-reveal>
          Let&rsquo;s Build Something <em>Great Together</em>
        </h2>
        <span className="about-cta__line" aria-hidden="true" />
        <Row className="align-items-center g-4">
          <Col lg={8}>
            <p className="about-text" data-reveal>
              SMEs and startups at The Business Show Asia face recurring challenges that limit their growth. Debonaire Capital Assets exists to solve these with precision and accountability. Let&rsquo;s find the right solutions to move your business forward.
            </p>
          </Col>
          <Col lg={4} className="about-cta__action">
            <Link href="/contact" className="about-cta__btn" data-reveal data-delay="0.1">
              <span>Let&rsquo;s Talk</span>
              <i aria-hidden="true"><ArrowUpRight size={24} strokeWidth={2.2} /></i>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
