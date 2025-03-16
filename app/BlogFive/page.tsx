import React from "react";
import Image from "next/image";
import bloging from "./images/container.png";

const BlogFour: React.FC = () => {
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
          Why are Listening Skills Undervalued in Digital Marketing?
        </h1>

        <h2 className="text-sm sm:text-base lg:text-lg text-justify">
          Digital marketing isn’t just about speaking; it’s about listening—actively and empathetically.
        </h2>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Why Are Listening Skills Essential?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Without listening, brands risk launching campaigns that feel out of touch. Listening to customer feedback,
          industry trends, and even competitors ensures your strategy remains relevant.
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">How to Improve Your Listening Skills?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          <ul className="list-disc pl-5">
            <li>
              <strong>Leverage Social Listening Tools:</strong> Platforms like Hootsuite track what people say about
              your brand.
            </li>
            <li>
              <strong>Engage in Conversations:</strong> Actively respond to customer queries and comments online.
            </li>
            <li>
              <strong>Analyze Feedback:</strong> Use reviews and surveys to understand customer needs.
            </li>
          </ul>
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Case Study: Dove’s Real Beauty Campaign</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Dove listened to growing frustration about unrealistic beauty standards. Their campaign featuring real women
          celebrating natural beauty resonated with millions, building trust and loyalty.
        </p>

        <h1 className="text-xl sm:text-2xl font-bold">Key Takeaway:</h1>
        <p className="text-xs sm:text-sm lg:text-base">
          Listening is the foundation of campaigns that genuinely connect with audiences.
        </p>
      </div>
    </div>
  );
};

export default BlogFour;
