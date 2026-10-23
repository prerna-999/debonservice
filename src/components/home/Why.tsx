
"use client";
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Asterisk, ArrowUpRight, Diamond, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REASONS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Asterisk,
    title: "Reach the Right Audience",
    text: "Reach out to the right people who need what you offer and are more likely to become your long-term customers.",
  },
  {
    icon: ArrowUpRight,
    title: "Capture Search Intent",
    text: "Catch the intent behind every query and show up, compare options and help them make decisions when customers search.",
  },
  {
    icon: Diamond,
    title: "Search Everywhere Optimisation",
    text: "Maximise your visibility across different search engines, AI platforms, social media platforms, along with other discovery channels.",
  },
  {
    icon: Target,
    title: "Be the Obvious Choice",
    text: "Provide your customers with compelling reasons to choose your brand over other brands in your competition.",
  },
];

function Letters({ word, className = "" }: { word: string; className?: string }) {
  return (
    <span className={`home-why__hl ${className}`} aria-label={word}>
      {[...word].map((letter, i) => (
        <span key={i} className="home-why__ch" style={{ ["--i" as string]: i }} aria-hidden="true">
          {letter}
        </span>
      ))}
    </span>
  );
}

export default function Why() {
  const rootRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

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
    <section className="home-why" id="why" aria-labelledby="why-title" ref={rootRef}>
      <Container>
        <Row className="home-why__row">
          <Col lg={5}>
            <p className="home-why__eyebrow" data-reveal>
              Let&apos;s Get You Noticed
            </p>
            <h2
              id="why-title"
              ref={titleRef}
              className={`home-why__title ${inView ? "is-in" : ""}`}
              data-reveal
            >
              Stop Being the <Letters word="Best-Kept" />
              <br />
              <em>
                <Letters word="Secret." className="home-why__hl--2" />
              </em>
            </h2>
            <p className="home-why__text" data-reveal>
              It&apos;s time the right people knew you.
            </p>
          </Col>

          <Col lg={7}>
            <Row className="home-why__grid">
              {REASONS.map((r) => {
                const Icon = r.icon;
                return (
                  <Col key={r.title} xs={12} sm={6} className="mt-20">
                    <article className="home-why__card" data-reveal>
                      <span className="home-why__icon" aria-hidden="true">
                        <Icon size={26} strokeWidth={2.2} />
                      </span>
                      <h3 className="home-why__card-title">{r.title}</h3>
                      <p className="home-why__card-text">{r.text}</p>
                    </article>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}