/**
 * 51 Agency - Central Content & Configuration
 */

export const BRAND_CONFIG = {
  name: "51 Agency",
  shortName: "51",
  tagline: "Engineering Next-Generation Digital Experiences & AI Solutions",
  subTagline: "Architecting high-performance digital products, scalable web systems, and intelligent solutions for ambitious businesses worldwide.",
  foundedYear: 2026,
  status: "Available for Q2/Q3 Projects",
};

export const CONTACT_DETAILS = {
  email: "contact@51agency.co",
  iraqPhone: "+964 777 301 2402",
  iraqTel: "tel:+9647773012402",
  jordanPhone: "+962 7 9791 2400",
  jordanTel: "tel:+962797912400",
  whatsappPhone: "+962 7 9791 2400",
  whatsappLink: "https://wa.me/962797912400?text=Hello%2051%20Agency%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  instagramUrl: "https://www.instagram.com/51_agency?stkn=MXZ3cmlvcm13d25hbQ==",
  instagramHandle: "@51_agency",
  socials: {
    instagram: "https://www.instagram.com/51_agency?stkn=MXZ3cmlvcm13d25hbQ==",
    whatsapp: "https://wa.me/962797912400?text=Hello%2051%20Agency%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  },
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "Process", href: "#process" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Contact", href: "#contact" },
];

export const TRUST_TAGS = [
  "Software Engineering",
  "Artificial Intelligence",
  "High-Scale Web",
  "Native & Cross Mobile",
];

export const HERO_METRICS = [
  { value: "99.9%", label: "System Reliability", sub: "Enterprise uptime standard" },
  { value: "35+", label: "Delivered Products", sub: "Web, AI & mobile platforms" },
  { value: "3.2x", label: "Average Speed-to-Market", sub: "Streamlined agile sprints" },
  { value: "100%", label: "Code Ownership", sub: "Zero vendor lock-in" },
];

export const SERVICES_DATA = [
  {
    id: "website-development",
    title: "Website Development",
    shortDescription: "Ultra-fast, SEO-optimized marketing and corporate websites engineered for conversion, prestige, and seamless responsive performance.",
    icon: "Globe",
    tags: ["React / Next.js", "Core Web Vitals", "Custom Animations", "SEO Architecture"],
    accent: "blue",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    shortDescription: "Sophisticated single-page applications, SaaS dashboards, and complex web systems built with modern architecture and zero latency.",
    icon: "LayoutDashboard",
    tags: ["Full-Stack SPAs", "Reactive State", "Real-Time Systems", "Modular Architecture"],
    accent: "purple",
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    shortDescription: "High-performance iOS and Android mobile solutions featuring buttery-smooth 60fps native feel, offline capabilities, and sleek UI.",
    icon: "Smartphone",
    tags: ["iOS & Android", "React Native", "Cross-Platform", "App Store Readiness"],
    accent: "indigo",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Human-centered digital design systems, user journeys, and pixel-perfect interactive prototypes that captivate users and elevate brand equity.",
    icon: "Palette",
    tags: ["Design Systems", "Figma Prototypes", "Micro-Interactions", "User Research"],
    accent: "cyan",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    shortDescription: "Empower your operations with custom AI agents, LLM integrations, autonomous workflow automation, and predictive data pipelines.",
    icon: "Sparkles",
    tags: ["LLM Integration", "Autonomous Agents", "RAG Systems", "Workflow Automation"],
    accent: "violet",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    shortDescription: "Modernizing legacy enterprise infrastructure, automating manual pipelines, and transitioning business operations to agile cloud systems.",
    icon: "RefreshCw",
    tags: ["Cloud Migration", "Legacy Modernization", "Process Automation", "CI/CD Setup"],
    accent: "teal",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDescription: "Bespoke, mission-critical software solutions tailored exactly to your unique organizational logic, compliance, and scaling hurdles.",
    icon: "Code2",
    tags: ["Microservices", "REST & GraphQL APIs", "Data Security", "High-Throughput"],
    accent: "sky",
  },
];

export const ABOUT_PILLARS = [
  {
    title: "Product Strategy",
    description: "We don't just write code; we validate product-market fit, analyze user flows, and construct technical roadmaps that de-risk execution.",
    icon: "Compass",
  },
  {
    title: "Precision Design",
    description: "Every pixel, spacing unit, and micro-interaction is intentionally crafted to forge memorable and frictionless customer experiences.",
    icon: "PenTool",
  },
  {
    title: "Resilient Engineering",
    description: "We adhere to clean architecture, type safety, modular structures, and automated tests to ensure software survives heavy production loads.",
    icon: "Terminal",
  },
  {
    title: "AI-Augmented Velocity",
    description: "We harness cutting-edge artificial intelligence to optimize development velocity, personalize user touchpoints, and unlock predictive insights.",
    icon: "Cpu",
  },
];

export const WHY_CHOOSE_US_DATA = [
  {
    id: "modern-tech",
    title: "Modern Technologies",
    description: "We leverage state-of-the-art frameworks, tooling, and developer practices to build fast, lightweight, and maintainable software.",
    icon: "Layers",
    stat: "Cutting-edge",
  },
  {
    id: "scalable-arch",
    title: "Scalable Architecture",
    description: "Engineered from day one to comfortably handle 10x traffic spikes, high concurrent transactions, and seamless feature expansions.",
    icon: "Maximize2",
    stat: "Zero Bottlenecks",
  },
  {
    id: "user-centered",
    title: "User-Centered Design",
    description: "Interfaces engineered with psychological ergonomics and empirical usability tests to maximize customer retention and conversion.",
    icon: "Smile",
    stat: "High Engagement",
  },
  {
    id: "reliable-delivery",
    title: "Reliable Delivery",
    description: "Transparent bi-weekly sprint deliverables, dedicated project managers, and deterministic timelines you can confidently bet on.",
    icon: "ShieldCheck",
    stat: "On-Time Track Record",
  },
  {
    id: "performance-focused",
    title: "Performance Focused",
    description: "Sub-second load times, optimal lighthouse audits, zero bloated assets, and smooth 60fps animations across all viewports.",
    icon: "Zap",
    stat: "99+ Lighthouse Score",
  },
  {
    id: "long-term-partner",
    title: "Long-Term Partnership",
    description: "We don't disappear after launch. We offer continuous SLA monitoring, proactive updates, technical advisory, and ongoing scaling.",
    icon: "HeartHandshake",
    stat: "Dedicated Support",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discover",
    title: "Discovery & Blueprinting",
    description: "We analyze your business objectives, target audience, competitive landscape, and technical constraints to formulate an actionable product blueprint.",
    deliverables: ["Product Specification", "Technical Architecture", "Milestone Roadmap"],
  },
  {
    step: "02",
    name: "Plan",
    title: "Strategic Architecture",
    description: "We design system architecture, database models, API contracts, security protocols, and sprint cadences to ensure frictionless engineering.",
    deliverables: ["Tech Stack Selection", "Database Schema", "Sprint Backlog"],
  },
  {
    step: "03",
    name: "Design",
    title: "UI/UX & Prototyping",
    description: "We create interactive Figma prototypes, design tokens, responsive typography hierarchies, and complete visual systems before writing a single line of code.",
    deliverables: ["Design System", "Interactive Prototype", "Design Handoff Assets"],
  },
  {
    step: "04",
    name: "Build",
    title: "Agile Development",
    description: "Our senior developers craft clean, well-tested, modular code with continuous integration, frequent preview environments, and rapid feedback loops.",
    deliverables: ["Production-Ready Code", "Automated Tests", "Live Staging Previews"],
  },
  {
    step: "05",
    name: "Launch",
    title: "Deployment & Scale",
    description: "Rigorous QA testing, security audit, speed optimization, and deployment to high-availability infrastructure with monitoring and training.",
    deliverables: ["Live Production Deploy", "Documentation", "Post-Launch Monitoring"],
  },
];

export const TECHNOLOGIES_DATA = [
  {
    category: "Frontend & Interfaces",
    items: [
      { name: "React", level: "Core", desc: "Interactive UI engine" },
      { name: "Next.js", level: "Core", desc: "Production React framework" },
      { name: "JavaScript (ESNext)", level: "Core", desc: "Modern dynamic scripting" },
      { name: "TypeScript", level: "Core", desc: "Type-safe scalability" },
      { name: "Tailwind / Modern CSS", level: "Design", desc: "Fluid, responsive styling" },
      { name: "UI/UX Design", level: "Design", desc: "Human-centric workflows" },
    ],
  },
  {
    category: "Backend, APIs & Databases",
    items: [
      { name: "Node.js", level: "Server", desc: "Asynchronous runtime" },
      { name: "Python", level: "Server", desc: "Backend & data processing" },
      { name: "REST & GraphQL APIs", level: "Integration", desc: "Standardized communication" },
      { name: "MySQL", level: "Database", desc: "Relational persistence" },
      { name: "PostgreSQL", level: "Database", desc: "Advanced ACID store" },
      { name: "Redis", level: "Cache", desc: "Ultra-fast in-memory state" },
    ],
  },
  {
    category: "AI, Cloud & Infrastructure",
    items: [
      { name: "AI & LLM Systems", level: "Intelligent", desc: "OpenAI, Anthropic & local models" },
      { name: "Cloud Architecture", level: "Infra", desc: "AWS, Google Cloud & Vercel" },
      { name: "Docker & Containers", level: "DevOps", desc: "Isolated environment parity" },
      { name: "CI/CD Pipelines", level: "DevOps", desc: "Automated zero-downtime shipping" },
      { name: "Edge Caching & CDNs", level: "Speed", desc: "Sub-100ms global delivery" },
      { name: "Security & Encryption", level: "Defense", desc: "OWASP compliance & SSL/TLS" },
    ],
  },
];
