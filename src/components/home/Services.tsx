
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight, Globe, Code2, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Service = {
  id: string;
  tag: string;
  icon: LucideIcon;
  title: [string, string];
  text: string;
  aria: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    id: "web-development",
    tag: "01",
    icon: Globe,
    title: ["Web", "Development"],
    text: "We design websites to impress, express, perform and convert. We transform innovative ideas into seamless online experiences that grow with your business.",
    aria: "Discuss web development",
    href: "/web-development",
  },
  {
    id: "software-app-development",
    tag: "02",
    icon: Code2,
    title: ["Software and App", "Development"],
    text: "We simplify your complex business requirements into meaningful and scalable software and personalised mobile apps. We create digital solutions that work the way you do.",
    aria: "Discuss software and app development",
    href: "/software-app-development",
  },
  {
    id: "ai-solutions",
    tag: "03",
    icon: Bot,
    title: ["AI", "Solutions"],
    text: "We make technology work smarter for your unique brand. From intelligent chatbots to personalised AI tools, we provide advanced AI solutions to unlock new possibilities.",
    aria: "Discuss AI solutions",
    href: "/ai-solutions",
  },
];

export default function Services() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 34,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: el,
            start: "top 91%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-services" id="services" aria-labelledby="services-title" ref={rootRef}>
      <Container>
        <Row className="home-services__head align-items-end">
          <Col md={12}>
            <h2 id="services-title" className="home-services__title" data-reveal>
              Powering Possibilities
              <br />
              <em>Through Development Solutions</em>
            </h2>
          </Col>
        </Row>

        <Row className="home-services__grid g-0">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Col key={s.id} xs={12} md={4}>
                <article
                  className={`home-services__card home-services__card--${i + 1}`}
                  id={s.id}
                  data-reveal
                >
                  <ArrowUpRight className="home-services__corner" size={72} strokeWidth={1.2} aria-hidden="true" />

                  <span className="home-services__number">{s.tag}</span>

                  <div className="home-services__icon" aria-hidden="true">
                    <Icon size={30} strokeWidth={2} />
                  </div>

                  <h3 className="home-services__card-title">
                    {s.title[0]}
                    <br />
                    {s.title[1]}
                  </h3>

                  <p className="home-services__text">{s.text}</p>

                  <Link href={s.href} className="home-services__cta" aria-label={s.aria}>
                    Discuss this service
                    <ArrowUpRight size={18} strokeWidth={2.4} />
                  </Link>

                  <span className="home-services__hint" aria-hidden="true">
                    Hover to explore
                  </span>
                </article>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}