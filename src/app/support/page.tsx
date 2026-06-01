import type { Metadata } from "next";
import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import { ArrowUpRightIcon, CoffeeIcon, HeartIcon } from "../components/Icon";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Support",
  description: "If my work has been useful, here's how to give back.",
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
          <HeartIcon className="h-5 w-5 text-mauve" />
          <h3 className="mt-4 text-lg font-semibold text-text">
            Sponsor on GitHub
          </h3>
          <p className="mt-2 text-subtext-1 leading-relaxed">
            Recurring sponsorship directly funds the open-source work I do in
            public. Pick a tier or set a custom amount.
          </p>
          <a
            href={site.support.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 self-start text-lavender hover:text-blue transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
          >
            Become a sponsor
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </Card>

        <Card className="flex flex-col">
          <CoffeeIcon className="h-5 w-5 text-peach" />
          <h3 className="mt-4 text-lg font-semibold text-text">
            Buy me a coffee
          </h3>
          <p className="mt-2 text-subtext-1 leading-relaxed">
            A one-off tip for a piece of writing or a tool that saved you time.
            No tiers, no commitment.
          </p>
          <a
            href={site.support.coffee}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 self-start text-lavender hover:text-blue transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
          >
            Tip once
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
