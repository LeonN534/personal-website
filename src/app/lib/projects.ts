import { projects, type Project } from "../data/projects";

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRoutedProjectSlugs(): { slug: string }[] {
  return projects
    .filter((p) => p.route)
    .map((p) => ({ slug: p.slug }));
}

export function getPrimaryHref(p: Project): string | undefined {
  if (p.link) return p.link;
  if (p.route) return `/projects/${p.slug}`;
  if (p.repo) return p.repo;
  return undefined;
}
