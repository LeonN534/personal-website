import type { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
};

export function GradientText({
  children,
  className = "",
  as: Tag = "span",
}: GradientTextProps) {
  return <Tag className={`text-gradient ${className}`}>{children}</Tag>;
}
