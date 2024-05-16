import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Toaster } from "sonner";

import Providers from "@/queryProvider";
import "./globals.css";
import AuthModals from "@/components/shared/AuthModals";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travello",
  description: "Your way to book the best trips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthModals />
        <Navbar />
        <Providers>{children}</Providers>
        <Toaster expand position="top-right" closeButton />
      </body>
    </html>
  );
}
