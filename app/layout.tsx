import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/header";
import { DetailedFooter } from "@/components/DetailedFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Practices.fyi",
  description:
    "Providing tools that help healthcare practices thrive - while being the most genuine partner possible.",
  metadataBase: new URL("https://practices.fyi"),
  openGraph: {
    title: "Practices.fyi",
    description:
      "Providing tools that help healthcare practices thrive - while being the most genuine partner possible.",
    images: ["/photos/company-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practices.fyi",
    description:
      "Providing tools that help healthcare practices thrive - while being the most genuine partner possible.",
    images: ["/photos/company-logo.png"],
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
        {/* Google Analytics 4 (GA4) - gtag.js */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VGMRYS9DKN"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VGMRYS9DKN');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-primary-background text-gray-900">

        <Header />
        <main className="min-h-screen px-6 py-8 pt-24">{children}</main>
        <DetailedFooter />
      </body>
    </html>
  );
}
