'use client';

import { motion } from 'framer-motion';
import type { Experience } from '@/data/portfolio';

type ExperienceItemProps = {
  item: Experience;
};

export default function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <div className="relative pl-10">
      <motion.span
        className="absolute left-3 top-3 h-full w-px bg-slate-300/70 dark:bg-white/15"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ transformOrigin: 'top' }}
      />
      <motion.span
        className="absolute left-[9px] top-2 h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_0_4px_rgba(245,158,11,0.15)]"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <div className="rounded-2xl border border-slate-300/80 dark:border-white/15 bg-[color:var(--card)]/90 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {item.role} - {item.company}
            </h3>
            <p className="mt-1 text-sm text-[color:var(--muted)]">{item.focus}</p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              {item.location}
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
            {item.period}
          </span>
        </div>
        <ul className="mt-5 space-y-2 text-sm text-[color:var(--muted)]">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
