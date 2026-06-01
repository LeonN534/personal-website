import Link from "next/link";
import { ArrowLeftIcon } from "./components/Icon";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-overlay-1">
        404
      </p>
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 text-subtext-1">
        It may have moved, or the link might be wrong. Either way, the front
        door is just below.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-base/60 px-5 py-2.5 text-sm text-text hover:border-lavender/40 hover:text-lavender transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back home
      </Link>
    </div>
  );
}
