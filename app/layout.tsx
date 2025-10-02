import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/header";
import { DetailedFooter } from "@/components/DetailedFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Practices.fyi",
  description:
    "Clean, professional layout with global header, footer, and Tailwind styling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-primary-background text-gray-900">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VGMRYS9DKN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VGMRYS9DKN');
          `}
        </Script>
        <Header />
        <main className="min-h-screen px-6 py-8 pt-24">{children}</main>
        <DetailedFooter />
      </body>
    </html>
  );
}
