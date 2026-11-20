"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/works" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // While open: move focus into the menu, and close on Escape (returning focus to the toggle).
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    // Solid ink bar — no blur, in keeping with the flat, hard-edged identity.
    <header className="sticky top-0 z-50 border-b border-line bg-ink">
      <nav aria-label="Main" className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Anup Kumar — home" className="group flex items-center gap-3 rounded-lg">
          <span className="grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-sun font-display text-sm font-extrabold text-ink shadow-[3px_3px_0_0_#f3efe6] transition-transform duration-200 group-hover:-rotate-6">
            AK
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display font-semibold text-bone">Anup Kumar</span>
            <span className="font-mono text-xs text-mute">full stack dev</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-line p-1 font-mono text-xs uppercase tracking-[0.12em] md:flex">
          {menuItems.map((item, i) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 transition-colors ${
                    active ? "bg-bone text-ink" : "text-bone/75 hover:bg-panel2 hover:text-bone"
                  }`}
                >
                  <span aria-hidden className={active ? "text-ink/60" : "text-mute"}>
                    0{i + 1}
                  </span>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-lime hidden px-4 py-2 sm:inline-flex">
            Hire me <FiArrowUpRight aria-hidden />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-bone transition-colors hover:border-bone/60 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <HiXMark size={20} aria-hidden /> : <HiBars3 size={20} aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" ref={menuRef} className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink md:hidden">
          <div className="wrap py-4">
            <ul>
              {menuItems.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href} className="border-b border-line last:border-0">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between gap-3 py-4 font-display text-3xl font-semibold tracking-tight ${
                        active ? "text-lime" : "text-bone"
                      }`}
                    >
                      <span className="flex items-baseline gap-3">
                        <span aria-hidden className="font-mono text-xs font-normal text-mute">
                          0{i + 1}
                        </span>
                        {item.name}
                      </span>
                      <FiArrowRight aria-hidden className={`text-xl ${active ? "" : "text-mute"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex flex-col gap-3 border-t border-line pt-5">
              <Link href="/contact" className="btn-lime">
                Hire me <FiArrowUpRight aria-hidden />
              </Link>
              <a href={`mailto:${profile.email}`} className="break-all text-center font-mono text-xs text-mute underline underline-offset-4">
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
