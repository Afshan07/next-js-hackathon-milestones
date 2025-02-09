"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/button";
import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-deepBlue text-white py-4 px-6 font-semibold shadow-md">
      <div className="flex items-center justify-around h-full">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Image
            src="/header-logo.jpg"
            alt="logo"
            width={38}
            height={19}
            className="w-[5rem] h-[5rem] rounded-full hover:opacity-100 hover:animate-none animate-slow-spin"
          />
        </div>

        {/* Right Side: Links & Button */}
        <div className="hidden sm:flex items-center gap-x-6 lg:gap-x-10 text-xs sm:text-sm md:text-base lg:text-xl">
          <nav className="flex items-center tracking-wider gap-6">
            <Link
              href="/"
              className="hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about-me"
              className="hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
            >
              About-Me
            </Link>
            <Link
              href="/skills"
              className="hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/contact-me"
              className="hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
            >
              Contact-Me
            </Link>
          </nav>
          {/* Hire Me Button */}
          <div className="flex items-center">
            <Button
              text="Hire me"
              className="bg-white text-deepBlue tracking-widest px-6 py-5 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg  hover:duration-1000 hover:bg-orange-400 hover:text-white"
            />
          </div>
        </div>

        {/* Mobile Menu Toggle (Visible on Small Screens) */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible on Small Screens when toggled) */}
      {isMobileMenuOpen && (
        <nav className="flex flex-col justify-center items-center pl-14 gap-y-3 bg-deepBlue py-2 text-center sm:hidden">
          <Link
            href="/"
            className="text-sm hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about-me"
            className="text-sm hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
          >
            About-Me
          </Link>
          <Link
            href="/skills"
            className="text-sm hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="text-sm hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/services"
            className="text-sm hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/contact-me"
            className="text-sm hover:underline hover:underline-offset-4 hover:decoration-white hover:text-white"
          >
            Contact-Me
          </Link>
          <Button
            text="Hire me"
            className="bg-white text-indigo-900 tracking-widest px-4 py-2 rounded-full font-bold hover:duration-1000 hover:bg-orange-400 hover:text-white"
          />
        </nav>
      )}
    </header>
  );
}

export default Header;
