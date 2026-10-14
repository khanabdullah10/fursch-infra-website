import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furschinfra.com";

export const viewport: Viewport = {
  themeColor: "#374177",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Fursch Infra LLP | Turnkey Contracting & Architectural Finishing",
    template: "%s | Fursch Infra LLP",
  },
  description:
    "Fursch Infra LLP delivers turnkey contracting and high-precision architectural finishing across residential, commercial, hospitality and metro infrastructure projects.",
  keywords: [
    "Fursch Infra LLP",
    "turnkey contracting Mumbai",
    "architectural finishing contractors",
    "marble and stone cladding contractors",
    "gypsum false ceiling contractor",
    "electrical conduiting fit-out",
    "commercial interior execution",
    "Mumbai Metro Line 3 finishing",
    "DLF turnkey contractor",
    "Central Park Flower Valley finishing",
    "Swastik Onyx contracting",
  ],
  authors: [{ name: "Fursch Infra LLP" }],
  creator: "Fursch Infra LLP",
  publisher: "Fursch Infra LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Fursch Infra LLP",
    title: "Fursch Infra LLP | Turnkey Contracting & Architectural Finishing",
    description:
      "Precision execution from drawing to detail. Serving residential, commercial, hospitality and metro infrastructure developments.",
    images: [
      {
        url: "/images/brand/logo.png",
        width: 656,
        height: 644,
        alt: "Fursch Infra LLP Logo",
      },
      {
        url: "/images/team/team-bkc-station.jpg",
        width: 1200,
        height: 630,
        alt: "Fursch Infra Engineering Team at Mumbai Metro Line 3",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fursch Infra LLP | Turnkey Contracting & Finishing",
    description:
      "Turnkey contracting and architectural finishing partner serving residential, commercial, hospitality and infrastructure developments.",
    images: ["/images/team/team-bkc-station.jpg"],
  },
  icons: {
    icon: "/images/brand/logo-symbol.png",
    apple: "/images/brand/logo-symbol.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#090C15] text-[#F8FAFC]">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
