'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/data/portfolio';

export default function ProjectCard({ title, description, bullets, technologies }: Project) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group rounded-2xl border border-slate-300/80 dark:border-white/15 bg-[color:var(--card)]/90 p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
          Project
        </span>
      </div>
      <p className="mt-3 text-[color:var(--muted)]">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent2)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-300/80 dark:border-white/15 bg-[color:var(--bg)] px-3 py-1 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
