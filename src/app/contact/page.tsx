import type { Metadata } from "next";
import { Card } from "../components/Card";
import { CopyButton } from "../components/CopyButton";
import { PageHeader } from "../components/PageHeader";
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  SpotifyIcon,
  TiktokIcon,
  WechatIcon,
  YoutubeIcon,
} from "../components/SocialIcons";
import { site, type Site } from "../data/site";

const siteUrl = "https://www.leonardoromero.xyz";
const logoPath = "/personal-logo.png";

export const metadata: Metadata = {
  title: "Contact",
  description: "The best ways to get in touch.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    title: `Contact · ${site.name}`,
    description: "The best ways to get in touch.",
    url: `${siteUrl}/contact`,
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
    title: `Contact · ${site.name}`,
    description: "The best ways to get in touch.",
    images: [logoPath],
  },
};

type IconComponent = (props: { className?: string }) => React.JSX.Element;

type Platform = {
  key: keyof Site["socials"];
  label: string;
  Icon: IconComponent;
  mode?: "link" | "copy";
};

const platforms: Platform[] = [
  { key: "github", label: "GitHub", Icon: GithubIcon },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "discord", label: "Discord", Icon: DiscordIcon, mode: "copy" },
  { key: "youtube", label: "YouTube", Icon: YoutubeIcon },
  { key: "tiktok", label: "TikTok", Icon: TiktokIcon },
  { key: "spotify", label: "Spotify", Icon: SpotifyIcon },
  { key: "wechat", label: "WeChat", Icon: WechatIcon },
];

export default function ContactPage() {
  const enabled = platforms.filter((p) => site.socials[p.key]);

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
        <ul className="mt-4 grid gap-2 grid-cols-2 md:grid-cols-4">
          {enabled.map(({ key, label, Icon: Svg, mode }) => (
            <li key={key}>
              {mode === "copy" ? (
                <CopyButton
                  value={site.socials[key] as string}
                  label={label}
                  icon={<Svg className="h-4 w-4 shrink-0" />}
                />
              ) : (
                <a
                  href={site.socials[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-surface-0/40 px-4 py-3 text-subtext-1 hover:text-text hover:border-lavender/30 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60"
                >
                  <Svg className="h-4 w-4 shrink-0" />
                  <span className="text-sm truncate">{label}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
