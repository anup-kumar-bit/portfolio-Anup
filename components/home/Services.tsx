import { TbApi, TbBrandNextjs, TbDeviceMobile, TbDatabase, TbShieldLock, TbRocket } from "react-icons/tb";

type Service = { icon: React.ReactNode; title: string; body: string; tags: string[]; cls: string; accent: string };

const services: Service[] = [
  {
    icon: <TbApi />,
    title: "Backend & APIs",
    body: "Async FastAPI and Node.js services with clean service layers, background jobs and webhook handling.",
    tags: ["FastAPI", "Node.js", "REST", "Async jobs"],
    cls: "md:col-span-4 tile-lime",
    accent: "#c8f53c",
  },
  {
    icon: <TbDeviceMobile />,
    title: "Mobile apps",
    body: "Cross-platform React Native apps — like the Essar dental clinic app.",
    tags: ["React Native"],
    cls: "md:col-span-2 tile-rose",
    accent: "#ff6fb1",
  },
  {
    icon: <TbBrandNextjs />,
    title: "Web apps",
    body: "Fast, accessible Next.js frontends with SSR and SEO built in.",
    tags: ["Next.js", "React", "Astro"],
    cls: "md:col-span-2",
    accent: "#ffd23f",
  },
  {
    icon: <TbShieldLock />,
    title: "Auth & RBAC",
    body: "JWT role-based access shared across web and mobile clients.",
    tags: ["JWT", "RBAC"],
    cls: "md:col-span-2",
    accent: "#ff6fb1",
  },
  {
    icon: <TbDatabase />,
    title: "Data & performance",
    body: "Schema design, indexing and query tuning — ~30% faster APIs in production.",
    tags: ["MySQL", "PostgreSQL"],
    cls: "md:col-span-2 tile-sun",
    accent: "#ffd23f",
  },
  {
    icon: <TbRocket />,
    title: "Ship & automate",
    body: "Docker, GitHub Actions CI/CD, Vercel and AWS — from local dev to production.",
    tags: ["Docker", "CI/CD", "AWS"],
    cls: "md:col-span-6",
    accent: "#c8f53c",
  },
];

/** Capability bento. Static (not links), so no hover lift. */
export default function Services() {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-6">
      {services.map((s, i) => {
        const solid = /tile-(lime|sun|rose)/.test(s.cls);
        const wide = s.cls.includes("col-span-6");
        return (
          <li
            key={s.title}
            data-aos="fade-up"
            data-aos-delay={(i % 3) * 50}
            className={`tile flex flex-col justify-between gap-8 overflow-hidden p-6 sm:p-7 ${s.cls}`}
          >
            <div className="flex items-start justify-between">
              <span
                aria-hidden
                className={`grid h-11 w-11 place-items-center rounded-xl border-2 text-2xl ${
                  solid ? "border-ink bg-ink text-bone" : "border-line bg-panel2"
                }`}
                style={solid ? undefined : { color: s.accent }}
              >
                {s.icon}
              </span>
              <span aria-hidden className={`font-mono text-xs ${solid ? "text-ink/75" : "text-mute"}`}>
                0{i + 1}
              </span>
            </div>
            <div className={wide ? "md:flex md:items-end md:justify-between md:gap-10" : ""}>
              <div>
                <h3 className={`h-card ${solid ? "text-ink" : "text-bone"}`}>{s.title}</h3>
                <p className={`mt-2 max-w-md text-sm leading-relaxed ${solid ? "text-ink/80" : "text-bone/70"}`}>{s.body}</p>
              </div>
              <ul className={`flex flex-wrap gap-1.5 ${wide ? "mt-5 md:mt-0 md:justify-end" : "mt-5"}`} aria-label={`${s.title} tools`}>
                {s.tags.map((t) => (
                  <li key={t} className={solid ? "tag-ink" : "tag"}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
