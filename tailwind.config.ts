import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)']
      },
      colors: {
        base: 'var(--bg)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        card: 'var(--card)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(14, 165, 164, 0.25), 0 24px 64px -32px rgba(14, 165, 164, 0.6)'
      }
    }
  },
  plugins: []
};

export default config;
