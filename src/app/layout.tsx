import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FeedbackWidget from "@/components/FeedbackWidget";
import SearchModal from "@/components/SearchModal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Canopy | USAFA Pilot Transition Guide",
  description:
    "A free transition guide for USAFA grads leaving active duty. Built by someone who's been on the other side — 12 stages, honest trade-offs, no paywall.",
  openGraph: {
    title: "Blue Canopy | USAFA Pilot Transition Guide",
    description:
      "A free transition guide for USAFA grads leaving active duty. Built by someone who's been on the other side — 12 stages, honest trade-offs, no paywall.",
    url: "https://blue-canopy.vercel.app",
    siteName: "Blue Canopy",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Canopy | USAFA Pilot Transition Guide",
    description:
      "A free transition guide for USAFA grads leaving active duty. Built by someone who's been on the other side — 12 stages, honest trade-offs, no paywall.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Nav />
        <SearchModal />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <FeedbackWidget />
      </body>
    </html>
  );
}
