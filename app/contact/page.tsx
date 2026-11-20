import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { profile } from "@/data/portfolio";
import ContactForm from "@/components/contact/ContactForm";
import PageHeader from "@/components/ui/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Anup Kumar, full stack developer in Delhi — open to full-time roles and freelance work in FastAPI, Next.js and React Native.",
  path: "/contact",
});

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, cls: "tile-lime", valueCls: "break-all" },
  { label: "LinkedIn", value: "LinkedIn profile", href: profile.linkedin, cls: "tile-rose", valueCls: "break-words" },
  { label: "GitHub", value: "@anup-kumar-bit", href: profile.github, cls: "tile-sun", valueCls: "break-words" },
];

export default function Contact() {
  return (
    <section className="wrap">
      <PageHeader
        label="Contact"
        meta={
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-lime" aria-hidden /> Usually replies within a day
          </span>
        }
        title={
          <>
            Say <span className="font-serif font-normal italic text-rose">hello</span>.
          </>
        }
        lede="Have a role, a project or just want to talk shop? Drop a message — I read everything."
      />

      <div className="mt-12 grid items-start gap-3 sm:gap-4 md:mt-16 lg:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col gap-3 sm:gap-4">
          <h2 className="sr-only">Direct channels</h2>
          {channels.map((c) => {
            // mailto: opens the mail client — no new tab
            const external = !c.href.startsWith("mailto:");
            return (
              <a
                key={c.label}
                href={c.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                style={{ ["--accent" as string]: "#f3efe6" }}
                className={`tile tile-hover ${c.cls} group flex items-end justify-between gap-4 p-6`}
              >
                <span className="min-w-0">
                  <span className="label-ink block">{c.label}</span>
                  <span className={`mt-2 block font-display text-xl font-bold ${c.valueCls}`}>{c.value}</span>
                </span>
                <span
                  aria-hidden
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink bg-bone text-lg transition-transform duration-200 group-hover:rotate-45"
                >
                  <FiArrowUpRight />
                </span>
              </a>
            );
          })}
          <div className="tile flex items-start gap-4 p-6">
            <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-panel2 text-lime">
              <FiMapPin />
            </span>
            <div>
              <span className="label">Location</span>
              <p className="mt-1 font-display text-xl font-semibold text-bone">{profile.location}</p>
              <p className="text-sm text-bone/70">Open to remote &amp; on-site roles</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
