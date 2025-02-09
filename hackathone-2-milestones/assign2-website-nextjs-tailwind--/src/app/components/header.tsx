import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-yellow-300 p-4 md:py-6 md:px-8 fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Auto Car</h1>

        {/* Navigation Menu - Always Visible */}
        <nav className="ml-auto hover:bg-yellow-500 hover:text-black hover:underline-offset-8">
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="/" className="hover:text-white hover:underline hover:underline-offset-8 hover:font-bold ">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white hover:underline hover:underline-offset-8 hover:font-bold ">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white hover:underline hover:underline-offset-8 hover:font-bold ">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white hover:underline hover:underline-offset-8 hover:font-bold ">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
