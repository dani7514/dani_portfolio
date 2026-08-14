export const CHIRAG_ICON_BASE =
  "https://raw.githubusercontent.com/ChiragChrg/Portfolio/main/src/assets/skills";

export interface SkillItem {
  name: string;
  icon: string;
  link: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Web & Programming",
    skills: [
      { name: "HTML", icon: "html.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: "css.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: "javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: "typescript.svg", link: "https://www.typescriptlang.org/" },
      { name: "Python", icon: "python.svg", link: "https://www.python.org/" },
      { name: "C++", icon: "cpp.svg", link: "https://isocpp.org/" },
      { name: "Java", icon: "java.svg", link: "https://www.oracle.com/java/" },
      { name: "C#", icon: "csharp.svg", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      { name: "PHP", icon: "php.svg", link: "https://www.php.net/" },
      { name: "R", icon: "r.svg", link: "https://www.r-project.org/" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "reactjs.svg", link: "https://react.dev/" },
      { name: "Next.js", icon: "nextjs.svg", link: "https://nextjs.org/" },
      { name: "Astro", icon: "astrojs.svg", link: "https://astro.build/" },
      { name: "Tailwind CSS", icon: "tailwind.svg", link: "https://tailwindcss.com/" },
      { name: "Preact.js", icon: "preactjs.svg", link: "https://preactjs.com/" },
      { name: "D3.js", icon: "d3js.svg", link: "https://d3js.org/" },
      { name: "GSAP", icon: "gsap.svg", link: "https://gsap.com/" },
      { name: "Framer Motion", icon: "motion.svg", link: "https://www.framer.com/motion/" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: "nodejs.svg", link: "https://nodejs.org/" },
      { name: "Express.js", icon: "express.svg", link: "https://expressjs.com/" },
      { name: "PHP", icon: "php.svg", link: "https://www.php.net/" },
      { name: ".NET", icon: "dotnet.svg", link: "https://learn.microsoft.com/en-us/dotnet/" },
      { name: "REST API", icon: "restapi.svg", link: "https://restfulapi.net/" },
      { name: "Firebase", icon: "firebase.svg", link: "https://firebase.google.com/" },
      { name: "Auth.js", icon: "nextauth.svg", link: "https://authjs.dev/" },
      { name: "Google APIs", icon: "google-cloud.svg", link: "https://developers.google.com/" },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB", icon: "mongodb.svg", link: "https://www.mongodb.com/" },
      { name: "MySQL", icon: "mysql.svg", link: "https://www.mysql.com/" },
      { name: "PostgreSQL", icon: "postgres.svg", link: "https://www.postgresql.org/" },
      { name: "Firestore", icon: "firebase.svg", link: "https://firebase.google.com/docs/firestore" },
      { name: "Prisma", icon: "prisma.svg", link: "https://www.prisma.io/" },
      { name: "Redis", icon: "redis.svg", link: "https://redis.io/" },
      { name: "EdgeStore", icon: "edgestore.webp", link: "https://edgestore.dev/" },
      { name: "AWS S3", icon: "aws-s3.svg", link: "https://aws.amazon.com/s3/" },
    ],
  },
  {
    title: "State & Events",
    skills: [
      { name: "Redux", icon: "redux.svg", link: "https://redux.js.org/" },
      { name: "Zustand", icon: "zustand.webp", link: "https://zustand-demo.pmnd.rs/" },
      { name: "Nanostores", icon: "nanostores.svg", link: "https://github.com/nanostores/nanostores" },
      { name: "TanStack Query", icon: "reactquery.svg", link: "https://tanstack.com/query/latest/" },
      { name: "Socket.io", icon: "socketio.svg", link: "https://socket.io/" },
      { name: "NATS", icon: "nats.svg", link: "https://nats.io/" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: "docker.svg", link: "https://www.docker.com/" },
      { name: "Firebase", icon: "firebase.svg", link: "https://firebase.google.com/" },
      { name: "Google Cloud", icon: "google-cloud.svg", link: "https://cloud.google.com/" },
      { name: "Netlify", icon: "netlify.svg", link: "https://www.netlify.com/" },
      { name: "Vercel", icon: "vercel.svg", link: "https://vercel.com/" },
      { name: "Render", icon: "render.svg", link: "https://render.com/" },
    ],
  },
  {
    title: "Tooling & Observability",
    skills: [
      { name: "Git", icon: "git.svg", link: "https://git-scm.com/" },
      { name: "GitHub", icon: "github.svg", link: "https://github.com/" },
      { name: "npm", icon: "npm.svg", link: "https://www.npmjs.com/" },
      { name: "Bun", icon: "bun.svg", link: "https://bun.sh/" },
      { name: "Vite", icon: "vitejs.svg", link: "https://vitejs.dev/" },
      { name: "Jest", icon: "jest.svg", link: "https://jestjs.io/" },
      { name: "Postman", icon: "postman.svg", link: "https://www.postman.com/" },
      { name: "Swagger / OpenAPI", icon: "swagger.svg", link: "https://swagger.io/" },
      { name: "OpenTelemetry", icon: "opentelemetry.svg", link: "https://opentelemetry.io/" },
      { name: "Streamlit", icon: "streamlit.svg", link: "https://streamlit.io/" },
    ],
  },
  {
    title: "Config & Templating",
    skills: [
      { name: "YAML", icon: "yaml.svg", link: "https://yaml.org/" },
      { name: "JSON", icon: "json.svg", link: "https://www.json.org/" },
      { name: "Markdown", icon: "markdown.svg", link: "https://www.markdownguide.org/" },
      { name: "FreeMarker", icon: "freemarker.svg", link: "https://freemarker.apache.org/" },
    ],
  },
  {
    title: "IDEs & Design",
    skills: [
      { name: "VS Code", icon: "vscode.svg", link: "https://code.visualstudio.com/" },
      { name: "Visual Studio", icon: "visual-studio.svg", link: "https://visualstudio.microsoft.com/" },
      { name: "Android Studio", icon: "android-studio.svg", link: "https://developer.android.com/studio" },
      { name: "Figma", icon: "figma.svg", link: "https://www.figma.com/" },
    ],
  },
];

export function getSkillIconUrl(icon: string): string {
  return `${CHIRAG_ICON_BASE}/${icon}`;
}
