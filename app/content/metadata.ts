import type { Metadata } from "next";
import { site } from "./site";

const socialImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "EverRoute — independent technology company, New Brunswick, Canada",
};

type PageMetadataInput = {
  title: string;
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
  return {
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}
