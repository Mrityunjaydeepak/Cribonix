// pages/contact/index.tsx

"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import mapimg from './images/map.png'; // Ensure these paths are correct
import office from "./images/Officereal.png";
import g1 from "./images/g1.png";
import g2 from "./images/g2.png";
import g3 from "./images/g3.png";
import g4 from "./images/g4.png";
import circle from "./images/circle.svg.png";
import mountain from "./images/mountain.png";
import verified from "./images/verified.png";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Head from 'next/head';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  [key: string]: string; // Index signature added
}

interface FormStatus {
  message: string;
  color: string;
}

const ContactUs: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  // State for form submission feedback
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    color: '',
  });

  // State for submission loading
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Destructure environment variables for clarity
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are defined
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are not defined.');
      setFormStatus({
        message: 'Configuration error. Please contact the site administrator.',
        color: 'text-red-500',
      });
      setIsSubmitting(false);
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        serviceId,
        templateId,
        formData,
        publicKey // Use Public Key instead of User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormStatus({
            message: 'Your message has been sent successfully!',
            color: 'text-green-500',
          });
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error);
          setFormStatus({
            message: 'An error occurred. Please try again.',
            color: 'text-red-500',
          });
          setIsSubmitting(false);
        }
      );
  };

  return (

    <>
     <Head>
        <title>Cribonix Contact Us - Let’s Elevate Your Brand Together!</title>
        <meta name="description" content="Let’s connect and grow your brand! Reach out to Cribonix for expert digital marketing, influencer collaborations and creative branding solutions." />
        <meta name="keywords" content="Successful Brand Collaborations, Digital Marketing Case Studies, Creative Campaign Showcases, Influencer Marketing Success, Branding Project Highlights, Client Testimonials, Marketing Portfolio Examples" />
        <meta name="author" content="Cribonix" />
        <link rel="canonical" href="https://cribonix.com/contact" />
      </Head>
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className='flex flex-col p-4 items-center justify-center text-center'>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 text-white">
          Contact Us Today
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-2xl">
          We’re here to help you succeed! Reach out to us and let’s create something amazing together!
        </p>
      </div>

      {/* Main Form and Image */}
      <div className="w-full max-w-6xl mb-12  bg-primary shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="text-white mt-1 bg-primary block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-white"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="text-white mt-1 bg-primary block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-white"
                  placeholder="Email Address"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="text-white mt-1 bg-primary block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-white"
                  placeholder=" (+91) 1234-56789"
                />
              </div>

              {/* Service Field */}
              <div>
                <input
                  type="text"
                  name="service"
                  id="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="text-white mt-1 bg-primary block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-white"
                  placeholder="Service You Want"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="text-white mt-1 bg-primary block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-white"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 rounded-md border border-secondary transition-colors ${
                    isSubmitting
                      ? 'bg-primary cursor-not-allowed'
                      : 'bg-white hover:bg-secondary text-black hover:text-white'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>

              {/* Form Status Message */}
              {formStatus.message && (
                <div className={`text-center ${formStatus.color}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
          <Link href={" https://www.google.com/maps/place/Cribonix/@28.4194487,77.0362407,17z/data=!3m1!4b1!4m6!3m5!1s0x390d23fe0c7f370d:0x9882477f1b29c17d!8m2!3d28.4194487!4d77.0388156!16s%2Fg%2F11wpkrff80?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"} >
          <Image
              src={mapimg} // Ensure this path is correct
              alt="Map Image"
              fill
              style={{ objectFit: 'cover' }}
              priority
            /> </Link>
           
          </div>
        </div>
      </div>

      {/* Office Section */}
      <div className="container mx-auto px-4 py-12 border-t-2 border-secondary w-full max-w-6xl">
        <div className="flex justify-center mb-8">
          <h1 className="font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center px-4">
            VISIT OUR OFFICE
          </h1>
        </div>
        <div className="relative flex justify-center transition-opacity duration-500">
          <Image
            src={office}
            alt="Office Background"
            width={1500}
            height={990}
            className="object-cover rounded-md shadow-lg opacity-80"
          />
        </div>
      </div>

      {/* Follow us on Instagram Section */}
      <div className="container mx-auto px-4 py-12 border-t-2 border-secondary w-full max-w-6xl">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white text-center px-4">
            FOLLOW OUR WORK <br /> ON INSTAGRAM
          </h1>
          <h2 className="text-sm sm:text-md md:text-lg lg:text-xl text-white text-center px-4">
            Behind Every Swipe, There’s a Story to Tell.
            <br />
            Join us on Instagram for a peek into our world!
          </h2>
          <div className="flex flex-row items-center justify-center space-x-4 mt-8">
            <Image src={circle} alt="Circle Icon" width={24} height={24} />
            <span className="text-white font-bold">@Cribonix</span>
            <Image src={verified} alt="Verified Icon" width={24} height={24} />
            <Link
              href="https://www.instagram.com/cribonix/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border sm:text-sm border-secondary rounded-full text-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-colors duration-300"
            >
              <FaInstagram />
              <span>Follow us</span>
            </Link>
          </div>
        </div>

        {/* Instagram Images Gallery */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mt-8">
          {/* Mountain Image */}
          <div className="flex-1">
            <Image
              src={mountain}
              alt="Mountain"
              width={500}
              height={550}
              className="object-cover rounded-md shadow-lg"
            />
          </div>

          {/* Grid of Images */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image
              src={g1}
              alt="Gallery 1"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
            <Image
              src={g2}
              alt="Gallery 2"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
            <Image
              src={g3}
              alt="Gallery 3"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
            <Image
              src={g4}
              alt="Gallery 4"
              width={250}
              height={250}
              className="object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
