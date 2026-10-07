"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, BarChart3, Lightbulb, Users, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REASONS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: BarChart3, title: "Data-Driven Strategy", text: "Every decision is backed by real data and insights." },
  { icon: Lightbulb, title: "Creative Excellence", text: "Fresh ideas that make your brand stand out." },
  { icon: Users, title: "Experienced Team", text: "Skilled professionals who care about your success." },
  { icon: Target, title: "Proven Results", text: "More traffic, better engagement and higher conversions." },
];

export default function WhyChooseUs() {
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

      gsap.from(".about-why__glow", { scale: 0.6, autoAlpha: 0, duration: 1.6, ease: "power3.out", scrollTrigger: { trigger: ".about-why", start: "top 70%" } });
      gsap.to(".about-why__glow", { yPercent: 18, ease: "none", scrollTrigger: { trigger: ".about-why", start: "top bottom", end: "bottom top", scrub: 1 } });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-why" id="why" aria-labelledby="why-title" ref={rootRef}>
      <span className="about-why__glow" aria-hidden="true" />
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <p className="about-eyebrow about-eyebrow--light" data-reveal>Why Choose Us</p>
            <h2 id="why-title" className="about-title about-title--light" data-reveal>
              Built for visibility. <em>Designed for growth.</em>
            </h2>
            <p className="about-text about-text--light" data-reveal>
              We combine data, creativity and technology to deliver strategies that work — today and tomorrow.
            </p>
            <Link href="#contact" className="about-btn" data-reveal>
              Work With Us <ArrowRight size={20} strokeWidth={2.2} />
            </Link>
          </Col>

          <Col lg={7}>
            <div className="about-why__grid">
              {REASONS.map((r, i) => {
                const Icon = r.icon;
                return (
                  <article key={r.title} className="about-why__card" data-reveal data-delay={i * 0.1}>
                    <div>
                      <span className="about-why__icon" aria-hidden="true"><Icon size={34} strokeWidth={1.6} /></span>
                      <h3 className="about-why__title">{r.title}</h3>
                      <p className="about-why__text">{r.text}</p>
                    </div>
                    <span className="about-why__num">{String(i + 1).padStart(2, "0")}</span>
                  </article>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
