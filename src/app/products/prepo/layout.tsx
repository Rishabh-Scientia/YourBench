import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prepo.ai — AI-Powered Adaptive Quiz & Assessment Platform | YourBench",
  description: "Prepo.ai dynamically generates custom AI quizzes tailored to any class level, subject, or chapter with 0ms deterministic scoring, 4-part AI explanations, and 1-click teacher shareable leaderboards.",
};

export default function PrepoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
