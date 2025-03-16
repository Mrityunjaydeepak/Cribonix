import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Title Section */}
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">
        PRIVACY POLICY FOR CRIBONIX
      </h1>

      {/* Privacy Policy Content */}
      <div className="space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
        <p>
          At Cribonix, we understand the importance of your privacy and are
          dedicated to protecting your personal data. This Privacy Policy
          outlines the type of information we collect, how we use and share it,
          and your rights concerning this data. Please take the time to read
          this policy carefully to understand how we manage your information.
        </p>

        <h2 className="font-bold text-lg sm:text-xl">
          1. Information We Collect
        </h2>
        <p>
          We collect data to enhance our services and improve your experience.
          The types of information we collect include:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Personal Information:</strong> Your name, email address,
            phone number, and contact details, submitted when you sign up for
            our services or contact us.
          </li>
          <li>
            <strong>Business Information:</strong> Data related to your company,
            industry and marketing goals for providing relevant digital
            marketing solutions.
          </li>
          <li>
            <strong>Technical Data:</strong> IP addresses, cookies, browser
            type, operating systems and other device-related details for
            analytics.
          </li>
          <li>
            <strong>User Interactions:</strong> Website browsing behaviour,
            clicks and interactions with marketing campaigns to optimise ad
            performance.
          </li>
          <li>
            <strong>Financial Data:</strong> Billing information collected
            through secure payment processing platforms for subscription
            services.
          </li>
        </ul>

        <h2 className="font-bold text-lg sm:text-xl">
          2. How We Use Your Information
        </h2>
        <p>
          Your data enables us to deliver the best digital marketing services
          tailored to your needs, and we use it for the following purposes:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Personalising campaigns, optimising ads, and delivering digital
            marketing solutions.
          </li>
          <li>
            Using cookies and analytics tools to understand your interaction
            with our services and track KPIs.
          </li>
          <li>
            Complying with legal requirements like fraud prevention and audits.
          </li>
        </ul>

        <h2 className="font-bold text-lg sm:text-xl">
          3. Information Sharing and Disclosure
        </h2>
        <p>
          We only share your data as required to enhance your marketing results
          with third-party platforms, service providers, and for legal
          compliance.
        </p>

        <h2 className="font-bold text-lg sm:text-xl">
          4. Cookies and Tracking Technologies
        </h2>
        <p>
          Cookies and pixels help us understand user behaviour. You can control
          cookies through browser settings, but disabling cookies may limit
          certain functionalities.
        </p>

        <h2 className="font-bold text-lg sm:text-xl">5. Data Security</h2>
        <p>
          We prioritise the security of your data by implementing encryption,
          access control, and regular audits.
        </p>

        <h2 className="font-bold text-lg sm:text-xl">
          6. Data Retention Policy
        </h2>
        <p>
          We retain your data for as long as necessary to fulfil the purpose for
          which it was collected. Once the data is no longer required, it is
          securely deleted or anonymized.
        </p>

        <h2 className="font-bold text-lg sm:text-xl">
          7. Your Rights Regarding Personal Data
        </h2>
        <p>
          You have several rights, including access, rectification, deletion,
          and objection to processing your data.
        </p>

        <h2 className="font-bold text-lg sm:text-xl">
          8. International Data Transfers
        </h2>
        <p>
          As Cribonix operates globally, we ensure that data transfers comply
          with applicable data protection laws.
        </p>

        <h2 className="font-bold text-lg sm:text-xl">
          9. Marketing Communication and Opt-Out
        </h2>
        <p>
          You can opt out of marketing communications by clicking the
          “unsubscribe” link in our emails or contacting us directly.
        </p>

        <h2 className="font-bold text-lg sm:text-xl">
          10. Third-Party Links and Integrations
        </h2>
        <p>
          Our website may contain links to third-party websites. These sites
          operate independently, and we recommend reviewing their privacy
          policies.
        </p>

        {/* <h2 className="font-bold text-lg sm:text-xl">
          11. Changes to This Privacy Policy
        </h2>
        <p>
          We reserve the right to modify this policy from time to time to
          reflect changes in our practices, technology, or legal requirements.
        </p>

        <h2 className="font-bold text-lg sm:text-xl">12. Contact Us</h2>
        <p>If you have any questions or concerns, please contact us at:</p>
        <address className="pl-5">
          Cribonix Digital Marketing Solutions <br />
          Email:{" "}
          <a href="mailto:sachin@cribonix.com" className="text-blue-500">
            sachin@cribonix.com
          </a>
          <br />
          Phone: +91 89501 63810
          <br />
          Address: 546, 5th floor, JMD MEGAPOLIS, Sector 48, Gurugram, Haryana
          122018
        </address> */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
