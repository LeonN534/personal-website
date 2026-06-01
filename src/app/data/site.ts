type Socials = {
  github: string;
  linkedin: string;
  instagram?: string;
  discord?: string;
  youtube?: string;
  tiktok?: string;
  spotify?: string;
  wechat?: string;
};

export const site: {
  name: string;
  tagline: string;
  email: string;
  socials: Socials;
  support: { liberapay: string; kofi: string };
  nav: ReadonlyArray<{ href: string; label: string }>;
} = {
  name: "Leonardo Romero",
  tagline: "Creating software to make life easier.",
  email: "leo@leonardoromero.xyz",
  socials: {
    github: "https://github.com/LeonN534",
    linkedin: "https://linkedin.com/in/leonardo-romero-bardales",
    discord: "leonn534",
    instagram: "https://www.instagram.com/leo.rom534/",
    spotify:
      "https://open.spotify.com/user/hhv8zyet3fqljww6zkxke3yd0?si=sklDCShTQhmr1uzhScE_CA",
    youtube: "https://www.youtube.com/@leonardoromero9470",
    tiktok: "https://www.tiktok.com/@leo.rom534?_r=1&_t=ZS-96qvEseJBmJ",
  },
  support: {
    liberapay: "https://liberapay.com/LeonN534/donate",
    kofi: "https://ko-fi.com/T5B120EBPE",
  },
  nav: [
    { href: "/projects", label: "Projects" },
    { href: "/articles", label: "Articles" },
    { href: "/contact", label: "Contact" },
    { href: "/support", label: "Support" },
  ],
};

export type Site = typeof site;
