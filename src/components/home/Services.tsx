
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight, Search, Sparkles, Users, TrendingUp, ShieldCheck, FileText } from "lucide-react";
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
};

const SERVICES: Service[] = [
  {
    id: "organic-seo",
    tag: "01 / SEARCH",
    icon: Search,
    title: ["Organic Search", "Optimization"],
    text: "Improve technical health, page relevance and content depth so the right people find you in Google Search.",
    aria: "Discuss organic search optimization",
  },
  {
    id: "ai-seo",
    tag: "02 / DISCOVERY",
    icon: Sparkles,
    title: ["AI-Powered", "SEO"],
    text: "Structure useful, credible information to improve your chances of being surfaced in AI search and answer experiences.",
    aria: "Discuss AI SEO",
  },
  {
    id: "social-growth",
    tag: "03 / COMMUNITY",
    icon: Users,
    title: ["Social Media", "Growth Management"],
    text: "Build a consistent brand voice across the platforms your audience uses, with content and community care.",
    aria: "Discuss social media growth",
  },
  {
    id: "performance",
    tag: "04 / MEDIA",
    icon: TrendingUp,
    title: ["Performance", "Marketing"],
    text: "Reach high-intent audiences through paid campaigns with thoughtful creative, conversion tracking and regular testing.",
    aria: "Discuss performance marketing",
  },
  {
    id: "conversion",
    tag: "05 / TRUST",
    icon: ShieldCheck,
    title: ["Conversion &", "Reputation"],
    text: "Improve landing-page journeys, reduce friction and strengthen the signals that help visitors feel confident.",
    aria: "Discuss conversion and reputation",
  },
  {
    id: "content",
    tag: "06 / STORY",
    icon: FileText,
    title: ["Content", "Creation"],
    text: "Create useful stories and assets for search, social and paid media that educate people and move them to act.",
    aria: "Discuss content creation",
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
          <Col md={7}>
            <p className="home-services__eyebrow" data-reveal>
              02 / What we do
            </p>
            <h2 id="services-title" className="home-services__title" data-reveal>
              One connected
              <br />
              <em>growth system</em>
            </h2>
          </Col>
          <Col md={5}>
            <p className="home-services__intro" data-reveal>
              Six focused services that help your brand appear where decisions begin and perform when interest
              turns into intent.
            </p>
          </Col>
        </Row>

        <Row className="home-services__grid g-0">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Col key={s.id} xs={12} sm={6} lg={4}>
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

                  <Link href="#contact" className="home-services__cta" aria-label={s.aria}>
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