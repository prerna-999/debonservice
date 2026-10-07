"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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

      gsap.from(".about-cta__orb", { scale: 0.5, autoAlpha: 0, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: ".about-cta", start: "top 80%" } });
      gsap.from(".about-cta__talk", { rotation: -25, scale: 0.7, autoAlpha: 0, duration: 1, ease: "back.out(1.8)", scrollTrigger: { trigger: ".about-cta__talk", start: "top 90%" } });
      gsap.to(".about-cta__orb", { xPercent: 8, yPercent: -8, ease: "none", scrollTrigger: { trigger: ".about-cta", start: "top bottom", end: "bottom top", scrub: 1 } });

      // magnetic Let's Talk button
      const btn = document.querySelector<HTMLElement>(".about-cta__talk");
      if (!btn) return;
      const move = (e: PointerEvent) => {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25, duration: 0.4 });
      };
      const leave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.4)" });
      btn.addEventListener("pointermove", move);
      btn.addEventListener("pointerleave", leave);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-cta" id="contact" aria-labelledby="cta-title" ref={rootRef}>
      <span className="about-cta__orb" aria-hidden="true" />
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={4}>
            <p className="about-eyebrow about-eyebrow--light" data-reveal>Let&apos;s Work Together</p>
            <h2 id="cta-title" className="about-title about-title--light" data-reveal>
              Ready to Grow <em>Your Brand?</em>
            </h2>
          </Col>
          <Col lg={5}>
            <div className="about-cta__mid" data-reveal>
              <p className="about-text about-text--light">
                Let&apos;s build something great together. Get in touch with our team and start your digital growth
                journey today.
              </p>
              <Link href="/contact" className="about-btn">
                Get Started <ArrowRight size={20} strokeWidth={2.2} />
              </Link>
            </div>
          </Col>
          <Col lg={3}>
            <Link href="/contact" className="about-cta__talk" aria-label="Let's talk — contact us">
              <span>Let&apos;s<br />Talk</span>
              <i><ArrowUpRight size={32} strokeWidth={2.2} /></i>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
