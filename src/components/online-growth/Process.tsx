

import Reveal from "./Reveal";

const steps = [
  { title: "Discover", text: "We identify your potential customers, comprehend their search behaviour and assess your competition to find a space where your brand will shine." },
  { title: "Strategise", text: "From SEO and AI optimisation to paid ads and social media marketing, we select the channels that match your audience, objectives and budget." },
  { title: "Execute", text: "We bring the final marketing strategy into action with structured content, planned campaigns, unceasing and consistent communication. We also modify strategy if needed." },
  { title: "Optimise", text: "We track how our campaigns perform, study essential metrics and develop ways which will enable enhancing visibility, engagement, and the number of leads." },
];

export default function Process() {
  return (
    <section className="og-section og-paper">
      <div className="og-container">
        <Reveal className="og-head">
          <span className="og-eyebrow">How we work</span>
          <h2 className="og-title">Here's How We Plot Your Path to Digital Growth.</h2>
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
