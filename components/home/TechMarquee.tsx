const stack = [
  "Python", "FastAPI", "Next.js", "React", "React Native", "TypeScript", "Node.js", "Express",
  "MySQL", "PostgreSQL", "MongoDB", "Redux", "Tailwind", "Astro", "Docker", "AWS", "GitHub Actions",
];

/** Two crossing tilted bands — lime and pink — listing the stack. */
export default function TechMarquee() {
  const row = [...stack, ...stack];
  return (
    <section aria-label="Tech stack" className="relative py-16 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-[2deg] bg-rose py-3" aria-hidden>
        <div className="flex w-max animate-marquee [animation-direction:reverse]">
          {row.map((t, i) => (
            <span key={i} className="px-5 font-mono text-sm uppercase tracking-wider text-ink/80 whitespace-nowrap">
              {t} /
            </span>
          ))}
        </div>
      </div>
      <div className="relative -rotate-[2deg] bg-lime py-4 border-y-2 border-ink">
        <ul className="marquee-track flex w-max animate-marquee">
          {row.map((t, i) => (
            <li key={i} aria-hidden={i >= stack.length} className="flex items-center gap-6 px-6 font-display text-3xl font-bold text-ink whitespace-nowrap">
              {t} <span className="text-xl">✺</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
