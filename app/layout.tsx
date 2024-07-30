import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const firamono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Brian Tang",
  description:
    "Software engineer - Machine Learning Operations and Data Platform & Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firamono.className}>
        <Navbar />
        <div className="flex justify-center items-center bg-white p-24">
          <div className="h-screen prose">{children}</div>
        </div>
      </body>
    </html>
  );
}
