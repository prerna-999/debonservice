import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// [name, icon, tasks we take over]
const plans: [string, string, string[]][] = [
  ["Registration & Compliance", "✓", ["Licence and registration review", "Filing calendar with early reminders", "Statutory returns prepared and filed"]],
  ["Accounting & Bookkeeping", "₹", ["Books cleaned and reconciled", "GST and tax filing support", "Monthly report in plain language"]],
  ["HR & Payroll", "◉", ["Monthly payroll runs", "Onboarding paperwork", "Employee records kept current"]],
  ["Admin & Virtual Assistance", "✉", ["Calendar and email handling", "Data entry and follow-ups", "Weekly task summary"]],
  ["Legal & Documentation", "§", ["Contract drafting support", "Agreements organized and tagged", "Renewal dates tracked"]],
  ["Customer Support Desk", "☎", ["Helpdesk setup", "Email and chat replies", "Weekly issue summary"]],
];
const stages = ["Launching", "Growing", "Scaling"];
const starts = ["This month", "This quarter", "Exploring"];

export default function Brief() {
  const [sel, setSel] = useState(1);
  const [stage, setStage] = useState(-1);
  const [start, setStart] = useState(-1);
  const plan = plans[sel];

  const Opts = ({ items, value, set }: { items: string[]; value: number; set: (n: number) => void }) => (
    <div className="corporate-brief-options">
      {items.map((o, i) => (
        <button
          key={o}
          type="button"
          className="corporate-brief-option"
          aria-pressed={value === i}
          onClick={() => set(value === i ? -1 : i)}
        >
          {o}
        </button>
      ))}
    </div>
  );

  return (
    <section className="corporate-section corporate-section-dark" id="corporate-brief-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="corporate-section-label">02A / Find your next move</div>
            <h2 className="corporate-section-title">
              Pick what to hand over <em>We plan the start</em>
            </h2>
            <div className="corporate-brief-selectors">
              <div>
                <h3>Your stage</h3>
                <Opts items={stages} value={stage} set={setStage} />
              </div>
              <div>
                <h3>Start</h3>
                <Opts items={starts} value={start} set={setStart} />
              </div>
            </div>
            <div className="corporate-brief-tiles">
              {plans.map((p, i) => (
                <button
                  key={p[0]}
                  type="button"
                  className="corporate-brief-tile"
                  aria-pressed={sel === i}
                  onClick={() => setSel(i)}
                >
                  <i>{p[1]}</i>
                  {p[0]}
                </button>
              ))}
            </div>
          </Col>
          <Col lg={5} className="corporate-margin-top">
            <div className="corporate-brief-ticket">
              <small>YOUR STARTING POINT</small>
              <h3>{plan[0]}</h3>
              <div className="corporate-brief-ticket-meta">
                {stage > -1 && <span>{stages[stage]}</span>}
                {start > -1 && <span>Start: {starts[start]}</span>}
                {stage === -1 && start === -1 && <em>Add your stage and start time to personalize.</em>}
              </div>
              <div className="corporate-brief-ticket-divider" />
              <div className="corporate-brief-ticket-subtitle">What we&apos;ll take over</div>
              <ul>
                {plan[2].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a href="#corporate-cta-anchor" className="corporate-button corporate-button-primary">Discuss this plan</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
