const words = ["COMPLIANCE", "ACCOUNTING", "PAYROLL", "ADMIN", "LEGAL", "SUPPORT DESK"];

export default function Marquee() {
  return (
    <div className="corporate-section-dark corporate-marquee" aria-hidden="true">
      <div>
        {[...words, ...words].map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
}
