"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const COMPANY = {
  name: "Debon Servces",
  logo: "/assets/img/logo/logo.png", 
  phone: "+91 6239845962",
  email: "support@demo.com",
  address:
    "Mohali Citi Center 2,F Block, Gmada Aerocity, Sahibzada Ajit Singh Nagar, Punjab 140306",
  mapQuery: "Debon Servces, Mohali Citi Center 2, Aerocity, Mohali",
};

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog’s", href: "/blog" },
  { label: "FAQ’S", href: "/faq" },
  { label: "Testimonial", href: "/testimonial" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICES = [
  { label: "Creative & Branding", href: "/services/creative-branding" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Software & App Development", href: "/services/software-app-development" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Condition", href: "/terms" },
];

type SocialKey = "facebook" | "instagram" | "linkedin" | "x" | "youtube" | "pinterest";

const SOCIALS: { key: SocialKey; label: string; href: string }[] = [
  { key: "facebook", label: "Facebook", href: "#" },
  { key: "instagram", label: "Instagram", href: "#" },
  { key: "linkedin", label: "LinkedIn", href: "#" },
  { key: "x", label: "X", href: "#" },
  { key: "youtube", label: "YouTube", href: "#" },
  { key: "pinterest", label: "Pinterest", href: "#" },
];

const SocialIcon = ({ name }: { name: SocialKey }) => {
  const p = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "#fff", "aria-hidden": true } as const;
  switch (name) {
    case "facebook":
      return (
        <svg {...p}>
          <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...p} fill="none" stroke="#fff" strokeWidth="2">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="#fff" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...p}>
          <path d="M4.5 9h3.2v10.5H4.5V9zm1.6-5a1.9 1.9 0 110 3.8 1.9 1.9 0 010-3.8zM10 9h3v1.4c.5-.9 1.7-1.7 3.3-1.7 3.3 0 3.9 2.1 3.9 4.9v5.9H17v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.3H10V9z" />
        </svg>
      );
    case "x":
      return (
        <svg {...p}>
          <path d="M17.8 3.5h3l-6.6 7.6 7.8 10.4h-6.1l-4.8-6.3-5.5 6.3h-3l7.1-8.1L2.8 3.5h6.2l4.3 5.7 4.5-5.7zm-1.1 16.2h1.7L7.4 5.2H5.6l11.1 14.5z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...p}>
          <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg {...p}>
          <path d="M12 2a10 10 0 00-3.6 19.3c-.1-.8-.2-2 0-2.9l1.1-4.600s-.3-.6-.3-1.400c0-1.300.8-2.300 1.700-2.300.8 0 1.200.6 1.200 1.300 0 .8-.5 2-.8 3.100-.2.900.5 1.700 1.400 1.700 1.700 0 3-1.800 3-4.400 0-2.300-1.700-3.900-4-3.900-2.800 0-4.400 2.100-4.400 4.200 0 .8.300 1.700.7 2.200.1.100.1.200.1.300l-.3 1.100c0 .2-.2.200-.3.100-1.200-.6-2-2.400-2-3.800 0-3.100 2.200-5.900 6.400-5.900 3.400 0 6 2.400 6 5.600 0 3.400-2.100 6.100-5.100 6.100-1 0-2-.5-2.300-1.100l-.6 2.400c-.2.900-.9 2-1.200 2.600A10 10 0 1012 2z" />
        </svg>
      );
  }
};

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
    <path d="M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.500 7l8.500 6 8.500-6" />
  </svg>
);
const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
    <path d="M12 21s7-6.100 7-11.500a7 7 0 10-14 0C5 14.900 12 21 12 21z" />
    <circle cx="12" cy="9.500" r="2.500" />
  </svg>
);

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__col site-footer__brand">
          <Link href="/" aria-label={COMPANY.name} className="site-footer__logo">
            <Image src={COMPANY.logo} alt={COMPANY.name} width={250} height={80} priority={false} />
          </Link>

          <ul className="site-footer__contact">
            <li>
              <PhoneIcon />
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li>
              <PinIcon />
              <span>{COMPANY.address}</span>
            </li>
          </ul>

          <div className="site-footer__socials mt-30">
            {SOCIALS.map((s) => (
              <a
                key={s.key}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className={`site-footer__social site-footer__social--${s.key}`}
              >
                <SocialIcon name={s.key} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav className="site-footer__col" aria-label="Quick Links">
          <h3 className="site-footer__title">Quick Links</h3>
          <ul className="site-footer__links">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav className="site-footer__col" aria-label="Our Services">
          <h3 className="site-footer__title">Our Services</h3>
          <ul className="site-footer__links">
            {SERVICES.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__col site-footer__map-col">
          <h3 className="site-footer__title">Office Location</h3>
          <div className="site-footer__map">
            <iframe
              title={`${COMPANY.name} location`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>
          © Copyright {new Date().getFullYear()} | <strong>{COMPANY.name}</strong> | All rights reserved.
        </p>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`site-footer__top ${showTop ? "is-visible" : ""}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.400" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}