/**
 * /tech - "The Commit Trail"
 *
 * A horizontal, side-scrolling developer zine. A git commit narrative runs
 * through editorial paper/colour-blocked panels: git init -> whoami -> commit log
 * (experience) -> builds (projects) -> stack -> HEAD (contact).
 *
 * Desktop: GSAP ScrollTrigger pinned horizontal scrub + Lenis smoothing.
 * Mobile: clean vertical stacking of the same panels.
 */

import type { Metadata } from "next";
import { HorizontalShell } from "@/components/horizontal";
import { ZineNav } from "@/components/zine";
import type { NavItem } from "@/components/zine/ZineNav";
import HeroPanel from "@/components/tech/HeroPanel";
import AboutPanel from "@/components/tech/AboutPanel";
import ExperiencePanel from "@/components/tech/ExperiencePanel";
import ProjectsPanel from "@/components/tech/ProjectsPanel";
import StackPanel from "@/components/tech/StackPanel";
import ContactPanel from "@/components/tech/ContactPanel";
import DrawPanel from "@/components/tech/DrawPanel";
import {
  DEFAULT_OG_IMAGE,
  INDEXABLE_ROBOTS,
  SITE_NAME,
  SITE_URL,
  TWITTER_CREATOR,
} from "@/lib/seo";

const title = "AI Systems & Full-Stack Engineer";
const description =
  "Saksham Goyal builds production AI agents, data pipelines, secure real-time systems, and full-stack products. Explore Elara, SuperOps, AI Engineering Planner, ClipShare, and the SAP O2C Graph Explorer.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Saksham Goyal",
    "Saksham Goyal portfolio",
    "Saksham Goyal AI engineer",
    "AI Systems Engineer",
    "Applied AI Engineer",
    "Full-Stack AI Engineer",
    "Elara",
    "SuperOps",
    "AI Engineering Planner",
    "SAP O2C Graph Explorer",
    "ClipShare",
    "AI Code Analyzer",
    "LLM Workflow Builder",
    "Collab Note",
    "FastAPI",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Go",
  ],
  robots: INDEXABLE_ROBOTS,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: "Saksham Goyal - AI Systems & Full-Stack Engineer",
    description,
    url: SITE_URL,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Goyal - AI Systems & Full-Stack Engineer",
    description,
    creator: TWITTER_CREATOR,
    images: ["/og-image.png"],
  },
};

const PANEL_COUNT = 6;

const NAV_ITEMS: NavItem[] = [
  { label: "init", index: 0 },
  { label: "whoami", index: 1 },
  { label: "commits", index: 2 },
  { label: "builds", index: 3 },
  { label: "stack", index: 4 },
  { label: "contact", index: 5 },
  { label: "draw", index: 6, vertical: true },
];

export default function TechPage() {
  return (
    <main className="bg-paper text-ink">
      <HorizontalShell
        panelCount={PANEL_COUNT}
        overlay={
          <>
            <ZineNav items={NAV_ITEMS} accent="cobalt" monogram="SG" />
          </>
        }
        after={<DrawPanel index={6} />}
      >
        <HeroPanel index={0} />
        <AboutPanel index={1} />
        <ExperiencePanel index={2} />
        <ProjectsPanel index={3} />
        <StackPanel index={4} />
        <ContactPanel index={5} />
      </HorizontalShell>
    </main>
  );
}
