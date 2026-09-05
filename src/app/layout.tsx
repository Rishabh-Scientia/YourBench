import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YourBench — Build Smarter. Grow Faster.",
  description: "YourBench builds web apps, desktop tools, AI automation, and custom software for Indian MSMEs, startups, educational institutes, and growing businesses.",
  icons: {
    icon: [
      { url: "/logo-yourbench.png", type: "image/png" },
      { url: "/logo-yourbench.svg", type: "image/svg+xml" }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-text">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
