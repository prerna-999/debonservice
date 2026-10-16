

"use client";
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

type Industry = {
  name: string;
  summary: string;
  description: string;
};

const industries: Industry[] = [
  {
    name: "Technology & SaaS",
    summary: "Software companies, IT services, AI businesses and technology startups.",
    description:
      "Companies find it difficult to stand out in crowded markets, explain complex solutions, generate qualified leads and reduce customer churn.",
  },
  {
    name: "Finance & Fintech",
    summary: "Financial services, fintech platforms, accounting firms and insurance providers.",
    description:
      "Businesses find it difficult to build customer trust, navigate compliance requirements, simplify complex services and acquire customers in competitive markets.",
  },
  {
    name: "E-commerce & Retail",
    summary: "Online stores, consumer brands, retail chains and direct-to-consumer businesses.",
    description:
      "It becomes an overwhelming experience for businesses to reduce cart abandonment, manage rising customer acquisition costs, stand out among competitors and encourage repeat purchases.",
  },
  {
    name: "Healthcare & Wellness",
    summary: "Clinics, healthcare providers, wellness brands and health technology companies.",
    description:
      "It becomes difficult to build credibility, reach the right patients or customers, communicate services clearly and maintain privacy and advertising compliance.",
  },
  {
    name: "Real Estate & Construction",
    summary: "Property developers, real estate agencies, construction firms and property management companies.",
    description:
      "It becomes difficult to generate qualified enquiries, build buyer confidence, differentiate properties and convert long sales cycles into deals.",
  },
  {
    name: "Education & EdTech",
    summary: "Educational institutions, online learning platforms, training providers and professional development businesses.",
    description:
      "It is not a cinch to attract prospective students, stand out in a crowded market, improve enrolment conversions and maintain learner engagement.",
  },
  {
    name: "Manufacturing & Industrial",
    summary: "Manufacturers, industrial suppliers, engineering companies and B2B product businesses.",
    description:
      "Businesses find it hard to reach niche B2B buyers, generate qualified business leads, communicate technical expertise and modernise outdated digital processes.",
  },
  {
    name: "Hospitality & Travel",
    summary: "Hotels, resorts, travel companies, restaurants and experience-led businesses.",
    description:
      "Owners find it difficult to stand out in competitive destinations, increase direct bookings, manage online reviews and turn seasonal demand into consistent revenue.",
  },
];

const TABLET_QUERY = "(max-width: 1199px), (hover: none) and (pointer: coarse)";
const DESKTOP_HOVER_QUERY = "(hover: hover) and (min-width: 1200px)";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Industries() {
  const [active, setActive] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const current = industries[active];

  const goPrevious = () => setActive((i) => (i - 1 + industries.length) % industries.length);
  const goNext = () => setActive((i) => (i + 1) % industries.length);

  useEffect(() => {
    const list = tabListRef.current;
    if (!list || !window.matchMedia(TABLET_QUERY).matches) return;
    const tab = list.children[active] as HTMLElement | undefined;
    if (tab) {
      list.scrollTo({
        left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <section className="industries-section" id="industries" aria-labelledby="industries-title">
      <Container>
        <Row className="industries-heading-row align-items-end">
          <Col lg={7}>
            <h2 className="industries-title" id="industries-title">
              Different Industries,
              <br />
              <em>Shared Ambitions</em>
            </h2>
          </Col>
          <Col lg={5}>
            <p className="industries-intro">
              Whatever your industry is, we create the right strategies, pick the right technologies and
              leverage AI solutions to pace up your business growth.
            </p>
          </Col>
        </Row>

        <div className="industries-stage">
          <div className="industries-tabs-wrapper">
            <div className="industries-tabs-bar">
              <span className="industries-tabs-counter">
                {pad(active + 1)} / {pad(industries.length)}
              </span>
              <div className="industries-tabs-buttons">
                <button
                  type="button"
                  className="industries-arrow-button"
                  aria-label="Previous industry"
                  onClick={goPrevious}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="industries-arrow-button"
                  aria-label="Next industry"
                  onClick={goNext}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="industries-tab-list" role="tablist" aria-label="Industries" ref={tabListRef}>
              {industries.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  className={`industries-tab ${active === index ? "industries-tab-active" : ""}`}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => {
                    if (window.matchMedia(DESKTOP_HOVER_QUERY).matches) setActive(index);
                  }}
                >
                  <b className="industries-tab-number">{pad(index + 1)}</b>
                  <span className="industries-tab-name">{item.name}</span>
                  <i className="industries-tab-icon" />
                </button>
              ))}
            </div>
          </div>

          <div className="industries-panel" aria-live="polite">
            <div className="industries-panel-number" aria-hidden="true">
              {pad(active + 1)}
            </div>
            <div className="industries-panel-body" key={active}>
              <span className="industries-panel-tag">Industry {pad(active + 1)}</span>
              <h3 className="industries-panel-title">{current.name}</h3>
              <p className="industries-panel-summary">{current.summary}</p>
              <p className="industries-panel-description">{current.description}</p>
              
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}