import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="w-full section-block mb-16">
      <div className="page-container">
        <SectionTitle title="Contact" variant="center" />

        <div className="text-center mb-14 space-y-3">
          <h3 className="Fade_Up gradientText font-display text-4xl lg:text-5xl">
            Let's collaborate!
          </h3>
          <p className="Fade_Up text-lg lg:text-xl opacity-80">
            Contact me to discuss your web development needs
          </p>
          <p className="Fade_Up text-lg lg:text-xl opacity-80">
            or just to say hello. 😉
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          <div className="Fade_Up social-orbit shrink-0">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ top: "5%", left: "50%", transform: "translateX(-50%)" }}
              aria-label="GitHub"
            >
              <GitHubIcon size={26} />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ bottom: "15%", left: "8%" }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={26} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ bottom: "15%", right: "8%" }}
              aria-label="Email"
            >
              <Mail size={26} />
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              style={{ top: "50%", right: "-5%", transform: "translateY(-50%)" }}
              aria-label="Phone"
            >
              <Phone size={26} />
            </a>
          </div>

          <form
            onSubmit={submit}
            className="Fade_Up w-full max-w-lg space-y-6 p-8 lg:p-10 rounded-2xl"
            style={{ background: "var(--cardGradient)" }}
          >
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm uppercase tracking-wider opacity-60 mb-2 font-mono"
                >
                  {field}
                </label>
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  required
                  value={form[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-purple-500 text-base"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase tracking-wider opacity-60 mb-2 font-mono"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-purple-500 text-base resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-lg font-medium gradientText border border-white/10 hover:border-purple-500/50 transition-colors"
              style={{ background: "var(--SkillGradient)" }}
            >
              {sent ? "Opening email..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
