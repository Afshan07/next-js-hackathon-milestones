"use client"

import Button from "@/app/components/button"
import Image from "next/image"
import Icon from "./icons"

function Hero() {
  return (
<div className="w-full min-h-screen bg-deepPurple flex flex-col md:flex-row lg:flex-row items-center justify-around px-4 sm:px-6 md:px-8 lg:px-44 py-8 lg:py-0">
  {/* Content Section */}
  <div
    className="flex flex-col items-center md:items-start lg:items-start text-center lg:text-left space-y-6 pl-16 max-w-2xl lg:max-w-3xl xl:max-w-4xl"
    data-aos="slide-right"
  >
    {/* Heading */}
    <h2
      className="text-vibrantOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans" data-aos="slide-right"
    >
      Hi, {`It's`} me
    </h2>

    <h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold drop-shadow-neon hover:underline hover:underline-offset-8 text-white" data-aos="fade-up"
     >
      Afshan Iftikhar
    </h1>

    {/* Subheadings */}
    <div className="flex flex-col sm:justify-start  md:justify-start sm:items-center md:items-start lg:items-start space-y-4" data-aos="slide-right">
      <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono" data-aos="zoom-in-up">
        And {`I'm`} a
      </span>
      <span className="text-vibrantOrange font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl hover:underline hover:underline-offset-8" data-aos="zoom-in-up">
        Web Developer &amp;
      </span>
      <span className="text-vibrantOrange font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl hover:underline hover:underline-offset-8" data-aos="zoom-in-up">
        UI/UX Designer
      </span>
    </div>

    {/* Description */}
    <p
      className="tracking-wider whitespace-pre-wrap  text-justify text-sm sm:text-md md:text-lg lg:text-xl px-4 py-2 max-w-lg lg:max-w-2xl xl:max-w-3xl shadow shadow-white transition-all duration-300 hover:shadow-sparkle text-white" data-aos="zoom-in-up"
    >
      {`I'm`} a Web Developer and UI/UX Designer specializing in Next.js. I build responsive and efficient web
      applications using Tailwind CSS and modern frameworks, focusing on smooth, visually appealing user
      experiences.
    </p>

    {/* Icons and Button */}
    <div className="flex flex-col items-center sm:items-center md:items-start lg:items-start space-y-6" data-aos="zoom-in-up">
      {/* Social Icons */}
      <Icon />

      {/* Download CV Button */}
      <Button
        text="Download CV"
        className="
        bg-brightOrange text-white font-bold rounded-full tracking-wide text-sm sm:text-md md:text-lg
      px-4 sm:px-6 md:px-8 py-6 hover:bg-white hover:text-vibrantOrange transform hover:scale-105
      transition-all duration-300 ease-in-out shadow-xl hover:shadow-[#ff5c8d]" data-aos="zoom-in-up"
      />
    </div>
  </div>

  {/* Image Section */}
  <div
    className="mt-8 lg:mt-0 flex justify-center items-center w-full sm:1/3 md:w-1/3 lg:w-1/3 max-w-md" data-aos="flip-left"
  >
    <Image
      src="/pp1.jpg"
      alt="Profile Image"
      width={300}
      height={200}
      className="rounded-lg object-cover shadow-lg 
    w-100 h-90       /* Default for smallest screens */
    sm:w-150 sm:h-100 /* For small screens */
    md:w-200 md:h-200 /* For medium screens */
    lg:w-300 lg:h-400 /* For large screens */ transition-transform duration-500 ease-in-out hover:scale-105" data-aos="flip-left"
    />
  </div>
</div>
)
}

export default Hero;