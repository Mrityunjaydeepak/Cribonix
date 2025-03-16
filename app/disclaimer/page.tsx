import React from "react";
import Head from "next/head";

const Disclaimer: React.FC = () => {
  return (
    <>
     <Head>
        <title>Cribonix Disclaimer - Important Information About Our Services</title>
        <meta name="description" content="Transparency matters! Read Cribonix’s disclaimer to understand our policies, content guidelines, and terms of service." />
        <meta name="keywords" content="branding, storytelling, digital marketing, influence, legacy" />
        <meta name="author" content="Cribonix" />
        <link rel="canonical" href="https://cribonix.com/disclaimer" />
      </Head>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

      {/* Page Title */}
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">
        Disclaimer
      </h1>

      {/* Disclaimer Content */}
      <p className="text-sm sm:text-base lg:text-lg text-justify mb-8">
        “Cribonix” is owned and managed by "Vortex Research Pvt. Ltd." Cribonix
        operates as a digital marketing and influencer management agency. All
        visuals, campaigns, and case studies showcased are for illustrative
        purposes only, and results may vary depending on client objectives and
        market conditions.
      </p>

      <div className="space-y-8">
        {/* Detailed Disclaimer Sections */}
        <div>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">
            Usage Disclaimer
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-justify">
            Services, pricing, and availability are subject to updates and
            client-specific customization. No one is permitted to use Cribonix's
            creatives, as it will lead to copyright claims.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">
            Illustrative Content
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-justify">
            All visuals, campaigns, and case studies presented on our platform
            are examples and do not guarantee similar outcomes. Results may vary
            depending on client goals, market dynamics, and external factors.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">
            Professional Advice
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-justify">
            Any information provided by Cribonix is for general understanding
            and informational purposes only. It should not be considered
            professional business advice. Clients are encouraged to consult with
            our team for tailored solutions specific to their needs.
          </p>
        </div>

        {/* <div>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">Contact Us</h2>
          <p className="text-sm sm:text-base lg:text-lg text-justify">
            For further details or clarification regarding our services or
            policies, please contact Cribonix customer support:
            <br />
            Email:{" "}
            <a href="mailto:sachin@cribonix.com" className="text-blue-500">
              sachin@cribonix.com
            </a>
            <br />
            Phone: +91 89501 63810
            <br />
            Address: 546, 5th floor, JMD MEGAPOLIS, Sector 48, Gurugram, Haryana
            122018
          </p>
        </div> */}
      </div>
    </div>
    </>
  );
};

export default Disclaimer;
