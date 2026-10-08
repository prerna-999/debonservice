"use client";
import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Reveal from "./Reveal";

const svg = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

type Service = { id: string; title: string; text: string; points: string[]; icon: ReactNode };

// ids must match the hrefs in the header (e.g. /online-growth#organic-seo)
const services: Service[] = [
  { id: "organic-seo", title: "Organic Search Optimization", text: "Rank higher on Google and bring in steady organic traffic.", points: ["Technical audit and site fixes", "Keyword and content strategy", "Local SEO and Google Business Profile"], icon: svg(<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>) },
  { id: "ai-seo", title: "AI-Powered SEO", text: "Get discovered in AI search results and answer engines, so your business is the one that gets recommended.", points: ["Content structured for AI answers", "Brand mentions on trusted sources", "Tracking your visibility in AI search"], icon: svg(<><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /><rect x="7" y="7" width="10" height="10" rx="2" /></>) },
  { id: "social-growth", title: "Social Media Growth Management", text: "Grow and manage your audience across social platforms.", points: ["Content calendar and posting", "Community replies and engagement", "Audience growth reporting"], icon: svg(<><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" /></>) },
  { id: "performance", title: "Performance Marketing", text: "Paid campaigns focused on measurable results and a clear cost per lead.", points: ["Google and Meta campaign setup", "Weekly testing of ads and budgets", "Cost per lead tracking"], icon: svg(<><path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1Z" /><path d="M17 8a5 5 0 0 1 0 8" /></>) },
  { id: "conversion", title: "Conversion & Reputation", text: "Turn visitors into customers and build trust online.", points: ["Landing page improvements", "Review and reputation management", "Form and call tracking"], icon: svg(<><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>) },
  { id: "content", title: "Content Creation", text: "Content that attracts, engages and converts.", points: ["Blogs and articles", "Short videos and graphics", "Email and newsletter copy"], icon: svg(<><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>) },
];

function Detail({ sv }: { sv: Service }) {
  return (
    <div className="og-detail">
      <div className="og-detailIcon">{sv.icon}</div>
      <h3 className="og-detailTitle">{sv.title}</h3>
      <p className="og-detailText">{sv.text}</p>
      <ul className="og-points">
        {sv.points.map((p) => (
          <li key={p}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>
            {p}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="og-textLink">
        Ask about this
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </Link>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  // Open the matching service when arriving from a header link like /online-growth#ai-seo
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    const i = services.findIndex((s) => s.id === id);
    if (i >= 0) setActive(i);
  }, [router.asPath]);

  return (
    <section id="services" className="og-section og-dark">
      <div className="og-container">
        <Reveal className="og-head">
          <span className="og-eyebrow">What we do</span>
          <h2 className="og-title">Six practices, one growth plan</h2>
          <p className="og-lead">Shaped around the way people discover, choose and trust a business. Pick a practice to see what is included.</p>
        </Reveal>

        <div className="og-svcWrap">
          <ul className="og-svcList">
            {services.map((sv, i) => {
              const on = active === i;
              return (
                <li key={sv.id} id={sv.id} className={`og-svc ${on ? "og-on" : ""}`}>
                  <button
                    type="button"
                    className="og-svcBtn"
                    aria-expanded={on}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                  >
                    <span className="og-svcName">{sv.title}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
                  </button>
                  <div className="og-inline"><Detail sv={sv} /></div>
                </li>
              );
            })}
          </ul>

          <aside className="og-panel" aria-live="polite">
            <div key={active} className="og-panelIn"><Detail sv={services[active]} /></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
