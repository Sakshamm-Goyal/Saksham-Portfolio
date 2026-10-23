// /tech - "The Commit Timeline" content

export const TECH_ACCENT = {
  hex: "#60a5fa",
  dim: "rgba(96, 165, 250, 0.35)",
} as const;

export const HERO = {
  command: "$ git log --author=saksham --oneline",
  name: "SAKSHAM GOYAL",
  role: "AI Systems & Full-Stack Engineer",
  description:
    "I turn high-ambiguity ideas into reliable AI products - from agent workflows and data pipelines to the interfaces and infrastructure people depend on.",
  stats: [
    { value: "35,000+", label: "users in 2 days" },
    { value: "5 wks", label: "idea to MVP" },
    { value: "60%", label: "faster releases" },
    { value: "4k+", label: "2026 contributions" },
  ],
  node: { hash: "5a6b7c8", message: "initialise the system" },
} as const;

export const ABOUT = {
  heading: "I build the system behind the moment.",
  bio: "I'm an AI systems and full-stack engineer who owns the path from an unclear product problem to a dependable shipped experience. I work across agents, retrieval, evaluation, web data, APIs, product UI, and cloud delivery.",
  passions: [
    "Agent workflows that stay grounded, observable, and useful",
    "Product engineering across TypeScript, Python, React, and cloud systems",
    "Fast 0→1 delivery followed by measured reliability and iteration",
  ],
  highlights: [
    { key: "location", value: "India" },
    { key: "education", value: "RGIPT · IT '26" },
    { key: "focus", value: "AI Systems" },
    { key: "public code", value: "96 repos" },
  ],
  portrait: "/myimages/saksham-system-portrait.png",
  node: { hash: "a17e1a9", message: "feat: own the full path" },
} as const;

export interface Commit {
  hash: string;
  message: string;
  period: string;
  role: string;
  company: string;
  headline: string;
  subtext: string;
  metadata: string[];
  bullets: string[];
  isCurrent?: boolean;
  image?: string;
  url?: string;
}

export const EXPERIENCE: Commit[] = [
  {
    hash: "e1a2a01",
    message: "feat(elara): ship personalised intelligence",
    period: "Dec 2025 - present",
    role: "Backend Engineer",
    company: "Elara",
    headline: "AI that earns the next decision.",
    subtext: "Agents, extraction, personalisation, and the infrastructure behind the experience.",
    metadata: ["Agent Workflows", "Web Data", "Personalisation"],
    bullets: [
      "Owned backend and AI workflows for a high-ambiguity personal styling product",
      "Built brand-specific extractors when generic scraping tools missed requirements",
      "Delivered the MVP in 5 weeks; onboarded 35,000+ users in 2 days",
    ],
    image: "/projects_assets/elara.png",
    isCurrent: true,
  },
  {
    hash: "b1a2b03",
    message: "refactor(hireanything): shorten the release loop",
    period: "Sep 2024 - Dec 2025",
    role: "Team Lead, Full-Stack Developer",
    company: "HireAnything",
    headline: "Made shipping 60% faster.",
    subtext: "Clean code, automated tests, CI/CD, and production ownership on AWS.",
    metadata: ["Team Leadership", "AWS", "CI/CD"],
    bullets: [
      "Introduced engineering standards, tests, and team workflows",
      "Architected and maintained production MERN services on AWS",
      "Built repeatable Docker and Kubernetes-style release pipelines",
    ],
    image: "/projects_assets/hireanything.png",
    url: "https://hireanything.com",
  },
  {
    hash: "a55a5a2",
    message: "perf(asssr): cut first response time",
    period: "Jan 2025 - May 2025",
    role: "Full-Stack Developer Intern",
    company: "ASSSR · NITI Aayog",
    headline: "Cut first response by 30%.",
    subtext: "Product UI, REST APIs, SSR services, and reliable delivery automation.",
    metadata: ["Next.js", "Node.js", "AWS"],
    bullets: [
      "Shipped product features in React, Next.js, and TypeScript",
      "Implemented Node.js REST and SSR services to improve initial response time",
      "Set up GitHub Actions and supported repeatable AWS deployments",
    ],
    image: "/projects_assets/asssr.png",
    url: "https://www.niti.gov.in",
  },
  {
    hash: "12d2f24",
    message: "perf(i2v): modernise the system",
    period: "Jun 2024 - Jul 2024",
    role: "Software Development Engineer Intern",
    company: "i2V Systems",
    headline: "Tuned the system, end to end.",
    subtext: "Architecture, data models, interfaces, and runtime performance across stacks.",
    metadata: ["C# · WPF", "Java", "Data Modelling"],
    bullets: [
      "Improved architecture and database schemas for a 30% performance gain",
      "Modernised responsive UI components, increasing engagement by 20%",
      "Optimised production C#, WPF, and Java code by 15%",
    ],
    image: "/projects_assets/i2v.png",
    url: "https://www.i2vsys.com",
  },
];

