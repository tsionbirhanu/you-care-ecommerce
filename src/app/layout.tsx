import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import "./globals.css";

// Example using Google Fonts via next/font
import { Inter as GeistSans } from "next/font/google";
import { Fira_Code as GeistMono } from "next/font/google";

const geistSans = GeistSans({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = GeistMono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "you-care - Health & Beauty E-commerce",
  description:
    "Shop trusted healthcare and beauty products for a holistic lifestyle. Premium skincare, supplements, wellness products and beauty essentials.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
