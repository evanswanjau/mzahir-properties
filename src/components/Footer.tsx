import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Mzahir</h3>
          <p>123 Property Lane, Real City, RC 12345</p>
          <p>Email: info@mzahir.com | Phone: (123) 456-7890</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#properties" className="hover:text-gray-300">
                Properties
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="mb-2">Subscribe for the latest property updates.</p>
          <div className="flex">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-1 mr-2"
            />
            <Button variant="default">Subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
