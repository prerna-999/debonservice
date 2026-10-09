import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

type Industry = {
  name: string;
  summary: string;
  description: string;
  services: string[];
};

const industries: Industry[] = [
  {
    name: "Real estate",
    summary: "Local discovery and qualified property enquiries.",
    description:
      "Buyers compare locations, prices and developers long before they call. We focus on local search, listing visibility and follow-up so serious enquiries reach your team first.",
    services: ["Local SEO", "Performance Ads", "Content"],
  },
  {
    name: "Healthcare & clinics",
    summary: "Helpful information and trust through the care journey.",
    description:
      "Patients look for clear answers and signs of trust before they book. We build helpful content and a credible online presence that makes the next step feel safe and simple.",
    services: ["Organic SEO", "Reputation", "Content"],
  },
  {
    name: "Education & coaching",
    summary: "Clear programmes and stronger student interest.",
    description:
      "Students and parents compare programmes, results and reviews. We present your courses clearly and guide interested learners from first click to enquiry.",
    services: ["Social Growth", "Performance Ads", "Conversion"],
  },
  {
    name: "E-commerce",
    summary: "Product discovery and more effective purchase paths.",
    description:
      "Shoppers move between search, social and marketplaces before they buy. We connect product discovery, paid campaigns and the checkout path so fewer visits go to waste.",
    services: ["Performance Ads", "Conversion", "AI SEO"],
  },
  {
    name: "Professional services",
    summary: "Authority, clarity and meaningful enquiries.",
    description:
      "Clients choose advisers they trust, and trust is built through clarity. We shape content and visibility that shows your expertise and attracts the right enquiries.",
    services: ["Organic SEO", "Content", "Reputation"],
  },
  {
    name: "Hospitality & travel",
    summary: "Inspiration that leads to confident booking.",
    description:
      "Travellers plan with images, reviews and local tips. We help your property or experience stand out at every step, from inspiration to confirmed booking.",
    services: ["Social Growth", "Content", "Local SEO"],
  },
  {
    name: "Local businesses",
    summary: "More visibility where nearby customers are looking.",
    description:
      "Most customers search close to home and decide quickly. We improve your local presence, reviews and social activity so nearby buyers can find and choose you.",
    services: ["Local SEO", "Reputation", "Social Growth"],
  },
  {
    name: "Technology & SaaS",
    summary: "Simpler stories for complex products and buying teams.",
    description:
      "Complex products need simple stories for several decision makers. We explain value in plain language and support each stage of the buying journey.",
    services: ["AI SEO", "Content", "Performance Ads"],
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
            <p className="industries-eyebrow">07 / Industries</p>
            <h2 className="industries-title" id="industries-title">
              Marketing shaped by
              <br />
              <em>your industry</em>
            </h2>
          </Col>
          <Col lg={5}>
            <p className="industries-intro">
              We adapt channel choices and messages to the way buyers research and decide in each market.
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
              <div className="industries-panel-chips">
                {current.services.map((service) => (
                  <span className="industries-panel-chip" key={service}>
                    {service}
                  </span>
                ))}
              </div>
              <a className="industries-panel-link" href="/contact">
                See how we help &#8599;
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
