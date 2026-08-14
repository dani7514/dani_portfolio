export const personalInfo = {
  name: "Daniel Misganaw",
  firstName: "Daniel",
  title: "Full Stack & AI Engineer",
  tagline: "I build scalable backends, AI-powered systems, and production-grade platforms.",
  email: "danielmisganaw192021@gmail.com",
  phone: "+251 975 149 601",
  location: "Addis Ababa, Ethiopia",
  avatar: "/profile.png",
  links: {
    linkedin: "https://www.linkedin.com/in/daniel-misganaw-802b26240/",
    github: "https://github.com/dani7514",
    leetcode: "https://leetcode.com/u/Dani192021/",
    upwork: "https://www.upwork.com/freelancers/~019c52f42a54a861d3",
  },
  resumeUrl: "#",
};

export const heroTags = [
  "NestJS",
  "Next.js",
  "RAG Pipelines",
  "LLM Agents",
  "LangGraph",
];

export const typingWords = [
  "Exciting Stuff",
  "Scalable Backends",
  "AI-Powered Apps",
  "Real-time Systems",
];

export const aboutText = {
  greeting: "Hey there! 👋",
  paragraphs: [
    "I'm Daniel — a software engineer who builds things on the internet with a strong focus on backend architecture, AI systems, and getting the details right.",
    "I enjoy working on systems that aren't static: real-time messaging across microservices, RAG pipelines with LLM agents, and applications with lots of moving parts. I naturally go deeper into problems — optimizing, refining, and chasing that \"this feels right\" moment.",
    "From queue-based messaging with Google Pub/Sub to multi-agent AI workflows with LangGraph, I like pushing systems to their limits and improving them to be faster, cleaner, and more reliable.",
    "If you're building something interesting, challenging, or technically demanding… I'd love to be part of it.",
  ],
};

