
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Get in Touch</h2>
      <form method="POST" action="/api/submit-form">
        {/* <fieldset className="contact-form"> */}
          {/* <legend>Contact Form</legend> */}
          
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder=" Type Your Name" required />

          <br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"  placeholder="Type Your Email" required />

          <br />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} placeholder="Type Your Message" required></textarea>

          <br />

          <button type="submit">Submit</button>
        {/* </fieldset> */}
      </form>
    </div>
  );
}

