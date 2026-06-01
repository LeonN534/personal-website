import type { Metadata } from "next";
import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import { GithubIcon, LinkedinIcon, RssIcon } from "../components/SocialIcons";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "The best ways to get in touch.",
};

const socials = [
  {
    label: "GitHub",
    href: site.socials.github,
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: site.socials.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "RSS",
    href: site.socials.rss,
    Icon: RssIcon,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <PageHeader
        meta="Get in touch"
        title="Contact"
        subtitle="The fastest way to reach me is by email. For everything else, the links below."
      />

      <Card className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-overlay-1">
          Email
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-2 block text-2xl md:text-3xl font-semibold text-text hover:text-lavender transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
        >
          {site.email}
        </a>
        <p className="mt-4 text-subtext-0 text-sm leading-relaxed">
          I read every message. I reply to most. For project inquiries, please
          include a short description and any relevant links.
        </p>
      </Card>

      <Card>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-overlay-1">
          Elsewhere
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-3">
          {socials.map(({ label, href, Icon: Svg }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-surface-0/40 px-4 py-3 text-subtext-1 hover:text-text hover:border-lavender/30 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60"
              >
                <Svg className="h-4 w-4" />
                <span className="text-sm">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
