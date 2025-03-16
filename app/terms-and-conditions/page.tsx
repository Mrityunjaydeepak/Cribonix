import React from "react";
import Head from "next/head";

const TermsAndConditions: React.FC = () => {
  return (
    <>
    <Head>
        <title>Cribonix Terms & Conditions - Know the Rules Before You Engage</title>
        <meta name="description" content="Know the rules! Check out Cribonix’s terms & conditions to learn how we operate, ensuring a seamless experience for our clients." />
        <meta name="keywords" content="Successful Brand Collaborations, Digital Marketing Case Studies, Creative Campaign Showcases, Influencer Marketing Success, Branding Project Highlights, Client Testimonials, Marketing Portfolio Examples" />
        <meta name="author" content="Cribonix" />
        <link rel="canonical" href="https://cribonix.com/terms-and-conditions" />
      </Head>
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">
        Terms and Conditions
      </h1>

      <p className="text-sm sm:text-base lg:text-lg text-justify mb-8">
        Effective Date: 05 November, 2024
        <br />
        Welcome to Cribonix! By accessing or using our services, you agree to be
        bound by these Terms and Conditions. Please read them carefully. If you
        disagree with any part of these terms, you must discontinue using our
        services.
      </p>

      <div className="space-y-8">
        {/* Terms Section */}
        <div>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">1. Definitions</h2>
          <p className="text-sm sm:text-base lg:text-lg text-justify">
            Cribonix: Refers to our digital marketing agency, including its
            team, platform, and services. <br />
            Client: Any individual, company, or organization engaging Cribonix
            for services. <br />
            Services: Digital marketing solutions provided by Cribonix,
            including but not limited to influencer marketing, social media
            management, ad campaigns, and website development.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">
            2. Scope of Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-justify">
            Cribonix offers customized marketing strategies based on the
            client’s goals and preferences. All deliverables, timelines, and
            expectations will be outlined in a formal agreement signed by both
            parties before commencement.
          </p>
        </div>

        {/* Add other sections following the same structure */}
        <div>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">
            3. Client Responsibilities
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-justify">
            The client must provide accurate information, necessary assets, and
            timely approvals for project execution. Any delays caused by the
            client in providing inputs or approvals may extend agreed timelines
            without penalty to Cribonix.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-justify">
            Any content, designs, or marketing materials created by Cribonix
            remain its intellectual property unless explicitly transferred in
            writing. Clients may use delivered materials solely for the purposes
            outlined in the agreement.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">
            5. Payment Terms
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-justify">
            Invoices will be issued as per the agreed milestones or monthly
            basis for ongoing services. Payment is due within 7 business days of
            receiving the invoice unless otherwise agreed. Late payments may
            attract interest at 10% per month.
          </p>
        </div>

        {/* Add remaining sections like Confidentiality, Performance Disclaimer, etc. */}
        {/* <div>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">
            6. Contact Information
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-justify">
            For any questions regarding these Terms and Conditions, please
            contact us at:
            <br />
            Email:{" "}
            <a href="mailto:sachin@cribonix.com" className="text-blue-500">
              sachin@cribonix.com
            </a>
            <br />
            Phone: +91 89501 63810
            <br />
            Address: Address: 546, 5th floor, JMD MEGAPOLIS, Sector 48,
            Gurugram, Haryana 122018
          </p>
        </div> */}
      </div>
    </div>
    </>
  );
};

export default TermsAndConditions;
