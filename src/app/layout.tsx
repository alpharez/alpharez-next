import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alpharez - Network Engineering Automation & AI",
  description: "Leading provider of network automation solutions and AI-driven infrastructure management for modern enterprises.",
  icons: {
    icon: "/alpharez_icon_only.svg",
    shortcut: "/alpharez_icon_only.svg",
    apple: "/alpharez_icon_only.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
