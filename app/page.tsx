import Background from '@/components/Background';
import ContactCard from '@/components/ContactCard';
import EducationItem from '@/components/EducationItem';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import SkillCard from '@/components/SkillCard';
import { portfolio } from '@/data/portfolio';
import Image from 'next/image';

export default function Home() {
  const intro = 'Aspiring Software Engineer focused on full-stack development and real-world problem solving.';
  const phoneHref = `tel:${portfolio.phone.replace(/\\s+/g, '')}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const profileSrc = `${basePath}/profile.jpg`;

  return (
    <div id="top">
      <Background />
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20">
        <section className="pb-16 pt-20 md:pt-28">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {portfolio.title}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                {portfolio.name}
                <span className="text-gradient">.</span>
              </h1>
              <p className="mt-6 text-lg text-[color:var(--muted)] md:text-xl">
                {intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black shadow-glow transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href={`mailto:${portfolio.email}`}
                  className="rounded-full border border-slate-400/80 dark:border-white/30 px-6 py-3 text-sm font-semibold text-[color:var(--fg)] transition hover:border-[color:var(--accent)]"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </Reveal>
            <Reveal className="grid gap-4">
              <div className="flex justify-start">
                <div className="relative h-56 w-56 overflow-hidden rounded-full border border-slate-300/80 dark:border-white/15 bg-[color:var(--card)]/90 shadow-sm md:h-64 md:w-64">
                  <Image
                    src={profileSrc}
                    alt={`${portfolio.name} portrait`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 60vw, 320px"
                    className="object-cover object-top scale-125"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(12,17,22,0.0),rgba(12,17,22,0.35))]" />
                </div>
              </div>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="glass h-full rounded-2xl p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  Quick Facts
                </p>
                <div className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                  <p>
                    <span className="text-[color:var(--fg)]">Location:</span> {portfolio.location}
                  </p>
                  <p>
                    <span className="text-[color:var(--fg)]">Email:</span> {portfolio.email}
                  </p>
                  <p>
                    <span className="text-[color:var(--fg)]">Phone:</span> {portfolio.phone}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-300/80 dark:border-white/15 bg-[color:var(--card)]/90 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  Core Stack
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['ASP.NET Core', 'React', 'TypeScript', 'Spring Boot'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-300/80 dark:border-white/15 bg-[color:var(--bg)] px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="py-16">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Builder of reliable, production-ready web experiences"
              description={
                <p>
                  {portfolio.summary}
                </p>
              }
            />
          </Reveal>
        </section>

        <section id="experience" className="py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="Internship experience and hands-on delivery"
              description="A detailed look at my full-stack internship contributions."
            />
          </Reveal>
          <div className="grid gap-8">
            {portfolio.experience.map((item) => (
              <Reveal key={`${item.role}-${item.company}`}>
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
                        <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent2)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title="A balanced toolkit for backend reliability and polished UIs"
              description="Grouped by what I use daily, plus strengths that support team delivery."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.skills.map((group) => (
              <Reveal key={group.category}>
                <SkillCard {...group} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title="End-to-end builds with real operational impact"
              description="Selected academic and professional projects showcasing full-stack delivery."
            />
          </Reveal>
          <div className="grid gap-6">
            {portfolio.projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="education" className="py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Education"
              title="Academic foundation + continuous credentials"
              description="Progress toward a Computer Science degree alongside industry certifications."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.education.map((item) => (
              <Reveal key={item.degree}>
                <EducationItem {...item} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <div className="rounded-2xl border border-slate-300/80 dark:border-white/15 bg-[color:var(--card)]/90 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                Certifications
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {portfolio.certifications.map((cert) => (
                  <span
                    key={cert.title}
                    className="rounded-full border border-slate-300/80 dark:border-white/15 bg-[color:var(--bg)] px-3 py-1 text-sm"
                  >
                    {cert.issuer ? `${cert.title} - ${cert.issuer}` : cert.title}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s build something dependable"
              description="Open to associate roles and freelance collaboration."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <ContactCard label="Email" value={portfolio.email} href={`mailto:${portfolio.email}`} />
            <ContactCard label="Phone" value={portfolio.phone} href={phoneHref} />
            <ContactCard
              label="LinkedIn"
              value={portfolio.social.linkedin}
              href={`https://${portfolio.social.linkedin}`}
            />
            <ContactCard
              label="GitHub"
              value={portfolio.social.github}
              href={`https://${portfolio.social.github}`}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
