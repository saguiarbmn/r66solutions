import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "R66 Solutions | Modern Business Operations & Technology Integration",
  description:
    "R66 Solutions delivers turn-key tech integrations, event logistics, and premier digital hospitality platforms. Exclusive North & South America distributor for AirMenu.",
  keywords: [
    "R66 Solutions",
    "AirMenu",
    "business operations",
    "technology integration",
    "hospitality tech",
    "strategic advisory",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href={`${basePath}/favicon-96x96.png`}
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href={`${basePath}/favicon.svg`} />
        <link rel="shortcut icon" href={`${basePath}/favicon.ico`} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${basePath}/apple-touch-icon.png`}
        />
        <link rel="manifest" href={`${basePath}/site.webmanifest`} />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
