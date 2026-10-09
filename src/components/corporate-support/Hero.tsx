import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="corporate-hero">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="corporate-section-label">Corporate support · India · Global</div>
            <h1>
              <span>Stay compliant</span>
              <span>Stay organized</span>
              <span>Keep growing</span>
            </h1>
            <p className="corporate-lead-text">
              Registration, accounts, payroll, admin and documentation designed to work as one. We take the
              back office off your plate, so your team can focus on the business.
            </p>
            <div className="corporate-hero-actions">
              <a href="#corporate-brief-section" className="corporate-button corporate-button-primary">Find your starting point</a>
              <a href="#corporate-process-section" className="corporate-button corporate-button-outline">See our approach</a>
            </div>
            <div className="corporate-hero-tags">
              <i>Compliance</i><i>Accounts</i><i>People</i>
            </div>
          </Col>
          <Col lg={5}>
            <div className="corporate-hero-panel">
              <span className="corporate-hero-chip corporate-hero-chip-one">GST return filed</span>
              <span className="corporate-hero-chip corporate-hero-chip-two">Payroll processed</span>
              <span className="corporate-hero-chip corporate-hero-chip-three">Contract signed</span>
              <div className="corporate-hero-glass-card">
                <small>THE DEBON METHOD / 04</small>
                <b>Operations into ease</b>
                <span>Less admin, more focus.</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
