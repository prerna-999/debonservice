


"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function About() {
  const rootRef = useRef<HTMLElement>(null);

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
          scrollTrigger: {
            trigger: el,
            start: "top 91%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });

      gsap.to(".home-about__images", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-about__images",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-about" id="about" aria-labelledby="about-title" ref={rootRef}>
      <Container>
        <Row className="home-about__row align-items-center">
          <Col md={6}>
            <div className="home-about__images" data-reveal>
              <div className="home-about__primary">
                <Image
                  src="/assets/img/all-img/home/home-about-1.avif"
                  alt="Marketing team planning a campaign"
                  fill
                  sizes="(max-width: 768px) 83vw, 40vw"
                />
              </div>
              <div className="home-about__secondary">
                <Image
                  src="/assets/img/all-img/home/home-about-2.avif"
                  alt="Colleagues reviewing ideas together"
                  fill
                  sizes="(max-width: 768px) 45vw, 22vw"
                />
              </div>
              <div className="home-about__index">01 — UNDERSTAND BEFORE YOU AMPLIFY</div>
            </div>
          </Col>

          <Col md={6}>
            <div className="home-about__copy">
              <p className="home-about__eyebrow" data-reveal>
                01 / About DebonServices
              </p>
              <h2 id="about-title" className="home-about__title" data-reveal>
                Search changed
                <br />
                <em>Good thinking</em>
                <br />
                still wins
              </h2>
              <p className="home-about__text" data-reveal>
                People now discover businesses through search results, AI answers, social feeds and
                recommendations. We connect those moments into a clear plan for reaching the right audience and
                earning its trust.
              </p>
              <p className="home-about__text" data-reveal>
                Our work starts with your customer, your market and the action you need to create. Every channel
                has a role; every result should teach us something useful.
              </p>
              <Link href="#process" className="home-about__link" data-reveal>
                How we work
                <ArrowUpRight size={18} strokeWidth={2.4} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}