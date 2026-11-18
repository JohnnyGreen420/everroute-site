import type { Metadata } from "next";
import { site } from "./site";

export const homeTitle =
  "EverRoute · Technology for everyday life";

const socialImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "The rooted EverRoute wordmark in cream on forest green. Technology for everyday life. New Brunswick, Canada.",
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
      images: [socialImage],
    },
  };
}
