import { NavLink, ServiceOffering, ProcessStep, WhyUsItem, SocialLink } from "@/types";
import { HiBolt, HiCursorArrowRays, HiShieldCheck, HiUserGroup } from "react-icons/hi2";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "1",
    slug: "web-applications",
    title: "Web Applications",
    tagline: "Powerful tools that live in your browser.",
    shortDesc: "Custom web apps built to automate your workflow, serve your customers, and scale with your business.",
    fullDesc:
      "A web application is software that runs in a browser — no installation needed. We design and build everything from internal dashboards and admin panels to customer-facing platforms and marketplaces. Built with React, Next.js and Node.js for speed, reliability and scale.",
    whatItMeans:
      "Think of it like Google Docs or your online banking app — something your team or customers open in a browser and use every day. We build that for your specific business needs.",
    icon: "IconWebApp",
    features: [
      "Custom dashboard & admin panels",
      "Role-based access control",
      "Real-time data & notifications",
      "API integrations with third-party tools",
      "Mobile-responsive by default",
    ],
    useCases: [
      "Internal business management tools",
      "Customer portals & booking systems",
      "Marketplace platforms",
      "Data analytics dashboards",
    ],
  },
  {
    id: "2",
    slug: "mobile-applications",
    title: "Mobile Applications",
    tagline: "Your business in every pocket.",
    shortDesc: "Native-quality iOS & Android apps that your customers will actually want to use.",
    fullDesc:
      "We build mobile applications using React Native, giving you one codebase that runs natively on both iOS and Android. From consumer apps to B2B tools, we handle design, development, App Store submission and ongoing updates.",
    whatItMeans:
      "An app that people download from the App Store or Google Play. Like Uber or Instagram — but built specifically for your brand and your customers.",
    icon: "IconMobile",
    features: [
      "iOS & Android from a single codebase",
      "Push notifications",
      "Offline functionality",
      "App Store & Play Store submission",
      "In-app payments",
    ],
    useCases: [
      "Customer loyalty & rewards apps",
      "On-demand service apps",
      "Field workforce management",
      "E-commerce mobile apps",
    ],
  },
  {
    id: "3",
    slug: "prototypes-mvps",
    title: "Prototypes & MVPs",
    tagline: "Test your idea before you invest.",
    shortDesc: "Validate your concept fast with a working prototype or Minimum Viable Product ready for real users.",
    fullDesc:
      "Before investing in a full product, smart founders test with real users first. We help you go from idea to a working, clickable prototype or live MVP in weeks — so you can gather feedback, attract investors, and make informed product decisions.",
    whatItMeans:
      "Imagine you have a great business idea but aren't sure if people will actually use it. We build a simple working version so you can show it to customers and find out — without spending a fortune.",
    icon: "IconPrototype",
    features: [
      "Clickable UI prototypes in Figma",
      "Functional MVP in 4–6 weeks",
      "User testing setup",
      "Investor-ready demo builds",
      "Feedback loop & rapid iteration",
    ],
    useCases: [
      "Startup founders validating ideas",
      "Businesses launching new product lines",
      "Teams pitching to investors",
      "Internal tool proofs-of-concept",
    ],
  },
  {
    id: "4",
    slug: "saas-products",
    title: "SaaS Products",
    tagline: "Software your customers pay for monthly.",
    shortDesc: "End-to-end SaaS development — from architecture to subscription billing, analytics and multi-tenancy.",
    fullDesc:
      "Software-as-a-Service is the most scalable business model in tech. We build the full SaaS stack: multi-tenant architecture, subscription billing via Stripe, usage analytics, onboarding flows, and admin dashboards — everything you need to run a software business.",
    whatItMeans:
      "Think of tools like Notion, Slack or Canva — where customers pay a monthly fee to use your software. We build that kind of product for you, complete with payments, user accounts and everything needed to run it as a business.",
    icon: "IconSaas",
    features: [
      "Multi-tenant architecture",
      "Stripe subscription billing",
      "Customer onboarding flows",
      "Usage analytics & metering",
      "White-label options",
    ],
    useCases: [
      "Productising an existing service",
      "Niche B2B software tools",
      "White-label platforms",
      "Internal tools turned into products",
    ],
  },
  {
    id: "5",
    slug: "deployment-hosting",
    title: "Deployment & Hosting",
    tagline: "Ship fast. Stay live. Sleep well.",
    shortDesc: "Cloud infrastructure, CI/CD pipelines and managed hosting so your product is always fast, secure and online.",
    fullDesc:
      "Great software means nothing if it's slow or down. We set up and manage cloud infrastructure on AWS, Vercel or DigitalOcean, configure automated deployment pipelines, SSL certificates, domain setup, performance monitoring and 24/7 uptime alerts.",
    whatItMeans:
      "This is everything that happens 'behind the scenes' to make your website or app accessible online, fast and secure. Like the plumbing and electricity of a building — you don't see it, but everything depends on it working.",
    icon: "IconCloud",
    features: [
      "AWS / Vercel / DigitalOcean setup",
      "Automated CI/CD pipelines",
      "SSL, DNS & domain configuration",
      "Performance monitoring & alerts",
      "Scalable architecture planning",
    ],
    useCases: [
      "Launching a new product to production",
      "Migrating from slow shared hosting",
      "Teams needing automated deployments",
      "High-traffic product scaling",
    ],
  },
  {
    id: "6",
    slug: "maintenance-support",
    title: "Maintenance & Support",
    tagline: "We stick around after launch.",
    shortDesc: "Ongoing updates, bug fixes, security patches and feature additions to keep your product healthy and growing.",
    fullDesc:
      "Software is never truly 'done'. We offer monthly retainer plans covering bug fixes, dependency updates, security patches, performance improvements and new feature development. Think of us as your on-call engineering team.",
    whatItMeans:
      "Just like a car needs regular servicing, your software needs regular care too. We handle all the technical upkeep so your product stays fast, secure and up to date — without you needing to worry about it.",
    icon: "IconMaintain",
    features: [
      "Monthly bug fixes & patches",
      "Security & dependency updates",
      "Performance audits",
      "New feature development",
      "Priority support response",
    ],
    useCases: [
      "Businesses with existing live products",
      "Founders without in-house engineers",
      "Post-launch feature iteration",
      "Legacy system modernisation",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Discover",
    desc: "Understanding your vision, business objectives, and users.",
  },
  {
    number: 2,
    title: "Define",
    desc: "Gathering requirements and creating a clear execution plan.",
  },
  {
    number: 3,
    title: "Design",
    desc: "Crafting intuitive experiences through UI/UX and prototyping.",
  },
  {
    number: 4,
    title: "Develop",
    desc: "Building robust, scalable, and secure digital solutions.",
  },
  {
    number: 5,
    title: "Test",
    desc: "Ensuring quality through rigorous testing and validation.",
  },
  {
    number: 6,
    title: "Launch",
    desc: "Deploying confidently and monitoring performance.",
  },
  {
    number: 7,
    title: "Scale",
    desc: "Supporting growth with maintenance, updates, and new features.",
  },
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    icon: HiBolt,
    title: "Fast Delivery",
    desc: "We ship MVPs in weeks, not months, without compromising quality or scalability.",
  },
  {
    icon: HiCursorArrowRays,
    title: "Precision Design",
    desc: "Every pixel is intentional. We build interfaces that convert and delight users.",
  },
  {
    icon: HiShieldCheck,
    title: "Secure & Scalable",
    desc: "Enterprise-grade architecture from day one, built to handle growth at any scale.",
  },
  {
    icon: HiUserGroup,
    title: "Dedicated Support",
    desc: "Your success is ours. We stay with you beyond launch with ongoing support.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
//   { label: "Twitter / X", href: "#", iconKey: "twitter" },
  { label: "LinkedIn",    href: "https://www.linkedin.com/in/dfly-labs-a165b6411", iconKey: "linkedin" },
  { label: "Instagram",   href: "https://www.instagram.com/dflylabs?igsh=Y2VkY2k0N3l1Zm41", iconKey: "instagram" },
  { label: "Phone",   href: "tel:+919876543210",   iconKey: "phone", },
//   { label: "GitHub",      href: "#", iconKey: "github" },
];