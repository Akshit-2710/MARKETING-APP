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
    "76 Leads in 4 Days",
    "₹20,000+ Revenue Generated",
    "26,000+ Local Impressions",
  ],
};

export const FOUNDER_CONTENT = {
  heading: "Founder Lead Content",
  videos: [
    "/videos/founder1.mp4",
    "/videos/founder2.mp4",
    "/videos/founder3.mp4"
  ]
};

export const INFLUENCER_CONTENT = {
  heading: "Influencer Content",
  videos: [
    "/videos/influencer1.mp4"
  ]
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

export const CLIENT_CHATS = {
  heading: "Real Clients. Real Chats. Real Results.",
  subtitle: "These are actual conversations from clients who came to us through our ad campaigns — unfiltered and unedited.",
  images: [
    "/images/WhatsApp%20Image%202026-04-10%20at%201.31.48%20PM.jpeg",
    "/images/WhatsApp%20Image%202026-04-10%20at%201.32.39%20PM.jpeg",
    "/images/WhatsApp%20Image%202026-04-10%20at%201.33.22%20PM.jpeg",
    "/images/WhatsApp%20Image%202026-04-10%20at%201.33.54%20PM.jpeg",
    "/images/WhatsApp%20Image%202026-04-10%20at%201.34.19%20PM.jpeg",
    "/images/WhatsApp%20Image%202026-04-10%20at%201.34.58%20PM.jpeg",
  ],
};

export const RESULTS = {
  heading: "Our Results Speak",
  stats: [
    { number: "76", label: "Furniture Leads in 4 Days", suffix: "" },
    { number: "20,000", label: "Rupees Revenue Generated", suffix: "₹" },
    { number: "254", label: "High Intent Link Clicks", suffix: "+" },
    { number: "26", label: "Thousand Local Impressions", suffix: "k" },
  ],
};

export const PROCESS = {
  heading: "Our Process",
  steps: [
    { title: "Deep Online Analysis", description: "We start by diving into your digital footprint and online competitors. We identify gaps, analyze market trends, and gather data-driven insights to uncover growth opportunities." },
    { title: "Strategic Roadmap", description: "Based on our analysis, we craft a tailored strategy designed for maximum ROI. Every campaign and content piece is mapped out to target your ideal audience." },
    { title: "Flawless Execution", description: "Our expert team deploys campaigns across selected channels, ensuring brand consistency and high-quality creative output that demands attention." },
    { title: "Continuous Optimization", description: "We monitor performance in real-time. By constantly analyzing data, we pivot and scale strategies to guarantee sustainable and explosive growth." },
  ],
};

export const GROWTH_ANALYTICS = {
  heading: "Client Growth Data",
  clients: [
    {
      name: "Lords Furnitures",
      description: "Explosive lead generation with hyper-targeted ad campaigns.",
      data: [
        { label: "New Leads", value: 76, color: "#1A3C8F" },
        { label: "Link Clicks", value: 254, color: "#0D2561" },
        { label: "Conversions", value: 45, color: "#F8C8D4" }
      ]
    },
    {
      name: "Charan Chest Clinic",
      description: "Consistent organic growth and regional authority established via SEO.",
      data: [
        { label: "New Footfall %", value: 150, color: "#1A3C8F" },
        { label: "Search Ranking", value: 85, color: "#0D2561" },
        { label: "Reach Growth", value: 120, color: "#F8C8D4" }
      ]
    }
  ]
};

export const PORTFOLIO = {
  heading: "How We Helped Them Grow",
  projects: [
    { image: "/images/lords_furnitures.png", title: "Lords Furnitures", category: "META Ads", result: "Using highly targeted Meta Lead Generation ads, we ran a hyper-local campaign in Patiala. With just ₹1,000 in ad spend over 4 days, we successfully generated 76 qualified leads at an incredible ₹11.56 CPA." },
    { image: "/images/charan_chest_clinic.png", title: "Charan Chest Clinic", category: "SEO", result: "Through educational Instagram Reels and local SEO, we positioned them as regional healthcare authorities, driving a steady stream of local patient inquiries and a highly engaged community." }
  ],
};

export const TESTIMONIALS = {
  heading: "Client Results & Feedback",
  items: [
    { 
      text: "MARKETING MEDIA completely transformed our lead generation. With just a ₹1,000 ad spend, they delivered 76 highly qualified leads in only 4 days. Their targeting is precise and extremely cost-effective.", 
      name: "Lords Furnitures", 
      designation: "Owner", 
      company: "Lords Furnitures", 
      avatar: "/images/lords_furnitures.png",
      link: "https://www.instagram.com/lordsfurnitures?igsh=MTd1OXoxbzU2bXZ1NA=="
    },
    { 
      text: "We wanted to establish regional authority. Through strategic Reels and local SEO, they increased our patient footfall by 150% and built a trustworthy community around our clinic.", 
      name: "Charan Chest Clinic", 
      designation: "Head Specialist", 
      company: "Charan Chest Clinic", 
      avatar: "/images/charan_chest_clinic.png",
      link: "https://www.instagram.com/charan_chest_clinic"
    },
  ],
};

export const WHY_CHOOSE_US = {
  heading: "Why MARKETING MEDIA",
  features: [
    { icon: "ShieldCheck", title: "Data-Driven Precision", description: "We never guess. Every campaign is backed by rigorous A/B testing, real-time analytics, and relentless optimization to scale what works." },
    { icon: "Zap", title: "Unstoppable Momentum", description: "We equip your brand with the exact omnichannel blueprints used by the top 1% of market leaders, engineering an explosive brand takeover." },
    { icon: "Users", title: "Executive-Level Focus", description: "Your strategy is crafted by actual brand builders, not juniors. We treat your ad spend with the exact same aggression we treat our own capital." },
    { icon: "Crosshair", title: "Scalable Dominance", description: "We don't generate temporary spikes. We build self-sustaining growth ecosystems engineered to capture high-intent buyers every single day." },
  ],
};

export const CONTACT = {
  heading: "One Brief. One Call. One Strategy That Changes Everything.",
  subtext: "Fill in the form below and our team will get back to you with a plan built specifically for your brand.",
  email: "tiyapps29012005@gmail.com",
  phone: "781481018",
  socialLinks: {
    facebook: "[ADD FACEBOOK URL]",
    twitter: "[ADD TWITTER URL]",
    instagram: "https://www.instagram.com/marketingmedia90/",
    linkedin: "[ADD LINKEDIN URL]",
  },
  serviceOptions: [
    "META Ads",
    "Google Ads",
    "Website Design",
    "SEO",
    "Other/Consulting",
  ],
};

export const FOOTER = {
  tagline: "Your unfair advantage in a crowded market.",
  services: [
    "META Ads",
    "Google Ads",
    "Website Designing",
    "SEO",
  ],
};
