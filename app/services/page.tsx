"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import office from "./images/Container.png";
import service1 from "./images/service1.png";
import service2 from "./images/service2.png";
import service3 from "./images/service3.png";
import service4 from "./images/service4.png";
import service5 from "./images/service5.png";
import service6 from "./images/service6.png";
import Head from "next/head";
import Link from "next/link";

interface Service {
  id: string;
  image: StaticImageData | string;
  title: string;
  description: string;
  usps: string[];
}

interface VisibleServices {
  [key: string]: boolean;
}

const Services: React.FC = () => {
  const [visibleServices, setVisibleServices] = useState<VisibleServices>({});

  const toggleServiceVisibility = (serviceId: string) => {
    setVisibleServices((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  const services: Service[] = [
    {
      id: "service1",
      image: service1,
      title: "Creative Campaigns",
      description:
        "Our Creative Campaigns service is all about bringing your brand to life through powerful visuals and engaging storytelling. We specialize in creating campaigns that catch the eye and evoke genuine emotions.",
      usps: [
        "Eye-Catching Visuals: Vibrant, high-quality designs that grab attention instantly.",
        "Emotional Resonance: Storytelling that forms a meaningful bond with your audience.",
        "Strategic Messaging: Clear, purposeful communication that drives results.",
      ],
    },
    {
      id: "service2",
      image: service2,
      title: "Influencer Mastery",
      description:
        "Our Influencer Mastery service handles the entire influencer campaign process, ensuring seamless execution and maximum impact. We excel at identifying the right influencers who align with your brand’s goals and values.",
      usps: [
        "Perfect Influencer Match: We connect you with influencers who truly represent your brand.",
        "Effortless Execution: Full-service management, so you can focus on growth.",
        "Impact-Driven Results: Campaigns designed to captivate and convert.",
      ],
    },
    {
      id: "service3",
      image: service3,
      title: "Ad Magic",
      description:
        "Our Ad Magic service ensures your brand gets the spotlight it deserves, from Meta to Google. We manage and optimize your ad spend, crafting high-impact campaigns that capture attention and drive engagement.",
      usps: [
        "Precision Targeting: Reach your ideal audience with customized ad strategies.",
        "Optimized Budget Use: Maximize every dollar spent for top ROI.",
        "Creative Excellence: Ads that engage, convert, and leave a lasting impression.",
      ],
    },
    {
      id: "service4",
      image: service4,
      title: "Effortless UGC Management",
      description:
        "Our Effortless UGC Management service takes the complexity out of handling user-generated content (UGC). We transform authentic customer stories, photos, and reviews into compelling marketing assets.",
      usps: [
        "Time-Saving Solutions: We handle all UGC operations for you.",
        "Authentic Engagement: Boost credibility with real customer stories.",
        "Strategic Use: Optimize UGC to maximize impact and reach.",
      ],
    },
    {
      id: "service5",
      image: service5,
      title: "Strategic Branding",
      description:
        "Our Strategic Branding service ensures your brand thrives in the digital landscape. We craft consistent brand strategies tailored to your market, helping you make a powerful impact and foster lasting connections.",
      usps: [
        "Tailored Strategies: Personalized branding solutions for maximum relevance.",
        "Distinctive Identity: Create a memorable and cohesive brand voice.",
        "Market-Driven: Designed to engage and captivate your target audience.",
      ],
    },
    {
      id: "service6",
      image: service6,
      title: "Performance Insights",
      description:
        "Our Performance Insights service transforms data into actionable growth strategies. We deeply analyze key performance metrics to ensure your digital marketing efforts are optimized for success.",
      usps: [
        "Data-Driven Analysis: Comprehensive performance tracking and analysis.",
        "Actionable Strategies: Recommendations to maximize ROI.",
        "Continuous Optimization: Adaptive improvements for ongoing success.",
      ],
    },
  ];

  return (
    <>
     <Head>
        <title>Cribonix Portfolio - Creative Designs & Marketing That Deliver Results</title>
        <meta name="description" content="See how Cribonix transforms brands! Explore our portfolio showcasing successful digital marketing campaigns, creative branding, influencer marketing and more." />
        <meta name="keywords" content="branding, storytelling, digital marketing, influence, legacy" />
        <meta name="author" content="Cribonix" />
        <link rel="canonical" href="https://cribonix.com/portfolio" />
      </Head>
    <div className="bg-primary">
      {/* Header Section */}
      <div className="container mx-auto px-6">
        <div className="relative">
          <Image
            src={office}
            alt="Why Us Background Image"
            layout="responsive"
            width={1200}
            height={600}
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
            <h1 className="text-2xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-white leading-tight">
              BLOCKBUSTER STRATEGIES
            </h1>
          </div>
        </div>
        <h1 className="text-lg flex justify-center mt-6 sm:text-xl md:text-2xl font-bold text-white">
          From script to screen, we provide the tools and strategies that turn
          your brand into a digital sensation.
        </h1>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-16 border-t border-secondary">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-12">
          Our Services
        </h1>

        {/* Services List */}
        <div className="grid grid-cols-1 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col"
              onClick={() => toggleServiceVisibility(service.id)}
            >
              <Image
                src={service.image}
                alt={service.title}
                layout="responsive"
                width={1500}
                height={800}
                className="object-cover rounded-lg"
              />
              {visibleServices[service.id] && (
                <div className="flex flex-col lg:flex-row justify-between mt-6 bg-[#030303] p-6 rounded-lg">
                  <div className="flex flex-col space-y-4 lg:w-2/3">
                    <h1 className="text-3xl font-extrabold text-white">
                      About the service
                    </h1>
                    <p className="text-white text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <h1 className="text-2xl font-bold text-white mt-4">
                      Our USPs:
                    </h1>
                    <ul className="list-disc list-inside text-white text-lg space-y-2">
                      {service.usps.map((usp, index) => (
                        <li key={index}>{usp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:w-1/3 p-6 rounded-xl bg-[#2D2D2D] flex flex-col justify-center items-center space-y-6">
                    <h2 className="font-bold text-2xl text-white">
                      Let's connect for a discussion
                    </h2>
                    <p className="text-white flex text-center text-lg items-center">
                      Interested in {service.title}? Contact us today to start
                      the conversation.
                    </p>
                    <Link href="/Contact">
                      <button className="px-6 py-3 border border-secondary bg-white text-black rounded-full hover:bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] transition duration-300">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
