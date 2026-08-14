import { useState } from "react";
import { Mail, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

type FormState = { name: string; email: string; message: string };
type SubmitState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("loading");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(personalInfo.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `Portfolio contact from ${form.name}`,
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      const data = (await response.json()) as { success?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Failed to send message. Please try again.");
      }

      setSubmitState("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
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
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

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
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  required
                  disabled={submitState === "loading"}
                  value={form[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-purple-500 text-base disabled:opacity-60"
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
                name="message"
                required
                rows={5}
                disabled={submitState === "loading"}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-purple-500 text-base resize-none disabled:opacity-60"
              />
            </div>

            {submitState === "success" && (
              <p className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle2 size={18} />
                Message sent! I'll get back to you soon.
              </p>
            )}

            {submitState === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={18} />
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={submitState === "loading"}
              className="w-full py-4 rounded-xl text-lg font-medium text-white border border-white/10 hover:border-purple-500/50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ background: "var(--SkillGradient)" }}
            >
              {submitState === "loading" && <Loader2 size={20} className="animate-spin" />}
              {submitState === "loading"
                ? "Sending..."
                : submitState === "success"
                  ? "Send another message"
                  : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
