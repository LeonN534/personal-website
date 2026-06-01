import { site } from "../data/site";
import { GithubIcon, LinkedinIcon, RssIcon } from "./SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-subtext-0">
        <p>
          © {year} {site.name}. Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtext-1 hover:text-text transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60 rounded"
          >
            Next.js
          </a>
          .
        </p>
        <ul className="flex items-center gap-2">
          <li>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-full hover:text-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-full hover:text-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={site.socials.rss}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RSS feed"
              className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-full hover:text-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60"
            >
              <RssIcon className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
