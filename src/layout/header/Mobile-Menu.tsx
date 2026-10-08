"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";
import { NAV_GROUPS, NAV_LINKS, CTA, logoSrc } from "./Header";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) setExpanded(null);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="backdrop" onClick={onClose} />
      <aside className="drawer" role="dialog" aria-modal="true" aria-label="Site menu">
        <div className="drawer-header">
          <Link href="/" aria-label="DebonServices home" className="logo-link" onClick={onClose}>
            {logoError ? (
              <span className="logo-fallback">DebonServices</span>
            ) : (
              <img src="/assets/img/logo/logo.png" alt="Debonaire logo" className="logo-img" onError={() => setLogoError(true)} />
            )}
          </Link>
          <button aria-label="Close menu" className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <nav className="drawer-nav" aria-label="Mobile navigation">
          {NAV_GROUPS.map((group) => {
            const isOpen = expanded === group.label;
            return (
              <div key={group.label} className="drawer-nav-item">
                <div className="drawer-nav-row">
                  {group.href ? (
                    <Link
                      href={group.href}
                      className="drawer-nav-toggle drawer-nav-group-link"
                      onClick={onClose}
                    >
                      {group.label}
                    </Link>
                  ) : (
                    <span className="drawer-nav-toggle drawer-nav-group-link">
                      {group.label}
                    </span>
                  )}
                  <button
                    type="button"
                    className="drawer-nav-chevron-btn"
                    aria-expanded={isOpen}
                    aria-label={`Toggle ${group.label} submenu`}
                    onClick={() =>
                      setExpanded((prev) => (prev === group.label ? null : group.label))
                    }
                  >
                    <ChevronDown
                      size={18}
                      strokeWidth={2.6}
                      className={`chevron ${isOpen ? "rotated" : ""}`}
                    />
                  </button>
                </div>

                <div className={`drawer-nav-children ${isOpen ? "expanded" : ""}`}>
                  <ul>
                    {group.items.map((item, i) => (
                      <li key={item.label}>
                        <Link href={item.href} onClick={onClose}>
                          <b>{String(i + 1).padStart(2, "0")}</b>
                          <span>
                            <strong>{item.label}</strong>
                            <small>{item.desc}</small>
                          </span>
                        </Link>
                      </li>
                    ))}
                    {group.href && (
                      <li>
                        <Link href={group.cta.href} onClick={onClose} className="drawer-nav-cta-link">
                          {group.cta.label} <ArrowUpRight size={16} strokeWidth={2.4} />
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="drawer-nav-item">
              <Link href={link.href} className="drawer-nav-toggle drawer-nav-link" onClick={onClose}>
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="drawer-contact">
          <Link href={CTA.href} className="drawer-cta" onClick={onClose}>
            {CTA.label}
            <ArrowUpRight size={18} strokeWidth={2.4} />
          </Link>
        </div>
      </aside>
    </div>
  );
}