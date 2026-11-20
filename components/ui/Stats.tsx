import { stats } from "@/data/portfolio";

const colors = ["tile-lime", "tile-sun", "tile-rose", "tile-bone"];

/** Plain numbers in solid colour blocks — no counters, gradients or animations. */
export default function Stats() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {stats.map((s, i) => (
        <li key={s.label} className={`tile ${colors[i % colors.length]} flex min-h-[9.5rem] flex-col justify-between gap-6 p-5 sm:p-6`}>
          <span className="label-ink" aria-hidden>
            0{i + 1}
          </span>
          <div>
            <p className="font-display text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl">{s.value}</p>
            <p className="mt-2 text-sm font-medium leading-snug text-ink/80">{s.label}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
