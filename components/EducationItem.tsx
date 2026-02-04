import type { EducationItem as EducationItemType } from '@/data/portfolio';

export default function EducationItem({ degree, institution, period, meta }: EducationItemType) {
  return (
    <div className="relative rounded-2xl border border-slate-300/80 dark:border-white/15 bg-[color:var(--card)]/90 p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold">{degree}</h3>
          <p className="text-sm text-[color:var(--muted)]">{institution}</p>
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
          {period}
        </span>
      </div>
      {meta ? <p className="mt-3 text-sm text-[color:var(--muted)]">{meta}</p> : null}
    </div>
  );
}
