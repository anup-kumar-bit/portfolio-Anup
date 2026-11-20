import Link from "next/link";
import { FiArrowDownRight, FiArrowRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, workedOn } from "@/data/portfolio";

/** Small code card — shows the kind of work instead of a photo. */
function CodeCard() {
  return (
    <div className="tile overflow-hidden h-full">
      <div className="flex items-center justify-between px-4 h-9 border-b border-line bg-panel2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose" />
          <span className="h-2.5 w-2.5 rounded-full bg-sun" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime" />
        </div>
        <span className="font-mono text-[10px] text-mute">orders/service.py</span>
      </div>
      <pre className="p-4 font-mono text-[12px] leading-6 text-bone/80 overflow-x-auto">
        <code>
          <span className="text-rose">@router</span>.post(<span className="text-sun">&quot;/orders&quot;</span>){"\n"}
          <span className="text-lime">async def</span> create_order({"\n"}
          {"    "}data: OrderIn,{"\n"}
          {"    "}user = Depends(<span className="text-sun">require_role</span>(<span className="text-sun">&quot;customer&quot;</span>)),{"\n"}
          ):{"\n"}
          {"    "}order = <span className="text-lime">await</span> orders.create(data, user){"\n"}
          {"    "}tasks.add(<span className="text-sun">notify</span>, order.id){"\n"}
          {"    "}<span className="text-lime">return</span> order
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-9xl px-6 pt-16 md:pt-24">
      {/* Top meta row */}
      <div data-aos="fade-up" className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
        <span className="label">Portfolio</span>
        <span className="inline-flex items-center gap-2 font-mono text-[11px] text-bone">
          <span className="h-2 w-2 rounded-full bg-lime" /> Available for full-time & freelance
        </span>
      </div>

      {/* Headline */}
      <div className="relative pt-12 pb-12 md:pt-16 md:pb-14">
        <h1
          data-aos="fade-up"
          data-aos-delay="80"
          className="font-display text-[9vw] sm:text-6xl lg:text-[5.25rem] font-bold tracking-[-0.045em] leading-[0.92] text-bone"
        >
          <span className="flex items-center gap-[0.18em]">
            <span>
              Full stack{" "}
              <span className="text-transparent [-webkit-text-stroke:2px_#f3efe6]">dev</span>
            </span>
            <span
              aria-hidden
              className="inline-flex h-[0.62em] w-[0.62em] shrink-0 items-center justify-center rounded-full bg-lime text-ink text-[0.32em] -rotate-12 transition-transform duration-500 hover:rotate-0"
            >
              <FiArrowDownRight />
            </span>
          </span>
          <span className="block">
            building <span className="font-serif italic font-normal tracking-normal text-sun">reliable</span>{" "}
            <span className="relative inline-block">
              products
              <svg aria-hidden viewBox="0 0 300 20" className="absolute left-0 -bottom-2 w-full h-4 text-rose" preserveAspectRatio="none">
                <path d="M2 14 C 60 4, 120 4, 180 10 S 270 16, 298 6" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-lime">.</span>
          </span>
        </h1>

        {/* Side note — fills the empty space beside the short first line on large screens */}
        <div
          data-aos="fade-up"
          data-aos-delay="160"
          className="hidden lg:flex absolute right-0 top-16 max-w-[19rem] flex-col gap-4 border-l border-line pl-6"
        >
          <span className="label">Backend · Web · Mobile</span>
          <p className="text-sm leading-relaxed text-bone/70">
            APIs in FastAPI, web apps in Next.js and mobile apps in React Native — designed, built and shipped end to end.
          </p>
        </div>
      </div>

      {/* Bento */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Intro */}
        <div data-aos="fade-up" className="tile p-8 md:col-span-3 flex flex-col justify-between gap-8">
          <p className="text-lg text-bone/80 leading-relaxed">
            Hi, I&apos;m <span className="text-bone font-semibold">Anup Kumar</span> — a full stack developer at{" "}
            <span className="marker text-ink font-medium">Insoftlink Software</span> in Delhi, and founder of{" "}
            <a href={profile.company.url} target="_blank" rel="noopener noreferrer" className="text-bone font-semibold underline decoration-rose decoration-2 underline-offset-4 hover:text-rose transition-colors">
              {profile.company.name}
            </a>
            . I design FastAPI backends, ship Next.js
            web apps and build React Native mobile apps for real clients.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/works" className="btn-lime">
              See my work <FiArrowRight />
            </Link>
            <a href={profile.resume} download={profile.resumeFileName} className="btn-outline">
              <FiDownload /> Download resume
            </a>
          </div>
        </div>

        {/* Code */}
        <div data-aos="fade-up" data-aos-delay="80" className="md:col-span-3">
          <CodeCard />
        </div>

        {/* Currently */}
        <div data-aos="fade-up" className="tile tile-sun p-8 md:col-span-2 relative overflow-hidden">
          <div className="absolute inset-0 stripes opacity-60" />
          <div className="relative">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">Currently</p>
            <p className="mt-3 font-display text-2xl font-bold leading-tight">Full Stack Developer</p>
            <p className="font-serif italic text-xl">@ Insoftlink Software</p>
            <p className="mt-4 text-sm text-ink/70">Since March 2025 · School Aura ERP, ACTPAL</p>
          </div>
        </div>

        {/* Focus */}
        <div data-aos="fade-up" data-aos-delay="80" className="tile tile-rose p-8 md:col-span-2 relative overflow-hidden">
          <div className="absolute inset-0 dots opacity-70" />
          <div className="relative">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">Main stack</p>
            <ul className="mt-3 font-display text-2xl font-bold leading-snug">
              <li>Python · FastAPI</li>
              <li>Node.js · Express</li>
              <li>Next.js · React</li>
              <li>React Native</li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div data-aos="fade-up" data-aos-delay="160" className="md:col-span-2 grid grid-cols-2 gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ ["--accent" as string]: "#c8f53c" }}
            className="tile tile-hover p-5 flex flex-col justify-between">
            <FaGithub className="text-2xl text-bone" />
            <span className="flex items-center justify-between text-sm text-bone">GitHub <FiArrowUpRight /></span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ ["--accent" as string]: "#ff6fb1" }}
            className="tile tile-hover p-5 flex flex-col justify-between">
            <FaLinkedin className="text-2xl text-bone" />
            <span className="flex items-center justify-between text-sm text-bone">LinkedIn <FiArrowUpRight /></span>
          </a>
          <div className="tile tile-lime col-span-2 p-5 flex items-center justify-between">
            <span className="font-display text-lg font-bold">Based in Delhi</span>
            <span className="font-mono text-[11px]">IST · UTC+5:30</span>
          </div>
        </div>
      </div>

      {/* Worked on */}
      <div className="mt-20 flex flex-col md:flex-row md:items-center gap-4 md:gap-10 border-y border-line py-8">
        <p className="label shrink-0">Shipped for</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {workedOn.map((w) => (
            <li key={w} className="font-display text-lg font-medium text-mute">{w}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
