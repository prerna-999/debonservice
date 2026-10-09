import Link from "next/link";
import Reveal from "./Reveal";

const faqs = [
  { q: "What kind of tasks can you take over?", a: "Repeatable work such as customer support, data entry, order and document processing, lead follow-up and reporting. We start by listing the tasks that take your team the most time." },
  { q: "How do you protect our data?", a: "We work under an agreed confidentiality arrangement, limit access to the people who need it and use your approved tools. Specific security terms are confirmed before work starts." },
  { q: "Can you work inside our existing tools?", a: "Yes. We can work in your helpdesk, CRM and spreadsheets, or help you choose tools if you do not have them yet." },
  { q: "How do we track quality?", a: "We agree on simple measures such as turnaround time and accuracy, review samples together and share regular reports." },
  { q: "Can we start small and grow?", a: "Yes. Many businesses begin with one process and add more once the first one is running smoothly." },
  { q: "Can you work with teams outside India?", a: "Yes. Planning, delivery and reporting can all happen remotely, with an agreed communication rhythm and working hours." },
];

export default function Faq() {
  return (
    <section className="bo-section bo-paper">
      <div className="bo-container bo-faqGrid">
        <Reveal>
          <span className="bo-eyebrow">06 / Good questions</span>
          <h2 className="bo-title">Let&apos;s clear things <em>up</em></h2>
          <p className="bo-lead">The questions we hear most when a business is thinking about handing over operations.</p>
          <div className="bo-actions">
            <Link href="/contact" className="bo-btn bo-btnNavy">Ask us something else</Link>
          </div>
        </Reveal>
        <div className="bo-faqList">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <details className="bo-faq">
                <summary>
                  <span>{f.q}</span>
                  <i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></i>
                </summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
