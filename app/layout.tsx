import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algorithm Arena",
  description: "Weekly programming challenges",
  openGraph: {
    title: 'Algorithm Arena',
    images: [{
      url: 'https://basehub.earth/cdn-cgi/imagedelivery/AcMAerS13uRNdcqmxOA-IQ/273ebe35-9545-4d3b-f5c4-120b5b380d00/public',
      width: 1200,
      height: 630,
    }],
    siteName: 'Algorithm Arena',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Algorithm Arena',
    description: 'Weekly programming challenges',
    card: 'summary_large_image',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
