import React from "react";
import Image from "next/image";
import bloging from "./images/container.png";

const BlogEight: React.FC = () => {
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
          How Emotional Thinking Can Elevate Ad Campaigns?
        </h1>

        <h2 className="text-sm sm:text-base lg:text-lg text-justify">
          Emotional thinking is the art of crafting campaigns that connect with your audience on a deeper, emotional level. While logic and reason are important, emotions drive actions.
        </h2>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">Why Is Emotional Thinking Effective?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Humans make decisions based on emotions, not just logic. When you appeal to your audience’s feelings—whether it’s excitement, empathy, or joy—you create a powerful bond that can lead to stronger brand loyalty and increased conversions.
        </p>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">How Can You Integrate Emotional Thinking in Your Campaigns?</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          <ul className="list-disc pl-5">
            <li>
              <strong>Tell Stories:</strong> Emotional storytelling connects with your audience on a personal level.
            </li>
            <li>
              <strong>Use Relatable Characters:</strong> Show your target audience that you understand their struggles and aspirations.
            </li>
            <li>
              <strong>Evoke Specific Emotions:</strong> Whether it’s fear of missing out (FOMO) or a sense of belonging, tap into the emotions that drive action.
            </li>
          </ul>
        </p>

        <h1 className="font-bold   text-xl sm:text-2xl pt-2">Case Study: Nike’s "Just Do It" Campaign</h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Nike’s “Just Do It” campaign is one of the most iconic examples of emotional marketing. The slogan, paired with stories of athletes overcoming challenges, taps into emotions like determination, perseverance, and inspiration. Nike doesn't just sell shoes; it sells the idea of empowerment and achievement.
        </p>

        <h1 className="text-xl sm:text-2xl font-bold">Key Takeaway:</h1>
        <p className="text-xs sm:text-sm lg:text-base">
          Emotional thinking allows your campaign to resonate on a deeper level, turning passive consumers into loyal brand advocates.
        </p>
      </div>
    </div>
  );
};

export default BlogEight;
