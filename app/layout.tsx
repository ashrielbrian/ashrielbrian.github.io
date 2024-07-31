import type { Metadata } from "next";
import { Fira_Mono, Spectral } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const firamono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-mono",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  title: "Brian Tang",
  description:
    "Senior Software Engineer - Machine Learning Operations and Data Platform & Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firamono.className}`}>
        <Navbar />
        <div className="flex justify-center items-center bg-white p-24 md:px-16 sm:px-12 max-sm:px-8">
          <div className={`h-screen prose lg:prose-lg max-sm:prose-sm`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
