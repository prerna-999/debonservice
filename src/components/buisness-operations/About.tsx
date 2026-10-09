import Image from "next/image";
import Reveal from "./Reveal";

const pillars = [
  { t: "Reliable", d: "Trained people and clear checklists, so work is done the same way every time.", i: <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3 9 2 2 4-4" /> },
  { t: "Measured", d: "Simple numbers on speed and accuracy that you can read in minutes.", i: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /> },
  { t: "Flexible", d: "Start with one process and add more as the first one runs smoothly.", i: <path d="M4 12h16M14 6l6 6-6 6" /> },
];

export default function About() {
  return (
    <section className="bo-section">
      <div className="bo-container bo-aboutGrid">
        <div className="bo-imgs">
          <Reveal className="bo-imgA">
            <Image src="/assets/img/all-img/home/home-about-1.avif" alt="Marketing team planning a campaign" width={700} height={820} />
          </Reveal>
          <Reveal delay={200} className="bo-imgB">
            <Image src="/assets/img/all-img/home/home-about-2.avif" alt="Colleagues reviewing ideas together" width={520} height={620} />
          </Reveal>
        </div>

        <div>
          <Reveal>
            <span className="bo-eyebrow">01 / Why operations matter</span>
            <h2 className="bo-title">Growth needs <em>steady operations</em> behind it</h2>
            <p className="bo-lead">Every new customer adds tickets, orders, data and follow-ups. We take on that daily work so your team is never stuck in admin and your customers always get a quick, careful answer.</p>
          </Reveal>
          <ul className="bo-pillars">
            {pillars.map((p, i) => (
              <li key={p.t}>
                <Reveal delay={i * 130} className="bo-pillar">
                  <span className="bo-pIcon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{p.i}</svg></span>
                  <div><h3>{p.t}</h3><p>{p.d}</p></div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
