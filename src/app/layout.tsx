import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FeedbackWidget from "@/components/FeedbackWidget";
import SearchModal from "@/components/SearchModal";
import BackToTop from "@/components/BackToTop";
import MaybeStageTopBar from "@/components/MaybeStageTopBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const SITE_URL = "https://blue-canopy.vercel.app";
const SITE_TITLE = "Blue Canopy | USAFA Pilot Transition Guide";
const SITE_DESC =
  "A free transition guide for USAFA grads leaving active duty. Built by someone who's been on the other side — 12 stages, honest trade-offs, no paywall.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESC,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: "Blue Canopy",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav />
        <SearchModal />
        <main id="main" className="flex-1 pt-16">
          <MaybeStageTopBar />
          {children}
        </main>
        <Footer />
        <BackToTop />
        <FeedbackWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
