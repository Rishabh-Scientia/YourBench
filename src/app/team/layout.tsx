import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team — YourBench",
  description: "Meet the co-founders and team behind YourBench building software for Indian schools and businesses.",
};

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
