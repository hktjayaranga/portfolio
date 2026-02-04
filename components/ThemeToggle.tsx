'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ? stored === 'dark' : prefersDark;
    setIsDark(initial);
    document.documentElement.classList.toggle('dark', initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark, mounted]);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setIsDark((prev) => !prev)}
      className="flex items-center gap-2 rounded-full border border-transparent bg-[color:var(--card)] px-3 py-2 text-sm font-medium text-[color:var(--fg)] shadow-sm transition hover:border-[color:var(--accent)]"
    >
      <span className="font-mono text-xs tracking-[0.2em]">
        {isDark ? 'DARK' : 'LIGHT'}
      </span>
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full"
        style={{ background: isDark ? 'var(--accent)' : 'var(--accent2)' }}
      />
    </button>
  );
}
