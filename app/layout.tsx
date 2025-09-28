import type { Metadata } from "next";
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
        <Header />
        <main className="min-h-screen px-6 py-8 pt-24">{children}</main>
        <DetailedFooter />
      </body>
    </html>
  );
}
