import type { ProjectStatus } from "../data/projects";

const STATUS_MAP: Record<
  ProjectStatus,
  { label: string; tone: string; note: string }
> = {
  wip: {
    label: "In progress",
    tone: "text-peach bg-peach/10",
    note: "Work in progress. Expect rough edges and breaking changes.",
  },
  active: {
    label: "Actively maintained",
    tone: "text-green bg-green/10",
    note: "Under active development. Issues and PRs welcome.",
  },
  stable: {
    label: "Stable",
    tone: "text-blue bg-blue/10",
    note: "Maintained and considered production-ready.",
  },
  archived: {
    label: "Archived",
    tone: "text-overlay-1 bg-overlay-1/10",
    note: "No longer actively developed. Kept for reference.",
  },
};

type StatusBadgeProps = {
  status: ProjectStatus;
  size?: "sm" | "md";
};

export function StatusBadge({ status, size = "sm" }: StatusBadgeProps) {
  const { label, tone } = STATUS_MAP[status];
  const sizeClass =
    size === "sm"
      ? "text-[11px] px-2.5 py-1"
      : "text-xs px-3 py-1.5";
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider rounded-full ${tone} ${sizeClass}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

export function getStatusNote(status: ProjectStatus): string {
  return STATUS_MAP[status].note;
}
