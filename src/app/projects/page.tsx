import type { Metadata } from "next";
import { PageHeader } from "../components/PageHeader";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { site } from "../data/site";

const siteUrl = "https://www.leonardoromero.xyz";
const logoPath = "/personal-logo.png";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've built.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    title: `Projects · ${site.name}`,
    description: "A selection of things I've built.",
    url: `${siteUrl}/projects`,
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: logoPath,
        width: 512,
        height: 512,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects · ${site.name}`,
    description: "A selection of things I've built.",
    images: [logoPath],
  },
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
