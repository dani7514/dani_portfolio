import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { projects } from "../data/portfolio";
import { getSkillIconUrl } from "../data/skills";
import SectionTitle from "./SectionTitle";

const techIconMap: Record<string, string> = {
  React: "reactjs.svg",
  "Next.js": "nextjs.svg",
  NestJS: "nodejs.svg",
  TypeScript: "typescript.svg",
  MongoDB: "mongodb.svg",
  Python: "python.svg",
  Docker: "docker.svg",
  PostgreSQL: "postgres.svg",
  JavaScript: "javascript.svg",
  HTML: "html.svg",
  CSS: "css.svg",
  Redis: "redis.svg",
  Git: "git.svg",
};

function getTechIcon(tech: string) {
  return techIconMap[tech] ?? null;
}

export default function Projects() {
  return (
    <section id="projects" className="w-full section-block">
      <div className="page-container">
        <SectionTitle title="My Projects" variant="open" />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <article key={project.id} className="Project_Stagger project-card">
              <div className="project-img-wrap relative">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-14 h-14 rounded-xl object-cover border"
                    style={{ borderColor: "var(--primaryLiteAlt)" }}
                  />
                </div>
                <span
                  className={`absolute top-4 right-4 z-10 text-xs font-mono px-3 py-1 rounded-full uppercase tracking-wider ${
                    project.status === "LIVE" ? "statusLive" : "statusBuilding"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-6 lg:p-7 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 shrink-0">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-70 hover:opacity-100"
                      aria-label={`${project.title} GitHub`}
                    >
                      <GitHubIcon size={22} />
                    </a>
                    {project.links.live !== "#" && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-70 hover:opacity-100"
                        aria-label={`${project.title} Preview`}
                      >
                        <ArrowUpRight size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-base lg:text-lg opacity-80 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 8).map((tech) => {
                    const icon = getTechIcon(tech);
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 text-xs lg:text-sm px-3 py-1.5 rounded-md"
                        style={{ background: "var(--SkillGradient)" }}
                        title={tech}
                      >
                        {icon && (
                          <img
                            src={getSkillIconUrl(icon)}
                            alt=""
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                        )}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <SectionTitle title="My Projects" variant="close" />
        </div>
      </div>
    </section>
  );
}
