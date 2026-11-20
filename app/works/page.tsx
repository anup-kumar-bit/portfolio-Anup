import { projects } from "@/data/portfolio";
import WorksGrid from "@/components/works/WorksGrid";
import PageHeader from "@/components/ui/PageHeader";
import CallToAction from "@/components/home/CallToAction";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Selected work by Anup Kumar — production ERPs and e-commerce backends at Insoftlink, client mobile apps and side projects built with FastAPI, Next.js and React Native.",
  path: "/works",
});

export default function Works() {
  return (
    <>
      <section className="wrap">
        <PageHeader
          label="Index of work"
          meta={`${projects.length} projects`}
          title={
            <>
              Selected <span className="font-serif font-normal italic text-lime">work</span>
            </>
          }
          lede="Production systems at Insoftlink, client apps and side projects — FastAPI backends, Next.js web apps and React Native mobile apps."
        />
        <WorksGrid />
      </section>
      <CallToAction />
    </>
  );
}
