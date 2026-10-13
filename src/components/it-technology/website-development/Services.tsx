import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowUpRight, FiMonitor, FiTablet, FiSmartphone } from "react-icons/fi";
import Reveal, { Marquee } from "./Reveal";

/* ============================== DATA ============================== */
const devices = [
  { label: "Desktop", icon: <FiMonitor />, key: "desktop" },
  { label: "Tablet", icon: <FiTablet />, key: "tablet" },
  { label: "Mobile", icon: <FiSmartphone />, key: "mobile" },
];

const services = [
  { k: "01 / BUSINESS", title: "Business Websites", text: "Brand-first corporate sites that build trust at first glance." },
  { k: "02 / COMMERCE", title: "E-commerce Stores", text: "Catalogues, carts and payments that sell around the clock." },
  { k: "03 / PLATFORM", title: "Custom Web Apps", text: "Next.js and React builds shaped around your workflows." },
  { k: "04 / REDESIGN", title: "Website Redesign", text: "Refresh an outdated site without losing the rankings you earned." },
  { k: "05 / LANDING", title: "Landing Pages", text: "Focused single pages built for campaigns and lead capture." },
  { k: "06 / CARE", title: "Maintenance & Security", text: "Hosting, backups, updates and monitoring after launch." },
];

const techItems = ["NEXT.JS", "REACT", "TYPESCRIPT", "WORDPRESS", "SHOPIFY", "NODE.JS"];

/* ============================== SERVICES ============================== */
export default function Services() {
  return (
    <section className="wd-section">
      <Container>
        <Reveal>
          <span className="wd-eyebrow">02 / What we build</span>
          <h2 className="wd-h2">Six ways we <em>move you forward</em></h2>
        </Reveal>
        <Row className="mt-4">
          {services.map((s) => (
            <Col key={s.title} md={6} lg={4} className="mb-4">
              <Link href="/contact" className="wd-card">
                <div className="wd-k">{s.k}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="wd-cardFoot">
                  <span>Hover to explore</span>
                  <div className="wd-ar"><FiArrowUpRight /></div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

/* ======================= DEVICES + TECH STRIP (used in index) ======================= */
export function Devices() {
  const [active, setActive] = useState(0);

  return (
    <section className="wd-section wd-soft">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <Reveal>
              <span className="wd-eyebrow">01 / Built for every screen</span>
              <h2 className="wd-h2">One website, <em>every device</em></h2>
              <p>Tap a device to see how your site adapts. Every layout is designed mobile-first and tested before launch.</p>
              <div className="wd-seg">
                {devices.map((d, i) => (
                  <button key={d.label} aria-pressed={active === i} onClick={() => setActive(i)}>
                    {d.icon} {d.label}
                  </button>
                ))}
              </div>
            </Reveal>
          </Col>
          <Col lg={7}>
            <div className="wd-stage">
              <div className="wd-frame" data-device={devices[active].key}>
                <div className="wd-bar"><i /><i /><i /></div>
                <div className="wd-frameImg">
                  <Image src="/assets/img/all-img/home/home-about-1.avif" alt="Website shown on different devices" fill sizes="(max-width:992px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export function TechStrip() {
  return <Marquee alt items={techItems} />;
}
