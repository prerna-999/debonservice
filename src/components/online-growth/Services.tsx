
"use client";
import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Reveal from "./Reveal";

const svg = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

type Service = { id: string; num: string; href: string; title: string; text: string; points: string[]; icon: ReactNode };

const services: Service[] = [
  { id: "seo-ai-seo", num: "01", href: "/digital-marketing/seo-ai-seo", title: "SEO & AI SEO", text: "Show up everywhere your customers search.", points: ["Local, Technical & E-commerce SEO", "AI SEO (AEO, GEO, ChatGPT SEO, Perplexity SEO)", "Search Experience Optimization, SearchGPT SEO, Google AI Mode"], icon: svg(<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>) },
  { id: "paid-media", num: "02", href: "/digital-marketing/paid-media", title: "Paid Media & Performance Marketing", text: "Put your budget where it actually works.", points: ["PPC (Google, Meta, YouTube)", "Influencer & Outreach Marketing"], icon: svg(<><path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1Z" /><path d="M17 8a5 5 0 0 1 0 8" /></>) },
  { id: "content-social", num: "03", href: "/digital-marketing/content-social", title: "Content & Social", text: "Create content worth stopping for.", points: ["Content Marketing", "Social Media Marketing (Organic + Paid)", "Video Marketing (Reels, Ads, Explainers)"], icon: svg(<><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" /></>) },
  { id: "customer-engagement", num: "04", href: "/digital-marketing/customer-engagement", title: "Customer Engagement", text: "Turn conversations into lasting connections.", points: ["Email & WhatsApp Marketing"], icon: svg(<><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>) },
  { id: "reputation-optimisation", num: "05", href: "/digital-marketing/reputation-optimisation", title: "Reputation & Optimisation", text: "Build trust & make every click count.", points: ["Online Reputation Management (ORM)", "Conversion Rate Optimization (CRO)"], icon: svg(<><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>) },
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
      <Link href={sv.href} className="og-textLink">
        Explore more
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </Link>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const router = useRouter();

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
          <h2 className="og-title">Get Seen, Get Clicked, Get Chosen</h2>
          <p className="og-lead">Five digital marketing services to build trust and make the most of real business opportunities.</p>
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
                    <span className="og-svcName">{sv.num}. {sv.title}</span>
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