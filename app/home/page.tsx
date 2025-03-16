
"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import throttle from "lodash/throttle";
import Head from "next/head";
import Hero from "../hero/Hero";
import logo from "./images/Mask group.png";
import bgimg from "./images/bg.gif";
import Link from "next/link";

const inter = Inter({
  weight: ["900"],
  subsets: ["latin"],
  display: "swap",
});

const Homei: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Cribonix | Your Partner in Digital Marketing, Creative Design & Influencer Growth</title>
        <meta name="description" content="Cribonix helps brands grow with expert digital marketing, creative designs and influencer marketing solutions with identifying the right audience as we believe every brand has a unique tale to tell.." />
        <meta name="keywords" content="branding, storytelling, digital marketing, influence, legacy" />
        <meta name="author" content="Cribonix" />
        <link rel="canonical" href="https://cribonix.com" />
      </Head>

      <div
        ref={containerRef}
        className="relative flex flex-col md:mt-16 items-center min-h-screen w-full px-0 sm:px-4 bg-black overflow-hidden"
      >
        <Image 
          src={bgimg}  
          alt="BackgroundGIF"
          layout="fill"
          objectFit="cover"
          className="z-1"
          priority
        />

        {/* Heading in the left upper quadrant */}
        <div
          className="absolute text-white font-bold text-left"
          style={{
            top: "15%",
            left: "10%",
          }}
        >
          <h1 className="text-xl sm:text-2xl md:text-6xl lg:text-7xl xl:text-8xl">
            Your Story,
            <br /> Our Influence.
          </h1>
        </div>

        {/* Paragraph in the right lower quadrant */}
        <div
          className="absolute text-white text-right max-w-lg"
          style={{
            bottom: "25%",
            right: "10%",
          }}
        >
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Want your brand&apos;s story to echo through time? Let Cribonix weave your 
            narrative into an unforgettable legacy!
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 justify-end sm:space-y-0 sm:space-x-6 mt-6">
            <Link href="/contact">
              <button className="text-sm sm:text-lg border border-[#383838] bg-white text-black rounded-full py-2 sm:py-3 px-6 sm:px-8 hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] hover:text-white transition duration-300 w-40 sm:w-52" aria-label="Contact Us">
                Contact Us
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="text-sm sm:text-lg border border-[#383838] text-white rounded-full py-2 sm:py-3 px-6 sm:px-8 hover:bg-white hover:text-black transition duration-300 w-40 sm:w-52" aria-label="View Portfolio">
                View Portfolio
              </button>
            </Link>
          </div>

          {/* Buttons */}
        </div>
      </div>
      
      {/* Hero component below */}
      <Hero />
    </>
  );
};

export default Homei;


