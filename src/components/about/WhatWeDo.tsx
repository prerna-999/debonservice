

"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Search, Share2, BarChart3, Sparkles, ShieldCheck, Pencil } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SERVICES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Search, title: "Organic Search Optimization", text: "Get found by the right audience with result-driven SEO." },
  { icon: Share2, title: "Social Media Growth Management", text: "Build your brand and engage your audience effectively." },
  { icon: BarChart3, title: "Performance Marketing", text: "Maximize your ROI with targeted ad campaigns." },
  { icon: Sparkles, title: "AI-Powered SEO", text: "Leverage AI for smarter and faster growth." },
  { icon: ShieldCheck, title: "Conversion & Reputation", text: "Turn visitors into customers and build lasting trust." },
  { icon: Pencil, title: "Content Creation", text: "Powerful content that informs, engages and converts." },
];

export default function WhatWeDo() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 34,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: { trigger: ".about-what__head", start: "top 88%", invalidateOnRefresh: true },
      });

      gsap.from(".about-what__card", {
        y: 60,
        autoAlpha: 0,
        scale: 0.96,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: ".about-what__grid", start: "top 85%", invalidateOnRefresh: true },
      });

      gsap.from(".about-what__no", {
        yPercent: 60,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-what__grid", start: "top 80%", invalidateOnRefresh: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-what" id="what" aria-labelledby="what-title" ref={rootRef}>
      <Container>
        <Row className="about-what__head align-items-end">
          <Col lg={7}>
            <p className="about-eyebrow" data-reveal>What We Do</p>
            <h2 id="what-title" className="about-title" data-reveal>
              Services that drive <em>real business growth.</em>
            </h2>
          </Col>
          <Col lg={5}>
            <div className="about-what__side" data-reveal>
              <p className="about-text">
                From SEO to social media, we offer a full range of marketing services designed to increase your
                visibility, engagement and revenue.
              </p>
              <Link href="/services" className="about-btn about-btn--primary">
                Explore All Services <ArrowRight size={20} strokeWidth={2.2} />
              </Link>
            </div>
          </Col>
        </Row>

        <div className="about-what__grid">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link href="/services" key={s.title} className="about-what__card">
                <div className="about-what__top">
                  <span className="about-what__icon" aria-hidden="true"><Icon size={28} strokeWidth={1.9} /></span>
                  <span className="about-what__no" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="about-what__title">{s.title}</h3>
                <p className="about-what__text">{s.text}</p>
                <span className="about-what__more">
                  Learn more <ArrowRight size={20} strokeWidth={2.2} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}