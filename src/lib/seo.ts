import type { Metadata } from "next";

const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const withBasePath = (path: string) =>
  `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || vercelProductionUrl || "http://localhost:4173";
export const SITE_NAME = "Saksham Goyal - AI Systems Portfolio";
export const AUTHOR_NAME = "Saksham Goyal";
export const TWITTER_CREATOR: string | undefined = undefined;
export const PERSON_ID = `${SITE_URL}/#person`;

export const DEFAULT_OG_IMAGE = {
  url: withBasePath("/og-image.png"),
  width: 1200,
  height: 630,
  alt: "Saksham Goyal - AI Systems & Full-Stack Engineer",
};

export const INDEXABLE_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};
