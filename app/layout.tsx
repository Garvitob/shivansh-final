import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FabWhatsApp } from "@/components/FabWhatsApp";
import { Analytics } from "@/components/Analytics";
import { BusinessJsonLd } from "@/components/JsonLd";
import { OG_IMAGE } from "@/lib/seo";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { reportEnvironment } from "@/lib/env";

reportEnvironment();

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shivansh Properties — Property Dealer in Noida",
    template: "%s | Shivansh Properties",
  },
  description:
    "Property dealer in Noida since 2011. Buying, selling, renting and leasing — flats, kothis, plots, offices, shops and cafe spaces. Office in Sector 144.",
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name, url: SITE_URL }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    locale: "en_IN",
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F6F0" },
    { media: "(prefers-color-scheme: dark)", color: "#111110" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${archivo.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <FabWhatsApp />
        </Providers>
        <BusinessJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
