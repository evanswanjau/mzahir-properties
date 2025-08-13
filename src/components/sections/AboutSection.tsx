import { motion } from "framer-motion";
import { useState } from "react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      className="flex items-center justify-center bg-black py-24 px-8 md:px-16"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between items-center relative max-w-7xl mx-auto min-h-[480px]">
        <motion.div
          className="relative w-full lg:w-7/12 flex flex-col justify-center items-start min-h-[480px]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src="/images/logo-white.png"
            alt="Watermarked Logo"
            className="absolute top-0 left-0 opacity-10 w-96 h-96"
            style={{ zIndex: 1 }}
          />
          <div className="relative z-10 pl-0 lg:pl-32">
            <div className="flex items-center mb-8 px-0">
              <div className="w-2 h-20 bg-[#FF8800] mr-4" />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white uppercase tracking-wide">
                ABOUT US
              </h2>
            </div>

            {/* Short Version */}
            <p className="text-lg text-gray-300 font-lato mb-6 max-w-2xl leading-relaxed">
              At M. Zahir Properties, we help buyers and sellers navigate the
              real estate market with clarity, integrity, and trust. Whether
              you're searching for a luxury apartment or an affordable home,
              we're here to guide you every step of the way.
            </p>

            {/* Full Version (Hidden by default) */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <p className="text-lg text-gray-300 font-lato mb-4 max-w-2xl leading-relaxed">
                  Our journey began in the hardware and renovation business,
                  where we worked closely with developers and met countless
                  buyers. It became clear that many clients were searching for
                  more than just a house—they needed honest guidance and someone
                  who genuinely cared.
                </p>
                <p className="text-lg text-gray-300 font-lato mb-4 max-w-2xl leading-relaxed">
                  That's when M. Zahir Properties was born.
                </p>
                <p className="text-lg text-gray-300 font-lato mb-4 max-w-2xl leading-relaxed">
                  Rooted in Islamic business ethics, we believe in honesty,
                  fairness, halal dealings, and always fulfilling our word. We
                  don't just close a deal and walk away — we ensure that both
                  parties are treated fairly and leave with peace of mind.
                </p>
                <p className="text-lg text-gray-300 font-lato mb-6 max-w-2xl leading-relaxed">
                  We're committed to going above and beyond expectations,
                  offering a service built on faith, trust, and lasting
                  relationships.
                </p>
              </motion.div>
            )}

            {/* Read More / Read Less Button */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#FF8800] font-lato font-semibold uppercase tracking-wider text-sm hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                {isExpanded ? "Read Less" : "Read More"}
                <div
                  className={`w-2 h-2 border-r-2 border-b-2 border-[#FF8800] transition-transform duration-300 ${
                    isExpanded ? "rotate-45" : "-rotate-45"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-[#FF8800]" />
              <p className="text-[#FF8800] font-lato font-semibold uppercase tracking-wider text-sm">
                Real Estate Professional | Ethical Property Solutions
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-5/12 flex justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <img
            src="/images/potrait.jpg"
            alt="M. Zahir - Real Estate Professional"
            className="max-w-4xl h-[480px] object-cover object-right"
            style={{ boxShadow: "none", border: "none" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
