"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import { ChevronDown, ArrowUpRight, Menu } from "lucide-react";
import MobileMenu from "./Mobile-Menu";

export type MegaItem = { label: string; href: string };
export type NavGroup = {
  label: string;
  href?: string;
  eyebrow: string;
  title: string;
  accent: string;
  
  items: MegaItem[];
};
export type NavLink = { label: string; href: string };

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Digital Marketing Services",
    href: "/digital-marketing",
    eyebrow: "What we do",
    title: "Connected thinking",
    accent: "Measurable movement",
    items: [
      { label: "SEO & AI SEO", href: "/ai-seo" },
      { label: "Paid Media & Performance Marketing", href: "/performance" },
      { label: "Content & Social", href: "/social-growth" },
      { label: "Customer Engagement", href: "/conversion" },
      { label: "Reputation & Optimization", href: "/reputation" },
    ],
  },
  {
    label: "Web and App Development Services",
    href: "/web-app-development",
    eyebrow: "Our IT & technology",
    title: "Reliable technology",
    accent: "Built to scale",
    items: [
      { label: "Web Development", href: "/website-development" },
      { label: "Software & App Development", href: "/software-development" },
      { label: "AI Solutions", href: "/ai-solutions" },
    ],
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Business Operations", href: "/business-operations" },
  { label: "Corporate Support Services", href: "/corporate-support" },
  { label: "About", href: "/about" },
];

export const CTA = { label: "Let's talk", href: "/contact" };
export const logoSrc = "/assets/img/logo/logo.png";
export const logoSrc3x = "/assets/img/logo/logo@3x.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
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
      <Container>
        <Row className="justify-content-between align-items-center flex-nowrap g-0">
          {/* Logo */}
          <Col xs="auto" className="logo-col">
            <Link href="/" aria-label="DebonServices home" className="logo-link">
              {logoError ? (
                <span className="logo-fallback">DebonServices</span>
              ) : (
                <Image
                  src={logoSrc}
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
              const isActive =
                !!group.href &&
                (pathname === group.href || pathname.startsWith(group.href + "/"));

              return (
                <div
                  key={group.label}
                  className={`nav-item has-mega ${isOpen ? "is-open" : ""} ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setOpenMenu(group.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <div className="nav-link nav-trigger nav-split">
                    {group.href ? (
                      <Link
                        href={group.href}
                        className="nav-label"
                        onClick={() => setOpenMenu(null)}
                      >
                        {group.label}
                      </Link>
                    ) : (
                      <span className="nav-label">{group.label}</span>
                    )}
                    <button
                      type="button"
                      className="chevron-btn"
                      aria-label={`Open ${group.label} menu`}
                      aria-expanded={isOpen}
                      onClick={() => setOpenMenu(isOpen ? null : group.label)}
                    >
                      <ChevronDown size={16} strokeWidth={2.6} className="chevron" />
                    </button>
                  </div>

                  <div className="mega-menu">
                    <div className="mega-inner">
                      <div className="mega-feature">
                        <p className="eyebrow">{group.eyebrow}</p>
                        <h2>
                          {group.title}
                          <br />
                          <em>{group.accent}</em>
                        </h2>
                    
                      </div>
                      <div className="mega-items">
                        {group.items.map((item, i) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpenMenu(null)}
                          >
                            <b>{String(i + 1).padStart(2, "0")}</b>
                            <span>
                              <strong>{item.label}</strong>
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

            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <div key={link.label} className="nav-item">
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive ? "is-active" : ""}`}
                  >
                    <span className="nav-label">{link.label}</span>
                  </Link>
                </div>
              );
            })}
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