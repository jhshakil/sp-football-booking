import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Header from "@/components/shared/Header";

const satoshi = localFont({
  src: "../../public/fonts/satoshi/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SP Football Booking",
  description: "Football Booking Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <div className="bg-white">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
