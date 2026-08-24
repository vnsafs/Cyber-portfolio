import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import DarkVoidBackground from "@/components/AnimatedSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanessa | Cybersecurity Portfolio",
  description: "Cybersecurity Portfolio",
  openGraph: {
    title: "Vanessa | Cybersecurity Portfolio",
    description:
      "Computer Science Student | Cybersecurity Enthusiast",
    type: "website",
    url: "https://cyberportifolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen bg-transparent text-bone overflow-x-hidden">
        
        {/* 🌌 BACKGROUND LAYER */}
        <div className="fixed inset-0 -z-10">
          <DarkVoidBackground />
        </div>

        {/* 🧠 CONTENT LAYER */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}