import React from "react";
import Image from "next/image";
import bloging from "./images/feynman.png";

const BlogThree: React.FC = () => {
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
          What Can Digital Marketers Learn from the Feynman Theory?
        </h1>

        <h2 className="text-sm sm:text-base lg:text-lg text-justify">
          Clear communication is often the most overlooked aspect of marketing.
          The Feynman Theory—explaining complex ideas in simple terms—can make your campaigns more effective.
        </h2>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Why Simplify?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Marketing jargon can alienate your audience or team. Simplifying ensures your message is universally
          understood, improving engagement and internal collaboration.
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">How Can You Use the Feynman Technique?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          <ul className="list-disc pl-5">
            <li>
              <strong>Write It Down:</strong> Explain your campaign as if speaking to someone with no marketing
              background.
            </li>
            <li>
              <strong>Identify Gaps:</strong> Where does your explanation falter? Simplify further.
            </li>
            <li>
              <strong>Test Your Message:</strong> Share your explanation with colleagues or friends to gauge clarity.
            </li>
          </ul>
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Case Study: Slack’s Easy Onboarding</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Slack demystified a complex tool by simplifying its purpose to “a messaging app for teams.” Clear instructions
          and a jargon-free approach made it easy for businesses to adopt Slack, driving rapid growth.
        </p>

        <h1 className="text-xl sm:text-2xl font-bold">Key Takeaway:</h1>
        <p className="text-xs sm:text-sm lg:text-base">
          Simplifying your message can bridge the gap between complex strategies and actionable results.
        </p>
      </div>
    </div>
  );
};

export default BlogThree;
