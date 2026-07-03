import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FeeMaster — School Fee Management Software | YourBench",
  description: "FeeMaster is a production-ready Windows desktop app for Indian schools — fee collection, staff payroll, attendance, and reports. Contact YourBench to install.",
};

export default function FeeMasterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
