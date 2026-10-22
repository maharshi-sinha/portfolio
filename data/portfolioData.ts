export interface Project {
  id: string;
  title: string;
  category: 'mobile' | 'fullstack' | 'tool';
  categoryLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  featured: boolean;
  pageNumber: string;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl: string;
  role: string;
  employmentType: string;
  period: string;
  location: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
  badge?: string;
}

export interface Article {
  id: string;
  title: string;
  platform: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  tags: string[];
  url: string;
}

export interface TechCategory {
  title: string;
  subtitle: string;
  items: {
    name: string;
    level: string; // e.g. "Core Expertise", "Proficient", "Familiar"
    type: string;
    iconName: string;
  }[];
}

export const portfolioData = {
  profile: {
    name: "Maharshi Sinha",
    title: "Software Development Engineer",
    shortBio: "Specializing in high-performance cross-platform mobile apps with Flutter & React Native (Bloc, Riverpod), clean web architectures with Next.js, desktop software with Electron, and cloud & server migrations with AWS (S3, Lightsail, EC2, RDS), Docker, and Supabase.",
    extendedBio: "I treat software engineering like precision craftsmanship. Focused on clean abstractions, robust state architectures (Bloc, Riverpod), cross-region cloud and server migrations yielding up to 90% cost savings, automated CI/CD pipelines with GitHub Actions & Jenkins, and edge deployments with Vercel and Docker.",
    location: "Hyderabad, Telangana, India",
    timezone: "IST (UTC+5:30)",
    status: {
      available: true,
      text: "Available for SDE Roles & High-Impact Contracts",
      stamped: "STATUS: AVAILABLE FOR WORK",
    },
    stats: [
      { label: "Cloud Cost Saved", value: "90%" },
      { label: "Realtime Latency", value: "<100ms" },
      { label: "UI Code Reduction", value: "20-30%" },
      { label: "Engineering Roles", value: "6" },
    ],
    socials: {
      github: "https://github.com/maharshi-sinha",
      linkedin: "https://www.linkedin.com/in/maharshi-sinha-78b1001b7/",
      twitter: "https://x.com/sinha_maharshi",
      instagram: "https://www.instagram.com/maharshi.sinha/",
      hashnode: "https://maharshisinha.hashnode.dev/",
      email: "maharshisinha01@gmail.com",
    },
    resumeUrl: "/Maharshi_Sinha_Resume.pdf",
  },

  experiences: [
    {
      id: "flashoot",
      company: "Flashoot",
      companyUrl: "https://flashoot.com",
      role: "SDE (Flutter & Full Stack)",
      employmentType: "Full-time",
      period: "Jul 2026 — Present · 4 mos",
      location: "Hyderabad, Telangana, India · On-site",
      description: "Directly handling numerous production mobile applications, end-to-end fullstack engineering (FE & BE), custom internal enterprise CRM tooling, and leading cross-region cloud and server migrations slashing infrastructure costs by up to 90%.",
      bulletPoints: [
        "Executed end-to-end Cloud & Server Migration: Migrated entire server and database infrastructure from North America (NAM) to localized India servers across AWS Lightsail, EC2, RDS, and S3 — slashing monthly cloud costs by up to 90% and cutting latency by 65% with zero-downtime cutover.",
        "Architected an in-house Slack alternative from scratch: engineered the mobile client using React Native, real-time WebSocket backend microservices on AWS Lightsail, media storage on AWS S3, and relational persistence on AWS RDS, achieving sub-100ms latency and eliminating 100% of external SaaS licensing expenses.",
        "Built custom fullstack internal tools from scratch: engineered an enterprise CRM suite handling sales pipelines, user operations, and client lifecycle management spanning frontend and backend microservices.",
        "Overseeing and scaling numerous (4+) production mobile applications, ensuring 60fps responsive UI, clean state management (Flutter/Bloc/Riverpod), and 99.9% uptime."
      ],
      skills: ["Cloud & Server Migration", "AWS S3", "AWS Lightsail", "AWS EC2", "AWS RDS", "Docker", "Flutter", "React Native", "Fullstack CRM", "90% Cost Cut", "WebSockets", "Node.js"],
      badge: "Current Role",
    },
    {
      id: "prepairo",
      company: "PrepAiro",
      companyUrl: "https://prepairo.ai/",
      role: "Application Developer (Flutter)",
      employmentType: "On-site",
      period: "May 2026 — Jul 2026 · 3 mos",
      location: "Bengaluru, Karnataka, India · On-site",
      description: "Architected high-performance mobile application workflows and responsive UI components using Flutter for PrepAiro's AI-driven ed-tech & exam-prep platform.",
      bulletPoints: [
        "Engineered core application workflows with Flutter for PrepAiro's AI test-prep ecosystem, maintaining 60fps frame rendering and fluid navigation transitions.",
        "Collaborated on-site in Bengaluru with product teams to accelerate multi-platform feature delivery cycles across iOS and Android.",
        "Optimized local data persistence, offline exam-prep state, and state synchronization across complex interactive screen flows."
      ],
      skills: ["Flutter", "Dart", "Mobile Application Development", "AI Ed-Tech", "State Management", "Cross-Platform UI"],
    },
    {
      id: "koncepts",
      company: "Koncepts",
      companyUrl: "https://koncepts.school",
      role: "Application Developer (Flutter & Electron)",
      employmentType: "On-site",
      period: "May 2026 — Jul 2026 · 3 mos",
      location: "Bengaluru, Karnataka, India · On-site",
      description: "Drove multi-platform development across desktop, web, and mobile: built interactive AI Canvas capabilities, delivered comprehensive web & mobile app UI enhancements, and engineered AI examination software using Electron for IB students.",
      bulletPoints: [
        "Procured and engineered dedicated AI examination software using Electron tailored for International Baccalaureate (IB) students, ensuring secure assessment execution and robust offline capabilities.",
        "Architected interactive AI Canvas modules, enabling intuitive visual exploration and real-time student interactions.",
        "Executed extensive web and mobile app UI enhancements across Flutter and modern web frontends, elevating design fidelity, responsiveness, and usability.",
        "Built reusable Flutter UI component libraries and integrated secure RESTful APIs adhering to clean architecture standards."
      ],
      skills: ["Electron", "AI Canvas", "Flutter", "Dart", "Web UI Enhancement", "Mobile App UI", "IB Exam Software", "REST APIs"],
    },
    {
      id: "cohesyn",
      company: "Cohesyn",
      companyUrl: "https://cohesyn.com",
      role: "Mobile App Developer",
      employmentType: "Full-time",
      period: "Mar 2025 — Jun 2026 · 1 yr 4 mos",
      location: "Hybrid",
      description: "Engineered AI-powered medical communication mobile platform streamlining multilingual patient-doctor interactions across language barriers.",
      bulletPoints: [
        "Developed 10+ reusable Flutter components and multiple application workflows for an AI-powered medical communication platform, streamlining patient–doctor communication across language barriers.",
        "Collaborated with 3+ cross-functional stakeholders across ML and backend teams to integrate speech recognition and multilingual language-conversion pipelines into the mobile application.",
        "Integrated 5+ REST API endpoints and AWS-backed services, handling request/response processing, asynchronous operations, and error handling across AI-powered workflows.",
        "Implemented Flutter Method Channels and native iOS integrations using Xcode, connecting Dart workflows with native platform functionality and improving integration efficiency.",
        "Optimized reusable widgets and UI architecture, targeting a 20–30% reduction in duplicated UI code and faster implementation of recurring interface patterns.",
        "Improved API integration reliability through structured response parsing, loading states, and exception handling, targeting a 15–20% reduction in integration-related failures.",
        "Supported end-to-end feature delivery by coordinating mobile implementation, ML integration, and backend API connectivity across development and testing cycles."
      ],
      skills: ["Flutter", "Dart", "Method Channels", "iOS / Xcode", "AWS Services", "Speech ML Integration", "Medical AI", "REST APIs"],
      badge: "1 yr 4 mos",
    },
    {
      id: "jha-sons",
      company: "JHA SONS & ARRAY LLP",
      companyUrl: "https://jhasons.com",
      role: "Flutter Developer Intern",
      employmentType: "Internship",
      period: "Mar 2024 — May 2024 · 3 mos",
      location: "Raipur, Chhattisgarh, India · Remote",
      description: "Developed cross-platform mobile application utilizing Flutter, MongoDB, and Firebase real-time infrastructure.",
      bulletPoints: [
        "Developing a dynamic mobile application using Flutter as a developer intern, showcasing proficiency in creating engaging cross-platform experiences.",
        "Utilizing MongoDB for robust data storage and management within the application, optimizing data retrieval operations for enhanced performance.",
        "Integrating Firebase services, including Firestore and Realtime Databases, to ensure seamless data synchronization and reliable user experiences.",
        "Collaborating with cross-functional teams to design and implement API integrations, demonstrating adaptability and familiarity with various backend systems.",
        "Using Flutter GetX packages to manage the app's state effectively, ensuring it runs smoothly and responds well."
      ],
      skills: ["Flutter", "MongoDB", "Cloud Firestore", "Firebase Realtime DB", "GetX", "API Integration"],
    },
    {
      id: "noqs-digital",
      company: "NoQs Digital",
      companyUrl: "https://noqsdigital.com",
      role: "Software Development Engineer",
      employmentType: "Internship",
      period: "May 2023 — Oct 2023 · 6 mos",
      location: "Ahmedabad, Gujarat, India · Remote",
      description: "Collaborated on software architecture, algorithm design, clean code implementation, and API integrations.",
      bulletPoints: [
        "Worked with developers to design algorithms and flowcharts for core architectural logic.",
        "Produced clean, efficient code based on specifications, adhering to modular programming standards.",
        "Developed and integrated software components and third-party programs with RESTful APIs.",
        "Verified, tested, and deployed programs and systems across staging environments.",
        "Troubleshooted, debugged, and upgraded existing software while gathering and evaluating user feedback."
      ],
      skills: ["Software Engineering", "Algorithms", "Clean Code", "API Integration", "Debugging & Testing", "System Deployment"],
    },
  ] as Experience[],

  projects: [
    {
      id: "flashoot-slack-alternative",
      title: "In-House Real-Time Slack Alternative",
      category: "mobile",
      categoryLabel: "Mobile & Real-Time Systems",
      tagline: "Proprietary team communication platform built from scratch with React Native, AWS Lightsail, and RDS.",
      description: "Architected and built an end-to-end, zero-dependency team communication suite from scratch at Flashoot. Features channels, direct messaging, real-time presence, and persistent message archives, replacing third-party enterprise tools.",
      highlights: [
        "Built custom cross-platform mobile client from scratch using React Native with sub-100ms real-time message delivery.",
        "Engineered real-time WebSocket backend microservices on AWS Lightsail backed by AWS RDS for chat history and AWS S3 for media attachments.",
        "Eliminated recurring SaaS licensing fees ($10+/user/month) with a 100% in-house, zero-external-SDK architecture.",
        "Scaled across entire organization with 99.9% message reliability and background push delivery."
      ],
      techStack: ["React Native", "AWS S3", "AWS Lightsail", "AWS RDS", "WebSockets", "Node.js", "TypeScript"],
      featured: true,
      pageNumber: "p. 08",
    },
    {
      id: "flashoot-crm-migration",
      title: "Cross-Region Cloud & Server Infrastructure Migration",
      category: "fullstack",
      categoryLabel: "Cloud Architecture • Server Migration",
      tagline: "Cross-region server migration (NAM to India) & fullstack CRM suite achieving 90% cloud cost reduction.",
      description: "Spearheaded the complete cloud and server infrastructure migration for Flashoot from North America (NAM) to localized India servers across AWS Lightsail, EC2, S3, and RDS. Engineered a zero-downtime database replication and cutover strategy alongside an internal fullstack CRM suite, cutting monthly infrastructure costs by up to 90% and slashing regional network latency by 65%.",
      highlights: [
        "Spearheaded complete server infrastructure migration from North America (NAM) to localized India servers on AWS Lightsail & EC2.",
        "Slashed recurring cloud infrastructure expenditure by up to 90% while achieving a 65% reduction in API response latency.",
        "Orchestrated relational database migration to AWS RDS with continuous replication and zero-downtime cutover.",
        "Integrated AWS S3 object storage for assets and engineered an internal fullstack CRM suite managing enterprise operations across FE & BE."
      ],
      techStack: ["Cloud & Server Migration", "AWS Lightsail", "AWS EC2", "AWS RDS", "AWS S3", "Docker", "Node.js", "Flutter"],
      featured: true,
      pageNumber: "p. 10",
    },
    {
      id: "carbon-calculator",
      title: "Carbon Footprint Calculator",
      category: "mobile",
      categoryLabel: "Mobile App • Eco-Tech",
      tagline: "Personalized environmental impact tracking mobile application with actionable reduction insights.",
      description: "A comprehensive Flutter application designed to calculate, visualize, and gamify personal carbon footprint reduction. Calculates emissions across transit, diet, energy consumption, and lifestyle.",
      highlights: [
        "Interactive emissions estimation algorithms based on verified environmental benchmarks.",
        "Firebase Firestore integration for tracking progress over time with dynamic data charting.",
        "Modular Postman-tested REST API pipelines for location-aware environmental metrics.",
        "Clean, intuitive UX designed to motivate behavioral change with goal milestones."
      ],
      techStack: ["Flutter", "Dart", "Firebase", "Postman", "Data Visualization"],
      githubUrl: "https://github.com/maharshi-sinha/Carbon-Foot-Print-Calculator",
      featured: true,
      pageNumber: "p. 14",
    },
    {
      id: "task-manager",
      title: "TaskFlow Architecture",
      category: "mobile",
      categoryLabel: "Mobile App • Productivity",
      tagline: "Offline-first, reactive productivity suite designed with clean architecture principles.",
      description: "A focused task management application highlighting efficient state propagation, local persistent caching, and seamless cloud backup synchronization.",
      highlights: [
        "Real-time reactive state synchronization powered by Firebase Cloud Firestore.",
        "Offline-first architecture with automatic sync reconciliation when network reconnects.",
        "Custom gesture-based interaction model for quick task triage, categorization, and scheduling.",
        "100% test coverage for core business logic and state reducers."
      ],
      techStack: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Provider Pattern"],
      githubUrl: "https://github.com/maharshi-sinha/task_manager",
      featured: true,
      pageNumber: "p. 18",
    },
    {
      id: "notebook-portfolio",
      title: "Notebook Portfolio Engine",
      category: "fullstack",
      categoryLabel: "Web Platform • Creative Engineering",
      tagline: "Subtle monochrome engineering portfolio styled as an interactive physical journal.",
      description: "A bespoke Next.js 14 web application blending an editorial paper notebook aesthetic with modern reactive capabilities — featuring an interactive visitor doodle pad, live IST timekeeping, and tactile page-turning mechanics.",
      highlights: [
        "Built on Next.js App Router with TypeScript and Tailwind CSS utility styling.",
        "Automated CI/CD validation pipeline with GitHub Actions and edge deployment on Vercel.",
        "Dual monochrome modes: Ivory Paper (Light) and Field Notes Noir (Dark).",
        "Interactive HTML5 canvas visitor scratchpad with sketch export and clipboard integration."
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub Actions", "Canvas API"],
      githubUrl: "https://github.com/maharshi-sinha/portfolio",
      featured: true,
      pageNumber: "p. 22",
    },
    {
      id: "api-toolkit",
      title: "API Microservices Sandbox",
      category: "tool",
      categoryLabel: "Backend & Systems",
      tagline: "Developer utilities and REST microservices for testing rapid integrations.",
      description: "A collection of reusable Node.js and Express microservice endpoints built for rapid prototyping, authentication scaffolding, and webhook testing.",
      highlights: [
        "Lightweight Express.js server boilerplate with rate-limiting and structured logging.",
        "JWT-based authentication flow with token refresh rotations.",
        "Mock data generation endpoints designed for frontend mobile testing."
      ],
      techStack: ["Node.js", "Express", "TypeScript", "REST APIs", "Postman"],
      githubUrl: "https://github.com/maharshi-sinha",
      featured: false,
      pageNumber: "p. 26",
    },
  ] as Project[],

  techCategories: [
    {
      title: "Mobile Core",
      subtitle: "Cross-platform mobile architecture & reactive state",
      items: [
        { name: "Flutter", level: "Primary Specialty", type: "Framework", iconName: "Smartphone" },
        { name: "React Native", level: "Cross-Platform", type: "Framework", iconName: "Smartphone" },
        { name: "Bloc & Riverpod", level: "State Architecture", type: "Pattern", iconName: "Layers" },
        { name: "Dart & TypeScript", level: "Core Languages", type: "Language", iconName: "Code2" },
      ],
    },
    {
      title: "Web & Desktop",
      subtitle: "Modern reactive web & cross-platform desktop architectures",
      items: [
        { name: "Next.js (App Router)", level: "Production", type: "Framework", iconName: "Globe" },
        { name: "React & Electron", level: "Web & IB Desktop Apps", type: "Ecosystem", iconName: "Code" },
        { name: "TypeScript", level: "Strict Typing", type: "Language", iconName: "FileCode2" },
        { name: "Tailwind CSS", level: "Design Systems", type: "Styling", iconName: "Palette" },
      ],
    },
    {
      title: "Cloud & DevOps",
      subtitle: "Cloud infrastructure, server migration & edge hosting",
      items: [
        { name: "Cloud & Server Migration", level: "NAM → India (90% Cost Cut)", type: "Infrastructure", iconName: "Cloud" },
        { name: "AWS (S3, Lightsail, EC2, RDS)", level: "Compute, Storage & DB", type: "Infrastructure", iconName: "Cloud" },
        { name: "Docker, Vercel & Render", level: "Containers & Edge Deploy", type: "DevOps", iconName: "Box" },
        { name: "Supabase & Firebase", level: "Databases & BaaS", type: "Database", iconName: "Database" },
      ],
    },
    {
      title: "Backend & CI/CD",
      subtitle: "Server APIs, automated pipelines & version control",
      items: [
        { name: "Node.js & Express", level: "REST Services", type: "Runtime", iconName: "Server" },
        { name: "GitHub Actions & Jenkins", level: "CI/CD Automation", type: "DevOps", iconName: "Workflow" },
        { name: "Git & GitHub", level: "Version Control", type: "VCS", iconName: "GitBranch" },
        { name: "Java & Postman", level: "OOP & API Testing", type: "Tooling", iconName: "Binary" },
      ],
    },
  ] as TechCategory[],

  articles: [
    {
      id: "getting-started-flutter",
      title: "Getting Started with Flutter: Your Gateway to Cross-Platform Apps 💙",
      platform: "Hashnode",
      readTime: "7 min read",
      publishedDate: "Technical Article",
      summary: "A practical deep dive into why Flutter has become the leading framework for building high-performance cross-platform applications from a single codebase.",
      tags: ["Flutter", "Mobile Dev", "Dart", "Beginner Guide"],
      url: "https://maharshisinha.hashnode.dev/getting-started-with-flutter-your-gateway-to-cross-platform-apps",
    },
    {
      id: "what-is-an-api",
      title: "What is an API for Beginners: Demystifying Software Communication",
      platform: "Hashnode",
      readTime: "4 min read",
      publishedDate: "Technical Article",
      summary: "Breaking down Application Programming Interfaces with clear real-world metaphors, HTTP request lifecycles, and practical request/response examples.",
      tags: ["APIs", "Web Architecture", "HTTP", "Software Engineering"],
      url: "https://maharshisinha.hashnode.dev/what-is-an-api-for-beginners",
    },
  ] as Article[],

  notebookMarginalia: [
    { page: "01", note: "← Built with clean Next.js & typed TypeScript" },
    { page: "02", note: "★ 3+ roles in fast-growing startups" },
    { page: "03", note: "⚡ 60fps mobile architecture focus" },
    { page: "04", note: "✎ Zero external UI libraries, crafted CSS" },
    { page: "05", note: "☕ Grab a coffee and read a post" },
    { page: "06", note: "✉ Inquiries answered within 24h" },
  ],
};
