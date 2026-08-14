import { skillCategories } from "../data/skills";
import { TechIconWithFallback } from "./TechIcon";
import SectionTitle from "./SectionTitle";

const pairs = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
  [8, null],
] as const;

export default function Skills() {
  return (
    <section id="skills" className="w-full section-block">
      <div className="page-container">
        <SectionTitle title="Tech Stack" variant="center" />

        <div className="space-y-12 lg:space-y-16">
          {pairs.map(([a, b], row) => {
            const left = skillCategories[a];
            const right = b !== null ? skillCategories[b] : null;
            if (!left) return null;

            return (
              <div
                key={row}
                className="Fade_Up flex flex-col lg:flex-row gap-10 lg:gap-16"
              >
                <SkillBlock category={left} />
                {right && <SkillBlock category={right} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillBlock({
  category,
}: {
  category: (typeof skillCategories)[number];
}) {
  return (
    <div className="Fade_Up flex_center flex-col gap-6 py-4 w-full">
      <h3 className="skill-category-title">
        {category.title} <span>()</span>
      </h3>
      <div className="flex flex-wrap justify-center gap-3 lg:gap-4 w-full">
        {category.skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-pill"
            title={skill.name}
          >
            <TechIconWithFallback icon={skill.icon} name={skill.name} size={28} />
            <span>{skill.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
