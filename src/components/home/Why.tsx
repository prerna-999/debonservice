"use client";
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Asterisk, ArrowUpRight, Diamond, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REASONS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Asterisk, title: "Built around your business", text: "Plans shaped by your market, resources and stage of growth." },
  { icon: ArrowUpRight, title: "Visible decisions", text: "Know what is running, what changed and why it matters." },
  { icon: Diamond, title: "Modern search thinking", text: "Work designed for both conventional results and new discovery journeys." },
  { icon: Target, title: "Continual improvement", text: "Use testing and feedback to make the next move stronger." },
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
      <Container >
        <Row className="home-why__row">
          <Col lg={5}>
            <p className="home-why__eyebrow" data-reveal>
              06 / Why choose DebonServices
            </p>
            <h2
              id="why-title"
              ref={titleRef}
              className={`home-why__title ${inView ? "is-in" : ""}`}
              data-reveal
            >
              Closer to the <Letters word="work" />
              <br />
              Closer to the{" "}
              <em>
                <Letters word="outcome" className="home-why__hl--2" />
              </em>
            </h2>
            <p className="home-why__text" data-reveal>
              We work alongside your team, keep the strategy connected to the execution and judge progress against
              business needs.
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