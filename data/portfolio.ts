// Single source of truth for portfolio content.
// Update this file when your resume changes — pages read from here.

/**
 * Public URL of the deployed site — used for metadataBase, canonical URLs,
 * Open Graph, sitemap and robots.
 * TODO(owner): replace with the custom domain once one is set up.
 */
export const siteUrl = "https://portfolio-anup-kumar-bit.netlify.app";

/**
 * Start of professional experience (Kiran Foundation internship, Jan 2025).
 * "Years of experience" everywhere on the site is derived from this date.
 */
export const careerStart = new Date(2025, 0, 1);

/**
 * Years since `start`, rounded DOWN to one decimal so it never overstates
 * (e.g. 22 months → "1.8+"). Evaluated at build time for static pages,
 * so the value refreshes on each deploy.
 */
function yearsSince(start: Date, now: Date = new Date()): string {
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = Math.max(0, Math.floor((months / 12) * 10) / 10);
  return `${Number.isInteger(years) ? years.toFixed(0) : years.toFixed(1)}+`;
}

/** e.g. "1.8+" */
export const yearsOfExperience = yearsSince(careerStart);

export const profile = {
  name: "Anup Kumar",
  role: "Full Stack Developer",
  location: "Delhi, India",
  email: "anoopkumar0145@gmail.com",
  github: "https://github.com/anup-kumar-bit",
  linkedin: "https://www.linkedin.com/in/anup-kumar-linkdin/",
  // Resume PDF served from /public. To update: replace public/Anup-Kumar-Resume.pdf.
  resume: "/Anup-Kumar-Resume.pdf",
  /** File name the browser saves the resume as */
  resumeFileName: "Anup-Kumar-Resume.pdf",
  tagline: "Python (FastAPI) · Next.js · React Native",
  /** Current employer */
  employer: "Insoftlink Software",
  /** Small side initiative Anup runs — keep the wording modest (not "founder") */
  company: { name: "Cinzel Dynamics", url: "https://www.cinzeldynamics.com/" },
  shortBio: `Full stack developer with ${yearsOfExperience} years of experience building production web and mobile apps — from FastAPI backends and JWT auth to responsive Next.js and React Native frontends.`,
  summary: `Full stack developer with ${yearsOfExperience} years of experience building scalable web applications across frontend and backend. Proficient in Next.js, React, Python (FastAPI) and Node.js. Experienced in end-to-end delivery of production systems — from REST API design and JWT-based authentication to responsive, accessible UIs. Currently deepening expertise in Python/FastAPI backends paired with Next.js frontends. On the side, I also run Cinzel Dynamics, a small initiative.`,
};

/** Companies and products shown in the "Worked on" strip under the hero. */
export const workedOn = ["Insoftlink Software", "Kiran Foundation", "School Aura ERP", "ACTPAL", "Essar Dental", "GymFreak"];

export type Experience = {
  company: string;
  role: string;
  stack: string;
  period: string;
  location: string;
  /** Optional company website — the company name links to it */
  link?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Insoftlink Software",
    role: "Full Stack Developer",
    stack: "Python · FastAPI · Next.js · React Native",
    period: "Mar 2025 – Present",
    location: "Delhi, India",
    points: [
      "Designed a modular service-layer architecture for School Aura ERP (LMS, Role Management, Exam Management) with reusable FastAPI service patterns.",
      "Architected async backend workflows for the ACTPAL e-commerce platform — background jobs for order events and MySQL-backed transactional order management.",
      "Built JWT-based role-based access control across web (Next.js) and mobile (React Native) with consistent API auth patterns.",
      "Improved REST API performance by ~30% through MySQL query tuning, indexing and response caching.",
      "Built reusable component and service patterns that cut development time by ~40% across product modules.",
    ],
  },
  {
    company: "Cinzel Dynamics",
    role: "Side initiative",
    stack: "Backend & APIs · Web · Mobile · AI automation",
    // TODO(owner): add the start month/year, e.g. "Jun 2025 – Present".
    period: "Present",
    location: "Remote",
    link: "https://www.cinzeldynamics.com/",
    points: ["A small initiative I run alongside my job, taking on web, mobile and backend projects."],
  },
  {
    company: "Kiran Foundation",
    role: "Frontend Developer (Internship)",
    stack: "Astro · Next.js · GitHub Actions",
    period: "Jan 2025 – Apr 2025",
    location: "Remote, India",
    points: [
      "Built and deployed the official website with Astro, reaching sub-2s load times through static generation and asset optimization.",
      "Implemented SEO structured data and WCAG accessibility, contributing to 3x organic impression growth in the first month.",
    ],
  },
];

