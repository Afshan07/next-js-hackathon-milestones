// Note: About Me Page Component
// "use client";

// import Image from "next/image";
// import Button from "@/app/components/button";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function AboutMe() {
//   useEffect(() => {
//     AOS.init({
//       easing: "ease-out-back",
//       duration: 1200,
//       delay: 100,
//       mirror: true,
//     anchorPlacement: "bottom-bottom",
//     offset: 160,
//   });
//   AOS.refresh();
//   }, []);

//   return (
//     <div className="bg-deepBlue h-auto w-full flex flex-col items-center py-10 px-20 overflow-hidden">
//       {/* Centered Top Heading */}
//       <div
//         className="w-full text-center mt-12 px-4 sm:px-6 md:px-8 lg:px-10"
//         data-aos="zoom-in-up"
//       >
//         <h1 className="inline-block  flex-col underline underline-offset-8 decoration-2 decoration-gray-500 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest text-white transition-all duration-300 hover:scale-110 hover:shadow-[0px_0px_20px_5px_rgba(255,165,0,0.8)]">
//           <span>About </span>
//           <span className="text-orange-500">Me</span>
//         </h1>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto mt-10">
//         {/* Left Side: Text & Button */}
//         <div
//           className="flex-1 max-w-lg text-center md:text-left hover:scale-105 transition-transform duration-300"
//           data-aos="fade-right"
//         >
//           <h2 className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-semibold mb-6 tracking-wider hover:text-blue-300 transition-colors duration-300">
//             Web Developer &<br />
//             UI/UX Designer
//           </h2>
//           <p
//             className="text-white text-justify text-lg leading-relaxed mb-8"
//             data-aos="fade-up"
//           >
//             I am a dedicated Web Developer and UI/UX Designer who loves creating
//             digital experiences that are both functional and visually
//             captivating. My passion lies in blending clean, efficient code with
//             intuitive, user-friendly designs to bring ideas to life. I focus on
//             crafting responsive, engaging interfaces that leave a lasting
//             impression. Every project is an opportunity to innovate and deliver
//             solutions that truly resonate with users.
//           </p>

//           {/* Button */}
//           <Button
//             text="Read More..."
//             className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full shadow-xl hover:bg-white hover:text-orange-500 transition duration-500 transform hover:scale-110"
//             data-aos="zoom-in"
//           />
//         </div>

//         {/* Right Side: Image */}
//         <div
//           className="flex-1 flex items-center justify-center mt-8 sm:mt-11 md:mt-12 lg:mt-14"
//           data-aos="fade-left"
//         >
//           <Image
//             src="/about-image.jpg"
//             alt="Laptop Image"
//             width={450}
//             height={380}
//             className="w-[150px] h-[100px] sm:w-[250px] sm:h-[200px] md:w-[350px] md:h-[300px] lg:w-[450px] lg:h-[400px] sm:py-8 md:py-10 lg:py-12 rounded-lg hover:animate-pulse object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import Button from "@/app/components/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-deepBlue h-auto w-full flex flex-col items-center py-10 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      {/* Centered Top Heading */}
      <div
        className="w-full text-center mt-8"
        data-aos="zoom-in-up"
      >
        <h1 className="inline-block underline underline-offset-8 decoration-2 decoration-gray-500 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest text-white transition-all duration-300 hover:scale-110 hover:shadow-[0px_0px_20px_5px_rgba(255,165,0,0.8)]">
          <span>About </span>
          <span className="text-orange-500">Me</span>
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto mt-12 gap-8">
        {/* Left Side: Text & Button */}
        <div
          className="flex-1 max-w-lg text-center md:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6 tracking-wider hover:text-blue-300 transition-colors duration-300">
            Web Developer &<br />
            UI/UX Designer
          </h2>
          <p
            className="text-white text-justify text-base sm:text-lg md:text-xl leading-relaxed mb-8"
            data-aos="fade-up"
          >
            I am a dedicated Web Developer and UI/UX Designer who loves creating
            digital experiences that are both functional and visually
            captivating. My passion lies in blending clean, efficient code with
            intuitive, user-friendly designs to bring ideas to life. I focus on
            crafting responsive, engaging interfaces that leave a lasting
            impression. Every project is an opportunity to innovate and deliver
            solutions that truly resonate with users.
          </p>

          {/* Button */}
          <Button
            text="Read More..."
            className="px-6 py-3 bg-orange-500 text-white font-bold rounded-full shadow-xl hover:bg-white hover:text-orange-500 transition duration-500 transform hover:scale-110"
            data-aos="zoom-in"
          />
        </div>

        {/* Right Side: Image */}
        <div
          className="flex-1 flex items-center justify-center"
          data-aos="fade-left"
        >
          <Image
            src="/about-image.jpg"
            alt="Laptop Image"
            width={450}
            height={400}
            className="w-[200px] h-[150px] sm:w-[300px] sm:h-[250px] md:w-[400px] md:h-[350px] lg:w-[450px] lg:h-[400px] rounded-lg hover:animate-pulse object-cover"
          />
        </div>
      </div>
    </div>
  );
}
