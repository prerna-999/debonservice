import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "./Heading";
import Reveal from "./Reveal";

const marquee = ["Website Design", "Software Development", "Mobile Apps", "UI/UX Design", "Business Intelligence", "API Integration"];

export default function Hero() {
  return (
    <header className="it-hero it-dark">
      <Container className="it-hero__in">
        <Row className="g-4 align-items-center">
          <Col xs={12} lg={6}>
            <span className="it-pill">
              IT &amp; Technology Services
            </span>
            <Heading as="h1" className="it-hero__title" lines={["Reliable technology", <em key="e">built to scale</em>]} />
            <Reveal delay={200}>
              <p className="it-lead">
                Debonaire Capital Assets delivers scalable, business-focused technology that helps
                organizations modernize operations, improve customer experiences and accelerate
                digital growth.
              </p>
              <div className="it-actions">
                <Link href="/contact" className="it-btn it-btn--primary">Plan your project</Link>
                <Link href="#services" className="it-btn it-btn--outline">Browse services</Link>
              </div>
            </Reveal>
          </Col>

          <Col xs={12} lg={6}>
            <div className="it-scene" aria-label="A website, mobile app, analytics and code connected together">
              <svg className="it-lines" viewBox="0 0 520 520" preserveAspectRatio="none" aria-hidden="true">
                <path d="M110 430 C 40 300, 120 180, 200 140" />
                <path d="M330 150 C 420 90, 440 60, 430 40" />
                <path d="M200 330 C 300 420, 330 440, 360 450" />
                <circle cx="110" cy="430" r="6" />
                <circle cx="430" cy="42" r="6" />
                <circle cx="360" cy="450" r="6" />
              </svg>

              <div className="it-window-card it-browser-window" data-px="0.04">
                <div className="it-window-bar"><i /><i /><i /><u /></div>
                <div className="it-window-page">
                  <div className="it-gradient-block" />
                  <div className="it-text-line" style={{ width: "70%" }} />
                  <div className="it-text-line" style={{ width: "48%" }} />
                  <div className="it-mini-cards"><span /><span /><span /></div>
                </div>
              </div>

              <div className="it-phone" data-px="0.12">
                <div><i className="it-avatar" /><i className="it-list-row" /><i className="it-list-row" /><i className="it-list-row" /></div>
              </div>

              <div className="it-window-card it-chart-card" data-px="0.09">
                <b>Analytics</b>
                <div className="it-chart-bars">
                  {[35, 55, 45, 75, 100].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
                </div>
              </div>

              <div className="it-method-card" data-px="0.03">
                <small>THE DEBON METHOD / 02</small>
                <b>Ideas into systems</b>
              </div>

              <div className="it-code-card" data-px="0.07">
                <b>api.connect()</b>
                <span className="code-keyword">await</span> crm.sync(<span className="code-string">{'"orders"'}</span>)<br />
                <span className="code-keyword">await</span> pay.verify(id)<br />
                {"// data in sync"}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="it-marquee" aria-hidden="true">
        <div className="it-marquee__track">
          {[...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
    </header>
  );
}
