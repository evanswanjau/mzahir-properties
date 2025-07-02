import { Facebook, Instagram, MailIcon, MapPin, PhoneIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-24 pb-16">
      <div className="max-w-[80%] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-xl font-semibold mb-6 text-gray-200">
            Contact Information
          </h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#FF8800] flex-shrink-0" />
              <div className="text-gray-400">
                <p>123 Business Street</p>
                <p>Nairobi, Kenya</p>
                <p>P.O. Box 12345-00100</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="w-5 h-5 text-[#FF8800] flex-shrink-0" />
              <a
                href="tel:+254700000000"
                className="text-gray-400 hover:text-[#FF8800] transition-colors"
              >
                +254 700 000 000
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MailIcon className="w-5 h-5 text-[#FF8800] flex-shrink-0" />
              <a
                href="mailto:info@mzahirproperties.com"
                className="text-gray-400 hover:text-[#FF8800] transition-colors"
              >
                info@mzahirproperties.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-6 text-gray-200">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="/"
                className="text-gray-400 hover:text-[#FF8800] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-[#FF8800] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/buy-property"
                className="text-gray-400 hover:text-[#FF8800] transition-colors"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="text-gray-400 hover:text-[#FF8800] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-6 text-gray-200">
            Follow Us
          </h4>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/mzahirproperties"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF8800] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com/@mzahirproperties"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF8800] transition-colors"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#BDBDBD"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21.6 8.35a5.36 5.36 0 0 1-3.37-1.16V15.6a6.95 6.95 0 1 1-6.95-6.95c.19 0 .38.01.57.03v2.13a4.82 4.82 0 1 0 4.82 4.82V2.4h2.13a3.23 3.23 0 0 0 3.23 3.23v2.13z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com/mzahirproperties"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF8800] transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>© 2025 M. Zahir Properties. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
