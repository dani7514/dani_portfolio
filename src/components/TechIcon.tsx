import { useState } from "react";
import { getSkillIconUrl } from "../data/skills";

interface TechIconProps {
  icon: string;
  name: string;
  size?: number;
  className?: string;
}

export function TechIconWithFallback({
  icon,
  name,
  size = 28,
  className = "",
}: TechIconProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center rounded-md font-mono font-bold ${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: "var(--bg-secondary)",
          color: "var(--accent)",
          fontSize: Math.max(8, size * 0.3),
        }}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={getSkillIconUrl(icon)}
      alt={`${name} icon`}
      width={size}
      height={size}
      loading="lazy"
      className={`object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
