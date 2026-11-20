import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export default function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="section">
      <div data-aos="fade-up" className="tile tile-sun relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="dots absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-2 border-ink bg-rose sm:-right-12 sm:-top-12 sm:h-56 sm:w-56" aria-hidden />
        <div className="absolute right-28 top-24 hidden h-20 w-20 rounded-full border-2 border-ink bg-lime shadow-[4px_4px_0_0_#0d0d0d] xl:right-40 xl:top-32 xl:block" aria-hidden />
        <div className="relative max-w-2xl">
          <p className="label-ink">Open to new roles</p>
          <h2 id="cta-title" className="mt-4 font-display text-4xl font-bold leading-[0.95] tracking-[-0.03em] text-ink sm:text-6xl">
            Have a project or role in <span className="font-serif font-normal italic">mind?</span>
          </h2>
          <p className="mt-5 max-w-lg text-ink/80">
            I&apos;m open to full-time roles and freelance work in full stack, backend and mobile development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-ink">
              Start a conversation <FiArrowRight aria-hidden />
            </Link>
            <a href={`mailto:${profile.email}`} className="btn-outline-ink">
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
