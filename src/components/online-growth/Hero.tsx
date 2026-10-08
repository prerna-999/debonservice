import { Fragment } from "react";
import Link from "next/link";

const words = ["Get", "found", "online.", "Win", "more", "customers."];

export default function Hero() {
  return (
    <section className="og-hero">
      <div className="og-lines" aria-hidden="true"><span /><span /><span /></div>

      <div className="og-container og-heroGrid">
        <div>
          <span className="og-eyebrow og-fadeIn">Online Growth Services</span>
          <h1 className="og-title og-heroTitle" aria-label="Get found online. Win more customers.">
            {words.map((w, i) => (
              <Fragment key={w}>
                <span className="og-word" aria-hidden="true">
                  <span style={{ animationDelay: `${150 + i * 90}ms` }}>{w}</span>
                </span>
                {i === 2 && <br />}
              </Fragment>
            ))}
          </h1>
          <p className="og-lead og-fadeIn og-d1">
            Search, ads, social media and a website that converts. We bring you steady leads and show you the numbers every month.
          </p>
          <div className="og-actions og-fadeIn og-d2">
            <Link href="/contact" className="og-btn og-btnAccent">
              Get a free growth plan
              <svg className="og-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <a href="#services" className="og-btn og-btnGhost">See our services</a>
          </div>
        </div>

        {/* A search that ends with your business on top */}
        <div className="og-visual" aria-hidden="true">
          <div className="og-serp">
            <div className="og-serpBar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              <span className="og-typing">best service near me</span>
            </div>

            <div className="og-ai">
              <span className="og-aiTag">AI answer</span>
              <p>Most people choose <b>Your Business</b>: trusted, easy to reach and well reviewed.</p>
            </div>

            <ul className="og-results">
              <li className="og-res og-r1">
                <span className="og-badge">Ad</span>
                <div><strong>Your Business | Free consultation</strong><small>yourbusiness.com</small></div>
              </li>
              <li className="og-res og-top og-r2">
                <div><strong>Your Business: services that bring results</strong><small>yourbusiness.com › services</small></div>
                <span className="og-rank">#1</span>
              </li>
              <li className="og-res og-dim og-r3">
                <div><strong>Another listing</strong><small>example.com</small></div>
              </li>
              <li className="og-res og-dim og-r4">
                <div><strong>Another listing</strong><small>example.org</small></div>
              </li>
            </ul>
          </div>
          <div className="og-chip og-chip-1">★★★★★ Reviews</div>
          <div className="og-chip og-chip-2">▲ New followers</div>
        </div>
      </div>
    </section>
  );
}
