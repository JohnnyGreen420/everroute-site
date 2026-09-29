import type { Metadata, Viewport } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { pageMetadata } from "./content/metadata";
import { site } from "./content/site";
import { display, sans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "EverRoute — Thoughtful technology, designed to grow with people",
    template: "%s · EverRoute",
  },
  ...pageMetadata({
    title: "EverRoute",
    description:
      "EverRoute is a Canadian technology company in New Brunswick. We are building Haven, a private AI assistant for family life.",
    path: "/",
  }),
};

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
