import Link from "next/link";
import { FiArrowUp, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "Resume", href: profile.resume },
  ];

  const linkCls = "inline-flex items-center gap-1 underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-lime hover:decoration-lime";

  return (
    <footer className="mt-24 border-t border-line md:mt-32">
      <div className="wrap pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr] md:gap-10">
          <div>
            <p className="label mb-4">Got an idea?</p>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 font-display text-5xl font-bold leading-none tracking-[-0.03em] text-bone sm:text-7xl"
            >
              Let&apos;s <span className="font-serif font-normal italic">talk</span>
              <span
                aria-hidden
                className="grid h-[0.8em] w-[0.8em] place-items-center rounded-full border-2 border-ink bg-lime text-[0.45em] text-ink shadow-[3px_3px_0_0_#f3efe6] transition-transform duration-200 group-hover:rotate-45"
              >
                <FiArrowUpRight />
              </span>
            </a>
            <p className="mt-5 break-all font-mono text-sm text-bone/70">{profile.email}</p>
          </div>
          <nav aria-label="Footer">
            <p className="label mb-4">Pages</p>
            <ul className="space-y-2.5 text-bone/85">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className={linkCls}>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="label mb-4">Elsewhere</p>
            <ul className="space-y-2.5 text-bone/85">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    // mailto: opens the mail client; the resume downloads directly; others open in a new tab
                    {...(l.href === profile.resume
                      ? { download: profile.resumeFileName }
                      : l.href.startsWith("mailto:")
                        ? {}
                        : { target: "_blank", rel: "noopener noreferrer" })}
                    className={linkCls}
                  >
                    {l.label}{" "}
                    {l.href === profile.resume ? <FiDownload size={14} aria-hidden /> : <FiArrowUpRight size={14} aria-hidden />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 font-mono text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Anup Kumar — Delhi, India</span>
          <span>Designed &amp; built by hand with Next.js</span>
          <a href="#main" className="inline-flex items-center gap-1.5 text-bone/80 transition-colors hover:text-lime">
            Back to top <FiArrowUp aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
