import React from "react";

const Services = () => {
  return (
    <section className="services">
      {/* Services Header */}
      <div className="services-header">
        <h1>Our Premium Electric Bike Services</h1>
        <p>
          Experience top-notch services designed to keep your electric bike running smoothly. 
          From professional maintenance to smart upgrades, we ensure an effortless riding experience.
        </p>
      </div>

      {/* Service Cards */}
      <div className="services-grid">
        {/* Service 1: Battery Upgrade */}
        <div className="service-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/d1.jpeg" alt="Battery Upgrade" className="service-img" />
          <h2>🔋 Battery Upgrade</h2>
          <p>
            Get high-capacity lithium-ion batteries that provide **longer range and faster charging**.
          </p>
        </div>

        {/* Service 2: Smart Dashboard Installation */}
        <div className="service-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/d2.jpeg" alt="Smart Dashboard" className="service-img" />
          <h2>📊 Smart Dashboard</h2>
          <p>
            Upgrade your bike with a **digital display, real-time speed tracking, and navigation support**.
          </p>
        </div>

        {/* Service 3: Express Repair Service */}
        <div className="service-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/d3.jpeg" alt="Repair Service" className="service-img" />
          <h2>🛠 Express Repair</h2>
          <p>
            Our skilled technicians offer **quick and reliable repairs** to keep your bike in top condition.
          </p>
        </div>

        {/* Service 4: Custom Accessories */}
        <div className="service-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/d4.jpeg" alt="Custom Accessories" className="service-img" />
          <h2>🎨 Custom Accessories</h2>
          <p>
            Personalize your ride with **stylish and durable accessories** that match your biking needs.
          </p>
        </div>

        {/* Service 5: Free Road Assistance */}
        <div className="service-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/d5.jpeg" alt="Road Assistance" className="service-img" />
          <h2>🚴 Free Road Assistance</h2>
          <p>
            Stuck on the road? We provide **24/7 emergency support** to get you back on track.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
