import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devqbit | Software Development, AI Automation & Game Development",
  description: "Devqbit builds custom software, intelligent web applications, AI automation solutions, SaaS platforms, and modern gaming experiences for startups and businesses worldwide.",
  keywords: "software development company, AI automation company, AI development, web application development, custom software development, SaaS development, game development, AI agents, business automation, Devqbit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
