import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algorithm Arena",
  description: "Weekly programming challenges",
  openGraph: {
    title: 'Algorithm Arena',
    images: [
      {
        url: 'http://algorithm-arena.com/favicon.ico',
        width: 800,
        height: 600,
      },
      {
        url: 'http://algorithm-arena.com/api/og',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
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
