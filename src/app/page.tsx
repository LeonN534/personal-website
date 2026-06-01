import Link from "next/link";
import { Card } from "./components/Card";
import { GradientText } from "./components/GradientText";
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CloudIcon,
  Code2Icon,
  CoffeeIcon,
  CompassIcon,
  DumbbellIcon,
  FileTextIcon,
  FolderIcon,
  Gamepad2Icon,
  GitForkIcon,
  GlobeIcon,
  MailIcon,
  MonitorSmartphoneIcon,
  Music4Icon,
  PaletteIcon,
  PenLineIcon,
  ServerIcon,
  ShieldIcon,
} from "./components/Icon";
import { site } from "./data/site";
import { getAllArticles } from "./lib/articles";

const quickLinks = [
  {
    href: "/projects",
    label: "Projects",
    description: "Things I've built",
    Icon: FolderIcon,
  },
  {
    href: "/articles",
    label: "Articles",
    description: "Essays and notes",
    Icon: FileTextIcon,
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Say hello",
    Icon: MailIcon,
  },
  {
    href: "/support",
    label: "Support",
    description: "Give back",
    Icon: CoffeeIcon,
  },
] as const;

const communities = [
  { label: "Study groups", Icon: BookOpenIcon },
  { label: "Sports", Icon: DumbbellIcon },
  { label: "Video games", Icon: Gamepad2Icon },
  { label: "Music bands", Icon: Music4Icon },
  { label: "Open source", Icon: Code2Icon },
] as const;

const skillGroups = [
  {
    title: "Design & Media",
    Icon: PaletteIcon,
    tone: "text-mauve",
    skills: ["UI/UX design", "Photo and video editing"],
  },
  {
    title: "Frontend & Mobile",
    Icon: MonitorSmartphoneIcon,
    tone: "text-lavender",
    skills: [
      "JavaScript and TypeScript",
      "React Native + Expo",
      "Electron (desktop)",
      "Next.js",
    ],
  },
  {
    title: "Backend & APIs",
    Icon: ServerIcon,
    tone: "text-teal",
    skills: [
      "Nest.js, Socket.io",
      "LLM integration (API, MCP)",
    ],
  },
  {
    title: "Infrastructure & Data",
    Icon: CloudIcon,
    tone: "text-sky",
    skills: [
      "Linux, AWS, Docker, NGINX",
      "MySQL, PostgreSQL, MongoDB",
    ],
  },
  {
    title: "Security & Networking",
    Icon: ShieldIcon,
    tone: "text-peach",
    skills: [
      "Cybersecurity hardening",
      "Routing, iptables, subnetting",
    ],
  },
  {
    title: "Project Management & Business",
    Icon: BriefcaseIcon,
    tone: "text-yellow",
    skills: [
      "Tools: Jira, Slack, Trello, Notion",
      "Estimation, WBS, scheduling",
      "Enterprise strategy and org design",
    ],
  },
] as const;

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Fluent" },
] as const;

