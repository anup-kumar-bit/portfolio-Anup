import { FiArrowUpRight } from "react-icons/fi";
import { experience, education, skills, type Experience } from "@/data/portfolio";

const jobColors = ["#c8f53c", "#ff6fb1", "#ffd23f"];

/** Company name — links to the company site when one is given. */
function Company({ job }: { job: Experience }) {
  if (!job.link) return <>{job.company}</>;
  return (
    <a
      href={job.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]"
    >
      {job.company}
      <FiArrowUpRight aria-hidden className="text-[0.75em] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

/**
 * Full work history (About page). Static cards — they are not links, so they don't lift on hover;
 * the accent rail on the left ties each role to its colour instead.
 */
export function ExperienceTimeline() {
  return (
    <ol className="flex flex-col gap-3 sm:gap-4">
      {experience.map((job, i) => (
        <li
          key={job.company}
          data-aos="fade-up"
          data-aos-delay={i * 100}
          style={{ ["--accent" as string]: jobColors[i % jobColors.length] }}
          className="tile grid overflow-hidden md:grid-cols-[15rem_minmax(0,1fr)]"
        >
          <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-[var(--accent)]" />
          <div className="flex justify-between gap-3 border-b border-line bg-panel2 p-6 md:flex-col md:border-b-0 md:border-r">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-bone/85">{job.period}</span>
            <span className="inline-flex items-center gap-2 self-start font-mono text-xs text-mute">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
              {job.location}
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold tracking-tight text-bone sm:text-3xl">
              <Company job={job} />
            </h3>
            <p className="font-serif text-xl italic text-mute">{job.role}</p>
            <p className="mt-3 font-mono text-xs text-[var(--accent)]">{job.stack}</p>
            <ul className="mt-5 max-w-prose space-y-2.5 text-sm leading-relaxed text-bone/75">
              {job.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--accent)]" aria-hidden />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Condensed experience for the home page: one row per role with its lead achievement. */
export function ExperienceSummary() {
  return (
    <ol data-aos="fade-up" className="tile divide-y divide-line overflow-hidden">
      {experience.map((job, i) => (
        <li
          key={job.company}
          style={{ ["--accent" as string]: jobColors[i % jobColors.length] }}
          className="relative grid gap-x-10 gap-y-3 p-6 sm:p-8 md:grid-cols-[11rem_minmax(0,1fr)] xl:grid-cols-[11rem_minmax(0,1fr)_15rem]"
        >
          <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-[var(--accent)]" />
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 md:flex-col md:items-start md:pt-2">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-bone/85">{job.period}</span>
            <span className="font-mono text-xs text-mute">{job.location}</span>
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-2xl font-bold tracking-tight text-bone">
              <Company job={job} />
            </h3>
            <p className="font-serif text-lg italic text-mute">{job.role}</p>
            {job.points[0] && <p className="mt-3 max-w-prose text-sm leading-relaxed text-bone/75">{job.points[0]}</p>}
          </div>
          <p className="font-mono text-xs leading-relaxed text-[var(--accent)] xl:pt-2 xl:text-right">{job.stack}</p>
        </li>
      ))}
    </ol>
  );
}

export function EducationCard() {
  return (
    <div data-aos="fade-up" className="tile tile-lime relative flex h-full flex-col overflow-hidden p-6 sm:p-8">
      <div className="dots absolute inset-0 opacity-50" aria-hidden />
      <div className="relative flex h-full flex-col">
        <p className="label-ink">Education · {education.period}</p>
        <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight">{education.degree}</h3>
        <p className="mt-1 font-serif text-xl italic">{education.school}</p>
        <p className="mt-1 text-sm text-ink/80">{education.detail}</p>
        <div className="mt-8 flex items-baseline gap-2">
          <span className="font-display text-6xl font-bold tracking-tight">{education.gpa.split(" ")[0]}</span>
          <span className="font-mono text-xs text-ink/80">/ 10 GPA</span>
        </div>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-8" aria-label="Coursework">
          {education.coursework.map((c) => (
            <li key={c} className="tag-ink">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const skillColors = ["#c8f53c", "#ffd23f", "#ff6fb1", "#f3efe6", "#c8f53c", "#ffd23f"];

export function SkillsGrid() {
  return (
    <div data-aos="fade-up" data-aos-delay="100" className="tile h-full p-6 sm:p-8">
      <h3 className="label">Technical skills</h3>
      <dl className="mt-6 divide-y divide-line">
        {skills.map((s, i) => (
          <div key={s.group} className="grid items-start gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr]">
            <dt className="flex items-center gap-2 pt-0.5 font-display font-semibold text-bone">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: skillColors[i % skillColors.length] }} aria-hidden />
              {s.group}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <li key={it} className="tag">
                    {it}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
