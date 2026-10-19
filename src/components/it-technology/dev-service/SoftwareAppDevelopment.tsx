// import {
//   FiBriefcase, FiCheckSquare, FiCloud, FiGlobe, FiLayers, FiLink2, FiMessageSquare, FiRepeat, FiShield,
//   FiSmartphone, FiTerminal,
// } from "react-icons/fi";
// import DevServicePage, { DevPageData } from "./DevServicePage";

// const data: DevPageData = {
//   eyebrow: "Software & App Development",
//   title: "Custom software",
//   highlight: "built to scale with you.",
//   description: "Web apps, mobile apps, SaaS and cloud systems, designed, tested and shipped by one reliable team.",
//   file: "deploy.sh",
//   code: [
//     [["c", "# CI/CD pipeline"]],
//     [["f", "$"], ["", " git push origin main"]],
//     [["f", ">"], ["", " installing dependencies..."]],
//     [["f", ">"], ["", " running 248 tests..."]],
//     [["ok", "✓ tests passed"]],
//     [["f", ">"], ["", " deploying to cloud..."]],
//     [["ok", "✓ app live · 0 downtime"]],
//   ],
//   stack: ["Node.js", "Laravel", "React Native", "Flutter", "AWS", "Docker", "PostgreSQL", "GitHub Actions"],
//   services: [
//     { icon: FiTerminal, label: "Custom Software", title: "Custom Software Development", text: "Software made for your exact process, not a generic tool.", chips: ["Planning", "Tailored build", "Maintenance"] },
//     { icon: FiLayers, label: "SaaS", title: "SaaS Development", text: "Subscription products built to onboard, bill and grow.", chips: ["Multi-user", "Billing", "Scalable"] },
//     { icon: FiGlobe, label: "Web App", title: "Web App Development", text: "Browser apps your team and customers can use anywhere.", chips: ["Dashboards", "Real time", "Responsive"] },
//     { icon: FiSmartphone, label: "Mobile App", title: "Mobile App Development (iOS & Android)", text: "Smooth native apps on both iPhone and Android.", chips: ["iOS", "Android", "Store launch"] },
//     { icon: FiCloud, label: "Cloud", title: "Cloud-Based App Development", text: "Apps built for the cloud that grow with your traffic.", chips: ["AWS", "Azure", "Google Cloud"] },
//     { icon: FiLink2, label: "API", title: "API Development & Integration", text: "Connect your tools so data flows without manual work.", chips: ["REST & GraphQL", "Payments & CRM", "Documentation"] },
//     { icon: FiRepeat, label: "DevOps", title: "DevOps & CI/CD Services", text: "Automated build and release pipelines for safe updates.", chips: ["Auto deploy", "Monitoring", "Alerts"] },
//     { icon: FiCheckSquare, label: "Testing", title: "Software Testing (QA)", text: "Catch problems before your users do.", chips: ["Functional", "Performance", "Security"] },
//     { icon: FiBriefcase, label: "Enterprise", title: "Enterprise Solution Development", text: "Secure large scale systems built for long term growth.", chips: ["Role based access", "System integration", "Large teams"] },
//   ],
//   steps: [
//     { title: "Plan", text: "We study your goals and users, then define the scope and architecture.", status: "scoped", chips: ["Requirements", "Architecture", "Roadmap"] },
//     { title: "Build", text: "We build in short cycles and show you working software often.", status: "passed", chips: ["Short cycles", "Regular demos", "Code reviews"] },
//     { title: "Test", text: "Quality checks run at every stage, not just at the end.", status: "tested", chips: ["Automated tests", "Security checks", "Bug fixes"] },
//     { title: "Deploy", text: "We release to the cloud, monitor it and hand everything over.", status: "live", chips: ["Cloud release", "Monitoring", "Handover"] },
//   ],
//   whyTitle: "A technology partner, not just a vendor",
//   whyText: "Clear updates, quality checks at every stage and a team that explains things in plain language.",
//   benefits: [
//     { icon: FiMessageSquare, title: "Plain-language updates", text: "Regular progress reports without technical jargon." },
//     { icon: FiCheckSquare, title: "Quality at every stage", text: "Testing built into each cycle, not left to the end." },
//     { icon: FiShield, title: "You own the code", text: "Everything we build for you belongs to your business." },
//     { icon: FiCloud, title: "Built to scale", text: "Architecture planned so the product grows with you." },
//   ],
//   faqs: [
//     { q: "How much does custom software cost?", a: "A clear estimate after a short discovery call." },
//     { q: "iOS and Android both?", a: "Yes, native or one shared app." },
//     { q: "Support after launch?", a: "Yes, maintenance plans are available." },
//     { q: "Who owns the code?", a: "You do. Everything we build for you belongs to your business." },
//     { q: "How will I stay updated?", a: "You get regular demos and plain-language progress updates." },
//   ],
//   bigWord: "Software",
//   ctaTitle: "Have a product idea to build?",
//   ctaText: "Tell us what you need. We reply with a clear plan and a free quote.",
// };

// export default function SoftwareAppDevelopment() {
//   return <DevServicePage data={data} />;
// }



import {
  FiBriefcase, FiCheckSquare, FiClock, FiCloud, FiGlobe, FiHeadphones, FiLayers, FiLink2, FiMessageSquare, FiRepeat,
  FiShield, FiSmartphone, FiTerminal, FiUsers,
} from "react-icons/fi";
import DevServicePage, { DevPageData } from "./DevServicePage";

