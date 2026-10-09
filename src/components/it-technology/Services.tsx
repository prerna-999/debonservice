import type { ReactElement } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "./Heading";
import Reveal from "./Reveal";



const services = [
  { n: "01", label: "WEBSITE", title: "Website Design & Development", text: "Modern, responsive, secure and conversion-focused websites.", href: "/website-development", art: "web" },
  { n: "02", label: "SOFTWARE", title: "Software Development", text: "Custom software built around your business processes.", href: "/software-development", art: "soft" },
  { n: "03", label: "MOBILE", title: "Mobile App Development", text: "User-friendly Android and iOS applications.", href: "/mobile-apps", art: "mob" },
  { n: "04", label: "DESIGN", title: "UI/UX Design", text: "Intuitive interfaces focused on usability and engagement.", href: "/ui-ux", art: "ux" },
  { n: "05", label: "ANALYTICS", title: "Business Intelligence & Analytics", text: "Dashboards that turn business data into insights.", href: "/analytics", art: "bi" },
  { n: "06", label: "INTEGRATION", title: "API & System Integration", text: "Seamless links between your apps, CRM and payment tools.", href: "/integration", art: "api" },
];

const Bar = () => <div className="it-window-bar"><i /><i /><i /><u /></div>;

const art: Record<string, ReactElement> = {
  web: (
    <div className="it-window-card it-art-website">
      <Bar />
      <div className="it-window-page">
        <div className="it-gradient-block" style={{ height: 50 }} />
        <div className="it-text-line" style={{ width: "75%" }} />
        <div className="it-text-line" style={{ width: "50%" }} />
      </div>
    </div>
  ),
  soft: (
    <div className="it-art-software">
      <span className="code-keyword">const</span> order = <span className="code-keyword">await</span><br />
      app.create(<span className="code-string">{'"invoice"'}</span>)<br />
      <span className="code-keyword">if</span> (order.paid) notify()<br />
      {"// built for your process"}
    </div>
  ),
  mob: (
    <div className="it-art-mobile">
      <div>
        <i className="it-gradient-block" style={{ height: 44 }} />
        <i className="it-text-line" style={{ height: 26, borderRadius: 8 }} />
        <i className="it-text-line" style={{ height: 26, borderRadius: 8 }} />
        <i className="it-text-line" style={{ height: 26, borderRadius: 8 }} />
      </div>
    </div>
  ),
  ux: (
    <div className="it-art-design">
      <div className="design-frame" />
      <div className="design-swatches"><i /><i /><i /><i /></div>
      <div className="design-box-title" /><div className="design-box-line" /><div className="design-box-button" />
      <svg viewBox="0 0 24 24" fill="var(--color-2)" aria-hidden="true"><path d="M4 2l16 9-7 2-3 7z" /></svg>
    </div>
  ),
  bi: (
    <div className="it-art-analytics">
      {[40, 62, 50, 82, 68, 100].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
    </div>
  ),
  api: (
    <svg className="it-art-integration" viewBox="0 0 300 160" aria-hidden="true">
      <path d="M70 80 H130 M170 80 H230 M150 40 V60 M150 100 V120" />
      <circle cx="50" cy="80" r="20" fill="var(--color-white)" stroke="var(--primary-color)" strokeWidth="3" />
      <circle cx="150" cy="80" r="22" fill="var(--primary-color)" />
      <circle cx="250" cy="80" r="20" fill="var(--color-white)" stroke="var(--primary-color)" strokeWidth="3" />
      <circle cx="150" cy="28" r="14" fill="var(--color-2)" />
      <circle cx="150" cy="132" r="14" fill="var(--accent-light)" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section className="it-section" id="services">
      <Container>
        <Row className="g-4 align-items-end it-section-head">
          <Col xs={12} md={6}>
            <Heading label="01 / What we build" lines={["Six practices,", <em key="e">one dependable stack</em>]} />
          </Col>
          <Col xs={12} md={6}>
            <p className="it-text-muted">
              From the first screen a customer sees to the data behind every decision, each service
              is designed to connect with the others.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((s, i) => (
            <Col xs={12} md={6} key={s.n}>
              <Reveal delay={(i % 2) * 120} className="h-100">
                <Link href={s.href} className="it-tile">
                  <div className="it-tile__art">
                    <b className="it-tile__hint">Hover to explore</b>
                    {art[s.art]}
                  </div>
                  <div className="it-tile__body">
                    <small>{s.n} / {s.label}</small>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <span>Discuss this service</span>
                  </div>
                </Link>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
