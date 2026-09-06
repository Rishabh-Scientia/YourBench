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
  metadataBase: new URL("https://www.yourbench.co.in"),
  title: {
    default: "YourBench — Build Smarter. Grow Faster.",
    template: "%s | YourBench",
  },
  description:
    "YourBench builds web apps, desktop tools, AI automation, and custom software for Indian MSMEs, startups, educational institutes, and growing businesses.",
  keywords: [
    "YourBench",
    "Your Bench",
    "software development agency India",
    "custom web applications",
    "business software",
    "FeeMaster",
    "school fee management software",
    "e-commerce store development",
    "automation solutions",
  ],
  authors: [{ name: "YourBench Team", url: "https://www.yourbench.co.in" }],
  creator: "YourBench",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.yourbench.co.in",
    siteName: "YourBench",
    title: "YourBench — Build Smarter. Grow Faster.",
    description:
      "YourBench builds web apps, desktop tools, AI automation, and custom software for Indian MSMEs, startups, educational institutes, and growing businesses.",
    images: [
      {
        url: "/logo-yourbench.png",
        width: 512,
        height: 512,
        alt: "YourBench Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.yourbench.co.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo-yourbench.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
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
