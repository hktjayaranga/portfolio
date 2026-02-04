import Link from 'next/link';
import { portfolio } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-slate-300/80 dark:border-white/15 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm md:flex-row md:items-center">
        <p className="text-[color:var(--muted)]">
          (c) {new Date().getFullYear()} {portfolio.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em]">
          <Link
            href={`https://${portfolio.social.github}`}
            target="_blank"
            rel="noreferrer"
            className="text-[color:var(--muted)] transition hover:text-[color:var(--fg)]"
          >
            GitHub
          </Link>
          <Link
            href={`https://${portfolio.social.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="text-[color:var(--muted)] transition hover:text-[color:var(--fg)]"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
