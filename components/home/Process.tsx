const steps = [
  {
    title: "Understand & design",
    body: "Clarify requirements, model the data and design clean REST contracts before writing code.",
    color: "bg-lime",
  },
  {
    title: "Build & iterate",
    body: "Modular FastAPI / Node services and reusable UI components, shipped in small, reviewable pieces.",
    color: "bg-sun",
  },
  {
    title: "Optimize & ship",
    body: "Index and tune queries, add caching, automate CI/CD and trace issues across API and DB layers.",
    color: "bg-rose",
  },
];

export default function Process() {
  return (
    <ol className="grid border-t border-line md:grid-cols-3">
      {steps.map((s, i) => (
        <li
          key={s.title}
          data-aos="fade-up"
          data-aos-delay={i * 100}
          className="border-b border-line py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
        >
          <div className="flex items-center gap-3" aria-hidden>
            <span className={`grid h-9 w-9 place-items-center rounded-full border-2 border-ink ${s.color} font-mono text-xs font-medium text-ink shadow-[3px_3px_0_0_#f3efe6]`}>
              {i + 1}
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <h3 className="h-card mt-6 text-bone">{s.title}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-bone/70">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
