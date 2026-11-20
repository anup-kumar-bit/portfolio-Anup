import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Hero from "@/components/home/Hero";
import TechMarquee from "@/components/home/TechMarquee";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import CallToAction from "@/components/home/CallToAction";
import Stats from "@/components/ui/Stats";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { ExperienceSummary } from "@/components/aboutpage-components/experience";
import { projects } from "@/data/portfolio";

/**
 * Order is tuned for a recruiter's first scan:
 * who (hero) → proof in numbers → the work → where I've worked → what I do → how → contact.
 */
export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      <section aria-label="At a glance" className="wrap pt-12 md:pt-16">
        <Stats />
      </section>

      <section id="work" aria-labelledby="work-title" className="section">
        <SectionTitle
          id="work-title"
          index="01"
          label="Selected work"
          description="Client apps, production ERPs and e-commerce platforms I've built recently."
          action={
            <Link href="/works" className="btn-outline">
              All {projects.length} projects <FiArrowRight aria-hidden />
            </Link>
          }
        >
          Things I&apos;ve <span className="marker text-ink">shipped</span>
        </SectionTitle>
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {/* View more — the rest of the projects live on /works */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-line pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-bone/70">
            Showing {featured.length} of {projects.length} projects —{" "}
            <span className="font-serif italic text-bone">{projects.length - featured.length} more</span> on the works page.
          </p>
          <Link href="/works" className="btn-lime">
            View more projects <FiArrowRight aria-hidden />
          </Link>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-title" className="section">
        <SectionTitle
          id="experience-title"
          index="02"
          label="Experience"
          description="Shipping production systems for real users — from school ERPs to e-commerce."
          action={
            <Link href="/about#experience" className="btn-outline">
              Full timeline <FiArrowRight aria-hidden />
            </Link>
          }
        >
          Where I&apos;ve <span className="font-serif font-normal italic text-rose">worked</span>
        </SectionTitle>
        <ExperienceSummary />
      </section>

      <div className="pt-16 md:pt-24">
        <TechMarquee />
      </div>

      <section id="services" aria-labelledby="services-title" className="wrap pt-16 md:pt-24">
        <SectionTitle
          id="services-title"
          index="03"
          label="What I do"
          description="End-to-end product engineering — from database to API to pixels on web and mobile."
        >
          Full stack, <span className="font-serif font-normal italic">properly</span> done.
        </SectionTitle>
        <Services />
      </section>

      <section id="process" aria-labelledby="process-title" className="section">
        <SectionTitle id="process-title" index="04" label="Approach">
          How I <span className="font-serif font-normal italic text-lime">work</span>
        </SectionTitle>
        <Process />
      </section>

      <CallToAction />
    </>
  );
}
