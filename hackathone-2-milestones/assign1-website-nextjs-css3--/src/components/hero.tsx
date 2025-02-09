import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      {/* Hero Content */}
      <div className="hero-content">
        <h1>Ride the Future with Electric Bikes</h1>
        <p>
          Embrace cutting-edge technology with our high-performance electric bikes.
          Enjoy a smooth, eco-friendly ride with speed, efficiency, and innovation at your fingertips.
        </p>

        {/* Key Features */}
        <h2>🚴 Why Choose Our E-Bikes?</h2>
       
        <ul className="features-list">
           <li><span>⚡</span> 1 Charge = 90km Range</li>
           <li><span>🚀</span> 50km/h Max Speed</li>
           <li><span>🔋</span> Fast Charging in 2 Hours</li>
           <li><span>📊</span> Smart Digital Dashboard</li>
           <li><span>🏆</span> Ultra-Lightweight & Durable Frame</li>
        </ul>

        <br />

        {/* Call to Action */}
        <Link href="/about" className="hero-btn">Explore More</Link>
      </div>

      {/* Hero Image */}
      <div className="hero-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero111.png" alt="Electric-Bike" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
