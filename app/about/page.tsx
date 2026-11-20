import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { ExperienceTimeline, EducationCard, SkillsGrid } from "@/components/aboutpage-components/experience";
import Stats from "@/components/ui/Stats";
import SectionTitle from "@/components/ui/SectionTitle";
import PageHeader from "@/components/ui/PageHeader";
import CallToAction from "@/components/home/CallToAction";
import { profile, yearsOfExperience } from "@/data/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: `About Anup Kumar — full stack developer at Insoftlink Software. ${yearsOfExperience} years of experience, work history, education and technical skills.`,
  path: "/about",
});

const facts = [
  { k: "Role", v: "Full Stack Developer" },
  { k: "Company", v: profile.employer },
  { k: "Side initiative", v: profile.company.name },
  { k: "Experience", v: `${yearsOfExperience} years` },
  { k: "Location", v: "Delhi, India" },
  { k: "Education", v: "BCA · DSEU, 2025" },
  { k: "Status", v: "Open to opportunities" },
];

export default function About() {
  return (
    <>
      <section className="wrap">
        <PageHeader
          label="About"
          meta="Anup Kumar · Delhi"
          title={
            <>
              I like building software that <span className="font-serif font-normal italic text-sun">just works</span>.
            </>
          }
        />

        <div className="mt-12 grid gap-3 sm:gap-4 md:mt-16 lg:grid-cols-[1.5fr_1fr]">
          <div className="tile p-6 sm:p-8 lg:p-10">
            <p className="max-w-prose text-lg leading-relaxed text-bone/85">{profile.summary}</p>
            <p className="mt-4 max-w-prose leading-relaxed text-bone/70">
              I use AI dev tools like Claude Code, GitHub Copilot and Cursor every day to debug faster, navigate large
              codebases and explore architecture options — then make the final call myself.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.resume} download={profile.resumeFileName} className="btn-lime">
                <FiDownload aria-hidden /> Download resume
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                GitHub <FiArrowUpRight aria-hidden />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                LinkedIn <FiArrowUpRight aria-hidden />
              </a>
            </div>
          </div>

          {/* Facts sheet instead of a photo */}
          <div className="tile tile-bone relative overflow-hidden p-6 sm:p-8">
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full border-2 border-ink bg-rose" aria-hidden />
            <h2 className="label-ink mb-4">Quick facts</h2>
            <dl className="relative divide-y divide-ink/15">
              {facts.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="font-mono text-xs text-ink/75">{f.k}</dt>
                  <dd className="text-right font-display font-semibold">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-3 sm:mt-4">
          <Stats />
        </div>
      </section>

      <section id="experience" aria-labelledby="career-title" className="section">
        <SectionTitle id="career-title" index="01" label="Career">
          Work <span className="font-serif font-normal italic text-rose">experience</span>
        </SectionTitle>
        <ExperienceTimeline />
      </section>

      <section id="background" aria-labelledby="background-title" className="section">
        <SectionTitle id="background-title" index="02" label="Background">
          Education &amp; <span className="font-serif font-normal italic text-lime">skills</span>
        </SectionTitle>
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <EducationCard />
          </div>
          <div className="lg:col-span-3">
            <SkillsGrid />
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
