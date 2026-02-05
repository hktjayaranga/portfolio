import Link from 'next/link';

type ContactCardProps = {
  label: string;
  value: string;
  href: string;
};

export default function ContactCard({ label, value, href }: ContactCardProps) {
  return (
    <Link
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="group flex items-center justify-between rounded-2xl border border-slate-300/80 dark:border-white/15 bg-[color:var(--card)]/95 p-5 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">
          {label}
        </p>
        <p className="mt-2 break-all text-base font-semibold text-slate-900 dark:text-slate-100 sm:break-words">
          {value}
        </p>
      </div>
      <span className="rounded-full border border-slate-300/80 dark:border-white/15 p-2 text-[color:var(--accent)]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M9 7h8v8" />
        </svg>
      </span>
    </Link>
  );
}
