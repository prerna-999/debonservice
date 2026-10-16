

const words = ["COMPLIANCE", "ACCOUNTING", "PAYROLL", "ADMIN", "LEGAL", "SUPPORT DESK"];
const repeatCount = 8;
const groupWords = Array.from({ length: repeatCount }, () => words).flat();

export default function Marquee() {
  return (
    <div className="corporate-section-dark corporate-marquee" aria-hidden="true">
      <div className="corporate-marquee-track">
        <div className="corporate-marquee-group">
          {groupWords.map((word, index) => (
            <span key={`first-${index}`}>{word}</span>
          ))}
        </div>
        <div className="corporate-marquee-group">
          {groupWords.map((word, index) => (
            <span key={`second-${index}`}>{word}</span>
          ))}
        </div>
      </div>
    </div>
  );
}