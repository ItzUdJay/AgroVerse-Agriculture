import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-green-50">
      <h1 className="text-5xl font-bold text-green-700">
        Welcome to AgroVerse
      </h1>

      <p className="mt-4 text-gray-600 text-lg">
        A complete ecosystem for farmers, experts, and agricultural businesses.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <Link
          to="/marketplace"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Start Selling
        </Link>

        <Link
          to="/learn"
          className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-50 transition"
        >
          Learn Farming
        </Link>
      </div>
      <div>
        <Link
          to="register"
          className="justify-center items-center bg-green-700 text-4xl text-white p-5 mt-9  rounded-lg inline-block hover:bg-yellow-700 transition-all duration-400"
        >
          Register
        </Link>
      </div>
      <div>
        <button className="rounded-full shadow-lg bg-green-700 hover:bg-green-600 fixed bottom-5 right-5 p-4 animate-pulse transition-all duration-300">
          <a
            href="https://wa.me/2349017928914"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={40} />
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
