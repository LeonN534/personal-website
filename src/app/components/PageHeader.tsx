import { GradientText } from "./GradientText";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  meta?: string;
};

export function PageHeader({ title, subtitle, meta }: PageHeaderProps) {
  return (
    <header className="pt-8 pb-12 md:pb-16">
      {meta ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-overlay-1 mb-3">
          {meta}
        </p>
      ) : null}
      <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-semibold tracking-tight">
        <GradientText>{title}</GradientText>
      </h1>
      {subtitle ? (
        <p className="mt-4 text-lg text-subtext-1 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
