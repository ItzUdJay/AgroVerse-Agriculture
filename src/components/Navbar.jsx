import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center py-4 shadow-lg bg-green-500 sticky top-0 ">
      <Link
        to="/"
        className="text-2xl font-bold text-white hover:text-purple-200"
      >
        AgroVerse
      </Link>

      <ul className="flex gap-6 text-lg text-white">
        <li>
          <Link to="/" className="hover:text-yellow-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/marketplace" className="hover:text-yellow-600 transition">
            Marketplace
          </Link>
        </li>
        <li>
          <Link to="/learn" className="hover:text-yellow-600 transition">
            Learn
          </Link>
        </li>
        <li>
          <Link to="/experts" className="hover:text-yellow-600 transition">
            Experts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
