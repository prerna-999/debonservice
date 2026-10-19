// import ServicePage, { ServicePageData } from "./ServicePage";

// const data: ServicePageData = {
//   eyebrow: "Reputation & Optimization",
//   title: "Build trust online.",
//   highlight: "Keep improving it.",
//   description:
//     "Most customers check reviews before they call. We help you earn good ones, handle the bad ones and keep your marketing getting better.",
//   visual: "reviews",
//   chips: ["5 star review", "Profile verified"],
//   stats: [
//     { value: "1", label: "Place to watch all your reviews" },
//     { value: "24h", label: "Target time to reply to a review" },
//     { value: "4", label: "Platforms covered: Google, social, maps, directories" },
//     { value: "Monthly", label: "Reputation and results report" },
//   ],
//   practices: [
//     {
//       title: "Review Management",
//       text: "Collect more good reviews and answer every one.",
//       points: ["Simple review request flow", "Replies to positive and negative reviews", "Alerts for new reviews"],
//     },
//     {
//       title: "Google Business Profile",
//       text: "Keep your most visible listing complete and active.",
//       points: ["Profile set up and verified", "Photos, posts and offers", "Questions and answers monitored"],
//     },
//     {
//       title: "Brand Mentions",
//       text: "Know what is said about you and where.",
//       points: ["Mentions tracked across the web", "Listings kept consistent", "Issues flagged early"],
//     },
//     {
//       title: "Ongoing Optimization",
//       text: "Use your results to decide what to do next.",
//       points: ["Monthly review of every channel", "More effort on what brings leads", "Clear list of next actions"],
//     },
//   ],
//   process: [
//     { title: "Audit", text: "We check your reviews, listings and what shows up when people search your name." },
//     { title: "Plan", text: "You get a plan to fix gaps and earn more reviews." },
//     { title: "Launch", text: "We set up review requests, update profiles and start replying." },
//     { title: "Improve", text: "We track your rating and results each month and keep refining." },
//   ],
//   why: {
//     title: "A reputation you can show",
//     text: "Good reviews and a clear online presence make every other marketing channel work better.",
//     points: [
//       "One team that handles reviews, listings and reporting.",
//       "Honest replies in your brand voice, never fake reviews.",
//       "No long lock-in. We keep your business by delivering results.",
//     ],
//   },
//   faqs: [
//     { q: "Can you remove bad reviews?", a: "We can report reviews that break platform rules. For the rest, we write calm, helpful replies and help you earn more good reviews." },
//     { q: "Do you write fake reviews?", a: "No. We only help real customers leave real reviews." },
//     { q: "What does optimization cover?", a: "It covers reviewing results across your channels each month and moving effort to what is working." },
//   ],
//   marquee: "Trust",
//   ctaTitle: "Ready to build trust online?",
//   ctaText: "Tell us about your business and goals. We will reply with a free growth plan.",
// };

// export default function ReputationOptimization() {
//   return <ServicePage data={data} />;
// }



import ServicePage, { ServicePageData } from "./ServicePage";

const data: ServicePageData = {
  eyebrow: "CRO & ORM",
  title: "CRO & ORM Services ",
  highlight: "That Actually Works",
  description:
    "We help businesses to make the most of all traffic arriving at their sites via Conversion Rate Optimisation (CRO). Our Online Reputation Management (ORM) services assist businesses in developing brand trust through improved online branding and managing customer reviews to create positive customer-published comments about you.",
  visual: "reviews",
  chips: ["5 star review", "Profile verified"],
  stats: [
    { value: "All-in-One", label: "Review Monitoring" },
    { value: "Timely", label: "Thoughtful Responses" },
    { value: "Multi-Platform", label: "Wider Online Coverage" },
    { value: "Monthly", label: "Reputation Insights" },
  ],

  practicesTitle: "Make Every Visit Count With Our CRO & ORM Solutions",
  // faqEyebrow: "FAQs",
  faqTitle: "Frequently Asked Questions About CRO & ORM Services",

  practices: [
    {
      title: "Conversion Rate Optimisation (CRO)",
      text: "We focus on increasing customer satisfaction, website performance and conversion rates to enhance overall experience.",
      points: ["Test & Optimise Landing Pages", "Improve User Experience & Messaging", "Increase Leads & Conversions"],
    },
    {
      title: "Online Reputation Management (ORM)",
      text: "Our ORM services help in managing and creating a positive online impression of your company.",
      points: ["Monitor Online Reviews & Brand Mentions", "Manage Customer Feedback & Reviews", "Build Brand Trust & Credibility"],
    },
  ],
  process: [],
  why: {
    title: "Why choose Debonaire Capital Assets for CRO & ORM services?",
    text: "",
    points: [
      "Proven CRO agency",
      "Data-first CRO company",
      "Conversion specialists",
      "Smart trust strategies",
      "Crisis-ready team",
      "Ethical review handling",
    ],
  },
  faqs: [
    {
      q: "What are the key responsibilities of a CRO agency?",
      a: "CRO agency helps to increase your website’s conversion rate, which means more leads, sales, and sign-ups. The process of improving the conversion rate is entirely based on data analysis, testing, and UX insights.",
    },
    {
      q: "What does an ORM company do?",
      a: "An ORM agency in Mohali helps to monitor, enhance, and safeguard the online representation of your company.",
    },
    {
      q: "How long does it take to improve a Website’s Conversion Rate?",
      a: "You can see initial improvements within 2-4 weeks after making changes and implementing the strategy to your website’s user interface. You will see a significant increase in conversion rates after up to 2-3 months of testing changes to your website’s overall look and feel.",
    },
  ],
  marquee: "Trust",
  ctaTitle: "Stop Circling, Start Soaring!",
  ctaText: "We help you find a clearer direction and build momentum towards growth with united efforts.",
};

export default function ReputationOptimization() {
  return <ServicePage data={data} />;
}