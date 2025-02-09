import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-yellow-200 to-gray-500 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center flex-grow py-12">
        <h2 className="text-5xl font-bold text-white mb-6 sm:text-6xl drop-shadow-lg hover:underline hover:underline-offset-8">About Us</h2>
        <p className="text-yellow-100 max-w-3xl mx-auto mb-8 text-lg sm:text-xl hover:bg-black">
          Welcome to Auto Car, your ultimate destination for high-quality cars and exceptional services.
        </p>

        {/* Image Section with Hover */}
        <div className="relative flex justify-center w-64 h-64 mx-auto sm:w-80 sm:h-80 md:w-[600px] md:h-[200px] lg:w-[600px] lg:h-[300px] items-center border-4 border-yellow-400 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <Image
            src="/about.jpg"
            alt="About Auto Car"
            objectFit="cover"
            width={384}
            height={384}
            className="rounded-lg"
          />
        </div>

        {/* Additional Content */}
        <div className="mt-10 text-left space-y-6 max-w-4xl mx-auto">
          {/* Our Mission Card with Hover */}
          <div className="bg-yellow-600 p-6 rounded-lg shadow-md border-2 border-yellow-400 hover:bg-yellow-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-3xl font-semibold text-white">Our Mission</h3>
            <p className="text-yellow-100 mt-2 hover:bg-black">
              We strive to provide top-notch services and high-quality vehicles to enhance your driving experience.
            </p>
          </div>

          {/* Why Choose Us Card with Hover */}
          <div className="bg-yellow-700 p-6 rounded-lg shadow-md border-2 border-yellow-400 hover:bg-yellow-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white">Why Choose Us?</h3>
            <ul className="list-disc pl-6 text-yellow-100 mt-2">
              <li className="hover:bg-black">Wide range of vehicles for all needs</li>
              <li className="hover:bg-black">Competitive pricing and offers</li>
              <li className="hover:bg-black">Reliable customer support and services</li>
              <li className="hover:bg-black">Trusted by thousands of customers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
