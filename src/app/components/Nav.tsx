"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../data/site";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 mx-auto max-w-5xl"
      aria-label="Primary"
    >
      <div className="flex items-center justify-between gap-4 rounded-full border border-white/5 bg-base/70 px-4 py-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
        <Link
          href="/"
          aria-label={`${site.name} — Home`}
          className="inline-flex items-center gap-2 rounded-full px-2 py-1 hover:opacity-80 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60"
        >
          <Image
            src="/personal-logo.png"
            alt=""
            width={28}
            height={28}
            priority
            className="h-7 w-7 rounded-md"
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`cursor-pointer rounded-full px-3 py-1.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50 ${
                    active
                      ? "bg-surface-0/70 ring-1 ring-lavender/20 nav-link-active"
                      : "text-subtext-1 hover:text-text hover:bg-surface-0/30"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex items-center gap-1">
          <li>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-full text-subtext-1 hover:text-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60"
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
              className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-full text-subtext-1 hover:text-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
