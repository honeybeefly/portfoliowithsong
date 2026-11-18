import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHARANYA HP // Portfolio",
  description:
    "Portfolio of SHARANYA HP — a Computer Science & Engineering student focused on cybersecurity, software engineering, and web development.",
  keywords: [
    "Sharanya HP",
    "Portfolio",
    "Computer Science",
    "Bangalore Institute of Technology",
    "BIT Bangalore",
    "Cybersecurity",
    "Software Engineering",
    "Next.js",
    "Web Development",
  ],
  authors: [{ name: "SHARANYA HP" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#211915] text-slate-100 font-sans antialiased selection:bg-amber-200 selection:text-slate-950">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
