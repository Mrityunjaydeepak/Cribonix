"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect, useRef, FC } from "react";
import imgcont from "./images/Container.png";
import Button from "../Components/Button";
import team from "./images/Team.png";
import mem1 from "./images/Sachin.jpg";
import mem2 from "./images/Varun.jpg";
import mem3 from "./images/Vini.jpg";
import mem4 from "./images/HingLaj.png";
import office from "./images/Officereal.png";
import panel1 from "./images/Tabpanel(2).png";
import panel2 from "./images/Tabpanel(1).png";
import panel3 from "./images/Tabpanel.png";
import mountain from "./images/mountain.png";
import g1 from "./images/g1.png";
import g2 from "./images/g2.png";
import g3 from "./images/g3.png";
import g4 from "./images/g4.png";
import circle from "./images/circle.svg.png";
import verified from "./images/verified.png";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

// Define the structure of a metric
interface Metric {
  title: string;
  value: string;
}

// Define the structure of a dynamic image
interface DynamicImage {
  src: StaticImageData;
  alt: string;
}

const Whyus: FC = () => {
  // Metrics Data
  const metrics: Metric[] = [
    {
      title: "Ads Management",
      value: "50Cr+",
    },
    {
      title: "Years of Experience",
      value: "2+",
    },
    {
      title: "Successful Projects",
      value: "400+",
    },
  ];

  // Dynamic Images Data
  const dynamicImages: DynamicImage[] = [
    { src: panel1, alt: "Panel 1" },
    { src: panel2, alt: "Panel 2" },
    { src: panel3, alt: "Panel 3" },
  ];

  // State for Metrics Section
  const [currentMetricIndex, setCurrentMetricIndex] = useState<number>(0);
  const [isMetricVisible, setIsMetricVisible] = useState<boolean>(false);
  const metricsRef = useRef<HTMLDivElement | null>(null);

  // State for Dynamic Image Carousel Section
  const [currentDynamicImageIndex, setCurrentDynamicImageIndex] =
    useState<number>(0);
  const [isDynamicImageVisible, setIsDynamicImageVisible] =
    useState<boolean>(false);
  const dynamicImageRef = useRef<HTMLDivElement | null>(null);

  // State for Image Carousel (Manual Control)
  // const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  // const [isFading, setIsFading] = useState<boolean>(false);

  // Refs for Intervals
  const metricIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const dynamicImageIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle Metrics Animation
  useEffect(() => {
    const node = metricsRef.current;
    if (!node) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsMetricVisible(true);
        } else {
          setIsMetricVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  useEffect(() => {
    if (isMetricVisible) {
      metricIntervalRef.current = setInterval(() => {
        setCurrentMetricIndex((prevIndex) =>
          prevIndex === metrics.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change metric every 3 seconds
    } else {
      if (metricIntervalRef.current) {
        clearInterval(metricIntervalRef.current);
        metricIntervalRef.current = null;
      }
    }

    return () => {
      if (metricIntervalRef.current) {
        clearInterval(metricIntervalRef.current);
        metricIntervalRef.current = null;
      }
    };
  }, [isMetricVisible, metrics.length]);

  // Handle Dynamic Image Animation
  useEffect(() => {
    const node = dynamicImageRef.current;
    if (!node) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsDynamicImageVisible(true);
        } else {
          setIsDynamicImageVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  useEffect(() => {
    if (isDynamicImageVisible) {
      dynamicImageIntervalRef.current = setInterval(() => {
        setCurrentDynamicImageIndex((prevIndex) =>
          prevIndex === dynamicImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change dynamic image every 3 seconds
    } else {
      if (dynamicImageIntervalRef.current) {
        clearInterval(dynamicImageIntervalRef.current);
        dynamicImageIntervalRef.current = null;
      }
    }

    return () => {
      if (dynamicImageIntervalRef.current) {
        clearInterval(dynamicImageIntervalRef.current);
        dynamicImageIntervalRef.current = null;
      }
    };
  }, [isDynamicImageVisible, dynamicImages.length]);

  // Handle Image Carousel (Manual Control)
  // const handleButtonClick = (index: number) => {
  //   if (index === currentImageIndex || isFading) return;

  //   setIsFading(true);

  //   setTimeout(() => {
  //     setCurrentImageIndex(index);

  //     setTimeout(() => {
  //       setIsFading(false);
  //     }, 500);
  //   }, 500);
  // };

  return (
    <>  
     <Head>
        <title>Cribonix | Where Creativity Meets Performance in Digital Marketing</title>
        <meta name="description" content="Cribonix is your all-in-one digital marketing agency, offering creative strategies, influencer marketing and performance-driven solutions to help brands grow online." />
        <meta name="keywords" content="branding, storytelling, digital marketing, influence, legacy" />
        <meta name="author" content="Cribonix" />
        <link rel="canonical" href="https://cribonix.com/whyus" />
      </Head>
    
    
     <div className="bg-[#040404] scroll-smooth">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-auto sm:h-96 lg:h-[40rem]">
          <Image
            src={imgcont}
            alt="Office Background Image"
            layout="responsive"
            width={1500}
            height={900}
            className="object-cover opacity-50"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-16">
            <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-9xl font-bold text-white leading-tight">
              Mastering Every <span className="block">Digital Move.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-left text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
              <span className="font-bold text-3xl p-2 mb-5">
                ’’Where Aloo meets the Samosa’’
              </span>
              <br className="hidden sm:block" />
              At Cribonix, we're the “Bahubali” of digital marketing—always
              delivering what your brand needs. With blockbuster strategies,
              superstar solutions, and a script for success, we make sure your
              brand hits the spotlight.
              <br className="hidden sm:block" />
              Ready for a “Dhoom” of growth? We’ve got your back!
            </p>
          </div>

          {/* Right Content: Metrics */}
          <div
            className="w-full lg:w-1/2 relative h-40 sm:h-48 md:h-56 lg:h-64 flex justify-center items-center overflow-hidden"
            ref={metricsRef}
          >
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                  currentMetricIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                  {metric.title}
                </h2>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
                  {metric.value}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Started */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border border-t border-r-0 border-l-0 border-b-0 border-secondary">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Description */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            <h2 className="text-white text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold leading-tight">
              Where smart strategies meet creativity, we lift brands to new
              heights. Discover how knowledge drives our innovative solutions!
            </h2>
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
              At Cribonix, we harness knowledge and industry insights to create
              personalised digital marketing strategies. Our expert team stays
              ahead of trends and customer behaviours to help brands stand out.
              From SEO to social media, we craft methods that drive real
              results, ensuring your brand connects with its audience and grows.
              Let us turn our expertise into your brand's success!
            </p>
            <Link href="/solutions" className="flex justify-center">
              <button className="border text-base sm:text-lg md:text-xl border-secondary rounded-full px-6 py-3 text-white hover:bg-white hover:text-black">
                Solutions
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src={team}
              alt="Team Image"
              width={1200}
              height={500}
              className="object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-secondary">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-4xl md:text-2xl lg:text-4xl font-extrabold text-white text-center">
            THE VALUES THAT DRIVE, <br />
            EVERYTHING WE DO
          </h2>
          <h2 className="text-base sm:text-lg md:text-xl text-white font-light text-center">
            - More than goals. We’re on a mission.
            <br />
            Our values are the fuel behind every campaign, strategy, and
            breakthrough.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12 mt-12">
          {/* Dynamic Image Carousel Section */}
          <div
            className="relative w-full lg:w-2/3 h-[500px] flex items-center justify-center overflow-hidden"
            ref={dynamicImageRef}
          >
            {dynamicImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className={`rounded-md shadow-lg absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                  currentDynamicImageIndex === index
                    ? "opacity-100"
                    : "opacity-0 z-0"
                }`}
              />
            ))}

            {/* Indicator Section */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {dynamicImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                    currentDynamicImageIndex === index
                      ? "bg-white"
                      : "bg-gray-400"
                  } transition-colors duration-300`}
                />
              ))}
            </div>
          </div>

          {/* Content Section */}
        </div>
      </div>

      {/* Our Clients Section */}

      {/* Our Team */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-secondary">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              MEET OUR TEAM
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
              The brains behind the brilliance, the faces behind the flair. Meet
              the dreamers, creators, and doers shaping Cribonix’s magic.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 justify-center items-center lg:items-start">
            <Button
              text="Join Us"
              href="/Contact"
              variant="primary"
              ariaLabel="Join Us"
              className="w-full sm:w-40 p-3 flex justify-center items-center hover:text-black hover:bg-white transition"
            />
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem1}
              alt="Herman Defoe"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg mt-1">Sachin </h2>
            <h3 className="text-white text-md font-light">
              Chief Executive Officer
            </h3>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem2}
              alt="Jane Doe"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg mt-1">Varun</h2>
            <h3 className="text-white text-md font-light">
              Chief operations Officer
            </h3>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem3}
              alt="John Smith"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg mt-1">Vini</h2>
            <h3 className="text-white text-md font-light">
              Chief Sales Officer
            </h3>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <Image
              src={mem4}
              alt="Emily Davis"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
            <p className="text-gray-400 font-light text-sm mt-4">
              Hi! my Name is
            </p>
            <h2 className="text-white font-bold text-lg mt-1">Hinglaj</h2>
            <h3 className="text-white text-md font-light">
              Digital Marketing Head
            </h3>
          </div>
        </div>
      </div>

      {/* Visit Our Office */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-secondary">
        <div className="flex justify-center mb-8 sm:mb-12">
          <h2 className="font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl text-center">
            VISIT OUR OFFICE
          </h2>
        </div>
        <div className="relative flex justify-center transition-opacity duration-500">
          <Image
            src={office}
            alt="Office Background"
            className="object-cover rounded-md shadow-lg opacity-80"
          />
        </div>
      </div>

      {/* Follow us on Instagram */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-secondary">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            FOLLOW OUR WORK <br /> ON INSTAGRAM
          </h2>
          <h2 className="text-base sm:text-lg md:text-xl text-white text-center">
            Behind Every Swipe, There’s a Story to Tell.
            <br />
            Join us on Instagram for a peek into our world!
          </h2>
          <div className="flex flex-row  items-center justify-center space-x-3 sm:space-x-4 mt-6 sm:mt-8">
            <Image src={circle} alt="Circle Icon" width={24} height={24} />
            <span className="text-white font-bold">@Cribonix</span>
            <Image src={verified} alt="Verified Icon" width={24} height={24} />
            <Link
              href="https://www.instagram.com/cribonix/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 sm:px-4 py-2 border border-secondary rounded-full text-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-colors duration-300"
            >
              <FaInstagram />
              <span>Follow us</span>
            </Link>
          </div>
        </div>

        {/* Instagram Images */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-2  sm:py-10 ">
          <div className="flex flex-col lg:flex-row justify-center gap-8 items-center mt-8 sm:mt-12">
            {/* Mountain Image */}
            <div className="w-full lg:w-2/5 relative justify-center">
              <Image
                src={mountain}
                alt="Mountain"
                className="object-cover rounded-md shadow-lg"
              />
            </div>

            {/* Grid of Images */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
              {/* First Row */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="relative w-full sm:w-1/2 h-64">
                  <Image
                    src={g1}
                    alt="Gallery 1"
                    fill
                    className="object-cover rounded-md shadow-lg"
                  />
                </div>
                <div className="relative w-full sm:w-1/2 h-64">
                  <Image
                    src={g2}
                    alt="Gallery 2"
                    fill
                    className="object-cover rounded-md shadow-lg"
                  />
                </div>
              </div>
              {/* Second Row */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="relative w-full sm:w-1/2 h-64">
                  <Image
                    src={g3}
                    alt="Gallery 3"
                    fill
                    className="object-cover rounded-md shadow-lg"
                  />
                </div>
                <div className="relative w-full sm:w-1/2 h-64">
                  <Image
                    src={g4}
                    alt="Gallery 4"
                    fill
                    className="object-cover rounded-md shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Carousel Section */}
    </div></>
 
  );
};

export default Whyus;
