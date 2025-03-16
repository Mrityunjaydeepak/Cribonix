


import React from "react";
import Image from "next/image";
import bloging from "./images/listening skills.png";

const BlogTwo: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Image Section */}
      <div className="relative w-full h-72 sm:h-96 lg:h-[40rem]">
        <Image
          src={bloging}
          alt="Office Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />
      </div>

      {/* Text Content Section */}
      <div className="mt-8 space-y-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Design Thinking: Putting People at the Center of Strategy
        </h1>

        <h2 className="text-sm sm:text-base lg:text-lg text-justify">
          Design thinking is about putting people at the center of your strategy. It’s not just about
          creating a campaign; it’s about solving problems creatively with empathy.
        </h2>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">
          Why Use Design Thinking in Marketing?
        </h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Consumers today expect personalized, human-centric experiences. Design thinking allows marketers
          to anticipate these expectations, offering solutions that resonate deeply with their target
          audience.
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">
          How Can You Implement Design Thinking?
        </h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          <ul className="list-disc pl-5">
            <li>
              <strong>Empathize with Your Audience:</strong> Research their pain points, motivations, and
              behaviors.
            </li>
            <li>
              <strong>Define the Problem:</strong> Narrow your focus to specific issues your product or
              campaign can solve.
            </li>
            <li>
              <strong>Ideate Solutions:</strong> Brainstorm innovative ways to communicate your value.
            </li>
            <li>
              <strong>Test and Refine:</strong> Launch small-scale campaigns, gather feedback, and improve.
            </li>
          </ul>
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">
          Case Study: Airbnb’s Rebranding with “Bélo”
        </h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Airbnb used design thinking to address a critical challenge: making travelers feel at home anywhere.
          By empathizing with users, they created the "Bélo" logo as a symbol of belonging. This human-centric
          approach, coupled with iterative testing, transformed their brand image and customer experience.
        </p>

        <h1 className="text-xl sm:text-2xl font-bold">Key Takeaway:</h1>
        <p className="text-xs sm:text-sm lg:text-base">
          Design thinking doesn’t just sell products; it fosters meaningful relationships with your audience.
        </p>
      </div>
    </div>
  );
};

export default BlogTwo;

