export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "minimalist-starter",
    title: "Minimalist Starter",
    description:
      "A blank-slate template for building personal sites with a focus on typography and whitespace.",
    tech: ["Next.js", "Tailwind", "MDX"],
    link: "https://example.com",
    repo: "https://github.com/yourname/minimalist-starter",
  },
  {
    slug: "dotfiles-manager",
    title: "Dotfiles Manager",
    description:
      "A small CLI to version-control and bootstrap your dotfiles across machines in one command.",
    tech: ["Rust", "TOML"],
    repo: "https://github.com/yourname/dotfiles-manager",
  },
  {
    slug: "edge-cache-proxy",
    title: "Edge Cache Proxy",
    description:
      "A configurable reverse-proxy layer for caching API responses at the edge with smart invalidation.",
    tech: ["TypeScript", "Cloudflare Workers"],
    link: "https://example.com",
  },
  {
    slug: "focus-blocks",
    title: "Focus Blocks",
    description:
      "A keyboard-first time-blocker that lives in your menu bar and respects deep-work sessions.",
    tech: ["Swift", "AppKit"],
  },
  {
    slug: "literate-configs",
    title: "Literate Configs",
    description:
      "Write your configuration as a single, well-commented document and compile it to every format you need.",
    tech: ["TypeScript", "Zod"],
    repo: "https://github.com/yourname/literate-configs",
  },
  {
    slug: "tiny-rss",
    title: "Tiny RSS",
    description:
      "A self-hosted RSS reader that aims to do less and feel calmer than its alternatives.",
    tech: ["Go", "SQLite"],
  },
];
