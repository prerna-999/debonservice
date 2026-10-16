

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Sector = {
  label: string;
  title: string;
  description: string;
  image: string;
  theme:
    | "corporate"
    | "bookkeeping"
    | "accounting"
    | "digital"
    | "address"
    | "planning"
    | "branding";
};

const SECTORS: Sector[] = [
  {
    label: "Corporate Secretary Services",
    title: "Corporate Secretary Services",
    description:
      "We provide professional corporate secretarial support to help businesses manage statutory requirements, documentation, compliance, and corporate records efficiently. We also help to streamline essential administrative requirements to ensure your business stays organised and prepared.",
    image: "",
    theme: "corporate",
  },
  {
    label: "Bookkeeping Services",
    title: "Bookkeeping Services",
    description:
      "We help you to keep your financial records accurate, organised and updated. From precise tracking of daily transactions to proper management of financial records, we do everything that helps you build a reliable foundation and support sound decision-making.",
    image: "",
    theme: "bookkeeping",
  },
  {
    label: "Accounting Services",
    title: "Accounting Services",
    description:
      "We provide reliable accounting support so your numbers talk more than words. Whether it is account reconciliation, real-time expense tracking or transparent financial reporting, we do it all to give you a crystal-clear image of your business finances.",
    image: "",
    theme: "accounting",
  },
  {
    label: "Digital Address & Website",
    title: "Digital Address & Website",
    description:
      "We help you create a reliable and powerful business presence online. We help you get a professional digital address and a minimalistic website that reflects credibility and supports online growth naturally. Get a digital platform to connect with your target audience.",
    image: "",
    theme: "digital",
  },
  {
    label: "Registered Address – Onsite",
    title: "Registered Address – Onsite",
    description:
      "We help you get a professional registered address for company registration and official correspondence. Not only do we help you establish a highly credible business presence, but we also support your administrative requirements.",
    image: "",
    theme: "address",
  },
  {
    label: "Financial & Business Planning",
    title: "Financial & Business Planning",
    description:
      "With proper financial strategy, budgeting, forecasting, and resource management, we help you plan your next action more clearly. We also provide assistance in evaluating opportunities, preparing for unseen obstacles and conscious decision-making for sustainable development.",
    image: "",
    theme: "planning",
  },
  {
    label: "Branding Services",
    title: "Branding Services",
    description:
      "Make your brand recognisable and unforgettable with a cohesive visual identity, thoughtful logo design, consistent brand messaging and impressive marketing materials. We maintain the spark of your brand’s personality by building a consistent presence across all major touchpoints.",
    image: "",
    theme: "branding",
  },
];

const HOVER_DELAY = 180;

const canHover = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export default function SectorShowcase() {
  const rootRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<number | null>(null);
  const [current, setCurrent] = useState(0);

  const activate = (index: number) =>
    setCurrent((index + SECTORS.length) % SECTORS.length);

  const clearHoverTimer = () => {
    if (hoverTimer.current !== null) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  const onPanelEnter = (index: number) => {
    if (!canHover() || index === current) return;
    clearHoverTimer();
    hoverTimer.current = window.setTimeout(() => activate(index), HOVER_DELAY);
  };

  const onPanelLeave = () => clearHoverTimer();

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
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => clearHoverTimer, []);

  return (
    <section
      className="home-sector"
      id="sector-showcase"
      aria-labelledby="sector-showcase-title"
      ref={rootRef}
    >
      <Container>
        <Row className="home-sector__head align-items-end justify-content-between">
          <Col md={7}>
            <h2 id="sector-showcase-title" className="home-sector__title" data-reveal>
              From Paperwork to Brandwork.
              <br />
              <em>We&apos;ve Got You.</em>
            </h2>
          </Col>
          <Col md={4}>
            <p className="home-sector__intro" data-reveal>
              We combine the vital aspects of the business world, from corporate compliance and
              financial management to business planning, branding, and digital presence. Spend
              less time on management and more on its development.
            </p>
          </Col>
        </Row>

        <Row className="home-sector__panels g-0" aria-label="Explore services" data-reveal>
          {SECTORS.map((s, i) => {
            const active = i === current;
            return (
              <Col
                key={s.label}
                className={`home-sector__col ${active ? "is-active" : ""}`}
              >
                <article
                  className={`home-sector__panel home-sector__panel--${s.theme}`}
                  data-sector-panel={i}
                  onMouseEnter={() => onPanelEnter(i)}
                  onMouseLeave={onPanelLeave}
                  onClick={(e) => {
                    if (!active && !(e.target as HTMLElement).closest("button, a")) {
                      activate(i);
                    }
                  }}
                >
                  {s.image && (
                    <Image
                      className="home-sector__image"
                      src={s.image}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 100vw, 75vw"
                    />
                  )}
                  <div className="home-sector__shade" aria-hidden="true" />

                  <button
                    type="button"
                    className="home-sector__toggle"
                    aria-expanded={active}
                    aria-controls={`sector-content-${i}`}
                    aria-label={`${active ? "Current service: " : "Expand "}${s.label}`}
                    disabled={active}
                    onClick={() => activate(i)}
                  >
                    <span className="home-sector__label">{s.label}</span>
                    <span className="home-sector__marker" aria-hidden="true" />
                    <span className="home-sector__plus" aria-hidden="true">
                      <Plus size={26} strokeWidth={1.3} />
                    </span>
                  </button>

                  <div
                    className="home-sector__content"
                    id={`sector-content-${i}`}
                    inert={!active}
                  >
                    <div className="home-sector__story">
                      <h3>{s.title}</h3>
                      <p>{s.description}</p>
                    </div>
                  </div>
                </article>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}