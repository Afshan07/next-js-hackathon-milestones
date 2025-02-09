export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 via-yellow-200 to-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Main Heading with Hover */}
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-white py-10 p-6 text-center rounded-lg shadow-lg mx-auto hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Our Services
        </h1>
      </div>

      <main className="max-w-5xl mx-auto mt-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 underline underline-offset-8 sm:text-4xl">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {/* Service Cards with Hover */}
          {[
            { title: "Car Sales", desc: "Find a variety of high-quality cars at competitive prices.", border: "border-orange-500" },
            { title: "Car Repairs", desc: "Expert repair services to keep your car running smoothly.", border: "border-pink-500" },
            { title: "Car Maintenance", desc: "Regular check-ups and maintenance for optimal performance.", border: "border-orange-500" },
            { title: "Insurance Assistance", desc: "Helping you get the best car insurance plans available.", border: "border-pink-500" },
            { title: "Custom Modifications", desc: "Enhance your car's look and performance with custom upgrades.", border: "border-orange-500" },
            { title: "Test Drives", desc: "Experience our cars firsthand before making a purchase.", border: "border-pink-500" }
          ].map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border-2 ${service.border} hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
