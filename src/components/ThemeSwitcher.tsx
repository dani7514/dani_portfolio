import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { themes } from "../data/portfolio";
import { useTheme } from "../context/ThemeContext";

interface ThemeSwitcherProps {
  compact?: boolean;
  className?: string;
}

export default function ThemeSwitcher({
  compact = false,
  className = "",
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const current = themes.find((t) => t.id === theme) ?? themes[0];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-white/15 opacity-80 hover:opacity-100 transition-opacity"
      >
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: current.color }}
        />
        {!compact && <span>{current.label}</span>}
        <ChevronDown size={12} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            className="absolute right-0 top-full mt-2 z-50 rounded-lg border border-white/10 py-1 min-w-[130px] shadow-xl"
            style={{ background: "var(--background)" }}
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-left text-xs hover:bg-white/5"
                style={{
                  color: theme === t.id ? "hsl(var(--primary))" : "inherit",
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: t.color }}
                />
                {t.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
