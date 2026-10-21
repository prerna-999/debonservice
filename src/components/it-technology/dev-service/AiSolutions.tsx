// import { FiBarChart2, FiBriefcase, FiCpu, FiLink2, FiMessageSquare, FiMic, FiShield, FiThumbsUp, FiUsers, FiZap } from "react-icons/fi";
// import DevServicePage, { DevPageData } from "./DevServicePage";

// const data: DevPageData = {
//   eyebrow: "AI Solutions",
//   title: "AI that works",
//   highlight: "inside your business.",
//   description: "Chatbots, agents, voice assistants and machine learning that save time and answer customers 24/7.",
//   file: "agent.py",
//   code: [
//     [["k", "from"], ["", " debon "], ["k", "import"], ["", " Agent"]],
//     [],
//     [["", "agent = "], ["f", "Agent"], ["", "("]],
//     [["", "  name="], ["s", '"support-bot"'], ["", ","]],
//     [["", "  knowledge="], ["s", '"your-docs"'], ["", ","]],
//     [["", "  handover="], ["k", "True"], ["", ")"]],
//     [],
//     [["f", ">"], ["", " agent.ask("], ["s", '"Where is my order?"'], ["", ")"]],
//     [["ok", "✓ Shipped today, arrives Friday"]],
//   ],
//   stack: ["OpenAI", "Claude", "Gemini", "LangChain", "Python", "TensorFlow", "Vector DB", "WhatsApp API"],
//   services: [
//     { icon: FiCpu, label: "Custom AI", title: "Custom AI Solutions", text: "AI built around one real business problem.", chips: ["Use case review", "Your own data", "Measured value"] },
//     { icon: FiMessageSquare, label: "Chatbot", title: "AI Chatbot Development", text: "Chatbots that answer questions and capture leads.", chips: ["Web & WhatsApp", "Trained on your content", "Human handover"] },
//     { icon: FiUsers, label: "AI Agent", title: "AI Agent Development", text: "Agents that finish multi step tasks for you.", chips: ["Tool access", "Approvals", "Activity logs"] },
//     { icon: FiMic, label: "Voice AI", title: "AI Voice Assistant Development", text: "Voice assistants that handle routine calls.", chips: ["Natural speech", "Bookings", "Multi-language"] },
//     { icon: FiZap, label: "Generative AI", title: "Generative AI Solutions", text: "Create text, images and summaries in your brand voice.", chips: ["Content", "File search", "Guardrails"] },
//     { icon: FiBarChart2, label: "Machine Learning", title: "Machine Learning Solutions", text: "Models that predict and spot patterns in your data.", chips: ["Forecasting", "Training", "Monitoring"] },
//     { icon: FiLink2, label: "AI API", title: "AI API Integration", text: "Add proven AI models to your existing app.", chips: ["OpenAI & Claude", "Secure data", "Cost controls"] },
//     { icon: FiThumbsUp, label: "Recommendations", title: "AI-Based Recommendation Systems", text: "Show each customer what they are most likely to want.", chips: ["Personalised", "Learns from behaviour", "Store & app ready"] },
//   ],
//   steps: [
//     { title: "Identify", text: "We find where AI can save time or lift revenue and pick the best first use case.", status: "chosen", chips: ["Use case", "Data review", "Success measure"] },
//     { title: "Prototype", text: "You see a working demo quickly, before investing further.", status: "demo ready", chips: ["Working demo", "Quick feedback", "Go or no-go"] },
//     { title: "Train", text: "We connect your data and tools, then test accuracy and safety.", status: "verified", chips: ["Connect data", "Safety tests", "Accuracy checks"] },
//     { title: "Improve", text: "We watch real results and keep tuning the AI over time.", status: "live", chips: ["Live monitoring", "Tuning", "Reports"] },
//   ],
//   whyTitle: "AI that is useful, safe and simple",
//   whyText: "Clear updates, quality checks at every stage and a team that explains things in plain language.",
//   benefits: [
//     { icon: FiBriefcase, title: "Business problem first", text: "We pick AI only where it saves time or lifts revenue." },
//     { icon: FiShield, title: "Your data stays protected", text: "Limited access and secure connections by default." },
//     { icon: FiUsers, title: "Human handover", text: "Guardrails and review steps catch mistakes early." },
//     { icon: FiMessageSquare, title: "Explained simply", text: "Clear answers on how it works and what it costs." },
//   ],
//   faqs: [
//     { q: "Do I need a lot of data?", a: "Not always; many bots use your existing content." },
//     { q: "Is my data safe?", a: "Yes, access is limited and secure." },
//     { q: "Can AI make mistakes?", a: "Yes, so we add guardrails and human handover." },
//     { q: "How long does an AI project take?", a: "A first working version often takes a few weeks, depending on scope." },
//     { q: "Which AI models do you use?", a: "We choose between providers such as OpenAI, Claude and Gemini based on your needs and budget." },
//   ],
//   bigWord: "Automate",
//   ctaTitle: "Ready to see what AI can do?",
//   ctaText: "Tell us what you need. We reply with a clear plan and a free quote.",
// };

// export default function AiSolutions() {
//   return <DevServicePage data={data} />;
// }


import {
  FiBarChart2, FiBriefcase, FiClock, FiCpu, FiHeadphones, FiLink2, FiMessageSquare, FiMic, FiShield, FiThumbsUp, FiUsers, FiZap,
} from "react-icons/fi";
import DevServicePage, { DevPageData } from "./DevServicePage";

