"use client";

import React, { useEffect, useRef, useState } from "react";

import Card from "../Components/Card";
import BlogCard from "../Components/BlogCard";
import imgOne from "./images/66edba4c724f61b2a4dd3418_blog-image-6.webp.png";
import imgTwo from "./images/listening skills.png";
import imgThree from "./images/feynman.png";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import image4C from "./images/✦ Nubeer.png";
import seo from "./images/58 - Seo.gif";
import pooSeo from "./images/Poor SEO practices.png";
import AdFatiqueStatic from "./images/Ad fatigue.png";
import BrandValueStatic from "./images/Brand value vs brand promotion.png";
import CompetitionStatic from "./images/Competition Analysis.png";
import CrossChannelStatic from "./images/Cross Channel Integration Problems.png";
import GoogleBusiness from "./images/Google Business Management.png";
import GrowthLowBudgetStatic from "./images/Growth on low budget.png";
import inabilityStatic from "./images/Inability to measure ROI.png";
import ineffectiveContent from "./images/Ineffective Content Strategies.png";
import ineffectiveInfluencer from "./images/Ineffective Influencer Collborations.png";
import MarketingManagement from "./images/Marketing management team.png";
import socialmediaStatic from "./images/Social Media Management Challenges.png";
import sustainablegrowthStatic from "./images/Sustainable Growth.png";

import pooSeogif from "./images/Poor SEO practices.gif";
import AdFatiquegif from "./images/Ad fatigue.gif";
import BrandValuegif from "./images/Brand value vs brand promotion.gif";
import Competitiongif from "./images/Competition Analysis.gif";
import CrossChannelgif from "./images/Cross Channel Integration Problems.gif";
import GoogleBusinessgif from "./images/Google Business Management.gif";
import GrowthLowBudgetgif from "./images/Growth on low budget.gif";
import inabilitygif from "./images/Inability to measure ROI.gif";
import ineffectiveContentgif from "./images/Ineffective Content Strategies.gif";
import ineffectiveInfluencergif from "./images/Ineffective Influencer Collborations.gif";
import MarketingManagementgif from "./images/Marketing management team.gif";
import socialmediagif from "./images/Social Media Management Challenges.gif";
import sustainablegrowthgif from "./images/Sustainable Growth.gif";

import estate from "./images/White and Blue Modern Creative Real Estate Property Marketing Instagram Post (1).jpg";
import ImageSection from "../Components/ImageSection";
import CountUp from "react-countup";
import ShinyText from "../Components/ShinyText";
import PortfolioHomePage from "../portfolio/page";
import TestimonialsSection from "../Components/TestimonialsSection";

interface Cribonix {
  heading: string;
  tagline: string;
  number: string;
  subheading?: string;
  description: string;
  height?: string;
  width?: string;
  image?: string;
  link?: string;
}

