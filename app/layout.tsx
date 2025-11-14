import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aniruddha Chattopadhyay | ML Engineer & Researcher",
  description: "Academic portfolio of Aniruddha Chattopadhyay - ML Engineer, Researcher, and Entrepreneur. Specializing in Multimodal AI, LLMs, and Computer Vision. IIT Kharagpur Alumni.",
  keywords: ["Machine Learning", "AI", "Research", "Computer Vision", "LLMs", "IIT Kharagpur", "Graduate Studies"],
  authors: [{ name: "Aniruddha Chattopadhyay" }],
  openGraph: {
    title: "Aniruddha Chattopadhyay | ML Engineer & Researcher",
    description: "Academic portfolio showcasing research, projects, and achievements in AI and Machine Learning",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
