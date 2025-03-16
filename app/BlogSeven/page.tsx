import React from "react";
import Image from "next/image";
import bloging from "./images/container.png";

const BlogSeven: React.FC = () => {
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
          Why Understanding Consumer Psychology is Non-Negotiable?
        </h1>

        <h2 className="text-sm sm:text-base lg:text-lg text-justify">
          Understanding consumer psychology is the cornerstone of successful marketing. By tapping into the mental triggers that drive purchasing decisions, marketers can craft campaigns that resonate more deeply with their audience.
        </h2>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Why Is Consumer Psychology Important?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          The decisions customers make are influenced by both conscious and subconscious factors. By understanding these psychological drivers—like scarcity, social proof, or authority—marketers can position their products or services in a way that appeals to these innate tendencies.
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">How Can You Leverage Consumer Psychology?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          <ul className="list-disc pl-5">
            <li>
              <strong>Scarcity:</strong> Create urgency by promoting limited-time offers or exclusive deals.
            </li>
            <li>
              <strong>Social Proof:</strong> Use testimonials, reviews, or influencer endorsements to increase trust.
            </li>
            <li>
              <strong>Reciprocity:</strong> Offer something for free (like an ebook or free trial) to encourage customers to return the favor by making a purchase.
            </li>
          </ul>
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Case Study: Amazon’s "One-Click Purchase"</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Amazon revolutionized e-commerce with its “One-Click Purchase” feature, reducing friction in the buying process. The ease of completing a purchase appeals to the psychological principle of loss aversion—the fear of losing out on a deal or item. This simple design change significantly boosted conversions by making the purchasing decision almost effortless.
        </p>

        <h1 className="text-xl sm:text-2xl font-bold">Key Takeaway:</h1>
        <p className="text-xs sm:text-sm lg:text-base">
          Understanding consumer psychology helps marketers tap into subconscious decision-making processes, driving higher engagement and conversions.
        </p>
      </div>
    </div>
  );
};

export default BlogSeven;
