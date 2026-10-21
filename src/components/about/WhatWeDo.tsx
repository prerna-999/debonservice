
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Megaphone, Code2, Briefcase, Building2, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SERVICES: { icon: LucideIcon; title: string; text: string; href: string }[] = [
  { icon: Megaphone, title: "Digital marketing services", text: "Reach the right audience and grow your business.", href: "/digital-marketing" },
  { icon: Code2, title: "Web and app development services", text: "Build digital solutions that work for you.", href: "/web-app-development" },
  { icon: Briefcase, title: "Business Operations Page", text: "Simplify business tasks with expert support.", href: "/business-operations" },
  { icon: Building2, title: "Flexible Workspaces", text: "Find a space that fits your needs.", href: "/flexible-workspaces" },
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
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: ".about-what__grid", start: "top 85%", invalidateOnRefresh: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-what" id="what" aria-labelledby="what-title" ref={rootRef}>
      <Container>
        <Row className="about-what__head align-items-end">
          <Col lg={7}>
            <h2 id="what-title" className="about-title" data-reveal>
               How We Help <em> Your Business</em>
             </h2>
          </Col>
          <Col lg={5}>
            <div className="about-what__side" data-reveal>
              <p className="about-text mb-30">
                From digital growth to business support and workspaces, we do it all.
              </p>
            </div>
          </Col>
        </Row>

        <div className="about-what__grid">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link href={s.href} key={s.title} className="about-what__card">
                <span className="about-what__no" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="about-what__icon" aria-hidden="true"><Icon size={26} strokeWidth={1.9} /></span>
                <div className="about-what__body">
                  <h3 className="about-what__title">{s.title}</h3>
                  <p className="about-what__text">{s.text}</p>
                </div>
                <span className="about-what__arrow" aria-hidden="true"><ArrowUpRight size={22} strokeWidth={2.2} /></span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}