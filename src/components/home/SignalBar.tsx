

import { Asterisk } from "lucide-react";

const WORDS = [
    "SEO & AI SEO",
    "PAID MEDIA & PERFORMANCE MARKETING",
    "CONTENT & SOCIAL",
    "CUSTOMER ENGAGEMENT",
    "REPUTATION & OPTIMIZATION",
    "WEB DEVELOPMENT",
    "SOFTWARE & APP DEVELOPMENT",
    "AI SOLUTIONS",
    "BUSINESS OPERATIONS",
    "CORPORATE SUPPORT SERVICES",
];
const COPIES = 4;

export default function SignalBar() {
    return (
        <section
            className="home-signal"
            aria-label="Our services: SEO and AI SEO, paid media and performance marketing, content and social, customer engagement, reputation and optimization, web development, software and app development, AI solutions, business operations and corporate support services"
        >
            <div className="home-signal__shell">
                <span className="home-signal__label">
                    <i className="home-signal__pulse" aria-hidden="true" />
                    Where our work meets
                </span>

                <div className="home-signal__marquee">
                    <div className="home-signal__track">
                        {Array.from({ length: COPIES }).map((_, copy) => (
                            <div className="home-signal__group" key={copy} aria-hidden={copy > 0 ? "true" : undefined}>
                                {WORDS.map((word) => (
                                    <span className="home-signal__item" key={word}>
                                        <b>{word}</b>
                                        <i className="home-signal__icon" aria-hidden="true">
                                            <Asterisk size={28} strokeWidth={2.6} />
                                        </i>
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}