import { site } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-subtext-0">
        <p>
          © {year} {site.name}.
        </p>
      </div>
    </footer>
  );
}