const data: DevPageData = {
  eyebrow: "AI Solutions",
  title: "Smart, Secure & Business-Ready",
  highlight: "AI Solutions & Automation Services",
  description: "At Debonaire Capital Assets, we bring AI into the heart of your business. Our AI development services are built for three S's: smart results, security, and simplicity, so you save time and serve customers 24/7.",
  file: "agent.py",
  code: [
    [["k", "from"], ["", " debon "], ["k", "import"], ["", " Agent"]],
    [],
    [["", "agent = "], ["f", "Agent"], ["", "("]],
    [["", "  name="], ["s", '"support-bot"'], ["", ","]],
    [["", "  knowledge="], ["s", '"your-docs"'], ["", ","]],
    [["", "  handover="], ["k", "True"], ["", ")"]],
    [],
    [["f", ">"], ["", " agent.ask("], ["s", '"Where is my order?"'], ["", ")"]],
    [["ok", "✓ Shipped today, arrives Friday"]],
  ],
  stack: ["OpenAI", "Claude", "Gemini", "LangChain", "Python", "TensorFlow", "Vector DB", "WhatsApp API"],

  servicesTitle: "AI Development Solutions for Every Business Requirement",
  servicesSub: "Get reliable, personalised and faster AI solutions, from chatbots and agents to machine learning, for every need.",
  faqEyebrow: "Questions",
  faqTitle: "Things people ask first",
  faqSub: "Quick answers to the questions we hear most often about AI.",

  heroCta: "Get a free AI quote",
  whyCta: "Get a free quote",
  askTitle: "Still have a question?",
  askText: "Tell us what you need and our team will get back to you.",
  askCta: "Talk to our team",
  ctaButton: "Talk to our team",

  services: [
    {
      icon: FiCpu,
      label: "Custom AI",
      title: "Custom AI Solutions",
      text: "Our custom AI solutions are designed around one real business problem. We review your use case, work with your own data, and build AI that delivers measurable value.",
      chips: ["Use Case Review", "Your Own Data", "Measured Value"],
    },
    {
      icon: FiMessageSquare,
      label: "Chatbot",
      title: "AI Chatbot Development",
      text: "At Debonaire Capital Assets, we build chatbots that answer customer questions, capture leads and work around the clock on your website and WhatsApp, with smooth handover to your team.",
      chips: ["Web & WhatsApp", "Trained on Your Content", "Human Handover"],
    },
    {
      icon: FiUsers,
      label: "AI Agent",
      title: "AI Agent Development",
      text: "Our AI agents finish multi-step tasks for you. They connect to your tools, follow approval rules and keep clear activity logs so you always stay in control.",
      chips: ["Tool Access", "Approvals", "Activity Logs"],
    },
    {
      icon: FiMic,
      label: "Voice AI",
      title: "AI Voice Assistant Development",
      text: "We develop voice assistants that handle routine calls with natural speech, take bookings and support customers in multiple languages, freeing your team for important work.",
      chips: ["Natural Speech", "Bookings", "Multi-Language"],
    },
    {
      icon: FiZap,
      label: "Generative AI",
      title: "Generative AI Solutions",
      text: "Debonaire’s generative AI solutions create text, images and summaries in your brand voice, search your files instantly and run with guardrails that keep output safe and accurate.",
      chips: ["Content Creation", "File Search", "Guardrails"],
    },
    {
      icon: FiBarChart2,
      label: "Machine Learning",
      title: "Machine Learning Solutions",
      text: "We build machine learning models that predict outcomes and spot patterns in your data, from sales forecasting to risk detection, with ongoing training and monitoring.",
      chips: ["Forecasting", "Model Training", "Monitoring"],
    },
    {
      icon: FiLink2,
      label: "AI API",
      title: "AI API Integration",
      text: "We add proven AI models such as OpenAI, Claude and Gemini to your existing app or software, with secure data handling and cost controls built in.",
      chips: ["OpenAI & Claude", "Secure Data", "Cost Controls"],
    },
    {
      icon: FiThumbsUp,
      label: "Recommendations",
      title: "AI-Based Recommendation Systems",
      text: "Our recommendation systems show each customer what they are most likely to want, learning from behaviour to boost sales and engagement in your store or app.",
      chips: ["Personalised", "Learns from Behaviour", "Store & App Ready"],
    },
  ],
  steps: [],
  whyTitle: "Why Choose Debonaire Capital Assets?",
  whyText: "",
  benefits: [
    { icon: FiBriefcase, title: "Business Problem First", text: "" },
    { icon: FiShield, title: "Your Data Stays Protected", text: "" },
    { icon: FiUsers, title: "Human Handover & Guardrails", text: "" },
    { icon: FiMessageSquare, title: "Explained in Plain Language", text: "" },
    { icon: FiClock, title: "Fast Working Prototypes", text: "" },
    { icon: FiHeadphones, title: "Ongoing Support & Tuning", text: "" },
  ],
  faqs: [
    { q: "Do I need a lot of data?", a: "Not always; many bots use your existing content." },
    { q: "Is my data safe?", a: "Yes, access is limited and connections are secure." },
    { q: "Can AI make mistakes?", a: "Yes, so we add guardrails and human handover." },
    { q: "How long does an AI project take?", a: "A first working version often takes a few weeks, depending on scope." },
    { q: "Which AI models do you use?", a: "We choose between providers such as OpenAI, Claude and Gemini based on your needs and budget." },
  ],
  bigWord: "Automate",
  ctaTitle: "Ready to See What AI Can Do?",
  ctaText: "Tell us what you need. We reply with a clear plan and a free quote.",
};

export default function AiSolutions() {
  return <DevServicePage data={data} />;
}