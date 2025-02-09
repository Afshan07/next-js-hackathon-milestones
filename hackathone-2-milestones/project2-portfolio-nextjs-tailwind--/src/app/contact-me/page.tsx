import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div
      id="contact"
      className="bg-deepBlue text-white w-full min-h-screen flex flex-col items-center justify-center tracking-wider"
    >
      <div className="py-24">
  {/* Top Center Heading */}
  <h1
    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-widest underline underline-offset-8 decoration-2 decoration-gray-500 hover:text-black hover:scale-110 hover:shadow-xl hover:shadow-yellow-300 p-2 inline-block transition-all duration-500 ease-in-out transform hover:rotate-3deg"
    data-aos="zoom-in-up"
  >
    <span className="text-white">Get{" "}</span>
    <span className="text-orange-500">In Touch</span>
  </h1>
</div>

      <div className="grid md:grid-cols-2 gap-14 max-w-5xl w-full px-5">
        {/* Left Section */}
        <div className="space-y-8">
          <p className="text-white text-[18px] pt-2" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message
          </p>

          {/* Email */}
          <div className="flex gap-3 items-center group relative" data-aos="zoom-in-up">
            <AiOutlineMail
              size={30}
              className="text-white group-hover:text-orange-200 group-hover:scale-110 transition-all duration-500 transform" data-aos="zoom-in-up"
            />
            <span className="group-hover:text-orange-200 transition-all duration-500 transform" data-aos="zoom-in-up">
              xyz@gmail.com
            </span>
            {/* Hover Effect for Icon */}
            <div className="absolute top-0 left-0 w-full h-full bg-orange-200 opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-full"></div>
          </div>

          {/* Phone */}
          <div className="flex gap-3 items-center group relative" data-aos="zoom-in-up">
            <BsTelephone
              size={30}
              className="text-white group-hover:text-orange-200 group-hover:scale-110 transition-all duration-500 transform" data-aos="zoom-in-up"
            />
            <span className="group-hover:text-yellow-300 transition-all duration-500 transform" data-aos="zoom-in-up">
              +92300xxxxxxx
            </span>
            {/* Hover Effect for Icon */}
            <div className="absolute top-0 left-0 w-full h-full bg-orange-200 opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-full"></div>
          </div>

          {/* Address */}
          <div className="flex gap-3 items-center group relative" data-aos="zoom-in-up">
            <FaRegAddressCard
              size={29}
              className="text-white group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-500 transform" data-aos="zoom-in-up"
            />
            <span className="group-hover:text-orange-200 transition-all duration-500 transform" data-aos="zoom-in-up">
              Area xyz, Karachi, Pakistan.
            </span>
            {/* Hover Effect for Icon */}
            <div className="absolute top-0 left-0 w-full h-full bg-orange-200 opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-full"></div>
          </div>
        </div>

        {/* Right Section Form */}
        <div className="space-y-8">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" data-aos="zoom-in-up">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="h-[40px] bg-blue-950 rounded-full border border-orange-200 text-white px-2 focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              id="name" data-aos="zoom-in-up"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" data-aos="zoom-in-up">Email</label>
            <input
              type="text"
              placeholder="Your email"
              className="h-[40px] bg-blue-950 rounded-full border border-orange-200 text-white px-2 focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease-in-out transform hover:scale-105" data-aos="zoom-in-up"
              id="email"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="msg" data-aos="zoom-in-up">Message</label>
            <textarea
              className="bg-blue-950 rounded-3xl border border-orange-200 text-white pt-5 px-2 focus:outline-none focus:ring focus:ring-orange-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              id="msg"
              rows={5}
              placeholder=" Your message..." data-aos="zoom-in-up"
            ></textarea>
          </div>

          {/* Centered Button with Next-Level Hover Effect */}
          <div className="flex justify-center mt-6">
            <button className="px-12 py-2 mb-8 bg-orange-500 text-white border-[1px] border-orange-200 rounded-lg text-lg font-semibold hover:bg-teal-50 hover:text-orange-500 hover:scale-110 hover:shadow-2xl hover:rotate-[5deg] transition-all duration-700 ease-in-out transform">
            Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
