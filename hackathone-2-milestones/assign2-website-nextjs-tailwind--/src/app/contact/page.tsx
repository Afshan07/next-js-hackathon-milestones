export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-black via-yellow-200 to-gray-500 px-4 sm:px-6 lg:px-8">
      {/* Contact Box with Hover Effect */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-yellow-700 p-6 sm:p-10 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-5xl font-bold text-white mb-6 sm:text-6xl drop-shadow-lg">Get in Touch</h2>
        <p className="text-gray-200 mt-2 sm:mt-4">Fill in the form below to send us a message.</p>
      </div>

      {/* Contact Form with Hover Effects */}
      <form className="mt-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-black p-6 sm:p-10 rounded-lg shadow-lg">
        <div>
          <label className="block text-yellow-400 font-semibold mb-1">Name:</label>
          <input
            type="text"
            placeholder="Type your name"
            className="w-full p-3 border border-yellow-500 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 hover:bg-gray-900 hover:border-yellow-300"
          />
        </div>
        <div className="mt-4">
          <label className="block text-yellow-400 font-semibold mb-1">Email:</label>
          <input
            type="email"
            placeholder="Type your email"
            className="w-full p-3 border border-yellow-500 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 hover:bg-gray-900 hover:border-yellow-300"
          />
        </div>
        <div className="mt-4">
          <label className="block text-yellow-400 font-semibold mb-1">Message:</label>
          <textarea
            placeholder="Type your message"
            className="w-full p-3 border border-yellow-500 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 hover:bg-gray-900 hover:border-yellow-300"
            rows={4}
          ></textarea>
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
