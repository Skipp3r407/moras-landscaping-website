import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import AppLoadingScreen from "@/components/app-loading-screen";
import { ChatWidget } from "@/components/chat-widget";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { business } from "@/data/site-content";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://moras-landscaping.local"),
  title: {
    default: "Mora's Landscaping LLC | Landscaping Orlando FL",
    template: "%s | Mora's Landscaping LLC"
  },
  description:
    "Premium landscaping in Orlando, Florida including lawn maintenance, landscape installation, design, irrigation services, artificial turf, and storm cleanup.",
  keywords: [
    "landscaping Orlando FL",
    "lawn maintenance Orlando",
    "landscape design Orlando",
    "landscape installation Orlando",
    "irrigation services Orlando",
    "artificial turf Orlando",
    "storm cleanup Orlando",
    "landscape cleanup Orlando"
  ],
  openGraph: {
    title: "Mora's Landscaping LLC",
    description:
      "Serving Orlando since 2015 with licensed, insured landscaping backed by 25+ years of experience.",
    type: "website",
    locale: "en_US"
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/images/favicon.ico" }
    ],
    apple: "/images/apple-touch-icon.png"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapeDesigner",
  name: business.name,
  telephone: "+1-407-247-4786",
  email: business.email,
  areaServed: ["Orlando", "Kissimmee", "Winter Park", "Altamonte Springs", "Sanford", "Davenport"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Orlando",
    addressRegion: "FL",
    addressCountry: "US"
  },
  url: "https://moras-landscaping.local",
  priceRange: "$$",
  description:
    "Mora's Landscaping LLC has served Central Florida since 2015, providing lawn maintenance, landscape installation, design, irrigation, artificial turf, landscape cleanup, and storm cleanup."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <AppLoadingScreen />
        <SiteHeader />
        <main className="relative isolate min-h-screen overflow-x-clip pb-24 pt-52 md:pb-0 md:pt-72">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
        <ChatWidget />
        <MobileCallBar />
      </body>
    </html>
  );
}
