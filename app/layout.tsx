import type { Metadata } from "next";
import "./globals.css";
import "./founder.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://everroute.ca"),
  title: {
    default: "EverRoute - Thoughtful Technology for Real Life",
    template: "%s - EverRoute",
  },
  description:
    "EverRoute is a Canadian technology company building calm, practical AI products, including Haven, a personal AI product designed for everyday life.",
  openGraph: {
    title: "EverRoute - Thoughtful Technology for Real Life",
    description:
      "A Canadian technology company building calm, practical AI products for everyday life.",
    url: "https://everroute.ca",
    siteName: "EverRoute",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EverRoute - Thoughtful Technology for Real Life",
    description:
      "A Canadian technology company building calm, practical AI products for everyday life.",
  },
  alternates: {
    canonical: "https://everroute.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
