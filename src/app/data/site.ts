export const site = {
  name: "Your Name",
  tagline: "Building developer tools and minimalist websites.",
  currently: "Designing the next thing.",
  email: "hello@example.com",
  socials: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    rss: "/rss.xml",
  },
  support: {
    github: "https://github.com/sponsors/yourname",
    coffee: "https://www.buymeacoffee.com/yourname",
  },
  nav: [
    { href: "/projects", label: "Projects" },
    { href: "/articles", label: "Articles" },
    { href: "/contact", label: "Contact" },
    { href: "/support", label: "Support" },
  ],
} as const;

export type Site = typeof site;
