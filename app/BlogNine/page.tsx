import React from "react";
import Image from "next/image";
import bloging from "./images/container.jpeg";

const BlogNine: React.FC = () => {
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
          What’s the Interplay Between All These Elements in a Campaign?
        </h1>

        <h2 className="text-sm sm:text-base lg:text-lg text-justify">
          The most successful campaigns don’t rely on just one strategy—they combine multiple approaches to create a unified experience that drives results.
        </h2>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Why Does Combining These Elements Work?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Each of the concepts we've covered—system thinking, design thinking, Feynman’s theory, listening, creative design, color theory, psychology, and emotional thinking—works best when integrated. Alone, each element is valuable, but together they create a robust, dynamic marketing strategy that appeals to every facet of consumer behavior.
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">How Can You Create Synergy in Your Campaigns?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          <ul className="list-disc pl-5">
            <li>
              <strong>Integrate Design and Emotion:</strong> Use creative design to evoke emotions through visuals and color.
            </li>
            <li>
              <strong>Leverage Psychology and System Thinking:</strong> Apply psychological principles (e.g., scarcity) to optimize every stage of your campaign, from content creation to call-to-action.
            </li>
            <li>
              <strong>Refine Through Listening:</strong> Use feedback and listening tools to fine-tune your approach, ensuring all elements are working toward a common goal.
            </li>
          </ul>
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Case Study: Coca-Cola’s “Share a Coke” Campaign</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Coca-Cola’s “Share a Coke” campaign seamlessly integrated design thinking (personalized bottles), emotional thinking (the joy of sharing), and system thinking (social media amplification). The personalized bottles triggered emotional responses, driving not just individual sales but widespread brand conversations. The campaign's success was fueled by its holistic approach—each component reinforced the others.
        </p>

        <h1 className="text-xl sm:text-2xl font-bold">Key Takeaway:</h1>
        <p className="text-xs sm:text-sm lg:text-base">
          Combining multiple strategic elements allows you to create campaigns that are more impactful and engaging.
        </p>
      </div>
    </div>
  );
};

export default BlogNine;
