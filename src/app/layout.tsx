import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { site } from "./data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.leonardoromero.xyz";
const logoPath = "/personal-logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  generator: "Next.js",
  keywords: [
    site.name,
    "portfolio",
    "software engineer",
    "open source",
    "web development",
    "Next.js",
    "React",
    "TypeScript",
    "Leonardo Romero",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
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
  icons: {
    icon: logoPath,
    apple: logoPath,
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    title: site.name,
    description: site.tagline,
    url: siteUrl,
    images: [
      {
        url: logoPath,
        width: 512,
        height: 512,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
    images: [logoPath],
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1b22",
  colorScheme: "dark",
};

const socialUrls = Object.values(site.socials).filter(
  (v): v is string => typeof v === "string" && v.length > 0,
);

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  email: site.email,
  image: `${siteUrl}${logoPath}`,
  description: site.tagline,
  sameAs: socialUrls,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: siteUrl,
  description: site.tagline,
  inLanguage: "en",
  publisher: {
    "@type": "Person",
    name: site.name,
    url: siteUrl,
  },
};

const safeStringify = (value: unknown) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-crust text-text font-sans selection:bg-lavender/30 selection:text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeStringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeStringify(websiteJsonLd) }}
        />
        <Nav />
        <main className="flex-1 pt-28 md:pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
