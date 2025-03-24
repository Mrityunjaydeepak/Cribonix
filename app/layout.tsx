import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Local font import
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

// 🚀 **Dynamically Load Metadata for Each Page**
export async function generateMetadata({ params }: { params: { slug?: string } }): Promise<Metadata> {
  try {
    if (!params.slug) {
      return {
        title: "Cribonix | Digital Marketing & Creative Design",
        description: "Cribonix helps brands grow with expert digital marketing, creative designs, and influencer marketing solutions.",
      };
    }

    const metaModule = await import(`./${params.slug}/meta`);
    return metaModule.metadata;
  } catch (error) {
    console.error("⚠️ Metadata Error:", error);
    return {
      title: "default",
      description: "Cribonix helps brands grow with expert digital marketing, creative designs, and influencer marketing solutions.",
    };
  }
}

// 🏗 **Root Layout Component**
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-primary font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
