import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#" },
    { name: "PROPERTIES FOR SALE", href: "#" },
    { name: "SERVICES", href: "#" },
  ];

  return (
    <header className="bg-slate-900">
      <div className="max-w-[80%] mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <img src="/images/logo-white.png" alt="Logo" className="h-16 w-auto" />
            </a>
          </div>

          <nav className="flex items-center space-x-6 lg:space-x-8">
            <ul className="flex items-center space-x-12">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium tracking-widest transition-colors duration-300 relative group ${
                      index === 0
                        ? "text-amber-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/contact-us" className="hidden sm:block">
              <Button className="px-6 py-4 cursor-pointer border border-amber-500 hover:bg-amber-400 hover:text-white text-amber-500 tracking-widest">
                LET'S TALK
              </Button>
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="py-4 border-t border-slate-800">
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block text-sm font-medium tracking-wide transition-colors duration-300 py-2 ${
                      index === 0
                        ? "text-amber-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {/* Mobile CTA */}
              <li className="pt-4">
                <a href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-amber-400 hover:bg-amber-400 text-slate-900 font-semibold py-3 rounded-lg transition-all duration-300">
                    LET'S TALK
                  </Button>
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
