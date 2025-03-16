"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImageCard from "../Components/ImageCard";
import Head from "next/head";

interface Portfolio {
  _id: string;
  title: string;
  homePageImage: string;
}

const PortfolioHomePage: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch portfolios from API
    const fetchPortfolios = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/portfolios`,
          {
            cache: "no-store",
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch portfolios");
        }

        const data: Portfolio[] = await res.json();
        setPortfolios(data);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  useEffect(() => {
    // Track screen size
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Example breakpoint: 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageClick = (id: string) => {
    router.push(`/portfolio/${id}`);
  };

  return (


    <>
    <Head>
        <title>Cribonix Portfolio - Creative Designs & Marketing That Deliver Results</title>
        <meta name="description" content="See how Cribonix transforms brands! Explore our portfolio showcasing successful digital marketing campaigns, creative branding, influencer marketing and more." />
        <meta name="keywords" content="Successful Brand Collaborations, Digital Marketing Case Studies, Creative Campaign Showcases, Influencer Marketing Success, Branding Project Highlights, Client Testimonials, Marketing Portfolio Examples" />
        <meta name="author" content="Cribonix" />
        <link rel="canonical" href="https://cribonix.com/services" />
      </Head>
    <div className="bg-primary scroll-smooth mx-auto">
      {/* Hero Section */}
      <section className="relative py-10 px-6 bg-primary border-t border-secondary md:py-14 lg:py-20">
        <div className="container mx-auto flex flex-col justify-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Brands We Admire and Collaborated with
          </h1>
          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-4">
            A Glimpse into Our Success Stories and Creative Impact
          </h4>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative max-w-7xl mx-auto px-2 py-12">
        {!loading && portfolios.length > 0 ? (
          isSmallScreen ? (
            // Column Layout for Small Screens
            <div className="grid grid-cols-1 gap-4">
              {portfolios.map((portfolio, index) => (
                <div
                  key={portfolio._id}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleImageClick(portfolio._id)}
                >
                  <div className="w-3/4">
                    <ImageCard
                      src={portfolio.homePageImage}
                      alt={portfolio.title}
                      index={index} // Added index
                      totalImages={portfolios.length} // Added totalImages
                    />
                  </div>
                  <h2 className="mt-2 text-sm font-semibold text-center text-white">
                    {portfolio.title}
                  </h2>
                </div>
              ))}
            </div>
          ) : (
            // Animated Layout for Larger Screens
            <div
              className="relative"
              style={{ height: `${portfolios.length * 100}vh` }}
            >
              {portfolios.map((portfolio, index) => (
                <div
                  key={portfolio._id}
                  className="sticky top-10 w-full flex items-center justify-center cursor-pointer"
                  style={{ zIndex: portfolios.length + index }}
                  onClick={() => handleImageClick(portfolio._id)}
                >
                  <ImageCard
                    src={portfolio.homePageImage}
                    alt={portfolio.title}
                    index={index}
                    totalImages={portfolios.length}
                  />
                  <h2 className="absolute bottom-12 text-lg md:text-2xl lg:text-3xl font-semibold text-center text-white">
                    {portfolio.title}
                  </h2>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="text-center text-white text-2xl">
            {loading ? "Loading..." : "No portfolios found."}
          </div>
        )}
      </section>
    </div>
    </>
  );
};

export default PortfolioHomePage;
