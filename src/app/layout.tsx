import type { Metadata } from "next";
import { Anton, Geist_Mono, Poppins } from "next/font/google";
import Oneko from "@/components/Oneko";
import {
  AUTHOR_NAME,
  DEFAULT_OG_IMAGE,
  INDEXABLE_ROBOTS,
  PERSON_ID,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const description =
  "Saksham Goyal builds reliable AI agents, evidence-grounded workflows, secure real-time systems, and full-stack products from idea to production.";

export const metadata: Metadata = {
  title: {
    default: "Saksham Goyal | AI Systems & Full-Stack Engineer",
    template: "%s | Saksham Goyal",
  },
  description,
  keywords: [
    "Saksham Goyal",
    "AI Systems Engineer",
    "Applied AI Engineer",
    "Full-Stack AI Engineer",
    "Founding Engineer",
    "LLM Agents",
    "FastAPI",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Elara",
    "SuperOps",
    "AI Engineering Planner",
    "SAP O2C Graph Explorer",
    "ClipShare",
  ],
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Saksham Goyal | AI Systems & Full-Stack Engineer",
    description,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Goyal | AI Systems & Full-Stack Engineer",
    description,
    images: ["/og-image.png"],
  },
  robots: INDEXABLE_ROBOTS,
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: { icon: "/favicon.ico" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Saksham Goyal",
      alternateName: ["Sakshamm-Goyal", "Saksham"],
      url: SITE_URL,
      image: `${SITE_URL}/og-image.png`,
      jobTitle: "AI Systems & Full-Stack Engineer",
      description,
      email: "sakshamgoyal@gmail.com",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Rajiv Gandhi Institute of Petroleum Technology",
      },
      worksFor: { "@type": "Organization", name: "Elara" },
      knowsAbout: [
        "AI agents",
        "LLM evaluation",
        "retrieval systems",
        "AI safety guardrails",
        "source provenance",
        "web data pipelines",
        "FastAPI",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "AWS",
      ],
      sameAs: ["https://github.com/Sakshamm-Goyal", "https://linkedin.com/in/sakshammgoyal"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en",
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Saksham Goyal - Portfolio",
      about: { "@id": PERSON_ID },
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "SoftwareApplication",
      name: "SuperOps",
      url: "https://github.com/Sakshamm-Goyal/SuperOps",
      applicationCategory: "DeveloperApplication",
      author: { "@id": PERSON_ID },
      description:
        "Evidence-first cloud and AI efficiency workbench with trials, exact-scope approval, verification, recovery, and persistent learning.",
    },
    {
      "@type": "SoftwareApplication",
      name: "AI Engineering Planner",
      url: "https://github.com/Sakshamm-Goyal/AI-Engineering-Planner",
      applicationCategory: "DeveloperApplication",
      author: { "@id": PERSON_ID },
      description:
        "Source-linked PDF requirements extraction and dependency-checked implementation planning.",
    },
    {
      "@type": "SoftwareApplication",
      name: "ClipShare",
      url: "https://github.com/Sakshamm-Goyal/Clipshare",
      applicationCategory: "DeveloperApplication",
      author: { "@id": PERSON_ID },
      description: "Privacy-first encrypted clipboard sync across Android and macOS.",
    },
    {
      "@type": "SoftwareApplication",
      name: "AI Code Analyzer",
      url: "https://ai-code-analyzer-lyart.vercel.app",
      applicationCategory: "DeveloperApplication",
      author: { "@id": PERSON_ID },
      description: "AI-assisted repository analysis with GitHub integration.",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${anton.variable} ${poppins.variable} bg-black text-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Oneko />
      </body>
    </html>
  );
}
