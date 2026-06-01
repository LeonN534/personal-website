import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  bordered?: boolean;
};

export function Card({ children, className = "", bordered, ...rest }: CardProps) {
  const borderClass = bordered ? "border-gradient" : "border border-white/5";
  return (
    <div
      className={`rounded-2xl bg-base/60 backdrop-blur-md p-6 md:p-8 transition-colors duration-200 ${borderClass} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
