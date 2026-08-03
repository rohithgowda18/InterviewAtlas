import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";

export const metadata: Metadata = {
  title: "Interview Atlas — Master Company-wise Interview Preparation",
  description:
    "Solve 14,000+ curated LeetCode questions asked in interviews at 470+ top tech companies like Google, Amazon, Microsoft, and Meta. Track progress, bookmark problems, and ace your next interview.",
  keywords: [
    "LeetCode",
    "DSA",
    "Data Structures",
    "Algorithms",
    "Interview Preparation",
    "Google",
    "Amazon",
    "Microsoft",
    "Interview Atlas",
    "Company Wise",
  ],
  openGraph: {
    title: "Interview Atlas — Master Company-wise Interview Preparation",
    description:
      "14,000+ curated questions from 470+ top tech companies. Free forever.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <Providers>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
