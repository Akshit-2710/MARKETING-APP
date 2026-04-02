/* ============================================
   SITE CONFIGURATION — OWNER EDITABLE ZONE
   This is the ONLY file you need to edit to update
   all content across the entire website.
   Replace placeholder values with your real data.
   ============================================ */

/* ============================================
   LOGO CONFIGURATION
   Replace the src value with your logo file path
   or URL. Recommended size: max-height 60px.
   ============================================ */
export const LOGO_CONFIG = {
  src: "YOUR_LOGO_FILE_PATH_OR_URL_HERE",
  alt: "MARKETING MEDIA Logo",
  height: "60px",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  headlinePart1: "We Don't Do Marketing.",
  rotatingWords: [
    "Authority.",
    "Dominance.",
    "Transformation.",
    "Results.",
    "Prestige.",
    "Urgency.",
    "Identity.",
  ],
  headlinePart2: "We Build Market Leaders.",
  description: "Your competitors are already winning. While you're still thinking about it — they're scaling. We position ambitious brands at the top with strategies that demand attention, convert on impact, and leave your market no choice but to notice you.",
  ctaPrimary: "Claim Your Edge",
  ctaSecondary: "See The Proof",
  trustBadges: [
    "[ADD NUMBER]+ Brands Scaled",
    "[ADD NUMBER]+ Revenue Generated",
    "[ADD NUMBER]+ Markets Dominated",
  ],
};

export const SERVICES = {
  heading: "Our Services",
  subtitle: "We help brands grow with performance-driven digital strategies and stunning creative execution.",
  items: [
    {
      icon: "Target",
      title: "META Ads",
      description: "We craft high-converting ad campaigns across Facebook and Instagram that reach your ideal audience. From creative strategy and audience targeting to A/B testing and scaling — we manage your entire Meta advertising funnel to deliver maximum ROI with minimum ad spend waste.",
    },
    {
      icon: "Search",
      title: "Google Ads",
      description: "We build and optimize Google Search, Display, and YouTube ad campaigns that capture high-intent buyers right when they're searching. Our data-driven approach includes keyword research, bid strategy, landing page optimization, and continuous performance tracking to lower your cost-per-lead.",
    },
    {
      icon: "Monitor",
      title: "Website Designing",
      description: "We design and develop modern, fast-loading websites that convert visitors into customers. Every site is built mobile-first with clean UI/UX, strategic CTAs, and SEO-ready architecture — whether it's a landing page, a full brand website, or an e-commerce store.",
    },
    {
      icon: "TrendingUp",
      title: "SEO",
      description: "We help your brand rank on page one of Google through comprehensive SEO — from technical audits and on-page optimization to content strategy and high-quality link building. Our organic growth system is designed to bring you consistent, free traffic month after month.",
    },
  ],
};

export const RESULTS = {
  heading: "Our Results Speak",
  stats: [
    { number: "[ADD NUMBER]", label: "[ADD STAT LABEL]", suffix: "" },
    { number: "[ADD NUMBER]", label: "[ADD STAT LABEL]", suffix: "" },
    { number: "[ADD NUMBER]", label: "[ADD STAT LABEL]", suffix: "" },
    { number: "[ADD NUMBER]", label: "[ADD STAT LABEL]", suffix: "" },
  ],
};

export const PROCESS = {
  heading: "Our Process",
  steps: [
    { title: "[ADD STEP TITLE]", description: "[ADD STEP DESCRIPTION]" },
    { title: "[ADD STEP TITLE]", description: "[ADD STEP DESCRIPTION]" },
    { title: "[ADD STEP TITLE]", description: "[ADD STEP DESCRIPTION]" },
    { title: "[ADD STEP TITLE]", description: "[ADD STEP DESCRIPTION]" },
  ],
};

