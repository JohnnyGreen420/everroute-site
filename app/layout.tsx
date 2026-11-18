import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { homeTitle, pageMetadata } from "./content/metadata";
import { site } from "./content/site";
import { bodoni, inter } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: `%s · ${site.name}`,
  },
  ...pageMetadata({
    description:
      "EverRoute builds technology for everyday life in New Brunswick, Canada. Meet the founder, explore our approach, and see our featured product, ABRI.",
    path: "/",
  }),
};

export const viewport: Viewport = {
  themeColor: "#ede8dc", // --canvas
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${bodoni.variable} ${inter.variable}`}>
      <body id="top">
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
