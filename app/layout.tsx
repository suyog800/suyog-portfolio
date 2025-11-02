import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // ← change to your real domain after deploy
  title: {
    default: "Suyog Chougule",
    template: "%s · Suyog Chougule",
  },
  description: "Embedded Systems & Robotics Engineer — real-time controllers, CAN, ROS2.",
  openGraph: {
    title: "Suyog Chougule — Embedded & Robotics",
    description: "Real-time controllers, CAN toolchains, and ROS2 software.",
    url: "/",
    siteName: "Suyog Chougule",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "Suyog — Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suyog Chougule — Embedded & Robotics",
    description: "Real-time controllers, CAN, ROS2.",
    images: ["/og-cover.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  themeColor: "#14b8a6",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
