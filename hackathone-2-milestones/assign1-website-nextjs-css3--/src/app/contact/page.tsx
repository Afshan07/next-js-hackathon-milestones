import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Feel free to reach out for any inquiries.</p>

      {/* Contact Form */}
      <form className="contact-form">
        
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={4} required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Contact Details */}
      <div className="contact-details">
        <p>📍 Address: 123 Electric St, Tech City</p>
        <p>📞 Phone: +92 123 456 7890</p>
        <p>📧 Email: contact@electricbikes.com</p>
      </div>
    </section>
  );
};

export default Contact;
