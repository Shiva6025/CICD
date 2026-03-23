import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeployFlow — CI/CD Pipeline Demo",
  description: "A beautiful, interactive Next.js site to showcase and test the CI/CD pipeline. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["CI/CD", "DevOps", "Pipeline", "Next.js", "Deployment"],
  openGraph: {
    title: "DeployFlow — CI/CD Pipeline Demo",
    description: "Interactive CI/CD pipeline showcase built with Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
