"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "./images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Why Us", href: "/whyus" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blogs", href: "/blogs" },
    { name: "New Project", href: "/newproject" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-transparent backdrop-blur-md text-white px-4 sm:px-8 md:px-16 lg:px-24 py-4 rounded-full fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center justify-center">
            <Image src={logo} alt="logo" width={150} height={100} priority />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`cursor-pointer hover:text-blue-500 transition ${
                pathname.startsWith(item.href) ? "text-blue-500 font-semibold" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <Link href="/contact" className="inline-block">
            <span className="text-white px-6 py-3 border border-[#383838] rounded-full bg-gradient-to-r from-[#009DD1] to-[#bf3fd2] hover:text-white transition cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center z-50">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
            className="text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#111] text-white z-50 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMobileMenu}
          className="absolute top-6 right-6 text-3xl text-gray-400 hover:text-white transition"
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6 text-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className={`text-2xl font-medium hover:text-blue-400 transition ${
                pathname.startsWith(item.href) ? "text-blue-400 font-bold" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Contact Us Button in Mobile Menu */}
          <Link href="/contact">
            <span className="mt-6 text-lg px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
              Contact Us
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
