
"use client";

import type { IconType } from "react-icons";
import {
  FiGlobe,
  FiSmartphone,
  FiCpu,
  FiStar,
} from "react-icons/fi";
import { Container, Row, Col, joinClasses } from "./Grid";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type BannerButton = {
  label: string;
  href: string;
};

type BannerCodeSegment = {
  text: string;
  type?: "keyword" | "string";
};

type BannerCodeLine = {
  isIndented?: boolean;
  segmentList: BannerCodeSegment[];
};

type BannerFloatingCard = {
  variant: "web" | "app" | "ai";
  icon: IconType;
  title: string;
  text: string;
};

type BannerSectionProps = {
  badgeText?: string;
  titleStart?: string;
  titleAccent?: string;
  titleEnd?: string;
  description?: string;
  primaryButton?: BannerButton;
  codeAddress?: string;
  codeLineList?: BannerCodeLine[];
  floatingCardList?: BannerFloatingCard[];
};

const bannerCodeLineList: BannerCodeLine[] = [
  {
    segmentList: [
      { text: "const", type: "keyword" },
      { text: " product = {" },
    ],
  },
  {
    isIndented: true,
    segmentList: [
      { text: "web: " },
      { text: '"fast and responsive"', type: "string" },
      { text: "," },
    ],
  },
  {
    isIndented: true,
    segmentList: [
      { text: "app: " },
      { text: '"android and ios"', type: "string" },
      { text: "," },
    ],
  },
  {
    isIndented: true,
    segmentList: [
      { text: "ai: " },
      { text: '"smart automation"', type: "string" },
    ],
  },
  { segmentList: [{ text: "}" }] },
];

const bannerFloatingCardList: BannerFloatingCard[] = [
  { variant: "web", icon: FiGlobe, title: "Web development", text: "Next.js and React" },
  { variant: "app", icon: FiSmartphone, title: "Mobile apps", text: "Android and iOS" },
  { variant: "ai", icon: FiCpu, title: "AI solutions", text: "Chatbots and agents" },
];

const BannerSection = ({
  badgeText = "Web and app development services",
  titleStart = "We build",
  titleAccent = "websites, apps",
  titleEnd = "& softwares that scale",
  description = "From your first website to a custom mobile app, we build digital solutions that look good, work smoothly and make life easier for your customers. You bring the idea; we'll help bring it to life.",
  primaryButton = { label: "Let's Build Something", href: "/contact" },
  codeAddress = "yourbrand.com",
  codeLineList = bannerCodeLineList,
  floatingCardList = bannerFloatingCardList,
}: BannerSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const q = gsap.utils.selector(section);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const floatingCardList = q(".web-app-development-banner-floating-card");

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(q(".web-app-development-banner-badge"), { y: 16, autoAlpha: 0, duration: 0.5 })
        .from(q(".web-app-development-banner-title"), { y: 28, autoAlpha: 0, duration: 0.7 }, "-=0.25")
        .from(q(".web-app-development-banner-description"), { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.45")
        .from(q(".web-app-development-banner-button-group"), { y: 20, autoAlpha: 0, duration: 0.5 }, "-=0.4")
        .from(q(".web-app-development-banner-code-window"), { x: 48, autoAlpha: 0, duration: 0.8 }, 0.25)
        .from(q(".web-app-development-banner-code-line"), { x: -12, autoAlpha: 0, duration: 0.35, stagger: 0.09 }, 0.8)
        .from(
          floatingCardList,
          { scale: 0.8, y: 14, autoAlpha: 0, duration: 0.5, stagger: 0.12, ease: "back.out(1.7)" },
          1
        )
        .add(() => {
          gsap.to(floatingCardList, {
            y: -8, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1,
            stagger: { each: 0.5, from: "start" },
          });
        });
    });

    return () => mm.revert();
  }, []);

  return (
  <section ref={sectionRef} className="web-app-development-banner-section">
    <Container>
      <Row className="web-app-development-banner-row">
        <Col xs={12} lg={6} className="web-app-development-banner-content-col">
          <span className="web-app-development-banner-badge">
            <FiStar className="web-app-development-banner-badge-icon" />
            {badgeText}
          </span>
          <h1 className="web-app-development-banner-title">
            {titleStart}{" "}
            <span className="web-app-development-banner-title-accent">
              {titleAccent}
            </span>{" "}
            {titleEnd}
          </h1>
          <p className="web-app-development-banner-description">{description}</p>
          <div className="web-app-development-banner-button-group mt-30">
            <a href={primaryButton.href} className="web-app-development-button-light">
              {primaryButton.label}
            </a>
          </div>
        </Col>

        <Col xs={12} lg={6} className="web-app-development-banner-visual-col">
          <div className="web-app-development-banner-visual-stage">
            <div className="web-app-development-banner-code-window">
              <div className="web-app-development-banner-code-window-bar">
                <span className="web-app-development-banner-code-window-dot" />
                <span className="web-app-development-banner-code-window-dot" />
                <span className="web-app-development-banner-code-window-dot" />
                <span className="web-app-development-banner-code-window-address">
                  {codeAddress}
                </span>
              </div>
              <div className="web-app-development-banner-code-window-body">
                {codeLineList.map((line, lineIndex) => (
                  <div
                    key={lineIndex}
                    className={joinClasses(
                      "web-app-development-banner-code-line",
                      line.isIndented && "web-app-development-banner-code-line-indent"
                    )}
                  >
                    {line.segmentList.map((segment, segmentIndex) => (
                      <span
                        key={segmentIndex}
                        className={
                          segment.type
                            ? `web-app-development-banner-code-${segment.type}`
                            : undefined
                        }
                      >
                        {segment.text}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {floatingCardList.map((card) => {
              const FloatingCardIcon = card.icon;
              return (
                <div
                  key={card.variant}
                  className={`web-app-development-banner-floating-card web-app-development-banner-floating-card-${card.variant}`}
                >
                  <span className="web-app-development-banner-floating-card-icon">
                    <FloatingCardIcon />
                  </span>
                  <div>
                    <strong className="web-app-development-banner-floating-card-title">
                      {card.title}
                    </strong>
                    <small className="web-app-development-banner-floating-card-text">
                      {card.text}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default BannerSection;