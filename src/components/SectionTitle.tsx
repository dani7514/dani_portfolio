interface SectionTitleProps {
  title: string;
  variant?: "open" | "close" | "center";
}

export default function SectionTitle({
  title,
  variant = "open",
}: SectionTitleProps) {
  if (variant === "center") {
    return (
      <div className="Title-Tag open primary Title_Line Fade_Up w-full mb-12 lg:mb-16">
        <span>{"<"}</span>
        <p>{title}</p>
        <span>{"/>"}</span>
      </div>
    );
  }

  return (
    <div
      className={`Title-Tag ${variant} primary Title_Line Fade_Up w-full mb-12 lg:mb-16`}
    >
      <span>{variant === "close" ? "</" : "<"}</span>
      <p>{title}</p>
      <span>{">"}</span>
    </div>
  );
}
