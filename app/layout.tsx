import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientSide from "./client";
import { education, profile, siteUrl } from "@/data/portfolio";
import { siteDescription, siteName } from "@/lib/seo";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

const defaultTitle = "Anup Kumar — Full Stack Developer (FastAPI · Next.js · React Native)";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Anup Kumar",
  },
  description: siteDescription,
  keywords: ["Anup Kumar", "Full Stack Developer", "FastAPI", "Next.js", "React Native", "Python", "Delhi", "Portfolio"],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    url: "/",
    title: "Anup Kumar — Full Stack Developer",
    description: "FastAPI · Next.js · React Native. Selected work, experience and contact.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anup Kumar — Full Stack Developer",
    description: "FastAPI · Next.js · React Native. Selected work, experience and contact.",
  },
};

/** schema.org Person for rich results. */
const personId = `${siteUrl}/#person`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      jobTitle: profile.role,
      url: siteUrl,
      email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
      worksFor: { "@type": "Organization", name: profile.employer },
      alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
      knowsAbout: ["Python", "FastAPI", "Next.js", "React", "React Native", "MySQL", "PostgreSQL"],
      sameAs: [profile.github, profile.linkedin],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} ${serif.variable} ${mono.variable} antialiased min-h-screen`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-lime focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          // Escape "<" so the JSON can never close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <ClientSide />
        <Header />
        <main id="main" className="scroll-mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
