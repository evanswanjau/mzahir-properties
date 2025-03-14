import { Button } from "@/components/ui/button";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Buy Property", href: "/buy-property" },
    { name: "Sell Property", href: "/sell-property" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <header className="bg-white text-gray-800 p-4 flex justify-between items-center px-42 py-4">
      <div className="flex items-center">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Mzahir Logo"
            className="h-16 w-auto mr-2"
          />
        </a>
      </div>

      <nav>
        <ul className="flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-green-700 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="/contact-us">
              <Button
                variant="default"
                className="cursor-pointer py-6 px-6 bg-green-700 text-white hover:bg-green-800 transition-colors duration-300"
              >
                Get in Touch
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
