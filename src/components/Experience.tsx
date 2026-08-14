import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { experiences, education } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(
    experiences[0]?.id ?? null,
  );

  return (
    <section id="experience" className="w-full section-block">
      <div className="page-container">
        <SectionTitle title="Experience" variant="center" />

        <p className="Fade_Up max-w-3xl mx-auto text-center mb-14 text-lg lg:text-xl opacity-80 leading-relaxed">
          Professional experience and key contributions across backend
          engineering, full-stack development, and AI systems.
        </p>

        <div className="max-w-5xl mx-auto space-y-8 lg:space-y-10 mb-20">
          {experiences.map((exp) => {
            const open = expandedId === exp.id;
            return (
              <article
                key={exp.id}
                className="Fade_Up rounded-2xl overflow-hidden"
                style={{ background: "var(--cardGradient)" }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-56 lg:w-64 shrink-0 h-48 md:h-auto overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full object-cover min-h-[12rem]"
                    />
                  </div>
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="mb-3">
                      <h3 className="font-display text-xl lg:text-2xl">
                        {exp.role} — {exp.company}
                      </h3>
                    </div>
                    <p className="text-sm lg:text-base opacity-60 mb-4">
                      {exp.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="text-xs lg:text-sm px-3 py-1 rounded-md"
                          style={{ background: "var(--SkillGradient)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <button
                        onClick={() => setExpandedId(open ? null : exp.id)}
                        className="text-base flex items-center gap-2 gradientText font-medium"
                      >
                        View details
                        {open ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>
                      {exp.links.live !== "#" && (
                        <a
                          href={exp.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base flex items-center gap-2 opacity-70 hover:opacity-100"
                        >
                          <ExternalLink size={18} /> Live
                        </a>
                      )}
                    </div>
                    {open && (
                      <ul className="mt-6 pt-6 space-y-3 text-base lg:text-lg opacity-85 border-t border-white/10 leading-relaxed">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-purple-400 shrink-0">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <SectionTitle title="Education" variant="center" />
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8 lg:gap-10 mt-10">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="Fade_Up p-7 lg:p-8 rounded-2xl"
              style={{ background: "var(--cardGradient)" }}
            >
              <h3 className="font-display text-xl lg:text-2xl font-semibold">
                {edu.institution}
              </h3>
              <p className="text-base lg:text-lg opacity-80 mt-3">{edu.degree}</p>
              <p className="text-sm opacity-60 mt-3 font-mono">
                {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
