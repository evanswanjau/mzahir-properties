import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#" },
    { name: "PROPERTIES", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <header className="bg-[#1C1C1C]">
      <div className="max-w-[95%] mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-16 w-auto transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src="/images/logo-white.png"
                  alt="Logo"
                  className="h-16 w-auto absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
            </a>
          </div>

          <nav className="flex items-center space-x-6 lg:space-x-8">
            <ul className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium tracking-widest transition-colors duration-300 relative group ${
                      index === 0
                        ? "text-[#FF8800]"
                        : "text-gray-300 hover:text-[#FF8800]"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/contact-us" className="hidden sm:flex">
              <Button className="px-6 py-4 cursor-pointer border border-[#FF8800] hover:bg-[#FF8800] hover:text-white text-amber-500 tracking-widest">
                <span>LET'S TALK</span>
                <Mail size={18} />
              </Button>
            </a>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-[#FF8800] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="py-4 border-t border-gray-700">
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block text-sm font-medium tracking-wide transition-colors duration-300 py-2 ${
                      index === 0
                        ? "text-[#FF8800]"
                        : "text-white hover:text-[#FF8800]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              {/* Mobile Email Link */}
              <li className="pt-2">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center space-x-2 text-[#FF8800] hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail size={18} />
                  <span className="text-sm font-medium">Email Us</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
