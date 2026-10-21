import Link from "next/link";

const steps = [
  { title: "We review your brief", text: "Our team looks at your goals and where you are today." },
  { title: "We reach out", text: "A consultant will get in touch by email or phone." },
  { title: "We plan your next move", text: "You get a clear, goal-first roadmap to grow as one." },
];

export default function ThankYouPage() {
  return (
    <section className="thank">
      <div className="thank__inner">
        <svg className="thank__tick" viewBox="0 0 104 104" aria-hidden="true">
          <circle cx="52" cy="52" r="48" />
          <path d="M32 54l14 14 27-30" />
        </svg>

        <h1 className="thank__title">
          Thank <span>You!</span>
        </h1>

        <p className="thank__lead">
          Thank you for reaching out! We’ve received your enquiry and our team
          will contact you shortly.
        </p>

        <Link href="/" className="thank__btn">
          Go to Home Page ↗
        </Link>

        <div className="thank__steps">
          {steps.map((s, i) => (
            <div className="thank__step" key={s.title}>
              <b>{i + 1}</b>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}