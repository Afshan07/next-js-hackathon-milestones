import { FaFacebook, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
// Icons For Bottom Left Side Hero Section
export default function IconsWithHoverEffects() {
  return (
    <div className="flex space-x-4 mt-2">
      {/* Facebook Icon */}
      <div className="relative group">
      <FaFacebook className="bg-white text-blue-950 text-3xl sm:text-3xl md:text-4xl lg:text-4xl rounded-full p-2 group-hover:shadow-sparkle group-hover:scale-125 transition-all duration-500" />
      <span className="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm md:text-base lg:text-lg font-thin bg-black bg-opacity-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Facebook
      </span>
      </div>

      {/* LinkedIn Icon */}
      <div className="relative group">
      <FaLinkedin className="bg-white text-blue-950 text-3xl sm:text-3xl md:text-4xl lg:text-4xl rounded-full p-2 group-hover:shadow-sparkle group-hover:scale-125 transition-all duration-500" />
      <span className="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm md:text-base lg:text-lg font-thin bg-black bg-opacity-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        LinkedIn
      </span>
      </div>

      {/* GitHub Icon */}
      <div className="relative group">
      <FaGithubSquare className="bg-white text-blue-950 text-3xl sm:text-3xl md:text-4xl lg:text-4xl rounded-full p-2 group-hover:shadow-sparkle group-hover:scale-125 transition-all duration-500" />
      <span className="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm md:text-base lg:text-lg font-thin bg-black bg-opacity-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        GitHub
      </span>
      </div>

      {/* Vercel Icon */}
      <div className="relative group">
      <IoLogoVercel className="bg-white text-blue-950 text-3xl sm:text-3xl md:text-4xl lg:text-4xl rounded-full p-2 group-hover:shadow-sparkle group-hover:scale-125 transition-all duration-500" />
      <span className="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold bg-black bg-opacity-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Vercel
      </span>
      </div>
    </div>
  );
}
