import type { Metadata } from "next";
import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import { ArrowUpRightIcon, KofiIcon, LiberapayIcon } from "../components/Icon";
import { site } from "../data/site";

const siteUrl = "https://www.leonardoromero.xyz";
const logoPath = "/personal-logo.png";

export const metadata: Metadata = {
  title: "Support",
  description: "If my work has been useful, here's how to give back.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    type: "website",
    title: `Support · ${site.name}`,
    description: "If my work has been useful, here's how to give back.",
    url: `${siteUrl}/support`,
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
    title: `Support · ${site.name}`,
    description: "If my work has been useful, here's how to give back.",
    images: [logoPath],
  },
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <PageHeader
        meta="Give back"
        title="Support my work"
        subtitle="If something here has been useful to you, consider supporting the work that goes into it. It really does help."
      />

      <div className="grid gap-6 md:grid-cols-2 pb-16 md:pb-24">
        <Card bordered className="flex flex-col">
          <LiberapayIcon className="h-5 w-5 text-yellow" />
          <h3 className="mt-4 text-lg font-semibold text-text">
            Liberapay
          </h3>
          <p className="mt-2 text-subtext-1 leading-relaxed">
            Recurring support for the open-source work I do in public. Run by
            a non-profit, transparent, and fee-free.
          </p>
          <a
            href={site.support.liberapay}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 self-start text-lavender hover:text-blue transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
          >
            Donate on Liberapay
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </Card>

        <Card className="flex flex-col">
          <KofiIcon className="h-5 w-5 text-peach" />
          <h3 className="mt-4 text-lg font-semibold text-text">Ko-fi</h3>
          <p className="mt-2 text-subtext-1 leading-relaxed">
            A one-off tip for a piece of writing or a tool that saved you time.
            No tiers, no commitment.
          </p>
          <a
            href={site.support.kofi}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 self-start text-lavender hover:text-blue transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
          >
            Tip on Ko-fi
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </Card>
      </div>

      <p className="text-sm text-subtext-0 pb-8">
        If sponsoring isn&apos;t possible, sharing an article or starring a
        repo helps just as much. Thank you.
      </p>
    </div>
  );
}
