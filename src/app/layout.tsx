import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alpharez - Network Engineering Automation & AI",
  description:
    "Leading provider of network automation solutions and AI-driven infrastructure management for modern enterprises.",
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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6992JYPD5R" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6992JYPD5R');
          `}
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
