export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "Prince Srivastava",
  status: "Currently building at YouMeWho, remote",
  location: "Lucknow, India",
  email: "developerprince7@gmail.com",
  phone: "+91 8826667305",
  phoneHref: "+918826667305",
  github: "https://github.com/pr-1",
  githubLabel: "github.com/pr-1",
  linkedin: "https://linkedin.com/in/pr-1",
  linkedinLabel: "linkedin.com/in/pr-1",
  headline: "Full-stack & mobile engineer, obsessed with things that stay in sync.",
  subhead:
    "I build products, from multiplayer game state and live bidding to streaming dashboards and the Flutter apps that carry them to 150,000+ people on their phones.",
};

export const ABOUT = {
  bio: [
    "I'm a full-stack and mobile engineer with 6+ years building products, from multiplayer game state and live bidding to streaming dashboards and the Flutter apps that carry them to over 150,000 people.",
    "Most recently I've been at YouMeWho building Partymods end-to-end, and before that spent four years as Founding Engineer at Explo GmbH, taking it from zero to 150,000+ registered users.",
    "I care about shipping fast without cutting corners: clean auth, sane state management, and CI/CD that stays out of the way.",
  ],
};

export const STATS = [
  { n: "150K+", l: "registered users served across shipped mobile apps" },
  { n: "6+", l: "years building production frontend, mobile & backend systems" },
  { n: "50%", l: "cut in deployment time after rebuilding CI/CD with Fastlane" },
  { n: "5", l: "countries worked across, fully remote: India, Germany, USA, Netherlands, UAE" },
];

export const EXPERIENCE = [
  {
    period: "Jun 2025 to Present",
    role: "Full Stack Developer",
    org: "YouMeWho Inc.",
    url: "https://partymods.com",
    place: "Remote, USA",
    summary:
      "Building Partymods, a live lucky-draw and marketplace platform meant to carry YouMeWho's existing userbase onto a new product.",
    points: [
      "Built real-time multiplayer game and promotion modules with Next.js, React, TypeScript and Socket.IO, keeping host and guest state in sync across concurrent sessions.",
      "Shipped real-time bidding with optimistic UI updates over Socket.IO for a faster, more responsive experience.",
      "Built a MongoDB change-stream service on Node.js to push live database changes straight to connected clients.",
      "Owns core auth (NextAuth, JWT) and the dashboard onboarding used across the whole product.",
    ],
    tags: ["Next.js", "TypeScript", "Socket.IO", "MongoDB", "NextAuth"],
  },
  {
    period: "Feb 2021 to May 2025",
    role: "Founding Engineer",
    org: "Explo GmbH",
    url: "https://explo-gmbh.de",
    place: "Remote, Kiel, Germany · acquired by HUP GmbH",
    summary:
      "First mobile hire. Built the cross-platform app from the ground up and grew it to over 150,000 registered users.",
    points: [
      "Built cross-platform apps in Flutter, GraphQL and MobX serving 150,000+ registered users, 5,000+ daily active.",
      "Rebuilt CI/CD around Fastlane, cutting deployment time by 50%.",
      "Added lazy-loaded video streaming, cutting initial load time by 40% and backend requests by 30%.",
      "Designed data dashboards in React, TypeScript and Ant Design that cut stakeholder decision time by 40%.",
      "Built modular GraphQL APIs with Django and Graphene, taking 20% of load off the backend team.",
    ],
    tags: ["Flutter", "GraphQL", "MobX", "Django", "Fastlane"],
  },
  {
    period: "Jul 2020 to Feb 2021",
    role: "Frontend Developer",
    org: "Reas Group",
    place: "Remote, Milton Keynes, London",
    summary:
      "Built B2B mobile solutions and the admin tooling that powered full white-label customization for client brands.",
    points: [
      "Built an admin panel in React, TypeScript and Chakra UI, lifting admin task efficiency by 60%.",
      "Made the mobile app fully white-labelable, with dynamic themes and palettes configured from the admin panel, cutting customization requests by 40%.",
      "Wrote Jest unit tests across the admin panel and mobile app to improve reliability.",
    ],
    tags: ["Flutter", "MobX", "Firebase", "Chakra UI"],
  },
  {
    period: "Sep 2019 to Jul 2020",
    role: "Angular Developer",
    org: "standBystand",
    place: "Remote, Netherlands",
    summary:
      "Worked on the Stand Building freelancing portal, shipping new features and reworking existing modules.",
    points: [
      "Built new features for the Stand Building freelancing portal.",
      "Fixed bugs in the existing codebase and updated 2 modules with new designs and workflows.",
    ],
    tags: ["Angular"],
  },
  {
    period: "Feb 2018 to May 2019",
    role: "Software Developer",
    org: "DevsLane",
    place: "Ghaziabad Area, India · Internship",
    summary:
      "First hands-on engineering role, working across Angular and Flutter projects.",
    points: [
      "Worked on Angular and Flutter projects, getting a first grounding in both web and mobile development.",
    ],
    tags: ["Angular", "Flutter"],
  },
];

export const PROJECTS = [
  {
    name: "Artslice",
    tagline: "Fractional art-investment platform",
    desc:
      "Buy and sell shares of artwork through IPOs and a live secondary-market exchange, layered with a social feed: stories, posts, reels, real-time chat and notifications, for a UAE-based client.",
    owned:
      "Owned the core mobile modules end-to-end: order book, portfolio, wallet, trade history and messaging, plus backend APIs for IPO stories, feed and comments, and admin order-management features.",
    stack: ["React Native", "Expo", "Redux Toolkit", "NestJS", "Firestore", "Stripe", "Typesense"],
  },
  {
    name: "FixAir",
    tagline: "AI voice assistant for HVAC diagnostics",
    desc:
      "Lets HVAC technicians dictate on-site diagnostics in natural language and get a branded, CERFA-compliant report back in under a minute.",
    owned:
      "Built the frontend and the ElevenLabs conversational-AI integration, giving each session an isolated knowledge base for context-aware dictation. Built the photo/nameplate scan flow that pulls model, serial number and refrigerant type, cutting report time from ~30 minutes to about 1. Used Claude alongside ElevenLabs for structured, compliant report generation.",
    stack: ["Next.js", "Node.js", "MongoDB", "AWS", "ElevenLabs", "Claude"],
  },
];

export const STACK = [
  { group: "Frontend", items: ["React", "Angular", "Redux", "MobX", "Tailwind", "Ant Design", "Chakra UI"] },
  { group: "Mobile", items: ["Dart", "Flutter", "React Native", "Bloc / Provider"] },
  { group: "Backend", items: ["Node.js", "Django", "GraphQL", "Graphene", "Socket.IO", "MongoDB"] },
  { group: "DevOps / Cloud", items: ["AWS EC2", "Amplify", "Route 53", "S3", "Firebase", "Codemagic", "Fastlane"] },
  { group: "Testing", items: ["Jest", "React Testing Library", "Flutter Test", "TDD"] },
  { group: "AI Tools", items: ["Claude", "ElevenLabs", "Prompt Engineering"] },
];

export const EDUCATION = {
  degree: "Bachelor of Technology, Computer Science",
  school: "Ajay Kumar Garg Engineering College, Ghaziabad",
  detail: "8.2 CGPA · Aug 2016 to Sep 2020",
};
