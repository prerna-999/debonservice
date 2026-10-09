"use client";
import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "./Heading";



const finder = [
  { k: "web", chip: "A new website", label: "01 / Website", title: "Launch a site people trust", text: "Modern, responsive, secure and conversion-focused websites.", href: "/website-development" },
  { k: "soft", chip: "Custom software", label: "02 / Software", title: "Automate how work gets done", text: "Custom software built around your business processes.", href: "/software-development" },
  { k: "mob", chip: "A mobile app", label: "03 / Mobile", title: "Put your product in every pocket", text: "User-friendly Android and iOS applications.", href: "/mobile-apps" },
  { k: "ux", chip: "A better interface", label: "04 / Design", title: "Make it easier to use", text: "Intuitive interfaces focused on usability and engagement.", href: "/ui-ux" },
  { k: "bi", chip: "Clear reports", label: "05 / Analytics", title: "See what is really happening", text: "Dashboards that turn business data into insights.", href: "/analytics" },
  { k: "api", chip: "Connected tools", label: "06 / Integration", title: "Connect the tools you already use", text: "Seamless links between your apps, CRM and payment tools.", href: "/integration" },
];

export default function Finder() {
  const [k, setK] = useState(finder[0].k);
  const cur = finder.find((f) => f.k === k) ?? finder[0];

  return (
    <section className="it-section it-dark" id="finder">
      <Container>
        <Row className="g-4 it-two-column">
          <Col xs={12} lg={6}>
            <Heading label="02 / Find your next move" lines={["Tell us the challenge", <em key="e">Explore the right service</em>]} />
            <p className="it-text-muted">Pick what you need most and we will show where to start.</p>
            <div className="it-finder-chips" role="group" aria-label="What do you need?">
              {finder.map((f) => (
                <button key={f.k} type="button" aria-pressed={f.k === k} onClick={() => setK(f.k)}>
                  {f.chip}
                </button>
              ))}
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="it-finder-result" key={k} aria-live="polite">
              <small>{cur.label}</small>
              <h3>{cur.title}</h3>
              <p>{cur.text}</p>
              <div>
                <Link href={cur.href} className="it-btn it-btn--primary">Explore service</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
