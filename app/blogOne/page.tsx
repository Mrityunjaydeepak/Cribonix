import React from "react";
import Image from "next/image";
import bloging from "./images/container.png";

const BlogOne: React.FC = () => {
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
          Why is System Thinking Crucial in Digital Marketing?
        </h1>

        <h2 className="text-sm sm:text-base lg:text-lg text-justify">
          Digital marketing isn’t just about individual tactics—it’s about how
          all these elements work together to achieve success. This is where
          system thinking comes in: treating your campaign as an interconnected
          whole rather than a collection of isolated parts.
        </h2>

        <h1 className="font-bold text-xl sm:text-2xl pt-2">
          Why Adopt System Thinking?
        </h1>

        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-justify">
          Traditional approaches focus on perfecting one channel—like SEO or
          social media—without considering its ripple effects on the overall
          strategy. But a disconnected approach can lead to inefficiencies and
          wasted resources. <br />
          <br />
          System thinking allows you to:
          <ul className="list-disc pl-5">
            <li>See how different parts (ads, content, analytics) affect each other.</li>
            <li>
              Optimize the entire workflow, ensuring seamless collaboration between all components.
            </li>
          </ul>
          <br />
          <strong>How Can You Apply System Thinking?</strong>
          <ol className="list-decimal pl-5">
            <li>Create a Visual Map: Map out how your channels interact.</li>
            <li>
              Identify Bottlenecks: Analyze campaign weaknesses—like slow-loading pages—that could
              impact all channels.
            </li>
            <li>
              Iterate Holistically: Use insights from analytics to refine the whole system, not just a single component.
            </li>
          </ol>
          <br />
          <strong>Case Study: HubSpot’s Inbound Marketing Success</strong> <br />
          HubSpot became a pioneer in inbound marketing by treating content, CRM, and lead nurturing
          as interconnected systems. Their blog posts attract traffic, free tools encourage sign-ups,
          and their CRM ensures seamless follow-ups. This ecosystem drives continuous growth and customer
          retention.
        </p>

        <h1 className="text-xl sm:text-2xl font-bold">Key Takeaway:</h1>
        <p className="text-xs sm:text-sm lg:text-base">
          A system-thinking approach ensures that every effort amplifies the other, creating a
          sustainable loop of success.
        </p>
      </div>
    </div>
  );
};

export default BlogOne;
