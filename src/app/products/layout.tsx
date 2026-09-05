import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products — FeeMaster & Prepo.ai | YourBench",
  description: "Explore purpose-built desktop and AI cloud software engineered by YourBench, including FeeMaster for offline school management and Prepo.ai for dynamic AI assessments.",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
