import type { ReactNode } from 'react';

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: ReactNode;
};

export default function SectionHeading({ title, eyebrow, description }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <div className="mt-4 text-lg text-[color:var(--muted)]">
          {description}
        </div>
      ) : null}
    </div>
  );
}
