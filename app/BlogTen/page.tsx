import React from "react";
import Image from "next/image";
import bloging from "./images/container.jpg"; // Example image for Apple product launch

const BlogTen: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Image Section */}
      <div className="relative w-full h-72 sm:h-96 lg:h-[40rem]">
        <Image
          src={bloging}
          alt="Apple Product Launch"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />
      </div>

      {/* Text Content Section */}
      <div className="mt-8 space-y-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Case Study – How Brand X Implemented These Strategies
        </h1>

        <h2 className="text-sm sm:text-base lg:text-lg text-justify">
          Let’s see how a brand successfully combines all of the discussed strategies in a real-world scenario.
        </h2>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Case Study: Apple’s Product Launch Campaigns</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Apple's product launches are the epitome of integrated digital marketing strategies. They apply system thinking by aligning every element of the launch—events, advertisements, emails, and even in-store experience—into a cohesive strategy. Apple also integrates design thinking to ensure the user experience is seamless from the moment a customer engages with their brand. They use color theory in their minimalist design to create a feeling of sophistication, and emotional thinking is at the core of their campaigns, often focusing on personal empowerment and innovation.
        </p>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Their campaigns aren’t just about selling products; they’re about building a movement. By combining system thinking, design thinking, creative design, psychology, and emotional appeal, Apple consistently creates a narrative that captivates audiences and drives loyalty.
        </p>

        <h1 className="text-xl sm:text-2xl font-bold pt-2">Key Takeaway:</h1>
        <p className="text-xs sm:text-sm lg:text-base">
          When these strategies come together, they form a cohesive and powerful marketing machine that generates immense brand loyalty and sales.
        </p>
      </div>
    </div>
  );
};

export default BlogTen;
