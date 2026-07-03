import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Join Our Team | YourBench",
  description: "Join YourBench to build software that works for India's schools and businesses. Open roles include Co-Founder, Full Stack Developer, AI Automation Engineer, and Regional Manager.",
};

export default function CareersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
