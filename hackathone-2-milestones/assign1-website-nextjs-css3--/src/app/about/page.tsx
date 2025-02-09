import React from "react";

const About = () => {
  return (
    <section className="about">
      {/* About Content */}
      <div className="about-content">
        <h1>About Our Electric Bikes</h1>
        <p>
          We are redefining the future of mobility with our **eco-friendly, high-performance electric bikes**. 
          Built with cutting-edge technology, our e-bikes offer **exceptional speed, long battery life, and an ultra-smooth ride**.
        </p>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mission">
            <h2>🌍 Our Mission</h2>
            <p>
              To revolutionize urban transportation by providing **sustainable, stylish, and powerful electric bikes** that make commuting effortless.
            </p>
          </div>

          <div className="vision">
            <h2>🚀 Our Vision</h2>
            <p>
              A world where **every ride is electric, every journey is smooth, and the environment stays green**. 
              Our goal is to make **zero-emission** transport accessible to everyone.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <h2>⚡ Why Choose Our E-Bikes?</h2>
        <ul className="features-list">
          <li><span>🔋</span> **90km per Charge** - Ride longer without worries.</li>
          <li><span>🚀</span> **50km/h Max Speed** - Swift and efficient for city rides.</li>
          <li><span>⏳</span> **Fast Charging (2 Hours)** - No long waiting times.</li>
          <li><span>📊</span> **Smart Digital Dashboard** - Real-time stats on your ride.</li>
          <li><span>🏆</span> **Ultra-Light & Durable Frame** - Built for comfort and performance.</li>
        </ul>
      </div>

      {/* About Images */}
      <div className="about-images">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="about1111.png" alt="E-Bike Technology" className="about-img" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/about2222.png" alt="Eco-Friendly Ride" className="about-img" />
      </div>
    </section>
  );
};

export default About;
