import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've built.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl xl:max-w-6xl px-6">
      <PageHeader
        meta="Selected work"
        title="Projects"
        subtitle="A small, opinionated collection of things I've built. Side projects, tools, and the occasional experiment."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 pb-16 md:pb-24">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
