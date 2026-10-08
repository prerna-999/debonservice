import Reveal from "./Reveal";

const steps = [
  { title: "Audit", text: "We review your website, search presence, ads and competitors to find the biggest gaps." },
  { title: "Plan", text: "You get a clear plan with channels, budget and the results to expect." },
  { title: "Launch", text: "We build, publish and run campaigns, keeping you updated at every stage." },
  { title: "Improve", text: "We track results every month and put more effort into what brings leads." },
];

export default function Process() {
  return (
    <section className="og-section og-paper">
      <div className="og-container">
        <Reveal className="og-head">
          <span className="og-eyebrow">How we work</span>
          <h2 className="og-title">From first call to steady leads in four steps</h2>
        </Reveal>
        <ol className="og-rows">
          {steps.map((st, i) => (
            <li key={st.title}>
              <Reveal delay={i * 120} className="og-row">
                <span className="og-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="og-rowTitle">{st.title}</h3>
                <p className="og-rowText">{st.text}</p>
                <span className="og-rowLine" aria-hidden="true" />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
