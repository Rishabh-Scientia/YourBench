import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prepo.ai — AI Practice & Mock Tests for Any Subject | YourBench",
  description: "Prepo.ai dynamically generates custom AI practice tests and mock assessments tailored to any class level, subject, or chapter with 0ms deterministic scoring, 4-part AI explanations, and 1-click teacher shareable leaderboards.",
};

export default function PrepoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
