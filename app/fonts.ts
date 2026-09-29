import localFont from "next/font/local";

// Self-hosted, OFL-licensed fonts (see app/fonts/OFL-*.txt). Loaded at build
// time so the static export makes no third-party font requests.

export const bodoni = localFont({
  src: "./fonts/libre-bodoni-latin-wght-normal.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-bodoni",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export const inter = localFont({
  src: "./fonts/inter-latin-opsz-normal.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: "Arial",
});
