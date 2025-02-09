import React from "react";
import Link from "next/link";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
        src="/logo.jpeg" 
        alt="Logo-Image" 
        className="logo1"
        />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

