import Link from "next/link";
import Reveal from "../online-growth/Reveal";
export default function Cta() {
  return (
    <section className="og-section og-dark og-cta">
      <div className="og-bigWord" aria-hidden="true">Grow Grow Grow Grow</div>
      <div className="og-container">
        <Reveal>
          <h2 className="og-title">Stop Circling, Start Soaring!</h2>
          <p className="og-lead">We help you find a clearer direction and build momentum towards growth with united efforts.</p>
          <div className="og-actions">
            <Link href="/contact" className="og-btn og-btnAccent">
              Find Your Way Forward
              <svg className="og-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
