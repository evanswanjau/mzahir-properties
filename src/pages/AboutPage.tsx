import { motion } from "framer-motion";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import SocialMediaSection from "@/components/SocialMediaSection";
import ContactSection from "@/components/ContactSection";

const AboutUs = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* 1. Hero Section - Luxury Living Room Image */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="/images/luxury-living-room.jpg"
          alt="Luxury Living Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl md:text-6xl font-playfair font-bold text-white uppercase tracking-wide mb-4"
            >
              Discover the Story Behind
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-3xl md:text-5xl font-playfair font-bold text-[#FF8800] uppercase tracking-wide"
            >
              M. Zahir Properties
            </motion.h2>
          </div>
        </div>
      </section>

      {/* 2. Meet Mohamed Zahir Section */}
      <section className="bg-[#1C1C1C] py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side - Bio */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-2 h-20 bg-[#FF8800] mr-4" />
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white uppercase tracking-wide">
                  Meet Mohamed Zahir
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-300 font-lato leading-relaxed">
                <p>
                  With over 15 years of experience in the hardware and
                  renovation business, I have developed a deep appreciation for
                  the transformation of a property—from its foundation to the
                  final touches.
                </p>

                <p>
                  My journey in real estate began when I realized that many
                  clients were searching for more than just a house—they needed
                  honest guidance and someone who genuinely cared about their
                  dreams.
                </p>

                <p>
                  Rooted in Islamic values , I believe in honesty, fairness,
                  halal dealings, and always fulfilling our word. Every
                  transaction is conducted with the utmost transparency and
                  ethical standards.
                </p>

                <p>
                  As a proud member of the Kenya Real Estate Association , I
                  stay updated with the latest industry standards and best
                  practices to serve my clients better.
                </p>

                <p>
                  Beyond business, I'm committed to giving back to the community
                  . Whether through charitable initiatives or mentoring young
                  professionals, I believe in creating lasting positive impact.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Professional Photo */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img
                src="/images/about-potrait.jpg"
                alt="Mohamed Zahir - Real Estate Professional"
                className="w-full max-w-md h-[600px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Personal Instagram Feed - Carousel */}
      <SocialMediaSection />

      <ContactSection />
    </div>
  );
};

export default AboutUs;
