"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, ArrowRightLeft } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutHero() {
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

      gsap.fromTo(".about-hero__photo img", { yPercent: -5, scale: 1.08 }, {
        yPercent: 5, scale: 1.08, ease: "none",
        scrollTrigger: { trigger: ".about-hero__visual", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });
      gsap.to(".about-hero__card", { y: -12, duration: 2.4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".about-hero__ring", { rotation: 360, duration: 40, repeat: -1, ease: "none" });
      gsap.to(".about-hero__mouse i", { y: 14, autoAlpha: 0, duration: 1.2, repeat: -1, ease: "power1.in" });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-hero" aria-labelledby="about-hero-title" ref={rootRef}>
      <Container>
        <Row className="align-items-center about-hero__row">
          <Col lg={6}>
            <p className="about-eyebrow about-eyebrow--light" data-reveal>About Us</p>
            <h1 id="about-hero-title" className="about-hero__title" data-reveal data-delay="0.08">
              Turning Ideas Into
              <br />
              <span>Digital Growth</span>
            </h1>
            <p className="about-hero__lead" data-reveal data-delay="0.16">
              We are a digital marketing agency focused on helping brands grow online with data-driven strategies,
              creative campaigns and measurable results.
            </p>
            <Link href="#contact" className="about-btn" data-reveal data-delay="0.24">
              Let&apos;s Grow Together
              <ArrowRight size={20} strokeWidth={2.2} />
            </Link>
          </Col>

          <Col lg={6}>
            <div className="about-hero__visual" data-reveal data-delay="0.1">
              <span className="about-hero__ring" aria-hidden="true" />
              <div className="about-hero__photo">
                <Image src="/assets/img/all-img/home/banner.avif" alt="Laptop on a desk with a plant" fill priority sizes="(max-width: 992px) 90vw, 40vw" />
              </div>
              <div className="about-hero__card">
                <strong>Strategy</strong>
                <span>Traffic <ArrowRightLeft size={15} /> Growth</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="about-hero__scroll" aria-hidden="true">
        <span className="about-hero__mouse"><i /></span>
        Scroll Down
      </div>
    </section>
  );
}
