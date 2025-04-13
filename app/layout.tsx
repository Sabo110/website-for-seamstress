import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samira Couture - Créations sur mesure et élégance",
  description: "Bienvenue chez Samira Couture. Découvrez nos créations uniques et sur mesure, alliant élégance, qualité et créativité. Transformez vos idées en pièces d'exception.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader  showSpinner={false}/>
        <div className="">
          {/* navbar */}
          <Navbar />
          {children}
          {/* footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
