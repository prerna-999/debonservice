

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Sector = {
  label: string;
  title: string;
  description: string;
  image: string;
  theme: "overview" | "data" | "fintech" | "energy";
};

const SECTORS: Sector[] = [
  {
    label: "ELEKS overview",
    title: "Your trusted partner for guaranteed software delivery",
    description:
      "Combining advanced technology and decades of industry insight, we design and develop bespoke full-cycle solutions tailored to deliver your unique software vision.",
    image: "",
    
   
    theme: "overview",
  },
  {
    label: "Data&AI",
    title: "Harness the full potential of your data",
    description:
      "Maximize your business potential by delving deeper into your data and gaining invaluable insights into your customers' needs.",
    image: "",
   
  
    theme: "data",
  },
  {
    label: "Fintech",
    title: "Deliver industry-leading financial services",
    description:
      "Strategically address risks while unlocking the full potential of Big Data for the financial services sector with custom fintech solutions.",
    image: "",
   
   
    theme: "fintech",
  },
  {
    label: "Energy",
    title: "Enable streamlined energy management",
    description:
      "Optimize your energy ecosystem to deliver better performance and productivity while ensuring safe and sustainable operations.",
    image: "",
   
   
    theme: "energy",
  },
];

const HOVER_DELAY = 180;

const canHover = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export default function SectorShowcase() {
  const rootRef = useRef<HTMLElement>(null);
  const focusNext = useRef(false);
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

  useEffect(() => {
    if (!focusNext.current) return;
    focusNext.current = false;
    rootRef.current
      ?.querySelector<HTMLButtonElement>(
        `[data-sector-panel="${current}"] [data-sector-direction="next"]`
      )
      ?.focus();
  }, [current]);

  useEffect(() => clearHoverTimer, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if (!(e.target as HTMLElement).closest(".home-sector__toggle")) return;
    e.preventDefault();
    focusNext.current = true;
    activate(current + (e.key === "ArrowRight" ? 1 : -1));
  };

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
              Every market has
              <br />
              <em>its own momentum</em>
            </h2>
          </Col>
          <Col md={4}>
            <p className="home-sector__intro" data-reveal>
              Choose a sector to see how the right mix of visibility, storytelling and
              conversion can meet its buyers where they are.
            </p>
          </Col>
        </Row>

        <Row
          className="home-sector__panels g-0"
          aria-label="Explore sectors"
          onKeyDown={onKeyDown}
          data-reveal
        >
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
                    aria-label={`${active ? "Current sector: " : "Expand "}${s.label}`}
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

                    <div className="home-sector__bottom">
                      
                      <div className="home-sector__arrows">
                        <button
                          type="button"
                          data-sector-direction="previous"
                          aria-label="Previous sector"
                          onClick={() => activate(current - 1)}
                        >
                          <ArrowLeft size={20} strokeWidth={1.5} />
                        </button>
                        <button
                          type="button"
                          data-sector-direction="next"
                          aria-label="Next sector"
                          onClick={() => activate(current + 1)}
                        >
                          <ArrowRight size={20} strokeWidth={1.5} />
                        </button>
                      </div>
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