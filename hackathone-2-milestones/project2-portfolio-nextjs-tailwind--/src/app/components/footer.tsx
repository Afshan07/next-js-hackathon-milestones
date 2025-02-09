import Link from "next/link";

import { LiaTwitter, LiaLinkedinIn, LiaFacebookF  } from "react-icons/lia";


const Footer = () => {
  return (
    <footer className="bg-deepBlue text-white py-8 border border-gray-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between hover:border border-gray-500">
        {/* Left Section: Logo */}
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-xl  text-gray-400 font-bold hover:text-white transition-all duration-300">
            MyBrand
          </Link>
        </div>

        {/* Center Section: Links */}
        <div className="flex space-x-10">
          <Link href="/about" className=" text-gray-400 hover:text-white transition-all duration-300">
            About Me
          </Link>
          <Link href="/services" className=" text-gray-400 hover:text-white transition-all duration-300">
            Services
          </Link>
          <Link href="/contact" className=" text-gray-400 hover:text-white transition-all duration-300">
            Contact Me
          </Link>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl hover:text-white transition-all duration-300"
          >
            <i className="lia-facebook"><LiaFacebookF /></i>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl hover:text-white transition-all duration-300"
          >
            <i className="Lia-Twitter"><LiaTwitter /></i>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl hover:text-white  transition-all duration-300"
          >
            <i className="lia-linkedin"><LiaLinkedinIn   /></i>
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        © 2024 Afshan Iftikhar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
