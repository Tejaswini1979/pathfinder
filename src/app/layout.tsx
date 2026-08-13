import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PathFinder — Find your path after Class 10",
    template: "%s | PathFinder",
  },
  description:
    "Career guidance for Indian students after Class 10 — choose your stream, explore 230+ careers across 15 domains, find courses, exams, roadmaps and scholarships for all of India.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <BackButton />
      </body>
    </html>
  );
}
