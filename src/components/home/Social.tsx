
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CARDS = [
  {
    tag: "01",
    title: ["Consultative &", "Data-Driven"],
    text: "We analyse before we act. Every recommendation is grounded in data and tailored to your specific business context, no generic playbooks.",
  },
  {
    tag: "02",
    title: ["Technology-First", "Approach"],
    text: "We leverage the latest Martech tools and platforms to ensure your marketing is scalable, measurable, and future-proof.",
  },
  {
    tag: "03",
    title: ["Proven Delivery", "Track Record"],
    text: "230+ projects delivered in year one and 5+ years of consistent growth. We are a dedicated growth partner, not a vendor.",
  },
];

export default function Social() {
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
          scrollTrigger: { trigger: el, start: "top 91%", toggleActions: "play none none reverse", invalidateOnRefresh: true },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="home-social" id="social" aria-labelledby="social-title" ref={rootRef}>
      <Container>
        <Row className="home-social__row align-items-center">
          {/* ---- Copy ---- */}
          <Col lg={4}>
            <p className="home-social__eyebrow" data-reveal>
              Why Settle for Ordinary?
            </p>
            <h2 id="social-title" className="home-social__title" data-reveal>
              When you can work with
              <br />
               <em>Debonaire!</em>
            </h2>
            <Link href="/contact" className="home-social__link" data-reveal>
              Get a consultation right away!
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </Link>
          </Col>

          {/* ---- 3 cards ---- */}
          <Col lg={8}>
            <Row className="home-social__cards">
              {CARDS.map((c, i) => (
                <Col key={c.tag} xs={12} md={4} className={`home-social__col home-social__col--${i + 1}`}>
                  <article className={`home-social__card home-social__card--${i + 1}`} data-reveal>
                    <div className="home-social__tag">{c.tag}</div>
                    <strong className="home-social__card-title">
                      {c.title[0]}
                      <br />
                      {c.title[1]}
                    </strong>
                    <p className="home-social__card-text">{c.text}</p>
                  </article>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}