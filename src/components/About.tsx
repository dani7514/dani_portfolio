import { aboutText, personalInfo } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="w-full section-block">
      <div className="page-container">
        <SectionTitle title="About Me" variant="open" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="Fade_Up w-full lg:w-96 shrink-0 flex_center">
            <img
              src={personalInfo.avatar}
              alt="About Avatar"
              className="w-64 sm:w-72 lg:w-80 aspect-square rounded-2xl object-cover object-top border-2"
              style={{ borderColor: "var(--primaryLiteAlt)" }}
            />
          </div>

          <div className="Fade_Up flex-1 space-y-6 text-lg lg:text-xl leading-relaxed opacity-90">
            <h2 className="font-display text-3xl lg:text-4xl gradientText">
              {aboutText.greeting}
            </h2>
            {aboutText.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionTitle title="About Me" variant="close" />
        </div>
      </div>
    </section>
  );
}
