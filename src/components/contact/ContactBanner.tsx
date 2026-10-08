import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const TORN = (() => {
  const W = 1440;
  const STEP = 6; 
  const rnd = (n: number) => {
    const s = Math.sin(n * 127.1) * 43758.5453;
    return s - Math.floor(s);
  };

  let d = "M0 60";
  for (let x = 0, i = 0; x <= W; x += STEP, i++) {
    let y =
      30 +
      14 * Math.sin(x / 230 + 0.6) +
      7 * Math.sin(x / 90 + 2.1) +
      (rnd(i + 1) - 0.5) * 6;
    y = Math.max(6, Math.min(54, y));
    d += ` L${x} ${y.toFixed(1)}`;
  }
  return `${d} L${W} 60 Z`;
})();

export default function ContactBanner() {
    return (
        <section className="contact-banner" aria-labelledby="contact-banner-title">
           <Image src="/assets/img/all-img/home/home-about-1.avif" alt="" fill priority sizes="100vw" className="contact-banner__bg" />
            <div className="contact-banner__overlay" aria-hidden="true" />

            <Container className="contact-banner__container">
                <Row className="justify-content-center">
                    <Col lg={8} xl={7}>
                        <div className="contact-banner__inner">
                            <span className="contact-banner__pill">We&apos;d love to hear from you</span>
                            <h1 id="contact-banner-title" className="contact-banner__title">
                                Contact Us
                            </h1>
                            <p className="contact-banner__text">
                                Tell us about your business and your growth goals. Our team will get back to you with a clear next
                                step, usually within one working day.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <svg className="contact-banner__edge" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
                <path d={TORN} fill="currentColor" />
            </svg>
        </section>
    );
}