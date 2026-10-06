"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Case = {
  tab: string;
  count: string;
  title: string;
  copy: string;
  metrics: { value: string; label: [string, string] }[];
  image: string;
  alt: string;
};

const CASES: Case[] = [
  {
    tab: "Search-led authority",
    count: "CASE 01 / SEARCH + CONTENT",
    title: "Turn specialist knowledge into a stronger source of demand",
    copy: "A search and content programme organizes expert knowledge around the questions prospective clients use when they begin researching a problem.",
    metrics: [
      { value: "Visibility", label: ["Search coverage", "for useful topics"] },
      { value: "Intent", label: ["More relevant", "site journeys"] },
    ],
    image: "/assets/img/all-img/home/home-about-1.avif",
    alt: "Analytics dashboard used for a growth strategy",
  },
  {
    tab: "Paid demand system",
    count: "CASE 02 / MEDIA + CONVERSION",
    title: "Give paid interest a clearer route to action",
    copy: "A focused campaign, landing experience and measurement plan connects every paid message to a useful next step for the customer.",
    metrics: [
      { value: "Clarity", label: ["A more focused", "message and offer"] },
      { value: "Action", label: ["A simpler path", "to enquiry"] },
    ],
    image: "/assets/img/all-img/home/home-about-2.avif",
    alt: "Person completing a digital purchase",
  },
  {
    tab: "Social proof engine",
    count: "CASE 03 / SOCIAL + BRAND",
    title: "Build a brand conversation people want to join",
    copy: "A repeatable social content system creates a more useful rhythm of education, proof and human connection across the channels that matter.",
    metrics: [
      { value: "Reach", label: ["More useful brand", "discovery"] },
      { value: "Trust", label: ["Stronger evidence", "over time"] },
    ],
    image: "/assets/img/all-img/home/home-about-1.avif",
    alt: "Social media applications on a smartphone",
  },
];

export default function CaseStudies() {
  const rootRef = useRef<HTMLElement>(null);
  const featureRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  const [active, setActive] = useState(0);
  const item = CASES[active];

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

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!featureRef.current) return;
    gsap.fromTo(
      featureRef.current,
      { y: 16, autoAlpha: 0.5 },
      { y: 0, autoAlpha: 1, duration: 0.35, ease: "power2.out", overwrite: true }
    );
  }, [active]);

  return (
    <section className="home-cases" id="case-studies" aria-labelledby="case-studies-title" ref={rootRef}>
      <Container>
        <Row className="home-cases__head align-items-end">
          <Col md={7}>
            <p className="home-cases__eyebrow" data-reveal>
              03A / Case-study format
            </p>
            <h2 id="case-studies-title" className="home-cases__title" data-reveal>
              Details that make
              <br />
              <em>the work real</em>
            </h2>
          </Col>
          <Col md={5}>
            <p className="home-cases__intro" data-reveal>
              Each story connects a commercial challenge, the work completed, and the evidence used to judge
              progress.
            </p>
          </Col>
        </Row>

        <Row className="home-cases__showcase g-0" data-reveal>
          <Col xs={12} lg="auto" className="home-cases__selector-col">
            <div className="home-cases__selector" role="tablist" aria-label="Selected work">
              {CASES.map((c, i) => (
                <button
                  key={c.tab}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`home-cases__tab ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <span>{c.tab}</span>
                  <ArrowUpRight className="home-cases__tab-icon" size={20} strokeWidth={2.4} aria-hidden="true" />
                </button>
              ))}
            </div>
          </Col>

          <Col xs={12} lg>
            <article className="home-cases__feature" ref={featureRef}>
              <Row className="g-0 h-100">
                <Col md={6} className="home-cases__image-col">
                  <div className="home-cases__image">
                    <Image
                      key={item.image}
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 35vw"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="home-cases__content">
                    <span className="home-cases__count">{item.count}</span>
                    <h3 className="home-cases__card-title">{item.title}</h3>
                    <p className="home-cases__text">{item.copy}</p>

                    <div className="home-cases__metrics">
                      {item.metrics.map((m) => (
                        <div key={m.value}>
                          <strong>{m.value}</strong>
                          <small>
                            {m.label[0]}
                            <br />
                            {m.label[1]}
                          </small>
                        </div>
                      ))}
                    </div>

                    <Link href="#contact" className="home-cases__link">
                      Discuss a similar brief
                      <ArrowUpRight size={20} strokeWidth={2.4} />
                    </Link>
                  </div>
                </Col>
              </Row>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
}