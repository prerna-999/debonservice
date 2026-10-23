
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