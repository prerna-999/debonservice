"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { ChevronDown, ArrowUpRight, Menu } from "lucide-react";
import MobileMenu from "./Mobile-Menu";

export type MegaItem = { label: string; desc: string; href: string };
export type NavGroup = {
  label: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  cta: { label: string; href: string };
  items: MegaItem[];
};
export type NavLink = { label: string; href: string };

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Online Growth Services",
    eyebrow: "What we do",
    title: "Connected thinking",
    accent: "Measurable movement",
    intro:
      "Six complementary practices shaped around the way people discover, choose and trust a business.",
    cta: { label: "Explore all services", href: "#services" },
    items: [
      { label: "Organic Search Optimization", desc: "Rank higher on Google and bring in steady organic traffic.", href: "#organic-seo" },
      { label: "AI-Powered SEO", desc: "Get discovered in AI search results and answer engines.", href: "#ai-seo" },
      { label: "Social Media Growth Management", desc: "Grow and manage your audience across social platforms.", href: "#social-growth" },
      { label: "Performance Marketing", desc: "Paid campaigns focused on measurable results.", href: "#performance" },
      { label: "Conversion & Reputation", desc: "Turn visitors into customers and build trust online.", href: "#conversion" },
      { label: "Content Creation", desc: "Content that attracts, engages and converts.", href: "#content" },
    ],
  },
  {
    label: "IT & Technology Services",
    eyebrow: "Our IT & technology",
    title: "Reliable technology",
    accent: "Built to scale",
    intro:
      "Debonaire Capital Assets delivers scalable, business-focused technology that helps organizations modernize operations, improve customer experiences and accelerate digital growth.",
    cta: { label: "Explore all IT services", href: "#contact" },
    items: [
      { label: "Website Design & Development", desc: "Modern, responsive, secure and conversion-focused websites.", href: "#contact" },
      { label: "Software Development", desc: "Custom software built around your business processes.", href: "#contact" },
      { label: "Mobile App Development", desc: "User-friendly Android and iOS applications.", href: "#contact" },
      { label: "UI/UX Design", desc: "Intuitive interfaces focused on usability and engagement.", href: "#contact" },
      { label: "Business Intelligence & Analytics", desc: "Dashboards that turn business data into insights.", href: "#contact" },
      { label: "API & System Integration", desc: "Seamless links between your apps, CRM and payment tools.", href: "#contact" },
    ],
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Business Operations", href: "#Business Operations" },
  { label: "Corporate Support Services", href: "#Corporate-Support-Services" },
  { label: "About", href: "about" },
];

export const CTA = { label: "Let's talk", href: "#contact" };
export const logoSrc = "/assets/img/logo/logo.png";
export const logoSrc3x = "/assets/img/logo/logo@3x.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="debon-header" id="top" ref={headerRef}>
      <Container fluid className="header-shell">
        <Row className="justify-content-between align-items-center flex-nowrap g-0">
          {/* Logo */}
          <Col xs="auto" className="logo-col">
            <Link href="/" aria-label="DebonServices home" className="logo-link">
              {logoError ? (
                <span className="logo-fallback">DebonServices</span>
              ) : (
                <Image
                  src="/assets/img/logo/logo.png"
                  alt="Debonaire logo"
                  className="logo-img"
                  width={84}
                  height={62}
                  priority
                  onError={() => setLogoError(true)}
                />
              )}
            </Link>
          </Col>

          <Col as="nav" className="col-nav" aria-label="Main navigation">
            {NAV_GROUPS.map((group) => {
              const isOpen = openMenu === group.label;
              return (
                <div key={group.label} className={`nav-item has-mega ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="nav-link nav-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu(isOpen ? null : group.label)}
                  >
                    <span className="nav-label">{group.label}</span>
                    <ChevronDown size={16} strokeWidth={2.6} className="chevron" />
                  </button>

                  <div className="mega-menu">
                    <div className="mega-inner">
                      <div className="mega-feature">
                        <p className="eyebrow">{group.eyebrow}</p>
                        <h2>
                          {group.title}
                          <br />
                          <em>{group.accent}</em>
                        </h2>
                        <p className="mega-intro">{group.intro}</p>
                        <Link href={group.cta.href} className="text-link" onClick={() => setOpenMenu(null)}>
                          {group.cta.label} <ArrowUpRight size={16} strokeWidth={2.4} />
                        </Link>
                      </div>
                      <div className="mega-items">
                        {group.items.map((item, i) => (
                          <Link key={item.label} href={item.href} onClick={() => setOpenMenu(null)}>
                            <b>{String(i + 1).padStart(2, "0")}</b>
                            <span>
                              <strong>{item.label}</strong>
                              <small>{item.desc}</small>
                            </span>
                            <ArrowUpRight size={16} strokeWidth={2.4} className="item-arrow" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {NAV_LINKS.map((link) => (
              <div key={link.label} className="nav-item">
                <Link href={link.href} className="nav-link">
                  <span className="nav-label">{link.label}</span>
                </Link>
              </div>
            ))}
          </Col>

          <Col xs="auto" className="col-icons">
            <Link href={CTA.href} className="header-cta desktop-only">
              <span className="cta-label">
                <span>{CTA.label}</span>
                <span aria-hidden="true">{CTA.label}</span>
              </span>
              <span className="cta-icon" aria-hidden="true">
                <ArrowUpRight size={16} strokeWidth={2.4} />
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            </Link>

            <button
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="hamburger-btn"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={26} strokeWidth={2} />
            </button>
          </Col>
        </Row>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}