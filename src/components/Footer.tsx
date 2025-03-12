import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-16">
      <div className="max-w-[80%] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <a href="/">
            <img
              src="/images/logo-white.png"
              alt="Mzahir Logo"
              className="h-18 w-auto mb-12"
            />
          </a>
          <p className="text-gray-400 mb-4">
            Located at the heart of Nairobi’s real estate market, M. Zahir
            Properties offers over 15 years of expertise in buying, selling, and
            investing in properties. Our commitment to Islamic ethics and
            personalized service sets us apart.
          </p>
        </div>

        {/* Quick Links */}
        <div className="ml-18">
          <h4 className="text-xl font-semibold mb-6 text-gray-200">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="/"
                className="text-gray-200 hover:text-green-300 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-green-300 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/buy-property"
                className="text-gray-400 hover:text-green-300 transition-colors"
              >
                Buy Property
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-gray-400 hover:text-green-300 transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-gray-400 hover:text-green-300 transition-colors"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="text-gray-400 hover:text-green-300 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-gray-200">
            Our Services
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#buy"
                className="text-gray-400 hover:text-green-300 transition-colors"
              >
                Property Buying Assistance
              </a>
            </li>
            <li>
              <a
                href="#sell"
                className="text-gray-400 hover:text-green-300 transition-colors"
              >
                Property Selling Solutions
              </a>
            </li>
            <li>
              <a
                href="#invest"
                className="text-gray-400 hover:text-green-300 transition-colors"
              >
                Investment Advisory
              </a>
            </li>
            <li>
              <a
                href="#rent"
                className="text-gray-400 hover:text-green-300 transition-colors"
              >
                Rental Property Management
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-gray-200">
            Stay Connected
          </h4>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest property listings, market
            trends, and exclusive offers tailored to your real estate needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-gray-600 bg-gray-700 text-white placeholder-gray-400"
            />
            <Button
              variant="default"
              className="bg-green-700 hover:bg-green-800 w-full sm:w-auto"
            >
              Subscribe
            </Button>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/mzahirproperties"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-300 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/mzahirprops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-300 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/mzahirproperties"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-300 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} M. Zahir Properties. All rights
          reserved. |{" "}
          <a href="#privacy" className="text-green-400 hover:text-green-300">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#terms" className="text-gray-400 hover:text-green-300">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
