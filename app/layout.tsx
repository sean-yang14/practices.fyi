import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/header";
import { DetailedFooter } from "@/components/DetailedFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Practices.fyi",
  description:
    "Providing tools that help healthcare practices thrive - while being the most genuine partner possible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMW6VTLS');`}
        </Script>
      </head>
      <body className="font-sans antialiased bg-primary-background text-gray-900">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMW6VTLS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        <main className="min-h-screen px-6 py-8 pt-24">{children}</main>
        <DetailedFooter />
      </body>
    </html>
  );
}
