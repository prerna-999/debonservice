// import ServicePage, { ServicePageData } from "./ServicePage";

// const data: ServicePageData = {
//   eyebrow: "Customer Engagement",
//   title: "Turn visitors",
//   highlight: "into customers.",
//   description:
//     "Getting traffic is half the job. We improve your pages, follow up with every lead and keep customers coming back.",
//   visual: "funnel",
//   chips: ["Form submitted", "Call booked"],
//   stats: [
//     { value: "3", label: "Touchpoints tracked: forms, calls, email" },
//     { value: "Fast", label: "Lead follow-up so no enquiry goes cold" },
//     { value: "1", label: "Clear view of every lead" },
//     { value: "Monthly", label: "Conversion report with next steps" },
//   ],
//   practices: [
//     {
//       title: "Landing Page Improvement",
//       text: "Make your pages clearer so more visitors take the next step.",
//       points: ["Layout and message review", "Faster pages and simpler forms", "A and B tests on what converts"],
//     },
//     {
//       title: "Form & Call Tracking",
//       text: "See exactly which pages and campaigns bring real enquiries.",
//       points: ["Form and call tracking set up", "Lead source reporting", "Missed lead alerts"],
//     },
//     {
//       title: "Lead Follow-up",
//       text: "Reply quickly and keep every conversation moving.",
//       points: ["Automatic first reply to new leads", "Email and message sequences", "Reminders for your team"],
//     },
//     {
//       title: "Customer Retention",
//       text: "Give past customers a reason to come back.",
//       points: ["Email and newsletter campaigns", "Offers for repeat customers", "Feedback and review requests"],
//     },
//   ],
//   process: [
//     { title: "Audit", text: "We review your pages, forms and follow-up to find where leads drop off." },
//     { title: "Plan", text: "You get a list of fixes ordered by how much they are likely to help." },
//     { title: "Launch", text: "We update pages and set up tracking and follow-up, step by step." },
//     { title: "Improve", text: "We test changes each month and keep what increases enquiries." },
//   ],
//   why: {
//     title: "More from the visitors you already have",
//     text: "Better conversion means every marketing rupee works harder, whatever channel brought the visitor.",
//     points: [
//       "One team for design, tracking and follow-up.",
//       "Reports show where leads come from and where they drop off.",
//       "No long lock-in. Changes are tested before they stay.",
//     ],
//   },
//   faqs: [
//     { q: "Do I need more traffic first?", a: "Not always. Often the quickest gain comes from converting the visitors you already get." },
//     { q: "Can you work with my current website?", a: "Yes. We start with the pages you have and only suggest a rebuild if it is truly needed." },
//     { q: "How do you follow up with leads?", a: "With fast replies by email or message, based on a short sequence we agree with you." },
//   ],
//   marquee: "Convert",
//   ctaTitle: "Ready to win more of your visitors?",
//   ctaText: "Tell us about your business and goals. We will reply with a free growth plan.",
// };

// export default function CustomerEngagement() {
//   return <ServicePage data={data} />;
// }


import ServicePage, { ServicePageData } from "./ServicePage";

const data: ServicePageData = {
  eyebrow: "Customer Engagement",
  title: "The Right Message. ",
  highlight: "The Right Moment.",
  description:
    "We help you reach customers through email and WhatsApp with useful updates, relevant offers and messages that feel personal.",
  visual: "funnel",
  chips: ["Email sent", "WhatsApp reply"],
  stats: [
    { value: "Multi-Channel", label: "Every Enquiry Matters" },
    { value: "Fast", label: "Follow Up While It Matters" },
    { value: "One", label: "All Your Leads in One View" },
    { value: "Monthly", label: "Know What to Do Next" },
  ],

  practicesTitle: "Our Customer Engagement Services For Stronger Connections",
  // faqEyebrow: "FAQs",
  faqTitle: "Got Questions About Email & WhatsApp Marketing?",

  practices: [
    {
      title: "Email Marketing Services",
      text: "Stay in touch with your customers beyond the first conversation. We help you send useful updates, share offers and keep your audience interested in what your business has to say.",
      points: [
        "Personalised Email Campaigns",
        "Newsletters & Business Updates",
        "Customer Follow-Ups & Offers",
      ],
    },
    {
      title: "WhatsApp Marketing Services",
      text: "Make it easier to stay connected through WhatsApp messages that feel timely and relevant. From sharing updates to following up on enquiries, we help you keep conversations going without overwhelming your customers.",
      points: [
        "Promotional Messages & Offers",
        "Enquiry Follow-Ups & Reminders",
        "Customer Updates & Engagement",
      ],
    },
  ],
  process: [],
  why: {
    title: "Why Choose Debonaire for Customer Engagement?",
    text: "We help you stay in touch with your customers through emails and WhatsApp messages that feel natural and useful. From sharing updates to following up, we make it easier to keep the conversation going.",
    points: [
      "Messages That Feel Personal",
      "Timely Follow-Ups",
      "Useful Updates & Offers",
      "Clear, Simple Communication",
      "Staying in Touch with Customers",
      "Making Every Message Count",
    ],
  },
  faqs: [
    {
      q: "How can email marketing help my business?",
      a: "Email marketing helps you stay in touch with customers, share updates, tell them about new offers and remind them what your business has to offer.",
    },
    {
      q: "Can you help my business with WhatsApp marketing?",
      a: "Yes! We help you use WhatsApp to share updates, send offers and follow up on enquiries, making it easier to keep customers informed and conversations going.",
    },
    {
      q: "How do you know which messages are working?",
      a: "We look at how people respond to your emails and WhatsApp campaigns, such as opens, clicks, replies and enquiries. This helps us understand what your audience finds useful and what can be improved.",
    },
  ],
  marquee: "Engage",
  ctaTitle: "Stop Circling, Start Soaring!",
  ctaText: "We help you find a clearer direction and build momentum towards growth with united efforts.",
};

export default function CustomerEngagement() {
  return <ServicePage data={data} />;
}