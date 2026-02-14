import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GateKeeperPro - Seamless OTP Verification for Modern Apps",
  description: "Secure OTP verification with hosted checkout pages and direct API integration. Built for developers, trusted by businesses. Get 100 free credits on signup.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "GateKeeperPro - Seamless OTP Verification for Modern Apps",
    description: "Secure OTP verification with hosted checkout pages and direct API integration. Built for developers, trusted by businesses.",
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "GateKeeperPro - Seamless OTP Verification for Modern Apps",
    description: "Secure OTP verification with hosted checkout pages and direct API integration.",
    images: ['/logo.png'],
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
      >
        {children}
      </body>
    </html>
  );
}
