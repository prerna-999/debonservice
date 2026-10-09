import Reveal from "./Reveal";

const steps = [
  { t: "Discover", d: "We learn your workflows, volumes, tools and what is slowing the team down." },
  { t: "Design", d: "We map each process, agree quality measures and prepare clear guides." },
  { t: "Run", d: "A trained team starts work with tracking and reporting in place from day one." },
  { t: "Improve", d: "We review results with you, refine the process and add more work as it grows." },
];

export default function Process() {
  return (
    <section className="bo-section bo-dark">
      <div className="bo-container">
        <Reveal className="bo-head">
          <span className="bo-eyebrow">05 / How we work</span>
          <h2 className="bo-title">From first call to <em>smooth routine</em></h2>
        </Reveal>
        <ol className="bo-steps">
          {steps.map((s, i) => (
            <li key={s.t}>
              <Reveal delay={i * 130} className="bo-step">
                <span className="bo-stepNum">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="bo-stepBar" aria-hidden="true" />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
