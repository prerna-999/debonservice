import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

const words = ["Run", "smooth.", "Scale", "steady."];
const tickets = [
  { t: "Order status question", d: 0 },
  { t: "Refund request", d: 1.6 },
  { t: "Invoice correction", d: 3.2 },
];

export default function Hero() {
  return (
    <section className="bo-hero">
      <div className="bo-lines" aria-hidden="true"><span /><span /><span /></div>

      <div className="bo-container bo-heroGrid">
        <div>
          <span className="bo-eyebrow bo-fadeIn">Business Operations · India · Global</span>
          <h1 className="bo-title bo-heroTitle" aria-label="Run smooth. Scale steady.">
            {words.map((w, i) => (
              <Fragment key={w}>
                <span className="bo-word" aria-hidden="true">
                  <span style={{ animationDelay: `${150 + i * 110}ms` }}>{w}</span>
                </span>
                {i === 1 && <br />}
              </Fragment>
            ))}
          </h1>
          <p className="bo-lead bo-fadeIn bo-d1">
            Customer support, back-office, data and process work handled by a dedicated team, so you can spend your time growing the business.
          </p>
          <div className="bo-actions bo-fadeIn bo-d2">
            <Link href="/contact" className="bo-btn bo-btnAccent">
              Plan your operations
              <svg className="bo-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <a href="#services" className="bo-btn bo-btnGhost">See what we handle</a>
          </div>
          <div className="bo-triple bo-fadeIn bo-d3" aria-hidden="true"><span>Support</span><span>Process</span><span>Scale</span></div>
        </div>

        <div className="bo-visual" aria-hidden="true">
          <span className="bo-block" />
          <div className="bo-photo">
            <Image src="/assets/img/all-img/home/banner.avif" alt="" width={900} height={1100} priority />
          </div>

          <div className="bo-card bo-tickets">
            <div className="bo-cardHead"><b>Support queue</b><span className="bo-live"><i />Live</span></div>
            {tickets.map((k) => (
              <div key={k.t} className="bo-tk">
                <span className="bo-av" />
                <span className="bo-tkText">{k.t}</span>
                <span className="bo-st">
                  <i className="bo-open" style={{ animationDelay: `${k.d}s` }}>Open</i>
                  <i className="bo-done" style={{ animationDelay: `${k.d}s` }}>Done</i>
                </span>
              </div>
            ))}
          </div>

          <div className="bo-card bo-mf">
            <div className="bo-cardHead"><b>Workflow</b></div>
            <div className="bo-mfTrack">
              <i /><i /><i /><i />
              <span className="bo-mfDot" />
            </div>
            <div className="bo-mfLabels"><span>Intake</span><span>Resolve</span><span>Report</span></div>
          </div>

          <div className="bo-chip">✓ Task completed</div>
        </div>
      </div>
    </section>
  );
}
