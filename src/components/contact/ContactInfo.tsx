import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { PhoneCall, MailOpen, MapPin, CircleArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const CARDS: { icon: LucideIcon; title: string; text: string; href: string; featured?: boolean }[] = [
  {
    icon: PhoneCall,
    title: "(+91) 00000 00000",
    text: "Call us during working hours and speak with someone who can help plan your next growth step.",
    href: "tel:+910000000000",
  },
  {
    icon: MailOpen,
    title: "hello@yourdomain.com",
    text: "Send us a short brief. We read every message and reply with practical, honest next steps.",
    href: "mailto:hello@yourdomain.com",
    featured: true,
  },
  {
    icon: MapPin,
    title: "Your City, Country",
    text: "Visit or write to our office. Remote work with clients across regions is always welcome.",
    href: "#location",
  },
];

export default function ContactInfo() {
  return (
    <section className="contact-info" aria-label="Contact details">
      <Container>
        <Row className="contact-info__row">
          {CARDS.map(({ icon: Icon, title, text, href, featured }) => (
            <Col key={title} md={6} lg={4} className="contact-info-col">
              <article className={`contact-info__card ${featured ? "contact-info__card--featured" : ""}`}>
                <span className="contact-info__icon" aria-hidden="true">
                  <Icon size={26} strokeWidth={1.8} />
                </span>
                <h3 className="contact-info__title">{title}</h3>
                <p className="contact-info__text">{text}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}