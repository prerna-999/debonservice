"use client";
import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight, Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FAQS = [
  {
    q: "How long does SEO take to show progress?",
    a: "It depends on your site's history, competition and the work required. We agree on milestones and report early signs such as technical improvements, visibility and useful traffic before judging longer term business results.",
  },
  {
    q: "What does AI search optimization involve?",
    a: "We improve the quality, structure and credibility of your content so your expertise is easier to understand across emerging answer experiences. No agency can promise placement in a particular AI answer.",
  },
  {
    q: "Can search and paid campaigns run together?",
    a: "Yes. Paid campaigns can test messages and reach buyers quickly while organic search develops lasting visibility. We connect both to a common conversion goal.",
  },
  {
    q: "Do you build a custom plan for each business?",
    a: "Yes. The plan starts with your audience, market, offer, budget and goals. We then choose the work that best fits those conditions.",
  },
  {
    q: "How will we know what is working?",
    a: "We set up useful measurement, review it with you and explain the next actions. Reporting is built around the outcomes that matter to your business.",
  },
  {
    q: "Can you work with teams outside India?",
    a: "Yes. Discovery, planning, delivery and reporting can all happen remotely with an agreed communication rhythm.",
  },
];

export default function Faq() {
  const rootRef = useRef<HTMLElement>(null);
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null); 

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
    <section className="home-faq" id="faq" aria-labelledby="faq-title" ref={rootRef}>
      <Container >
        <Row className="home-faq__row">
          {/* ---- Copy ---- */}
          <Col lg={5}>
            <p className="home-faq__eyebrow" data-reveal>
              11 / Good questions
            </p>
            <h2 id="faq-title" className="home-faq__title" data-reveal>
              Let&apos;s clear
              <br />
              things <em>up</em>
            </h2>
            <p className="home-faq__text" data-reveal>
              These are the questions we hear most often when a business is planning its next phase of digital
              growth.
            </p>
            <Link href="#contact" className="home-faq__link" data-reveal>
              Ask us something else
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </Link>
          </Col>

          {/* ---- Accordion ---- */}
          <Col lg={7}>
            <div className="home-faq__list" data-reveal>
              {FAQS.map((item, i) => {
                const isOpen = open === i;
                const panelId = `${baseId}-panel-${i}`;
                const buttonId = `${baseId}-button-${i}`;
                return (
                  <div key={item.q} className={`home-faq__item ${isOpen ? "is-open" : ""}`}>
                    <h3 className="home-faq__q">
                      <button
                        type="button"
                        id={buttonId}
                        className="home-faq__btn"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : i)}
                      >
                        <span>{item.q}</span>
                        <Plus className="home-faq__icon" size={24} strokeWidth={1.8} aria-hidden="true" />
                      </button>
                    </h3>
                    <div id={panelId} role="region" aria-labelledby={buttonId} className="home-faq__panel" inert={!isOpen}>
                      <div className="home-faq__panel-inner">
                        <p className="home-faq__a">{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}