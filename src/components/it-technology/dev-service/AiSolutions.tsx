

import {
  FiBarChart2, FiBriefcase, FiCheckSquare, FiClock, FiCpu, FiLink2, FiMessageSquare, FiMic,
  FiThumbsUp, FiTrendingUp, FiUsers, FiZap,
} from "react-icons/fi";
import DevServicePage, { DevPageData } from "./DevServicePage";

const data: DevPageData = {
  eyebrow: "AI Solutions",
  title: "Have an Idea?",
  highlight: "Let’s Build It with Smart AI.",
  description: "From smart chatbots and AI agents to custom-built solutions and automation, we help you use AI to solve everyday challenges and make work easier.",
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

  servicesTitle: "Smart AI Solutions for Real Business Needs",
  servicesSub: "",
  faqEyebrow: "Questions",
  faqTitle: "Frequently Asked Questions About AI Solutions",
  faqSub: "Got questions about AI? Here are a few simple answers to help you understand it better.",

  heroCta: "Get a free AI consultation",
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
      text: "AI solutions designed around your business, your challenges and the way you work.",
      chips: ["Built Around Your Needs", "Simplify Daily Tasks", "Solve Real Challenges"],
    },
    {
      icon: FiMessageSquare,
      label: "Chatbot",
      title: "AI Chatbot Development",
      text: "Give your customers quick answers and helpful support through chatbots that understand their questions.",
      chips: ["Answer Customer Questions", "Provide 24/7 Support", "Handle Common Enquiries"],
    },
    {
      icon: FiUsers,
      label: "AI Agent",
      title: "AI Agent Development",
      text: "Build AI agents that can handle multi-step tasks, support your team and help work move forward.",
      chips: ["Handle Repetitive Tasks", "Support Everyday Work", "Connect Different Tools"],
    },
    {
      icon: FiMic,
      label: "Voice AI",
      title: "AI Voice Assistant Development",
      text: "Make interactions easier with voice assistants that can understand spoken requests and respond naturally.",
      chips: ["Understand Voice Commands", "Answer Spoken Questions", "Support Hands-Free Tasks"],
    },
    {
      icon: FiZap,
      label: "Generative AI",
      title: "Generative AI Solutions",
      text: "Create useful content, explore ideas and work with information faster using generative AI.",
      chips: ["Generate Content & Ideas", "Summarise Information", "Support Creative Work"],
    },
    {
      icon: FiBarChart2,
      label: "Machine Learning",
      title: "Machine Learning Solutions",
      text: "Make better use of your business data to spot patterns and support smarter decisions.",
      chips: ["Find Patterns in Data", "Predict Possible Trends", "Support Better Decisions"],
    },
    {
      icon: FiLink2,
      label: "AI API",
      title: "AI API Integration",
      text: "Connect AI tools with your existing apps and systems so they work better together.",
      chips: ["Connect AI Tools", "Improve Existing Systems", "Simplify Workflows"],
    },
    {
      icon: FiThumbsUp,
      label: "Recommendations",
      title: "AI-Based Recommendation Systems",
      text: "Help customers discover products, services or content that better match their interests.",
      chips: ["Personalised Suggestions", "Understand Customer Preferences", "Improve Product Discovery"],
    },
  ],
  steps: [],
  whyTitle: "Why Choose Debonaire for AI Solutions?",
  whyText: "AI doesn’t have to be complicated to be useful. We help you find practical ways to use AI in your business, save time on everyday tasks and make work a little easier.",
  benefits: [
    { icon: FiBriefcase, title: "Made for Your Business", text: "We take the time to understand what you need and build AI solutions that fit the way you work." },
    { icon: FiCheckSquare, title: "Easy to Work With", text: "We make AI easier to use, so it feels like a helping hand rather than another complicated tool." },
    { icon: FiClock, title: "More Time for What Matters", text: "We help take care of repetitive tasks so you can focus on your customers and growing your business." },
    { icon: FiTrendingUp, title: "Grows Along with You", text: "As your business changes, your AI solutions can adapt to your changing needs." },
  ],
  faqs: [
    { q: "How can AI help my business?", a: "AI can help you handle repetitive tasks, answer customer questions, work with data and make your everyday work easier." },
    { q: "Can you build AI solutions specifically for my business?", a: "Yes! We build AI solutions around your requirements, whether you want to simplify tasks, support customers or improve your existing processes." },
    { q: "What’s the difference between an AI chatbot and an AI agent?", a: "A chatbot mainly answers questions and holds conversations, while an AI agent can also carry out tasks and help complete multi-step work." },
    { q: "Can AI work with my existing tools and software?", a: "Yes! We can integrate AI with compatible tools and systems you already use to help them work together more smoothly." },
    { q: "Do I need technical knowledge to use AI solutions?", a: "Not at all. We aim to make our AI solutions practical and easy to use, even if you’re new to AI." },
  ],
  bigWord: "Automate",
  ctaTitle: "Ready to see what AI can do?",
  ctaText: "Tell us what you need. We reply with a clear plan and a free quote.",
};

export default function AiSolutions() {
  return <DevServicePage data={data} />;
}