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
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
      <section className="min-h-screen">
        <div className="max-w-[80%] mx-auto px-6">
          <div
            style={{
              backgroundImage: "url(" + "/images/white-background.png" + ")",
              backgroundPosition: "center center",
              backgroundSize: "90%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <motion.div {...fadeInUp} className="mb-12 py-12 bg-white/80">
              <div className="w-4xl mx-auto text-center bg-white/90">
                <motion.h1
                  {...fadeInUp}
                  className="text-6xl font-bold text-gray-800 text-center mb-8 leading-18"
                >
                  <span className="text-green-700">Get in Touch</span> with us today to start your{" "}
                  real estate journey.
                </motion.h1>
              </div>
            </motion.div>
          </div>
          <motion.div
            {...fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <Card className="rounded-2xl shadow-none border-none p-5 bg-gray-800">
              <CardHeader className="flex space-x-4 p-4">
                <Phone className="w-8 h-8 text-green-600" />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-white text-xl font-bold">Call Us</h3>
                <p className="text-gray-300 mt-6 mb-1">
                  Mon-Fri from 8am to 5pm
                </p>
                <a
                  href="tel:+254712345678"
                  className="text-green-500 hover:text-green-400 transition-colors delay-300 font-bold underline"
                >
                  +254 712 345 678
                </a>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-none border-none p-5 bg-gray-800">
              <CardHeader className="flex space-x-4 p-4">
                <Mail className="w-8 h-8 text-green-600" />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-white text-xl font-bold">
                  Send us An Email
                </h3>
                <p className="text-gray-300 mt-6 mb-1">Reach out to our team</p>
                <a
                  href="mailto:info@mzahirproperties.com"
                  className="text-green-500 hover:text-green-400 transition-colors delay-300 font-bold underline"
                >
                  info@mzahirproperties.com
                </a>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-none border-none p-5 bg-gray-800">
              <CardHeader className="flex space-x-4 p-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-white text-xl font-bold">Visit Us</h3>
                <p className="text-gray-300 mt-6 mb-1">Visit our office HQ</p>
                <p className="text-green-500 hover:text-green-400 transition-colors delay-300 font-bold underline">
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

            <Card className="rounded-2xl shadow-none border-none p-5 bg-gray-800">
              <CardHeader className="flex space-x-4 p-4">
                <Phone className="w-8 h-8 text-green-600" />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-white text-xl font-bold">Postal Address</h3>
                <p className="text-gray-300 mt-6 mb-1">Send us mail</p>
                <p className="text-green-500 font-bold">P.O. Box 45678-00100</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 py-24"
          >
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Send Us an Enquiry
              </h2>
              <form onSubmit={handleSubmit} className="mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="first-name"
                      className="text-gray-700 font-bold"
                    >
                      First Name
                    </Label>
                    <Input
                      id="first-name"
                      type="text"
                      placeholder="Your First Name"
                      className="mt-2 rounded-lg bg-white py-6 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="last-name"
                      className="text-gray-700 font-bold"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="last-name"
                      type="text"
                      placeholder="Your Last Name"
                      className="mt-2 rounded-lg bg-white py-6 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-bold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="mt-2 rounded-lg bg-white py-6 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-bold">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    className="mt-2 rounded-lg bg-white py-6 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-bold">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="tel"
                    placeholder="Subject"
                    className="mt-2 rounded-lg bg-white py-6 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Start writing your message"
                    className="mt-2 rounded-lg h-24 bg-white py-4 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                    required
                    rows={8}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-green-700 cursor-pointer text-white hover:bg-green-800 w-full py-6 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
            <motion.div {...fadeInUp} className="space-y-12">
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
                <motion.div {...fadeInUp} className="flex space-x-6">
                  <a
                    href="https://facebook.com/mzahirproperties"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
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
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FeaturedFAQs />
    </>
  );
};

export default ContactUs;
