import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      className="py-8 text-center text-sm opacity-70"
      style={{
        background: `linear-gradient(180deg, transparent, hsla(var(--primary), 0.15))`,
      }}
    >
      <p className="font-logo text-lg gradientText mb-2">Portfolio.</p>
      <p>
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-3 text-xs opacity-60 hover:opacity-100 transition-opacity"
      >
        ↑ Back to top
      </button>
    </footer>
  );
}
