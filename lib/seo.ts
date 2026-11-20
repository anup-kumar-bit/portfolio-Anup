import type { Metadata } from "next";
import { profile, yearsOfExperience } from "@/data/portfolio";

export const siteName = `${profile.name} — ${profile.role}`;
export const siteDescription = `Portfolio of ${profile.name}, a Delhi-based full stack developer with ${yearsOfExperience} years building production apps with Python (FastAPI), Next.js, React Native, MySQL and PostgreSQL.`;

/** The root app/opengraph-image.tsx route. Re-declared per page because a page-level `openGraph` replaces the inherited one (including its image). */
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${profile.name} — Full Stack Developer · FastAPI · Next.js · React Native`,
};

/**
 * Per-page metadata. Next.js replaces (not merges) nested objects such as
 * `openGraph`, so each page re-declares the shared Open Graph fields here
 * with its own title, description and URL.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${profile.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
