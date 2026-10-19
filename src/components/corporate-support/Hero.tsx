import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="corporate-hero">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="corporate-section-label">Flexible Workspaces </div>
            <h1>
              <span>Find a Space That</span>
              <span>Works for You.</span>
            </h1>
            <p className="corporate-lead-text">
             From a desk for the day to a space for your entire business, find a workspace that fits your needs, budget and way of working.

            </p>
            <div className="corporate-hero-actions">
              <a href="/contact" className="corporate-button corporate-button-primary">Find Your Space </a>
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
