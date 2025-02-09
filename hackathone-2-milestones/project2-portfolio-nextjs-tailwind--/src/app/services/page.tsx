import { FaLaptopCode } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { IoLogoReact } from "react-icons/io5";

function Services() {
  return (
    <div className="bg-deepPurple relative w-full min-h-screen flex flex-col items-center py-12 px-6 sm:px-10 md:px-16 lg:px-20">
      {/* Top Center Heading */}
      <div className="w-full text-center py-12">
        <h1
          className="inline-block underline underline-offset-[10px] decoration-2 decoration-slate-500 font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0px_10px_15px_05px_rgba(0,153,255,0.5)]"
          data-aos="zoom-in-up"
        >
          <span className="text-white">My </span>
          <span className="text-orange-500">Services</span>
        </h1>
      </div>

      {/* Service Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-6">
        {/* Web Development Box */}
        <div className="bg-gradient-to-r from-purple-500 via-orange-400 to-purple-500 h-auto w-full max-w-xs mx-auto rounded-2xl flex flex-col justify-center items-center gap-6 p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <i data-aos="zoom-in-up">
            <FaLaptopCode className="text-white text-6xl lg:text-8xl animate-bounce" />
          </i>
          <h3
            className="text-white text-xl lg:text-2xl font-extrabold tracking-wider text-center"
            data-aos="zoom-in-up"
          >
            Web Development
          </h3>
          <p
            className="text-white text-sm lg:text-base px-2 text-center  leading-relaxed bg-black/30 p-4 rounded-lg"
            data-aos="zoom-in-up"
          >
            Web development involves building dynamic, responsive, and interactive websites that provide seamless user experiences. It blends creativity and technology to create secure, scalable, and modern solutions for businesses and individuals worldwide.
          </p>
        </div>

        {/* Apps Development Box */}
        <div className="bg-gradient-to-r from-purple-500 via-orange-400 to-purple-500 h-auto w-full max-w-xs mx-auto rounded-2xl flex flex-col justify-center items-center gap-6 p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <i data-aos="zoom-in-up">
            <ImMobile className="text-white text-6xl lg:text-8xl animate-bounce" />
          </i>
          <h3
            className="text-white text-xl lg:text-2xl text-center font-extrabold tracking-wider"
            data-aos="zoom-in-up"
          >
            Apps Development
          </h3>
          <p
            className="text-white text-sm lg:text-base px-2 text-center leading-relaxed bg-black/30  p-4 rounded-lg"
            data-aos="zoom-in-up"
          >
            App development crafts intuitive, high-performance applications that enhance user experiences and meet diverse needs. It blends innovation and precision to deliver scalable, secure, and responsive solutions for businesses and individuals worldwide.
          </p>
        </div>

        {/* Digital Marketing Box */}
        <div className="bg-gradient-to-r from-purple-500 via-orange-400 to-purple-500 text-center  h-auto w-full max-w-xs mx-auto rounded-2xl flex flex-col justify-center items-center gap-6 p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
          <i data-aos="zoom-in-up">
            <IoLogoReact className="text-white text-6xl lg:text-8xl animate-bounce" />
          </i>
          <h3
            className="text-white text-xl lg:text-2xl font-extrabold tracking-wider"
            data-aos="zoom-in-up"
          >
            Digital Marketing
          </h3>
          <p
            className="text-white text-sm lg:text-base px-2 text-center leading-relaxed bg-black/30 p-4 rounded-lg"
            data-aos="zoom-in-up"
          >
            Digital marketing leverages online platforms and tools to connect businesses with their target audience. It involves strategies like SEO, content marketing, social media, and paid ads, aiming to drive traffic, engagement, and conversions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
