import { Asterisk } from "lucide-react";

const WORDS = ["SEARCH", "AI VISIBILITY", "PAID MEDIA", "SOCIAL MEDIA", "CONVERSION"];
const COPIES = 4; 

export default function SignalBar() {
    return (
        <section
            className="home-signal"
            aria-label="Our connected disciplines: search, AI visibility, paid media, social and conversion"
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