import { personalInfo, heroTags } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-4rem)] section-block bg-background flex items-center overflow-hidden"
    >
      <div className="page-container grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 xl:gap-24 items-center">
        <div className="flex flex-col gap-8 lg:gap-10 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4">
            <p className="Fade_Stagger text-xl lg:text-2xl opacity-90">
              Hi 👋 My name is
            </p>
            <h1 className="Fade_Stagger gradientText font-display text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.95]">
              {personalInfo.firstName}.
            </h1>
            <p className="Fade_Stagger text-xl lg:text-2xl mt-4">
              I'm a {personalInfo.title}.
            </p>
            <p className="Fade_Stagger text-lg lg:text-2xl opacity-90 mt-2">
              I create{" "}
              <span className="gradientText font-display font-medium">
                Exciting Stuff
              </span>{" "}
              on the Internet.
            </p>
          </div>

          <div className="Fade_Stagger flex flex-wrap justify-center lg:justify-start gap-3">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="text-sm lg:text-base px-4 py-2 rounded-full border"
                style={{
                  borderColor: "var(--primaryLiteAlt)",
                  color: "var(--text)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="Fade_Stagger flex justify-center lg:justify-start items-center gap-10 py-2">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex_center opacity-80 hover:opacity-100 transition-opacity"
            >
              <GitHubIcon size={28} />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex_center opacity-80 hover:opacity-100 transition-opacity"
            >
              <LinkedInIcon size={28} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="w-10 h-10 flex_center opacity-80 hover:opacity-100 transition-opacity"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        <div className="Hero_Orbit relative flex_center w-[300px] sm:w-[360px] lg:w-[420px] xl:w-[480px] aspect-square shrink-0 mx-auto lg:mx-0 order-1 lg:order-2">
          <div
            id="avatarImage"
            role="button"
            tabIndex={0}
            className="flex_center w-[170px] sm:w-[210px] lg:w-[240px] xl:w-[270px] aspect-square rounded-full z-10 cursor-pointer overflow-hidden"
          >
            <img
              src={personalInfo.avatar}
              alt={`${personalInfo.name} Avatar`}
              className="object-cover object-center w-full h-full rounded-full pointer-events-none"
              draggable={false}
            />
          </div>

          <div className="Hero_Trail Trail1">
            <span className="Orbit_Dot" />
          </div>
          <div className="Hero_Trail Trail2">
            <span className="Orbit_Dot" />
          </div>
          <div className="Hero_Trail Trail3">
            <span className="Orbit_Dot" />
          </div>
          <div className="Hero_Trail Trail4">
            <span className="Orbit_Dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
