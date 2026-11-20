import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight, FiArrowUpRight, FiLock } from "react-icons/fi";
import type { Project, ProjectCategory } from "@/data/portfolio";

const accent: Record<ProjectCategory, { hex: string; tile: string; pattern: string }> = {
  Professional: { hex: "#c8f53c", tile: "tile-lime", pattern: "grid-lines" },
  Mobile: { hex: "#ff6fb1", tile: "tile-rose", pattern: "dots" },
  "Full Stack": { hex: "#ffd23f", tile: "tile-sun", pattern: "stripes" },
  Frontend: { hex: "#f3efe6", tile: "tile-bone", pattern: "dots" },
};

/** `sizes` for next/image, matched to the grid the card is rendered in (content box is 1344px inside max-w-8xl). */
const imageSizes = {
  2: "(min-width: 1408px) 664px, (min-width: 768px) 50vw, 100vw",
  3: "(min-width: 1408px) 440px, (min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw",
} as const;

/** "Essar Mobile App" → "EM", "ACTPAL" → "AC" */
function monogram(title: string) {
  const words = title.split(/\s+/).filter(Boolean);
  return (words.length > 1 ? words[0][0] + words[1][0] : title.slice(0, 2)).toUpperCase();
}

/**
 * Abstract ink line-art per category, drawn in CSS. It describes the *kind* of product
 * (phone app, dashboard, layered stack, website) — not a fake screenshot.
 */