export default function Home() {
  const allArticles = getAllArticles();
  const latest = allArticles.slice(0, 3);
  const hasArticles = allArticles.length > 0;

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="pt-8 md:pt-16 pb-16 md:pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-overlay-1 mb-5">
          Portfolio
        </p>
        <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-semibold tracking-tight leading-[1.05]">
          Hey, I&apos;m{" "}
          <GradientText className="whitespace-nowrap">{site.name}</GradientText>.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-subtext-1 max-w-2xl leading-relaxed">
          {site.tagline}
        </p>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-overlay-1">
            / about
          </p>
          <p className="mt-2 text-subtext-1 max-w-2xl">
            A bit about me before the links.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="md:row-span-1">
            <div className="flex items-center gap-2.5">
              <GitForkIcon className="h-5 w-5 text-mauve" />
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Open source, by default.
              </h2>
            </div>
            <p className="mt-3 text-subtext-1 leading-relaxed">
              I build free and open-source software because not everyone can
              afford a license. If a tool helps me, I&apos;d rather it help the
              next person for free than sit behind a paywall.
            </p>
          </Card>

          <Card>
            <div className="flex items-center gap-2.5">
              <CompassIcon className="h-5 w-5 text-teal" />
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Find your way around
              </h2>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {quickLinks.map(({ href, label, description, Icon: Svg }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex h-full flex-col gap-2 rounded-xl border border-white/5 bg-surface-0/40 p-4 transition-colors duration-200 hover:border-lavender/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60"
                  >
                    <div className="flex items-center justify-between">
                      <Svg className="h-4 w-4 text-blue group-hover:text-lavender transition-colors duration-200" />
                      <ArrowUpRightIcon className="h-3.5 w-3.5 text-overlay-1 group-hover:text-lavender transition-colors duration-200" />
                    </div>
                    <p className="text-sm font-medium text-text group-hover:text-lavender transition-colors duration-200">
                      {label}
                    </p>
                    <p className="text-xs text-subtext-0">{description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <CompassIcon className="h-5 w-5 text-peach" />
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                A varied background.
              </h2>
            </div>
            <p className="mt-3 text-subtext-1 leading-relaxed max-w-3xl">
              I&apos;ve spent years in study groups, sports teams, video-game
              guilds, and music bands. Working across those communities taught
              me to read a problem from the outside in and attack it from the
              angle that actually moves it.
            </p>
          </Card>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {communities.map(({ label, Icon: Svg }) => (
            <li key={label}>
              <span className="border-gradient inline-flex items-center gap-2 rounded-full bg-surface-0/40 border border-white/5 px-3.5 py-1.5 text-sm text-subtext-1 transition-colors duration-200 hover:text-text cursor-default">
                <Svg className="h-3.5 w-3.5 text-lavender" />
                {label}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-overlay-1">
            / skills
          </p>
          <p className="mt-2 text-subtext-1 max-w-2xl">
            A snapshot of the work I do and the things I&apos;ve picked up
            along the way.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} bordered>
              <div className="flex items-center gap-2.5">
                <group.Icon className={`h-4 w-4 ${group.tone}`} />
                <h3 className="text-base font-semibold text-text">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-subtext-1">
                {group.skills.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-overlay-1 select-none" aria-hidden="true">
                      ·
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <GlobeIcon className="h-4 w-4 text-blue" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-overlay-1">
              / languages
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <li key={l.name}>
                <span className="inline-flex items-center gap-2 rounded-full bg-surface-0/40 border border-white/5 px-3.5 py-1.5 text-sm text-subtext-1">
                  {l.name}
                  <span className="font-mono text-[11px] uppercase tracking-wider text-overlay-1">
                    {l.level}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <PenLineIcon className="h-5 w-5 text-overlay-1 shrink-0" />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              <GradientText>Latest writing</GradientText>
            </h2>
          </div>
          {hasArticles ? (
            <Link
              href="/articles"
              className="text-sm text-subtext-1 hover:text-text transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded inline-flex items-center gap-1 shrink-0"
            >
              All articles
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>
        {hasArticles ? (
          <ul className="divide-y divide-white/5 border-y border-white/5">
            {latest.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded-sm"
                >
                  <div className="min-w-0">
                    <p className="text-text group-hover:text-lavender transition-colors duration-200 truncate">
                      {a.title}
                    </p>
                    <p className="text-sm text-subtext-0 truncate">{a.excerpt}</p>
                  </div>
                  <time
                    dateTime={a.date}
                    className="font-mono text-xs text-overlay-1 shrink-0"
                  >
                    {a.date}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Card>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-overlay-1">
              Empty for now
            </p>
            <p className="mt-3 text-text text-lg">
              Nothing here yet — I&apos;m still busy overthinking the first
              sentence.
            </p>
            <p className="mt-2 text-subtext-0 text-sm">
              The drafts exist. They just keep winning every internal
              meeting.
            </p>
          </Card>
        )}
      </section>
    </div>
  );
}