const data: DevPageData = {
  eyebrow: "Software & App Development",
  title: "Scalable & Future-Ready",
  highlight: "Software & App Development Solutions",
  description: "At Debonaire Capital Assets, we transform your ideas into powerful digital solutions. Our innovative full-cycle software development services are built for three S's: scalability, security, and speed.",
  file: "deploy.sh",
  code: [
    [["c", "# CI/CD pipeline"]],
    [["f", "$"], ["", " git push origin main"]],
    [["f", ">"], ["", " installing dependencies..."]],
    [["f", ">"], ["", " running 248 tests..."]],
    [["ok", "✓ tests passed"]],
    [["f", ">"], ["", " deploying to cloud..."]],
    [["ok", "✓ app live · 0 downtime"]],
  ],
  stack: ["Node.js", "Laravel", "React Native", "Flutter", "AWS", "Docker", "PostgreSQL", "GitHub Actions"],

  servicesTitle: "Software & App Development Solutions for Every Business Requirement",
  servicesSub: "Get reliable, personalised and faster software and app development solutions for every need.",
  faqEyebrow: "Questions",
  faqTitle: "Things people ask first",
  faqSub: "Quick answers to the questions we hear most often.",

  heroCta: "Get a free project quote",
  whyCta: "Get a free quote",
  askTitle: "Still have a question?",
  askText: "Tell us what you need and our team will get back to you.",
  askCta: "Talk to our team",
  ctaButton: "Talk to our team",

  services: [
    {
      icon: FiTerminal,
      label: "Custom Software",
      title: "Custom Software Development",
      text: "Our custom software development services are specially designed to bring your unique ideas to life. We architect, design, and develop software that works exactly the way you need it to.",
      chips: ["Tailored Solutions", "Unique Features", "Business Efficiency"],
    },
    {
      icon: FiLayers,
      label: "SaaS",
      title: "SaaS Development",
      text: "At Debonaire Capital Assets, we create smart and user-friendly digital products that solve real problems. Our SaaS development team builds secure and easy-to-use platforms that are built for the future.",
      chips: ["Cloud-Based Platforms", "Secure Access", "Easy Scalability"],
    },
    {
      icon: FiGlobe,
      label: "Web App",
      title: "Web App Development",
      text: "Our web app developers build smart, scalable web applications that align with your business goals. We deliver fast, responsive, and user-friendly web apps for B2B or B2C.",
      chips: ["Responsive Design", "Fast Performance", "Scalable Applications"],
    },
    {
      icon: FiSmartphone,
      label: "Mobile App",
      title: "Mobile App Development (iOS & Android)",
      text: "We develop custom mobile apps that look great, work seamlessly, and grow with your business. Our team develops powerful apps built specifically for Android, iOS, and cross-platform solutions.",
      chips: ["iOS & Android", "Smooth Navigation", "Cross-Platform Support"],
    },
    {
      icon: FiCloud,
      label: "Cloud",
      title: "Cloud-Based App Development",
      text: "Debonaire’s cloud-based app development solutions deliver speed, flexibility, and reliability, ensuring rapid deployment & scalability, enhanced data security, cross-platform accessibility and seamless integration.",
      chips: ["Cloud Integration", "Flexible Scaling", "Data Security"],
    },
    {
      icon: FiLink2,
      label: "API",
      title: "API Development & Integration",
      text: "We connect your apps, software and business tools so they work together smoothly. From third-party APIs to custom integrations, we help automate tasks and simplify workflows.",
      chips: ["System Connectivity", "Workflow Automation", "Seamless Integration"],
    },
    {
      icon: FiRepeat,
      label: "DevOps",
      title: "DevOps & CI/CD Services",
      text: "Debonaire’s DevOps services help you streamline development and operations for faster, smoother software delivery. We bring automation, continuous delivery, and smart monitoring to boost performance.",
      chips: ["Process Automation", "Faster Deployment", "Continuous Monitoring"],
    },
    {
      icon: FiCheckSquare,
      label: "Testing",
      title: "Software Testing (QA)",
      text: "We provide expert Software Testing Services to ensure your apps and websites run smoothly across all devices and platforms. From manual testing to industry experience, we help you touch everything for a faster launch.",
      chips: ["Bug Detection", "Quality Assurance", "Reliable Performance"],
    },
    {
      icon: FiBriefcase,
      label: "Enterprise",
      title: "Enterprise Solution Development",
      text: "We build tailored enterprise solutions that simplify complex processes and improve the way your business operates. From managing workflows to connecting systems, we do it all.",
      chips: ["Workflow Management", "System Integration", "Enterprise Scalability"],
    },
  ],
  steps: [],
  whyTitle: "Why Choose Debonaire Capital Assets?",
  whyText: "",
  benefits: [
    { icon: FiRepeat, title: "Agile Development Approach", text: "" },
    { icon: FiMessageSquare, title: "Transparent Communication", text: "" },
    { icon: FiClock, title: "On-Time Project Delivery", text: "" },
    { icon: FiUsers, title: "Experienced Development Team", text: "" },
    { icon: FiShield, title: "End-to-End Project Ownership", text: "" },
    { icon: FiHeadphones, title: "Ongoing Support & Maintenance", text: "" },
  ],
  faqs: [
    { q: "How much does custom software cost?", a: "A clear estimate after a short discovery call." },
    { q: "iOS and Android both?", a: "Yes, native or one shared app." },
    { q: "Support after launch?", a: "Yes, maintenance plans are available." },
    { q: "Who owns the code?", a: "You do. Everything we build for you belongs to your business." },
    { q: "How will I stay updated?", a: "You get regular demos and plain-language progress updates." },
  ],
  bigWord: "Software",
  ctaTitle: "Stop Circling, Start Soaring!",
  ctaText: "We help you find a clearer direction and build momentum towards growth with united efforts.",
};

export default function SoftwareAppDevelopment() {
  return <DevServicePage data={data} />;
}