import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";

export const metadata: Metadata = {
  title: "LeetDSA Sheets - Company Wise LeetCode DSA Sheets",
  description: "Solve curated LeetCode DSA questions asked by top tech companies like Google, Amazon, Microsoft, and Facebook.",
  keywords: ["LeetCode", "DSA", "Data Structures", "Algorithms", "Interview Preparation", "Google", "Amazon", "Microsoft"],
  openGraph: {
    title: "LeetDSA Sheets - Company Wise LeetCode DSA Sheets",
    description: "Solve curated LeetCode DSA questions asked by top tech companies.",
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
