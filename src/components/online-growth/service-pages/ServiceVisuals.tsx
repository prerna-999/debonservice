import type { CSSProperties } from "react";

export type VisualKind = "search" | "ads" | "social" | "funnel" | "reviews";

const vars = (o: Record<string, string | number>) => o as CSSProperties;

const STAR = "M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9z";
const HEART =
  "M12 21.5l-1.4-1.3C5.4 15.4 2 12.3 2 8.5 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1C13.1 3.8 14.8 3 16.5 3 19.6 3 22 5.4 22 8.5c0 3.8-3.4 6.9-8.6 11.7z";

/* ---------- SEO: search bar types, AI answer appears, your result climbs to #1 ---------- */
function SearchVisual() {
  return (
    <div className="spv spv-search">
      <div className="spv-bar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <span className="spv-type">best service near me</span>
      </div>

      <div className="spv-ai">
        <b>AI answer</b>
        <p>
          Most people choose <strong>Your Business</strong>: trusted, easy to reach and well reviewed.
        </p>
      </div>

      <div className="spv-results">
        <div className="spv-res spv-res-a">
          <span className="spv-dotty" />
          <div>
            <b>Another listing</b>
            <small>example.com</small>
          </div>
        </div>
        <div className="spv-res spv-res-b">
          <span className="spv-dotty" />
          <div>
            <b>Another listing</b>
            <small>example.org</small>
          </div>
        </div>
        <div className="spv-res spv-res-you">
          <span className="spv-rank">#1</span>
          <div>
            <b>Your Business</b>
            <small>yourbusiness.com</small>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Paid media: leads climb, cost per lead falls, B wins the test ---------- */
function AdsVisual() {
  return (
    <div className="spv spv-ads">
      <div className="spv-ads-head">
        <b>Campaign results</b>
        <span>
          <i className="spv-key spv-key-a" /> Leads
          <i className="spv-key spv-key-b" /> Cost per lead
        </span>
      </div>
      <svg className="spv-chart" viewBox="0 0 320 140" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="spvArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5fd0e3" stopOpacity="0.35" />
            <stop offset="1" stopColor="#5fd0e3" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[28, 58, 88, 118].map((y) => (
          <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(255,255,255,0.08)" />
        ))}
        <path
          className="spv-area"
          d="M8 118 C50 112 70 95 110 88 S170 60 210 48 S280 22 312 14 L312 140 L8 140 Z"
          fill="url(#spvArea)"
        />
        <path
          className="spv-line spv-line-cost"
          pathLength={1}
          d="M8 30 C50 38 80 52 120 62 S190 90 230 98 S290 110 312 116"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="spv-line"
          pathLength={1}
          d="M8 118 C50 112 70 95 110 88 S170 60 210 48 S280 22 312 14"
          stroke="#5fd0e3"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle className="spv-ping" cx="312" cy="14" r="5" fill="#5fd0e3" />
      </svg>
      <div className="spv-ab">
        <div className="spv-ab-card">
          <small>Ad A</small>
          <i style={{ width: "46%" }} />
        </div>
        <div className="spv-ab-card spv-ab-win">
          <small>Ad B</small>
          <i style={{ width: "78%" }} />
          <em>Winner</em>
        </div>
      </div>
    </div>
  );
}

/* ---------- Content & social: floating posts, rising hearts ---------- */
function SocialVisual() {
  const hearts = [
    { r: "12%", d: "0s" },
    { r: "28%", d: "1.1s" },
    { r: "6%", d: "2.2s" },
    { r: "36%", d: "0.6s" },
    { r: "20%", d: "1.7s" },
  ];
  return (
    <div className="spv spv-social">
      <div className="spv-follow">+128 new followers</div>
      {[1, 2, 3].map((n) => (
        <div key={n} className={`spv-post spv-post-${n}`}>
          <div className="spv-post-img" />
          <span className="spv-line-s" />
          <span className="spv-line-s spv-line-short" />
          <div className="spv-post-foot">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={HEART} />
            </svg>
            <small>{n === 1 ? "1.2k" : n === 2 ? "864" : "2.4k"}</small>
          </div>
        </div>
      ))}
      {hearts.map((h) => (
        <svg key={h.d} className="spv-heart" viewBox="0 0 24 24" style={vars({ right: h.r, "--hd": h.d })} aria-hidden="true">
          <path d={HEART} />
        </svg>
      ))}
    </div>
  );
}

/* ---------- Customer engagement: visitors fall through a funnel ---------- */
function FunnelVisual() {
  const dots = [-130, -80, -30, 40, 90, 140, -60, 10, 110];
  return (
    <div className="spv spv-funnel">
      <div className="spv-funnel-body">
        <div className="spv-tier spv-tier-1">
          <b>Visitors</b>
        </div>
        <div className="spv-tier spv-tier-2">
          <b>Leads</b>
        </div>
        <div className="spv-tier spv-tier-3">
          <b>Customers</b>
        </div>
        {dots.map((x, i) => (
          <i key={i} className="spv-fdot" style={vars({ "--x": `${x}px`, "--fd": `${i * 0.42}s` })} />
        ))}
      </div>
    </div>
  );
}

/* ---------- Reputation: stars pop, reviews slide in, reply appears ---------- */
function ReviewsVisual() {
  const reviews = [
    { n: "Aman S.", t: "Quick, honest and friendly team." },
    { n: "Priya K.", t: "They replied within a day. Great service." },
    { n: "Rohit M.", t: "Easy to work with. Would recommend." },
  ];
  return (
    <div className="spv spv-reviews">
      <div className="spv-rate">
        <strong>4.9</strong>
        <div className="spv-stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} className="spv-star" viewBox="0 0 24 24" style={vars({ "--i": i })} aria-hidden="true">
              <path d={STAR} />
            </svg>
          ))}
        </div>
        <small>Based on real customer reviews</small>
      </div>
      <div className="spv-revlist">
        {reviews.map((r, i) => (
          <div key={r.n} className="spv-rev" style={vars({ "--i": i })}>
            <span className="spv-avatar">{r.n[0]}</span>
            <div>
              <b>{r.n}</b>
              <p>{r.t}</p>
            </div>
          </div>
        ))}
        <div className="spv-reply">Replied: thank you, we are glad to help.</div>
      </div>
    </div>
  );
}

export default function ServiceVisual({ kind }: { kind: VisualKind }) {
  switch (kind) {
    case "ads":
      return <AdsVisual />;
    case "social":
      return <SocialVisual />;
    case "funnel":
      return <FunnelVisual />;
    case "reviews":
      return <ReviewsVisual />;
    default:
      return <SearchVisual />;
  }
}