
import Link from "next/link";
import Image from "next/image";

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
          <h1 className="bo-title bo-heroTitle bo-fadeIn">
            The Business Side? Consider It Covered.
          </h1>
          <p className="bo-lead bo-fadeIn bo-d1">
            From paperwork and finances to your business address and branding, we help you manage the essentials so you can focus on running your business.
          </p>
          <div className="bo-actions bo-fadeIn bo-d2">
            <Link href="/contact" className="bo-btn bo-btnAccent">
              Let's Talk Business
              <svg className="bo-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
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