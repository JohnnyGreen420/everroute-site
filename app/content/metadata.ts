import type { Metadata } from "next";
import { site } from "./site";

export const homeTitle =
  "EverRoute · Thoughtful technology, designed to grow with people over time";

const socialImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "EverRoute, New Brunswick, Canada. A Canadian technology company now building Haven, a private AI assistant for family life.",
};

type PageMetadataInput = {
  // Short page title, e.g. "Company". Omit for the homepage.
  title?: string;
  description: string;
  path: string;
};

// Next.js replaces (rather than merges) the openGraph and twitter objects a
// page defines, so every page builds complete ones here to keep the image.
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const socialTitle = title ? `${title} · ${site.name}` : homeTitle;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
  };
}
