import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-green-100 p-8 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">AgroVerse</h3>
          <p className="text-sm mt-2">
            Empowering farmers, connecting communities.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/marketplace" className="hover:underline">
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/learn" className="hover:underline">
                Learn
              </Link>
            </li>
            <li>
              <Link to="/experts" className="hover:underline">
                Experts
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
          <p className="text-sm">hello@agroverse.com</p>
          <p className="text-sm">+234 9031200965</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Follow Us</h4>
          <p className="text-sm">Facebook &bull; Twitter &bull; Instagram</p>
        </div>
      </div>

      <div className="text-center text-sm text-green-300 mt-8 pt-4 border-y border-green-700">
        &copy; {new Date().getFullYear()} AgroVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
