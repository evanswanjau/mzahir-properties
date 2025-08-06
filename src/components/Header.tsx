import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "#" },
    { name: "LISTINGS", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-[95%] mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-6">
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
            <nav className="hidden lg:flex items-center space-x-8 ml-4">
              <ul className="flex items-center space-x-8 font-playfair">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white text-[15px] font-normal tracking-widest transition-colors duration-300 relative group hover:text-[#FF8800]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <span className="font-playfair text-[15px] text-[#FF8800] bg-transparent px-4 py-2 border-none">
              +254 722 587 400
            </span>
            <a href="/contact-us">
              <Button className="px-6 py-4 cursor-pointer border border-[#FF8800] bg-transparent text-[#FF8800] hover:bg-[#FF8800] hover:text-white font-playfair text-[15px] tracking-widest">
                <span>LET'S TALK</span>
                <Mail size={18} />
              </Button>
            </a>
          </div>
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
            <ul className="space-y-4 font-playfair">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-white text-[15px] font-normal tracking-wide transition-colors duration-300 py-2 hover:text-[#FF8800]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {/* Mobile Phone & Email Link */}
              <li className="pt-2">
                <span className="flex items-center space-x-2 text-[#FF8800] bg-transparent px-2 py-2 font-playfair text-[15px]">
                  <span>+254 722 587 400</span>
                </span>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="flex items-center space-x-2 text-[#FF8800] bg-transparent px-2 py-2 font-playfair text-[15px] border border-[#FF8800] hover:bg-[#FF8800] hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>LET'S TALK</span>
                  <Mail size={18} />
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
