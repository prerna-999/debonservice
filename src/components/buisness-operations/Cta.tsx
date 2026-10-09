import Link from "next/link";
import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section className="bo-section bo-dark bo-cta">
      <div className="bo-bigWord" aria-hidden="true">Operate Operate Operate</div>
      <div className="bo-container">
        <Reveal>
          <span className="bo-eyebrow">Ready to move?</span>
          <h2 className="bo-title">Let&apos;s make the next <em>operation</em> simpler</h2>
          <p className="bo-lead">Tell us which tasks are taking too much of your team&apos;s time. We will suggest a useful place to start.</p>
          <div className="bo-actions">
            <Link href="/contact" className="bo-btn bo-btnAccent">
              Talk with our team
              <svg className="bo-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