export const PORTFOLIO = {
  heading: "Our Work",
  projects: [
    { image: "[ADD IMAGE PATH]", title: "[ADD PROJECT NAME]", category: "[ADD CATEGORY]", result: "[ADD RESULT]" },
    { image: "[ADD IMAGE PATH]", title: "[ADD PROJECT NAME]", category: "[ADD CATEGORY]", result: "[ADD RESULT]" },
    { image: "[ADD IMAGE PATH]", title: "[ADD PROJECT NAME]", category: "[ADD CATEGORY]", result: "[ADD RESULT]" },
    { image: "[ADD IMAGE PATH]", title: "[ADD PROJECT NAME]", category: "[ADD CATEGORY]", result: "[ADD RESULT]" },
    { image: "[ADD IMAGE PATH]", title: "[ADD PROJECT NAME]", category: "[ADD CATEGORY]", result: "[ADD RESULT]" },
    { image: "[ADD IMAGE PATH]", title: "[ADD PROJECT NAME]", category: "[ADD CATEGORY]", result: "[ADD RESULT]" },
  ],
};

export const TESTIMONIALS = {
  heading: "What Our Clients Say",
  items: [
    { text: "[ADD TESTIMONIAL TEXT]", name: "[ADD CLIENT NAME]", designation: "[ADD CLIENT DESIGNATION]", company: "[ADD COMPANY NAME]", avatar: "[ADD AVATAR IMAGE PATH]" },
    { text: "[ADD TESTIMONIAL TEXT]", name: "[ADD CLIENT NAME]", designation: "[ADD CLIENT DESIGNATION]", company: "[ADD COMPANY NAME]", avatar: "[ADD AVATAR IMAGE PATH]" },
    { text: "[ADD TESTIMONIAL TEXT]", name: "[ADD CLIENT NAME]", designation: "[ADD CLIENT DESIGNATION]", company: "[ADD COMPANY NAME]", avatar: "[ADD AVATAR IMAGE PATH]" },
    { text: "[ADD TESTIMONIAL TEXT]", name: "[ADD CLIENT NAME]", designation: "[ADD CLIENT DESIGNATION]", company: "[ADD COMPANY NAME]", avatar: "[ADD AVATAR IMAGE PATH]" },
    { text: "[ADD TESTIMONIAL TEXT]", name: "[ADD CLIENT NAME]", designation: "[ADD CLIENT DESIGNATION]", company: "[ADD COMPANY NAME]", avatar: "[ADD AVATAR IMAGE PATH]" },
  ],
};

export const WHY_CHOOSE_US = {
  heading: "Why MARKETING MEDIA",
  features: [
    { icon: "Shield", title: "[ADD FEATURE TITLE]", description: "[ADD FEATURE DESCRIPTION]" },
    { icon: "Zap", title: "[ADD FEATURE TITLE]", description: "[ADD FEATURE DESCRIPTION]" },
    { icon: "Users", title: "[ADD FEATURE TITLE]", description: "[ADD FEATURE DESCRIPTION]" },
    { icon: "TrendingUp", title: "[ADD FEATURE TITLE]", description: "[ADD FEATURE DESCRIPTION]" },
  ],
};

export const CONTACT = {
  heading: "[ADD CTA HEADING — e.g. Ready to Scale Your Brand?]",
  subtext: "[ADD CTA SUBTEXT]",
  email: "[ADD EMAIL ADDRESS]",
  phone: "[ADD PHONE NUMBER]",
  address: "[ADD OFFICE ADDRESS]",
  socialLinks: {
    facebook: "[ADD FACEBOOK URL]",
    twitter: "[ADD TWITTER URL]",
    instagram: "[ADD INSTAGRAM URL]",
    linkedin: "[ADD LINKEDIN URL]",
  },
  serviceOptions: [
    "[ADD SERVICE OPTION 1]",
    "[ADD SERVICE OPTION 2]",
    "[ADD SERVICE OPTION 3]",
    "[ADD SERVICE OPTION 4]",
    "[ADD SERVICE OPTION 5]",
  ],
};

export const FOOTER = {
  tagline: "[ADD FOOTER TAGLINE — e.g. Empowering brands to reach their full potential]",
  services: [
    "META Ads",
    "Google Ads",
    "Website Designing",
    "SEO",
  ],
};