export const experiences = [
  {
    id: "turing",
    role: "AI Engineer / Machine Learning Engineer",
    company: "Turing",
    location: "Remote",
    image: "/projects/turing.png",
    highlights: [
      "Designed and developed AI-powered applications using Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and agentic AI workflows.",
      "Evaluated AI-agent and code-generation outputs, identified technical failure patterns, and provided structured feedback to improve accuracy and reliability.",
    ],
    tech: ["Python", "FastAPI", "LLMs", "RAG", "AI Agents", "Machine Learning", "REST APIs", "Git"],
    links: {
      live: "https://www.turing.com/",
      details: "#projects",
    },
  },
  {
    id: "aladia",
    role: "Senior Backend Developer",
    company: "Aladia",
    location: "Brescia, Italy · Remote",
    image: "/projects/aladia.png",
    highlights: [
      "Designed and delivered a core platform feature using NestJS, TypeScript, and MongoDB, improving the learning experience for 10,000+ users.",
      "Integrated asynchronous messaging with Google Pub/Sub across 8+ NestJS microservices, reducing system downtime by 20%.",
      "Built automated CI/CD pipelines with GitHub Actions for 100+ releases and led a team of 3 junior developers.",
    ],
    tech: ["NestJS", "TypeScript", "MongoDB", "GCP", "Pub/Sub", "GitHub Actions"],
    links: {
      live: "https://istitutoformativoaladia.it/",
      details: "#projects",
    },
  },
  {
    id: "csbsn",
    role: "Full-Stack Developer",
    company: "CSBSN",
    location: "Remote",
    image: "/projects/csbsn.png",
    highlights: [
      "Built a decentralized funding platform empowering small businesses with community support and transparent fundraising.",
      "Developed the platform using NestJS and Next.js with Ethereum ecosystem integration for secure supporter contributions.",
      "Tracked impact in real-time with transparent fund distribution and supporter engagement features.",
    ],
    tech: ["NestJS", "Next.js", "Ethereum", "Blockchain", "Web3"],
    links: {
      live: "https://csbsn-frontend.vercel.app/",
      details: "#projects",
    },
  },
  {
    id: "orizon",
    role: "Full-Stack Developer",
    company: "Orizon Tech",
    location: "Addis Ababa, Ethiopia",
    image: "/projects/orizon.png",
    highlights: [
      "Contributed to Orizon Tech's company website showcasing AI systems and software development services.",
      "Built responsive landing pages with a modern dark theme, animated hero, and interactive UI sections.",
      "Implemented services, projects, tech stack, and contact sections deployed on Vercel.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    links: {
      live: "https://orizon-website.vercel.app/",
      details: "#projects",
    },
  },
  {
    id: "syscode",
    role: "Full-Stack Developer",
    company: "Orizon Tech · SysCode",
    location: "Addis Ababa, Ethiopia",
    image: "/projects/syscode.png",
    highlights: [
      "Built and enhanced a scalable system design platform using React, NestJS, and TypeScript.",
      "Integrated a fine-tuned LLaMA 4 model deployed on RunPod for AI-assisted architecture recommendations.",
      "Developed real-time collaboration features and responsive UI components.",
    ],
    tech: ["React", "NestJS", "TypeScript", "LLaMA 4", "RunPod", "Microservices"],
    links: {
      live: "https://syscode-i6c6.onrender.com/",
      details: "#projects",
    },
  },
  {
    id: "micro-sun",
    role: "Frontend Development Intern",
    company: "Micro Sun & Sol",
    location: "Addis Ababa, Ethiopia",
    image: "/projects/language-learning.svg",
    highlights: [
      "Built responsive and accessible user interfaces using Next.js, TypeScript, and Tailwind CSS.",
      "Integrated REST APIs and implemented state management with Zustand for real-time learning progress tracking.",
      "Delivered interactive data visualization for language learning progress across desktop and mobile.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "REST API"],
    links: {
      live: "#",
      details: "#projects",
    },
  },
];

export const projects = [
  {
    id: "syscode",
    title: "SysCode",
    status: "LIVE" as const,
    category: "Platform · AI",
    company: "Orizon Tech",
    role: "Full-stack developer",
    description:
      "Scalable system design platform with AI-assisted architecture recommendations.",
    longDescription:
      "Built and enhanced a system design platform using React, NestJS, and TypeScript. Integrated a fine-tuned LLaMA 4 model on RunPod for AI-assisted architecture recommendations. Developed real-time collaboration features and responsive UI components.",
    image: "/projects/syscode.png",
    logo: "/projects/syscode.png",
    tech: ["React", "NestJS", "TypeScript", "LLaMA 4", "RunPod", "Microservices"],
    links: {
      github: "https://github.com/dani7514",
      live: "https://syscode-i6c6.onrender.com/",
    },
  },
  {
    id: "aladia-platform",
    title: "Aladia Platform",
    status: "LIVE" as const,
    category: "Platform · Backend",
    company: "Aladia",
    role: "Senior backend developer",
    description:
      "Core learning platform features serving 10,000+ users with microservices architecture.",
    longDescription:
      "Designed and delivered core platform features using NestJS, TypeScript, and MongoDB. Integrated Google Pub/Sub across 8+ NestJS microservices. Built automated CI/CD pipelines with GitHub Actions for 100+ releases. Led a team of 3 junior developers.",
    image: "/projects/aladia.png",
    logo: "/projects/aladia.png",
    tech: ["NestJS", "TypeScript", "MongoDB", "GCP", "Pub/Sub", "GitHub Actions"],
    links: {
      github: "https://github.com/dani7514",
      live: "https://istitutoformativoaladia.it/",
    },
  },
  {
    id: "csbsn",
    title: "CSBSN",
    status: "LIVE" as const,
    category: "Platform · Blockchain",
    company: "CSBSN",
    role: "Full-stack developer",
    description:
      "Empowering small businesses with community support and transparent fundraising.",
    longDescription:
      "Join a decentralized funding network where small businesses raise funds transparently, supporters contribute securely, and impact is tracked in real-time.",
    image: "/projects/csbsn.png",
    logo: "/projects/csbsn.png",
    tech: ["NestJS", "Next.js", "Ethereum", "Blockchain", "Web3"],
    links: {
      github: "https://github.com/dani7514",
      live: "https://csbsn-frontend.vercel.app/",
    },
  },
  {
    id: "language-learning",
    title: "Language Learning App",
    status: "LIVE" as const,
    category: "Frontend · Web",
    company: "Micro Sun & Sol",
    role: "Frontend development intern",
    description:
      "Responsive language learning experience across desktop and mobile devices.",
    longDescription:
      "Built accessible user interfaces using Next.js, TypeScript, and Tailwind CSS. Integrated REST APIs and implemented state management with Zustand for real-time learning progress tracking and interactive data visualization.",
    image: "/projects/language-learning.svg",
    logo: "/projects/language-learning.svg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "REST API"],
    links: {
      github: "https://github.com/dani7514",
      live: "#",
    },
  },
  {
    id: "gitlytics",
    title: "Gitlytics",
    status: "LIVE" as const,
    category: "Full-Stack · Analytics",
    company: "Personal Project",
    role: "Full-stack developer",
    description:
      "Full-stack web application for analyzing and visualizing GitHub repository data.",
    longDescription:
      "Built with React, Flask, and REST APIs. Integrated GitHub OAuth and API for secure authentication and automated data retrieval. Developed interactive visualizations for repository activity and collaboration patterns. Implemented async background processing with Celery and Redis.",
    image: "/projects/gitlytics.svg",
    logo: "/projects/gitlytics.svg",
    tech: ["React", "Flask", "PostgreSQL", "Docker", "Celery", "Redis", "Python"],
    links: {
      github: "https://github.com/dani7514",
      live: "#",
    },
  },
];

export const education = [
  {
    institution: "Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    degree: "Bachelor of Science in Software Engineering",
  },
  {
    institution: "Africa To Silicon Valley",
    location: "Addis Ababa, Ethiopia",
    degree: "Coding Bootcamp",
  },
];

export const achievements = [
  "Integrated Google Pub/Sub across 8+ microservices, reducing downtime by 20%",
  "Delivered core platform features serving 10,000+ users at Aladia",
  "Built 100+ CI/CD releases with GitHub Actions",
  "500+ LeetCode problems solved",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type Theme = "default" | "ocean" | "forest" | "sunset";

export const themes: { id: Theme; label: string; color: string }[] = [
  { id: "default", label: "Default", color: "#6366f1" },
  { id: "ocean", label: "Ocean", color: "#06b6d4" },
  { id: "forest", label: "Forest", color: "#22c55e" },
  { id: "sunset", label: "Sunset", color: "#f97316" },
];
