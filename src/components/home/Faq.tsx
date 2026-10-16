
"use client";
import { useEffect, useId, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FAQS = [
  {
    q: "What makes Debonaire different from other digital marketing agencies?",
    a: "In short, Debonaire's combination of strategy, creativity, and technology enables businesses to grow with intent. As a digital growth marketing agency, we focus on your goals to find fresh opportunities for innovative solutions to drive marketing to meaningful business results.",
  },
  {
    q: "What is performance marketing, and how can it help my business?",
    a: "Performance marketing is about measuring measurable actions, such as leads, sales, and conversions. Through well-defined campaigns, our marketing team allows you to better understand marketing and engage in efficient and meaningful campaigns.",
  },
  {
    q: "How can content creation help my brand attract more customers?",
    a: "The key value of content creation is that it helps communicate your business's value and respond to customer questions. This way, we create relevant content for various platforms.",
  },
  {
    q: "What is AI for SEO, and why does my business need it?",
    a: "AI for SEO allows brands to keep pace with both evolving search behaviours and AI-powered searches. We integrate the core principles of SEO with Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), and effective content strategies to help businesses increase their chances of being found through search engines as well as AI platforms.",
  },
  {
    q: "Why is social media content creation important for business growth?",
    a: "Social media content creation makes your business more visible, communicative, and connected with its target audience. We generate effective and platform-specific posts, Reels, videos, and creatives that help achieve brand presence, engagement, community building, and business objectives.",
  },
  {
    q: "How do I choose the right performance-based marketing agency for my business?",
    a: "Look for a performance marketing company that understands your business model, has well-defined goals and metrics to track, and optimises strategies based on real-time performance. At Debonaire, we approach every situation individually and recommend the most suitable approach for your needs instead of offering an off-the-shelf solution.",
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
      <Container>
        <Row className="home-faq__row">
          {/* ---- Copy ---- */}
          <Col lg={5}>
            <h2 id="faq-title" className="home-faq__title" data-reveal>
              Curious?
              <br />
              Let&apos;s Get You <em>Sorted.</em>
            </h2>
            <p className="home-faq__text" data-reveal>
              Here&apos;s everything you need to know to get started.
            </p>
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