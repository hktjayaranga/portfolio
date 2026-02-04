import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { portfolio } from '@/data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/80 dark:border-white/15 bg-[color:var(--bg)]/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="text-lg font-semibold tracking-tight">
          {portfolio.name.split(' ')[0]}
          <span className="text-gradient">.</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[color:var(--muted)] transition hover:text-[color:var(--fg)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