export const education = {
  school: "DSEU Ambedkar Institute of Technology",
  degree: "Bachelor of Computer Applications (BCA)",
  detail: "Major: Computer Science · Minor: Mathematics",
  gpa: "9.12 / 10.0",
  period: "2022 – 2025",
  location: "Nirman Vihar, Delhi",
  coursework: [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Systems",
    "Artificial Intelligence",
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL"] },
  {
    group: "Backend",
    items: ["FastAPI", "Node.js", "Express.js", "REST APIs", "JWT Auth", "Background Tasks", "Webhooks"],
  },
  { group: "Frontend & Mobile", items: ["Next.js", "React.js", "React Native", "Redux", "Astro", "Tailwind CSS"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Indexing", "Query Optimization"] },
  { group: "Cloud & DevOps", items: ["Docker", "GitHub Actions", "AWS (EC2, S3, RDS)", "Vercel", "Git"] },
  { group: "AI Dev Tools", items: ["Claude Code", "GitHub Copilot", "Cursor"] },
];

export type ProjectCategory = "Professional" | "Mobile" | "Full Stack" | "Frontend";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  highlights: string[];
  tech: string[];
  /** Path under /public, optional — a styled placeholder is shown otherwise */
  image?: string;
  /** Also ships a mobile app alongside its main category — adds a phone to the cover and lists it under the Mobile filter */
  mobileApp?: boolean;
  live?: string;
  repo?: string;
  featured?: boolean;
};

// TODO(owner): projects without `image` show a monogram placeholder. Add real
// screenshots (e.g. /public/projects/essar.png) for Essar, Skill Development ERP,
// School Aura ERP, ACTPAL, GymFreak, TaskFlow and Notes & Bill Generator if you can share them.
export const projects: Project[] = [
  {
    slug: "school-aura",
    title: "School Aura ERP",
    subtitle: "Insoftlink · School management",
    category: "Professional",
    description:
      "School ERP covering LMS, role management and exam management, built on a clean, modular FastAPI service layer.",
    highlights: [
      "Reusable FastAPI service patterns with clear separation of concerns",
      "JWT-based RBAC shared across web and mobile clients",
    ],
    tech: ["FastAPI", "Python", "Next.js", "React Native", "MySQL"],
    live: "https://erp.schoolaura.com",
    featured: true,
  },
  {
    slug: "actpal",
    title: "ACTPAL",
    subtitle: "Insoftlink · E-commerce platform",
    category: "Professional",
    description:
      "E-commerce platform backend with async workflows for order processing and transactional order management.",
    highlights: [
      "Background job processing for order events",
      "Async FastAPI endpoints with MySQL transactions",
      "~30% faster APIs through query tuning, indexing and caching",
    ],
    tech: ["FastAPI", "MySQL", "Async jobs", "Next.js"],
    live: "https://actpal.com",
    featured: true,
  },
  {
    slug: "cinzel-dynamics",
    title: "Cinzel Dynamics",
    subtitle: "Small side initiative",
    category: "Professional",
    description:
      "Website for Cinzel Dynamics, a small initiative I run on the side for web, mobile and backend work. It lists services, past work and a blog, with a contact form for enquiries.",
    highlights: [
      "Service pages for backend & APIs, web apps, mobile apps, AI automation and SEO",
      "Contact form for project enquiries",
      "Lighthouse scores of 98 / 100 / 100 / 100",
    ],
    tech: ["Next.js"],
    // TODO(owner): add a screenshot (e.g. /public/projects/cinzel.png) and confirm the full tech stack.
    live: "https://www.cinzeldynamics.com/",
  },
  {
    slug: "essar",
    title: "Essar Mobile App",
    subtitle: "Dental clinic app",
    category: "Mobile",
    description:
      "A cross-platform mobile app for a dental clinic that brings courses, appointments and prescriptions into one place for patients and students.",
    highlights: [
      "Patients book and manage clinic appointments from their phone",
      "Clinic sells and delivers dental courses in-app",
      "Digital health prescriptions available to each patient",
    ],
    tech: ["React Native", "JWT Auth", "REST APIs"],
    featured: true,
  },
  {
    slug: "skill-erp",
    title: "Skill Development ERP",
    subtitle: "ERP · Web & mobile app",
    category: "Professional",
    mobileApp: true,
    description:
      "An ERP for running skill development programs — a web dashboard plus a mobile app — built with role-based access and modular services.",
    highlights: [
      "Modular, role-based ERP modules on web and mobile",
      "Service-layer backend with secure JWT authentication",
    ],
    // TODO(owner): add the mobile app's framework (e.g. React Native) if it differs from the web stack.
    tech: ["FastAPI", "Next.js", "MySQL"],
    featured: true,
  },
  {
    slug: "gymfreak",
    title: "GymFreak",
    subtitle: "Full stack e-commerce store",
    category: "Full Stack",
    description:
      "A live fitness e-commerce store with an admin/seller portal, product management and a server-rendered customer storefront.",
    highlights: [
      "Admin & seller portals with product management workflows",
      "SSR storefront with Next.js and async order status updates",
      "Containerized with Docker for consistent environments",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Docker"],
    // TODO(owner): https://gymfreak.store did not resolve during review — confirm the
    // domain is live, or replace/remove this link.
    live: "https://gymfreak.store",
    featured: true,
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    subtitle: "Project management tool",
    category: "Full Stack",
    description:
      "Project management tool with Admin/Member roles, task assignment workflows and reporting.",
    highlights: [
      "FastAPI service layer with dependency-injected role-based auth",
      "Indexed PostgreSQL queries for filtering and reports",
      "GitHub Actions CI/CD for automated testing and deployment",
    ],
    tech: ["FastAPI", "PostgreSQL", "Next.js", "GitHub Actions"],
  },
  {
    slug: "notes-bill",
    title: "Notes & Bill Generator",
    subtitle: "Invoicing sandbox",
    category: "Full Stack",
    description:
      "Invoice generation app used as a sandbox for production reliability patterns.",
    highlights: [
      "FastAPI background tasks and async job queues",
      "MySQL transactional integrity for invoices",
    ],
    tech: ["FastAPI", "MySQL", "Next.js"],
    // TODO(owner): the previous screenshot (/project5.jpg) showed a college faculty
    // dashboard, not this app — add a real screenshot of the bill generator.
    // TODO(owner): https://github.com/anup-kumar-bit/bill returned 404 during review —
    // make the repo public or update the URL.
    repo: "https://github.com/anup-kumar-bit/bill",
  },
  {
    slug: "notes-ai",
    title: "Notes App AI",
    subtitle: "AI-assisted notes",
    category: "Full Stack",
    description: "A notes application with AI-assisted features.",
    highlights: [],
    tech: [],
    image: "/project-notes.png",
    repo: "https://github.com/anup-kumar-bit/Notes-App",
  },
  {
    slug: "chat",
    title: "Chat App",
    subtitle: "Real-time messaging",
    category: "Full Stack",
    description: "A real-time chat application.",
    highlights: [],
    tech: [],
    image: "/project-chat.png",
    // TODO(owner): this points to the GitHub profile root, not a repo — replace with
    // the chat app's repository URL.
    repo: "https://github.com/anup-kumar-bit",
  },
  {
    slug: "cinematographer",
    title: "Cinematographer App",
    subtitle: "Portfolio site",
    category: "Frontend",
    description: "Portfolio website for a cinematographer built with Next.js.",
    highlights: [],
    tech: ["Next.js"],
    image: "/project1.png",
    repo: "https://github.com/anup-kumar-bit/Abhinav-App",
  },
  {
    slug: "blog",
    title: "BlogVerse",
    subtitle: "Static blog",
    category: "Frontend",
    description: "A fast static blog built with Astro.",
    highlights: [],
    tech: ["Astro"],
    image: "/project3.png",
    live: "https://blogverse-anup-kumar-bit.netlify.app/",
  },
  {
    slug: "currency",
    title: "Currency Converter Graph",
    subtitle: "Exchange-rate charts",
    category: "Frontend",
    description: "Currency converter with historical exchange-rate graphs.",
    highlights: [],
    tech: ["React"],
    image: "/project6.png",
    repo: "https://github.com/anup-kumar-bit/currency",
  },
];

/** Headline numbers. Defined after `projects` so the count is derived, not hard-coded. */
export const stats = [
  { value: yearsOfExperience, label: "Years of experience" },
  { value: String(projects.length), label: "Projects built" },
  { value: "~30%", label: "API speed-up via MySQL tuning" },
  { value: "9.12", label: "BCA GPA / 10" },
];
