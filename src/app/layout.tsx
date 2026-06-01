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

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
};

export const viewport: Viewport = {
  themeColor: "#1c1b22",
  colorScheme: "dark",
};

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
        <Nav />
        <main className="flex-1 pt-28 md:pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
