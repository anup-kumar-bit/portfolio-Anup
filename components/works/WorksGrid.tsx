"use client";
import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/data/portfolio";
import ProjectCard from "@/components/ui/ProjectCard";

type Filter = "All" | ProjectCategory;

const filters: { key: Filter; dot: string; shadow: string }[] = [
  { key: "All", dot: "bg-bone", shadow: "#f3efe6" },
  { key: "Professional", dot: "bg-lime", shadow: "#c8f53c" },
  { key: "Mobile", dot: "bg-rose", shadow: "#ff6fb1" },
  { key: "Full Stack", dot: "bg-sun", shadow: "#ffd23f" },
  { key: "Frontend", dot: "bg-bone", shadow: "#f3efe6" },
];

/** A project matches a filter by category; projects that also ship a mobile app match "Mobile" too. */
function matches(p: (typeof projects)[number], key: Filter) {
  return key === "All" || p.category === key || (key === "Mobile" && Boolean(p.mobileApp));
}

/** Category filter (toggle buttons) + project grid. */
export default function WorksGrid() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(() => projects.filter((p) => matches(p, active)), [active]);

  return (
    <>
      <div className="mb-10 mt-12 flex flex-col gap-4 border-y border-line py-5 md:mt-16 md:flex-row md:items-center md:gap-8">
        <span className="label shrink-0">Filter</span>
        <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2.5">
          {filters.map(({ key, dot, shadow }) => {
            const count = projects.filter((p) => matches(p, key)).length;
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(key)}
                style={isActive ? { boxShadow: `3px 3px 0 0 ${shadow}` } : undefined}
                className={`inline-flex min-h-[2.5rem] items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs transition-[background-color,color,border-color,transform] duration-150 active:translate-y-px ${
                  isActive
                    ? "-translate-x-px -translate-y-px border-ink bg-bone text-ink"
                    : "border-line text-bone/85 hover:border-bone/60 hover:text-bone"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${dot} ${isActive ? "ring-1 ring-ink/40" : ""}`} aria-hidden />
                {key}
                <span
                  className={`rounded-full px-1.5 py-px ${isActive ? "bg-ink text-bone" : "bg-panel2 text-mute"}`}
                >
                  <span className="sr-only">(</span>
                  {count}
                  <span className="sr-only"> projects)</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Announces the result count to screen readers when the filter changes */}
      <p aria-live="polite" className="sr-only">
        {active === "All"
          ? `Showing all ${visible.length} projects`
          : `Showing ${visible.length} ${active} ${visible.length === 1 ? "project" : "projects"}`}
      </p>

      <div key={active} className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} columns={3} />
        ))}
      </div>
    </>
  );
}
