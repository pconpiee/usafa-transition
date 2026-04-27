import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FeedbackWidget from "@/components/FeedbackWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Canopy | USAFA Pilot Transition Guide",
  description:
    "A transition guide for USAFA pilots leaving active duty. Built by a PTWOB who's been on the other side — free, no login, no paywall.",
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
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <FeedbackWidget />
      </body>
    </html>
  );
}
