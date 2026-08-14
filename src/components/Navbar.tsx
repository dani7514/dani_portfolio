import { Download } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolio";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="header"
      className="sticky top-0 z-50 max-w-[1800px] mx-auto headerGradient backdrop-blur-sm"
    >
      <div className="flex justify-between items-center w-full page-container py-3 lg:py-4">
        <button
          data-href="#home"
          onClick={() => scrollTo("#home")}
          className="Fade_Down_Header font-logo text-3xl lg:text-4xl font-bold"
        >
          <span className="gradientText">Portfolio.</span>
        </button>

        <nav className="Header_Nav hidden lg:flex gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              data-href={link.href}
              onClick={() => scrollTo(link.href)}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
        </nav>

        <div className="flex_center gap-3 sm:gap-4">
          <ThemeSwitcher className="Fade_Down_Header hidden sm:block" />
          <a
            className="Fade_Down_Header Header_ActionBtn flex_center"
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Daniel-Misganaw-Resume.pdf"
          >
            <span>
              Resume
              <Download size={16} />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