const Hero: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: " Why is System Thinking Crucial in Digital Marketing?",
      description:
        "Digital marketing isn’t just about individual tactics—it’s about how all these elements work together to achieve success.",
      imageUrl: imgOne,
      link: "/blogOne",
    },
    {
      id: 2,
      title: " How Can Design Thinking Revolutionize Digital Campaigns?",
      description:
        "Design thinking is about putting people at the center of your strategy. It’s not just about creating a campaign; it’s about solving problems creatively with empathy..",
      imageUrl: imgTwo,
      link: "/blogTwo",
    },
    {
      id: 3,
      title: " What Can Digital Marketers Learn from the Feynman Theory?",
      description:
        "Clear communication is often the most overlooked aspect of marketing. The Feynman Theory—explaining complex ideas in simple terms—can make your campaigns more effective.",
      imageUrl: imgThree,
      link: "/blogThree",
    },
  ];
  const cribonix: Cribonix[] = [
    {
      heading: "01",
      subheading: "CUSTOMER FIRST",
      tagline: "Customer hi Bhagwaan Hai!",
      number: "01",
      description:
        " We prioritize our customers' needs and preferences, ensuring that every decision we make is driven by their satisfaction and loyalty.",
      height: "h-74",
      width: "w-full",
    },
    {
      heading: "02",
      subheading: "COLLABORATIVE COMMUNICATION",
      tagline: "Hum Saath Saath Hai!",
      number: "02",
      description:
        " We believe in open and transparent communication, fostering collaboration among teams and clients to achieve common goals effectively.",
      height: "h-74",
      width: "w-full",
    },
    {
      heading: "03",
      subheading: "CREATIVE EXCELLENCE",
      tagline: "Yeh Apun ka Style Hai!",
      number: "03",
      description:
        " Our approach focuses on creativity, providing innovative solutions that engage audiences and enhance brand storytelling.",
      height: "h-74",
      width: "w-full",
    },
    {
      heading: "04",
      subheading: "COST VALUATION",
      tagline: "Ab Hoga Sabse Bada Rupaiya!",
      number: "04",
      description:
        " We regularly review and adjust costs to ensure our strategies provide great value and support your business goals.",
      height: "h-74",
      width: "w-full",
    },
  ];

  const [scrollY, setScrollY] = useState<number>(0);
  const controls = useAnimation();
  const images = [
    estate,
    estate,
    estate,
    estate,
    estate,
    estate,
    estate,
    estate,
    estate,
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  interface Testimonial {
    id: string;
    rating: number; // Number of stars (1-5)
    reviewTitle: string;
    review: string;
    name: string;
    designation: string;
  }

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/testimonials`,
          {
            cache: "no-store", // Ensure fresh data is fetched
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data: Testimonial[] = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // useEffect(() => {
  //   const keenSlider = new KeenSlider("#keen-slider", {
  //     loop: true,
  //     defaultAnimation: {
  //       duration: 500,
  //     },
  //     slides: {
  //       origin: "center",
  //       perView: 1,
  //       spacing: 15,
  //     },
  //     breakpoints: {
  //       "(min-width: 640px)": {
  //         slides: {
  //           perView: 1,
  //           spacing: 15,
  //         },
  //       },
  //       "(min-width: 768px)": {
  //         slides: {
  //           perView: 2,
  //           spacing: 20,
  //         },
  //       },
  //       "(min-width: 1024px)": {
  //         slides: {
  //           perView: 2,
  //           spacing: 32,
  //         },
  //       },
  //     },
  //   });

  //   const keenSliderPrevious = document.getElementById("keen-slider-previous");
  //   const keenSliderNext = document.getElementById("keen-slider-next");
  //   const keenSliderPreviousMobile = document.getElementById(
  //     "keen-slider-previous-mobile"
  //   );
  //   const keenSliderNextMobile = document.getElementById(
  //     "keen-slider-next-mobile"
  //   );

  //   const handlePrev = () => {
  //     keenSlider.prev();
  //   };

  //   const handleNext = () => {
  //     keenSlider.next();
  //   };

  //   keenSliderPrevious?.addEventListener("click", handlePrev);
  //   keenSliderNext?.addEventListener("click", handleNext);
  //   keenSliderPreviousMobile?.addEventListener("click", handlePrev);
  //   keenSliderNextMobile?.addEventListener("click", handleNext);

  //   return () => {
  //     keenSliderPrevious?.removeEventListener("click", handlePrev);
  //     keenSliderNext?.removeEventListener("click", handleNext);
  //     keenSliderPreviousMobile?.removeEventListener("click", handlePrev);
  //     keenSliderNextMobile?.removeEventListener("click", handleNext);
  //     keenSlider.destroy();
  //   };
  // }, []);

  const problems = [
    {
      title: "Brand Value vs Brand Promotion",
      staticImage: BrandValueStatic,
      hoverImage: BrandValuegif,
    },
    {
      title: "Competitive Analysis",
      staticImage: CompetitionStatic,
      hoverImage: Competitiongif,
    },
    {
      title: "Poor SEO Practices",
      staticImage: pooSeo,
      hoverImage: seo,
    },
    {
      title: "Ineffective Content Strategies",
      staticImage: ineffectiveContent,
      hoverImage: ineffectiveContentgif,
    },
    {
      title: "Ad Fatigue",
      staticImage: AdFatiqueStatic,
      hoverImage: AdFatiquegif,
    },
    {
      title: "Sustainable Growth",
      staticImage: sustainablegrowthStatic,
      hoverImage: sustainablegrowthgif,
    },
    {
      title: "Ineffective Influencer Collaborations",
      staticImage: ineffectiveInfluencer,
      hoverImage: ineffectiveInfluencergif,
    },
    {
      title: "Social Media Management Challenges",
      staticImage: socialmediaStatic,
      hoverImage: socialmediagif,
    },
    {
      title: "Google Business Management",
      staticImage: GoogleBusiness,
      hoverImage: GoogleBusinessgif,
    },
    {
      title: "Inability to Measure ROI",
      staticImage: inabilityStatic,
      hoverImage: inabilitygif,
    },
    {
      title: "Cross-Channel Integration Problems",
      staticImage: CrossChannelStatic,
      hoverImage: CrossChannelgif,
    },
    {
      title: "Growth on a Low Budget",
      staticImage: GrowthLowBudgetStatic,
      hoverImage: GrowthLowBudgetgif,
    },
    {
      title: "Marketing Management Team",
      staticImage: MarketingManagement,
      hoverImage: MarketingManagementgif,
    },
  ];

  const controlsProblems = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsProblems.start("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controlsProblems]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const problemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  // Variants for motion divs
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Staggering animation for cards
        duration: 0.6,
        type: "spring",
      },
    }),
  };
  return (
    <div className="bg-[#040404]">
      {/* Our Story Section */}
      <div className="container flex flex-col justify-center items-center mx-auto py-16 p-2">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12 border-t border-secondary pt-12">
          {/* Our Story Heading */}
          <div className="flex flex-col space-y-6 lg:w-1/3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              The Art of
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#009DD1] to-[#bf3fd2]">
                <br /> Digital <br />
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] ">
                Marketing
              </span>
            </h1>
            <Link href="/contact">
              <button className="border border-secondary rounded-full px-6 py-3 text-white hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] transition">
                More About Us
              </button>
            </Link>
          </div>
          {/* Our Story Content */}
          <div className="lg:w-2/3 space-y-6">
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              In a world filled with noise,{" "}
              <span className="text-white">
                Cribonix stands out as a master creator{" "}
              </span>
              , crafting digital stories that truly connect with audiences. We
              believe every brand has a unique tale to tell, and{" "}
              <span className="text-white">our mission is </span>
              to help yours shine. Our passionate team blends innovation with
              artistry,
              <span className="text-white">transforming your vision </span> into
              an engaging narrative{" "}
              <span className="text-white">
                that sparks connections and drives results.{" "}
              </span>
            </p>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              With strategies that push boundaries and creativity that knows no
              limits,
              <span className="text-white ">
                we craft campaigns that not only speak but sing to your audience{" "}
              </span>{" "}
              . Are you ready to unlock your brand's potential and start an
              exciting journey with us? Then let's create magic together!
            </p>
          </div>
        </div>
      </div>

      {/* 4 Cs of Cribonix */}
      <div className="container mx-auto px-6 py-16 border-t border-secondary">
        <div className="flex justify-between items-center mb-12">
          {/* Placeholder for symmetry */}
          <div className="flex-1"></div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#039CD4] to-[#c43ddd]">
              4 C's
            </span>{" "}
            of Marketing
          </h1>

          {/* Image */}
          <div className="relative w-24 h-44 ml-4 flex-1 flex justify-end">
            {/* <Image
              src={image4C} // Replace with your image
              alt="Marketing Icon"
              layout="fill"
              objectFit="contain"
            /> */}
          </div>
        </div>

        {/* Subtitle */}
        <h2 className="mt-4 text-xl sm:text-2xl text-white text-center">
          Unlocking New-Age Marketing: The 4 Pillars of <br /> Digital Success
          by Cribonix
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cribonix.map((item, index) => (
            <Card
              key={index}
              height={item.height}
              width={item.width}
              number={item.number}
              subheading={item.subheading}
              tagline={item.tagline}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* Problems Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center">
              Problems
            </h2>
            <p className="mt-4 max-w-2xl mx-auto">
              The digital realm is full of unwanted and unique problems, but
              hey! Cribonix turns them into growth opportunities with its smart
              and creative solutions.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer flex flex-col items-center"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                {/* Static Image */}

                <div className="relative w-48 h-48">
                  <Image
                    src={problem.staticImage}
                    alt={problem.title}
                    className="transition-opacity duration-300"
                    layout="fill"
                    objectFit="cover"
                  />

                  {/* Hover Image */}
                  <Image
                    src={problem.hoverImage}
                    alt={`${problem.title} hover`}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mt-4">{problem.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Services Section */}
      <div className="container mx-auto px-6 py-16 border-t border-secondary relative">
        {/* Background Image */}
        <div className="absolute left-0 -top-10 lg:left-[-100px] opacity-30 z-0 w-64 h-64">
          <Image
            src={image4C} // Replace with your image
            alt="Decorative Background"
            layout="fill"
            objectFit="contain"
            className=""
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0 lg:space-x-12">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl font sm:text-5xl md:text-6xl lg:text-5xl text-white leading-tight">
                Building Strategies <br /> and Crafting{" "}
                <span className="text-white/50">
                  Effective <br /> Ideas for Lasting Impressions
                </span>
              </h1>
            </div>

            {/* Features */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-2">
                <h2 className="text-white text-2xl">
                  <span className="text-[#009DD1] mr-2">|</span> Data-Driven
                  Results
                </h2>
                <p className="text-gray-400 text-base leading-relaxed">
                  We provide clear, actionable insights from every campaign to
                  ensure measurable growth and success.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-white text-2xl">
                  <span className="text-[#009DD1] mr-2">|</span> Fast,
                  Result-Driven Execution
                </h2>
                <p className="text-gray-400 text-base leading-relaxed">
                  With our agile approach, we deliver high-impact solutions and
                  measurable results in record time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-6 py-4 mb-12">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8">
          {/* Statistic Item */}
          <div className="text-center px-20">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              {" "}
              <ShinyText
                text="50Cr+"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mt-2">
              Spent on Ads
            </p>
          </div>
          {/* Statistic Item */}
          <div className="text-center px-20">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              <ShinyText
                text="5000+"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mt-2">
              Projects Onboarded
            </p>
          </div>
          {/* Statistic Item */}
          <div className="text-center px-20">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              <ShinyText
                text="4x"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mt-2">
              Avg ROI for brands
            </p>
          </div>
        </div>
      </div>

      <PortfolioHomePage />

      {/* Testimonials Section */}
      <section className="bg-primary border-t border-secondary py-16">
        <TestimonialsSection />
      </section>

      {/* ......................... */}
      <section className="bg-primary border-t border-secondary py-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8 sm:flex-col">
            <h1 className=" flex text-7xl font-bold mb-6 ">Blogs</h1>
            <Link href="/blogs">
              <button
                className="text-lg sm:text-xl border border-[#383838] py-3 px-3 text-white rounded-full hover:bg-white hover:text-black transition duration-300 w-28"
                aria-label="View Blogs"
              >
                View all
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                description={post.description}
                imageUrl={post.imageUrl}
                link={post.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
