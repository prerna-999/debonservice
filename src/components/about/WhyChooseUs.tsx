
"use client";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Layers, SlidersHorizontal, Building2, LifeBuoy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REASONS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Layers, title: "All-in-One Business Partner", text: "Advertising, technology, business operations and co-sharing workspaces for rentals, all under one roof." },
  { icon: SlidersHorizontal, title: "Solutions That Fit You", text: "We provide personalised solutions that align with your business’s unique requirements, goals and budget." },
  { icon: Building2, title: "Space to Work & Grow", text: "We understand your requirements and provide flexible and affordable workspaces available by the hour, day, week, or month." },
  { icon: LifeBuoy, title: "Support Beyond Delivery", text: "Ongoing guidance and reliable support to help your business adapt, improve and grow with confidence." },
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
              Better Together <em>with Debonaire</em>
            </h2>
            <p className="about-text about-text--light" data-reveal>
              We bring the right expertise, practical solutions and personalised support to help your business grow seamlessly.
            </p>
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