function Schematic({
  category,
  bg,
  interactive,
  mobileApp = false,
}: {
  category: ProjectCategory;
  bg: string;
  interactive: boolean;
  /** Draw a phone in front of the main schematic (product also ships a mobile app) */
  mobileApp?: boolean;
}) {
  const bar = "rounded-full bg-ink/20";
  // Nudges with the card lift — only when the card is a link, so it never fakes clickability.
  const move = interactive ? "transition-transform duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1" : "";

  if (category === "Mobile") {
    return (
      <div className={`absolute right-[10%] top-[20%] w-[26%] min-w-[6.5rem] ${move}`}>
        <div className={`${bg} animate-float aspect-[9/17] rounded-[1.4rem] border-2 border-ink p-2.5 shadow-[5px_5px_0_0_#0d0d0d]`}>
          <div className="mx-auto mb-3 h-1.5 w-1/3 rounded-full bg-ink" />
          <div className="mb-2 h-12 rounded-lg border-2 border-ink" />
          <div className={`mb-1.5 h-2 w-4/5 ${bar}`} />
          <div className={`mb-3 h-2 w-3/5 ${bar}`} />
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-8 rounded-md border-2 border-ink" />
            <div className="h-8 rounded-md border-2 border-ink bg-ink/10" />
          </div>
        </div>
      </div>
    );
  }

  // Small companion phone, overlapping the left edge of the dashboard / browser window
  const phone = mobileApp && (
    <div className={`absolute right-[42%] top-[38%] z-[1] w-[15%] min-w-[4.5rem] ${move}`}>
      <div
        className={`${bg} animate-float aspect-[9/17] rounded-2xl border-2 border-ink p-1.5 shadow-[4px_4px_0_0_#0d0d0d]`}
        style={{ animationDelay: "-1.5s" }}
      >
        <div className="mx-auto mb-2 h-1 w-1/3 rounded-full bg-ink" />
        <div className="mb-1.5 h-7 rounded-md border-2 border-ink bg-ink/10" />
        <div className={`mb-1 h-1.5 w-4/5 ${bar}`} />
        <div className={`mb-2 h-1.5 w-3/5 ${bar}`} />
        <div className="h-5 rounded-md border-2 border-ink" />
      </div>
    </div>
  );

  if (category === "Professional") {
    return (
      <>
      {phone}
      <div className={`absolute -right-[4%] top-[24%] h-[95%] w-[56%] ${move}`}>
        <div className={`${bg} animate-float flex h-full overflow-hidden rounded-xl border-2 border-ink shadow-[5px_5px_0_0_#0d0d0d]`}>
          <div className="flex w-1/4 flex-col gap-2 border-r-2 border-ink p-2.5">
            <div className="h-2 rounded-full bg-ink" />
            <div className={`h-2 ${bar}`} />
            <div className={`h-2 ${bar}`} />
            <div className={`h-2 ${bar}`} />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-2.5">
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 rounded-md border-2 border-ink" />
              <div className="h-8 rounded-md border-2 border-ink bg-ink/10" />
              <div className="h-8 rounded-md border-2 border-ink" />
            </div>
            {[0, 1, 2, 3].map((r) => (
              <div key={r} className="flex items-center gap-2 border-b border-ink/20 pb-2">
                <div className="h-2 w-2 rounded-full bg-ink" />
                <div className={`h-2 flex-1 ${bar}`} />
                <div className={`h-2 w-1/4 ${bar}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    );
  }

  if (category === "Full Stack") {
    // UI / API / DB — three offset layers
    return (
      <div className={`absolute right-[7%] top-[22%] w-[46%] ${move}`}>
        {["ui", "api", "db"].map((layer, i) => (
          <div
            key={layer}
            className={`${bg} animate-float relative flex h-[2.6rem] items-center justify-between rounded-xl border-2 border-ink px-3 font-mono text-xs font-medium text-ink shadow-[4px_4px_0_0_#0d0d0d] sm:h-12`}
            // Layers float out of phase so the stack "breathes"
            style={{ marginLeft: `${i * 9}%`, marginTop: i ? "0.5rem" : 0, animationDelay: `${i * -0.6}s` }}
          >
            {layer}
            <span className="flex gap-1">
              <span className="h-1.5 w-6 rounded-full bg-ink/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            </span>
          </div>
        ))}
      </div>
    );
  }

  // Frontend — a browser window
  return (
    <div className={`absolute -right-[4%] top-[24%] h-[95%] w-[56%] ${move}`}>
      <div className={`${bg} animate-float h-full overflow-hidden rounded-xl border-2 border-ink shadow-[5px_5px_0_0_#0d0d0d]`}>
        <div className="flex items-center gap-1.5 border-b-2 border-ink px-2.5 py-2">
          <span className="h-2 w-2 rounded-full bg-ink" />
          <span className="h-2 w-2 rounded-full bg-ink/40" />
          <span className="h-2 w-2 rounded-full bg-ink/40" />
        </div>
        <div className="p-3">
          <div className="mb-2 h-3 w-3/4 rounded-full bg-ink" />
          <div className={`mb-1.5 h-2 w-full ${bar}`} />
          <div className={`mb-3 h-2 w-2/3 ${bar}`} />
          <div className="h-5 w-1/3 rounded-full border-2 border-ink" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({
  project,
  index = 0,
  columns = 2,
}: {
  project: Project;
  index?: number;
  /** Number of columns in the widest layout of the parent grid (affects image `sizes` and stagger). */
  columns?: 2 | 3;
}) {
  const { title, subtitle, category, description, highlights, tech, image, live, repo, mobileApp } = project;
  const a = accent[category];
  const no = String(index + 1).padStart(2, "0");
  const primary = live ?? repo;

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={(index % columns) * 100}
      style={{ ["--accent" as string]: a.hex }}
      // Only lift the card when the whole card is clickable (stretched title link below);
      // otherwise just light the border in the accent colour.
      className={`tile group flex h-full flex-col overflow-hidden ${primary ? "tile-hover" : "hover:border-[var(--accent)]"}`}
    >
      {/* Cover — one aspect ratio for every card, screenshot or not */}
      <div
        className={`relative aspect-[16/10] overflow-hidden ${
          image ? "dots-light border-b border-line bg-panel2" : `${a.tile} border-b-2 border-ink`
        }`}
      >
        {image ? (
          <div className="absolute inset-x-5 bottom-0 top-11 flex flex-col overflow-hidden rounded-t-xl border border-b-0 border-line bg-ink sm:inset-x-7">
            <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-line bg-panel px-3" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-rose" />
              <span className="h-2 w-2 rounded-full bg-sun" />
              <span className="h-2 w-2 rounded-full bg-lime" />
            </div>
            <div className="relative flex-1">
              <Image
                src={image}
                alt={`${title} screenshot`}
                fill
                sizes={imageSizes[columns]}
                className={`object-cover object-top transition-transform duration-500 ease-out ${primary ? "group-hover:scale-[1.03]" : ""}`}
              />
            </div>
          </div>
        ) : (
          // No screenshot: a designed cover (pattern + category schematic + monogram). Decorative —
          // the title is the h3 below.
          <div aria-hidden>
            <div className={`absolute inset-0 ${a.pattern} opacity-70`} />
            <Schematic category={category} bg={a.tile} interactive={Boolean(primary)} mobileApp={mobileApp} />
            {/* Monogram with an offset outline copy behind it — slides apart on hover */}
            <span className="absolute bottom-3 left-5 select-none font-display text-[5.5rem] font-extrabold leading-[0.8] tracking-tighter sm:left-6 sm:text-[7rem]">
              <span className="absolute left-0 top-0 translate-x-[5px] translate-y-[5px] text-transparent transition-transform duration-300 ease-out [-webkit-text-stroke:2px_#0d0d0d] group-hover:translate-x-[10px] group-hover:translate-y-[9px]">
                {monogram(title)}
              </span>
              <span className="relative text-ink">{monogram(title)}</span>
            </span>
          </div>
        )}

        <span className={`absolute left-5 top-4 sm:left-6 ${image ? "label" : "label-ink"}`}>
          {no} / {category}
        </span>

        {/* Status sticker — tilted, straightens on hover */}
        <span
          className={`pointer-events-none absolute top-3 z-10 inline-flex -rotate-6 items-center gap-1.5 rounded-full border-2 border-ink px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink shadow-[3px_3px_0_0_#0d0d0d] transition-transform duration-300 group-hover:rotate-0 ${
            primary ? "right-16" : "right-4"
          } ${live ? "bg-lime" : "bg-bone"}`}
        >
          {live ? (
            <>
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
              </span>
              Live
            </>
          ) : repo ? (
            <>
              <FaGithub aria-hidden /> Open source
            </>
          ) : (
            <>
              <FiLock aria-hidden /> Private
            </>
          )}
        </span>
        {primary && (
          <span
            aria-hidden
            className="absolute right-4 top-3 grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-bone text-ink transition-transform duration-200 group-hover:rotate-45"
          >
            <FiArrowUpRight size={16} />
          </span>
        )}
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col gap-4 p-6 sm:p-7">
        {/* Big outlined index in the accent colour */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-5 top-4 select-none font-display text-6xl font-extrabold leading-none tracking-tighter text-transparent opacity-50 transition-opacity duration-300 [-webkit-text-stroke:1.5px_var(--accent)] group-hover:opacity-100 sm:right-7"
        >
          {no}
        </span>
        <div className="pr-20">
          <h3 className="h-card text-bone">
            {primary ? (
              // Stretched link: its ::after covers the whole card, so the card lift is a real affordance.
              <a href={primary} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 after:content-['']">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <p className="mt-0.5 font-serif text-lg italic" style={{ color: a.hex }}>
            {subtitle}
          </p>
        </div>
        <p className="max-w-prose text-sm leading-relaxed text-bone/75">{description}</p>

        {highlights.length > 0 && (
          <ul className="max-w-prose space-y-2 text-sm leading-relaxed text-bone/75">
            {highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45" style={{ background: a.hex }} aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-col gap-5 pt-2">
          {tech.length > 0 && (
            <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
              {tech.map((t) => (
                <li key={t} className="tag transition-colors duration-200 group-hover:border-[var(--accent)]">
                  {t}
                </li>
              ))}
            </ul>
          )}

          {/* relative z-10 keeps these links above the stretched title link */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-t border-line pt-4 text-sm font-medium">
            {primary ? (
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {live && (
                  <a href={live} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 text-bone">
                    Visit live <span className="sr-only">— {title}</span> <FiArrowUpRight aria-hidden />
                  </a>
                )}
                {repo && (
                  <a href={repo} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 text-bone">
                    <FaGithub aria-hidden /> Source <span className="sr-only">code for {title}</span>
                  </a>
                )}
              </div>
            ) : (
              <>
                <span className="inline-flex items-center gap-2 font-mono text-xs text-mute">
                  <FiLock aria-hidden /> No public link
                </span>
                <Link href="/contact" className="link group/ask inline-flex items-center gap-1 text-bone">
                  Ask me about it <span className="sr-only">— {title}</span>
                  <FiArrowRight aria-hidden className="transition-transform group-hover/ask:translate-x-0.5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
