import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FeaturedFAQs } from "@/components/sections/FeaturedFAQs";
import {
  Instagram,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <section className="py-24 min-h-screen">
        <div className="max-w-[80%] mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-800 text-center mb-12">
            Contact Us
          </h1>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="rounded-lg shadow-none border-none p-5 bg-green-50 transition-shadow">
                <CardHeader className="flex  space-x-4 p-4">
                  <Phone className="w-8 h-8 text-green-700" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-gray-800 text-xl font-bold">Call Us</h3>
                  <p className="text-gray-600 mt-6 mb-1">
                    Mon-Fri from 8am to 5pm
                  </p>
                  <p className="text-gray-800 font-bold underline">
                    +254 712 345 678
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-lg shadow-none border-none p-5 bg-green-50 transition-shadow">
                <CardHeader className="flex  space-x-4 p-4">
                  <Mail className="w-8 h-8 text-green-700" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-gray-800 text-xl font-bold">
                    Send us An Email
                  </h3>
                  <p className="text-gray-600 mt-6 mb-1">
                    Reach out to our team
                  </p>
                  <p className="text-gray-800 font-bold underline">
                    info@mzahirproperties.com
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-lg shadow-none border-none p-5 bg-green-50 transition-shadow">
                <CardHeader className="flex  space-x-4 p-4">
                  <MapPin className="w-8 h-8 text-green-700" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-gray-800 text-xl font-bold">Visit Us</h3>
                  <p className="text-gray-600 mt-6">Visit our office HQ</p>
                  <p className="text-gray-800 font-bold underline">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=123+Karen+Road,+Nairobi,+Kenya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-lg shadow-none border-none p-5 bg-green-50 transition-shadow">
                <CardHeader className="flex  space-x-4 p-4">
                  <Phone className="w-8 h-8 text-green-700" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-gray-800 text-xl font-bold">
                    Postal Address
                  </h3>
                  <p className="text-gray-600 mt-6">Send us mail</p>
                  <p className="text-gray-800 font-bold underline">
                    P.O. Box 45678-00100
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-24">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Send Us an Enquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="mt-2 rounded-lg border-gray-300 py-6 px-4"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="mt-2 rounded-lg border-gray-300 py-6 px-4"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    className="mt-2 rounded-lg border-gray-300 py-6 px-4"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700">
                    Subject
                  </Label>
                  <Input
                    id="phone"
                    type="text"
                    placeholder="Your Subject"
                    className="mt-2 rounded-lg border-gray-300 py-6 px-4"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    className="mt-2 rounded-lg border-gray-300 h-32 py-6 px-4"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-green-700 text-white hover:bg-green-800 px-6 py-6 w-full cursor-pointer"
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                  Our Location
                </h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.789344487644!2d36.69898761475426!3d-1.3018855990322915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b8f8e8b8e8f%3A0x8f8f8e8f8e8f8e8f!2sKaren%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                  Follow Us
                </h2>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com/mzahirproperties"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/mzahirprops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://facebook.com/mzahirproperties"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedFAQs />
    </>
  );
};

export default ContactUs;
