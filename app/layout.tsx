// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'keen-slider/keen-slider.min.css'; // Importing external styles
import Navbar from "./Components/Navbar"; // Correct import paths
import Footer from "./Components/Footer"; // Correct import paths
import { Inter } from 'next/font/google';

// Initialize the Inter font with desired configurations
const inter = Inter({
  subsets: ['latin'], // Specify subsets if needed
  variable: '--font-inter', // Define a CSS variable for the font
});

// Local font import with Tailwind CSS variable setup
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page (used in document <head>)
export const metadata: Metadata = {
  title: "Cribonix",
  description: "Cribonix - Innovative Solutions",
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Metadata and other head elements can go here */}
      </head>
      <body className="antialiased bg-primary font-sans">
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Main content of the page */}
        <main>
          {children}
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
