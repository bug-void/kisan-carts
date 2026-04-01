import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import LoadingProvider from "@/components/loading-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KISAN CARTS - Fresh Fruits & Vegetables Exporter | Mumbai",
  description: "KISAN CARTS is a leading exporter of farm-fresh fruits and vegetables in Mumbai. Quality produce, timely delivery, and global standards of safety and freshness.",
  keywords: "fresh fruits, organic vegetables, global exporter, Mumbai, KISAN CARTS, farm-fresh, produce export, agricultural products",
  authors: [{ name: "KISAN CARTS" }],
  creator: "KISAN CARTS",
  publisher: "KISAN CARTS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kisancarts.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "KISAN CARTS - Fresh Fruits & Vegetables Exporter",
    description: "Leading global exporter of farm-fresh fruits and vegetables from Mumbai. Quality, reliability, and customer satisfaction.",
    url: "https://kisancarts.com",
    siteName: "KISAN CARTS",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "KISAN CARTS - Fresh Fruits & Vegetables Exporter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KISAN CARTS - Fresh Fruits & Vegetables Exporter",
    description: "Leading global exporter of farm-fresh fruits and vegetables from Mumbai.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
