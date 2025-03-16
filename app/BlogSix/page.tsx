import React from "react";
import Image from "next/image";
import bloging from "./images/container.png";

const BlogSix: React.FC = () => {
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
          What Role Does Color Theory Play in Marketing Psychology?
        </h1>

        <h2 className="text-sm sm:text-base lg:text-lg text-justify">
          Colors aren’t just aesthetic—they carry psychological meaning. In marketing, color theory is a powerful tool to influence perceptions, elicit emotions, and even drive sales.
        </h2>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Why Do Colors Matter?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Colors evoke specific emotions that can enhance your brand message. Understanding color psychology allows you to choose the right hues that align with your campaign’s goals. For example, blue communicates trust, while yellow sparks optimism.
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">How Can You Use Color Theory Effectively?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          <ul className="list-disc pl-5">
            <li>
              <strong>Understand Color Associations:</strong> Each color has psychological connotations. Research the emotional impact of colors like red, blue, and green.
            </li>
            <li>
              <strong>Be Consistent:</strong> Your color palette should be consistent across your digital platforms for brand recognition.
            </li>
            <li>
              <strong>Test and Refine:</strong> Use A/B testing to see how different colors affect conversion rates and engagement.
            </li>
          </ul>
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Case Study: McDonald’s Branding</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          McDonald’s uses a combination of red and yellow in its branding, and for good reason. Red stimulates appetite and excitement, while yellow invokes happiness. This combination has made their branding instantly recognizable and highly effective in influencing customers' emotions, especially in fast food settings.
        </p>

        <h1 className="text-xl sm:text-2xl font-bold">Key Takeaway:</h1>
        <p className="text-xs sm:text-sm lg:text-base">
          Colors are powerful psychological tools that shape perceptions and behaviors. Choose wisely to align with your brand’s goals.
        </p>
      </div>
    </div>
  );
};

export default BlogSix;
