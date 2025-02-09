import Image from "next/image";

export default function Hero() {
  return (                 
    <div className="min-h-screen  bg-gradient-to-br from-gray-700 via-yellow-200 to-black py-20 sm:py-16 md:py-[112px] px-4 sm:px-6 lg:px-8 ">
      {/* Hero Section */}
      <main className="container mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-yellow-400">
              Welcome to Auto Car
            </h1>
            <p className="text-yellow-300 mt-4 text-lg sm:text-base">
              Your one-stop solution for all car needs. From sales to repairs, {`we've`} got you covered!<br />
              We offer a wide variety of cars, including luxury, sports, and SUVs.<br />
              Our team of experts is here to help you make the right choice.<br />
              Explore our services and discover the best deals today.
            </p>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded mt-4 hover:bg-yellow-600 hover:scale-105 transition duration-300">
              Explore More
            </button>
          </div>

          {/* Car Image with Hover Effect */}
          <div className="relative w-full h-64 sm:h-72 md:h-96 flex justify-center">
            <Image
              src="/R.jpeg" 
              alt="Luxury Car"
              layout="intrinsic"
              width={500}
              height={300}
              className="rounded-lg shadow-lg border-4 border-yellow-500 object-cover hover:scale-105 hover:shadow-2xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Trending Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center md:text-left">
            Trending Cars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Car Card 1 */}
            <div className="bg-yellow-200 p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center hover:bg-yellow-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <Image
                src="/sedan.avif"
                alt="Car 1"
                width={300}
                height={200}
                className="rounded-lg mb-4 hover:scale-105 transition-all duration-300"
              />
              <h4 className="text-xl font-semibold text-black mb-2">Luxury Sedan</h4>
              <p className="text-black">Experience comfort and style with our luxury sedan.</p>
            </div>

            {/* Car Card 2 */}
            <div className="bg-yellow-200 p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center hover:bg-yellow-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <Image
                src="/sports.jpeg"
                alt="Car 2"
                width={300}
                height={200}
                className="rounded-lg mb-4 hover:scale-105 transition-all duration-300"
              />
              <h4 className="text-xl font-semibold text-black mb-2">Sports Car</h4>
              <p className="text-black">Feel the thrill of speed with our sports car collection.</p>
            </div>

            {/* Car Card 3 */}
            <div className="bg-yellow-200 p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center hover:bg-yellow-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <Image
                src="/suv.jpeg"
                alt="Car 3"
                width={300}
                height={200}
                className="rounded-lg mb-4 hover:scale-105 transition-all duration-300"
              />
              <h4 className="text-xl font-semibold text-black mb-2">SUV</h4>
              <p className="text-black">Perfect for family trips and off-road adventures.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