export interface Project {
  hash: string;
  name: string;
  tech: string[];
  description: string;
  proof?: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    hash: "a22f10e",
    name: "SuperOps",
    tech: ["Python", "FastAPI", "PostgreSQL", "Agent Systems"],
    description:
      "An evidence-first workbench for investigating cloud and AI waste, trialling bounded changes, approving an exact plan, executing once, and verifying or safely recovering the result.",
    proof: "117 local checks pass · approval-bound execution · fail-closed sponsor gates",
    image: "/projects_assets/superops-system-cover.png",
    githubUrl: "https://github.com/Sakshamm-Goyal/SuperOps",
  },
  {
    hash: "e19ab2c",
    name: "AI Engineering Planner",
    tech: ["Python", "FastAPI", "TypeScript", "Azure AI"],
    description:
      "Turns native, scanned, or mixed PDF PRDs into source-linked requirements, dependency-checked plans, and copy-ready prompts—with a human review gate before planning.",
    proof: "PDF provenance · deterministic validation · browser-tested review flow",
    image: "/projects_assets/ai-engineering-planner.png",
    githubUrl: "https://github.com/Sakshamm-Goyal/AI-Engineering-Planner",
  },
  {
    hash: "d0d6e31",
    name: "SAP O2C Graph Explorer",
    tech: ["Python", "FastAPI", "React", "NL→SQL"],
    description:
      "A guarded natural-language interface over SAP order-to-cash data, pairing generated SQL with a navigable graph and result-linked entity highlighting.",
    proof: "713 nodes · 825 edges · 19 source tables · 20 API tests",
    image: "/projects_assets/sap-o2c-explorer.png",
    githubUrl: "https://github.com/Sakshamm-Goyal/Dodge-AI-FDE",
  },
  {
    hash: "c11f5a1",
    name: "ClipShare",
    tech: ["Kotlin", "Swift", "Go", "XChaCha20-Poly1305"],
    description:
      "Privacy-first clipboard sync across Android and macOS with end-to-end encryption, QR pairing, offline delivery, and a zero-knowledge WebSocket relay.",
    proof: "Android ↔ macOS · XChaCha20-Poly1305 · Go WebSocket relay",
    image: "/projects_assets/clipshare.png",
    githubUrl: "https://github.com/Sakshamm-Goyal/Clipshare",
  },
  {
    hash: "a1c0de7",
    name: "AI Code Analyzer",
    tech: ["TypeScript", "Next.js", "GitHub API", "AI Analysis"],
    description:
      "Automated repository reviews with GitHub OAuth and AI-assisted analysis. Built to sync 100+ repositories while keeping typical API responses under 300ms.",
    proof: "100+ repositories · typical responses under 300ms",
    image: "/projects_assets/ai-code-analyzer.png",
    liveUrl: "https://ai-code-analyzer-lyart.vercel.app",
    githubUrl: "https://github.com/Sakshamm-Goyal/AI-Code-Analyzer",
  },
  {
    hash: "11f10a2",
    name: "LLM Workflow Builder",
    tech: ["TypeScript", "Next.js", "React Flow", "Prisma"],
    description:
      "A visual canvas for composing AI workflows across models, prompts, media processing, and background tasks into expressive, executable pipelines.",
    proof: "Visual DAG authoring · background execution · reusable nodes",
    image: "/projects_assets/llm-workflow-builder.png",
    liveUrl: "https://llm-workflow-builder.onrender.com",
    githubUrl: "https://github.com/Sakshamm-Goyal/llm-workflow-builder",
  },
  {
    hash: "c011ab4",
    name: "Collab Note",
    tech: ["Next.js", "Node.js", "MongoDB", "WebSockets"],
    description:
      "Real-time collaborative editing with conflict-minimising sync, MongoDB change streams, and WebSocket flows designed for 50+ concurrent users at sub-100ms latency.",
    proof: "50+ concurrent users · sub-100ms collaboration latency",
    image: "/projects_assets/collab-note.png",
    liveUrl: "https://collab-note-three.vercel.app",
    githubUrl: "https://github.com/Sakshamm-Goyal/Collab-Note",
  },
];

export const STACK = {
  node: { hash: "b4dge05", message: "chore(deps): sharpen the tools" },
  categories: [
    {
      name: "Languages",
      items: ["TypeScript", "Python", "Go", "SQL", "Kotlin", "Swift"],
    },
    {
      name: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Three.js", "Framer Motion"],
    },
    {
      name: "Backend",
      items: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "WebSockets"],
    },
    {
      name: "AI Systems",
      items: ["Agent Workflows", "Retrieval", "Evaluation", "Guardrails", "Provenance", "Web Data"],
    },
    { name: "Infrastructure", items: ["AWS", "Docker", "Kubernetes", "GitHub Actions"] },
    {
      name: "Concepts",
      items: ["System Design", "Performance", "Observability", "Security", "API Design", "CI/CD"],
    },
  ],
} as const;

export const CONTACT = {
  heading: "The next commit is yours.",
  subtext:
    "I am open to high-ownership AI systems, founding engineering, and full-stack product roles where reliability matters as much as speed.",
  email: "sakshamgoyal@gmail.com",
  socials: [
    { name: "GitHub", href: "https://github.com/Sakshamm-Goyal" },
    { name: "LinkedIn", href: "https://linkedin.com/in/sakshammgoyal" },
  ],
  resume: "/Saksham-Goyal-Resume.pdf",
} as const;
