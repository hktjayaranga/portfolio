import type { SkillGroup } from '@/data/portfolio';

export default function SkillCard({ category, items }: SkillGroup) {
  return (
    <div className="glass rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{category}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-300/80 dark:border-white/15 bg-[color:var(--bg)]/80 px-3 py-1 text-sm text-[color:var(--muted)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
