import { motion } from "framer-motion";

const AboutSection = () => (
  <section className="flex items-center justify-center bg-black py-24 px-8 md:p-16">
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
          className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 w-[820px] h-[480px] object-contain select-none pointer-events-none hidden lg:block"
          style={{ zIndex: 1 }}
        />
        <div className="relative z-10 pl-0 lg:pl-32">
          <div className="flex items-center mb-8 px-0">
            <div className="w-2 h-20 bg-[#FF8800] mr-4" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white uppercase tracking-wide">
              ABOUT US
            </h2>
          </div>
          <p className="text-lg text-gray-300 font-lato mb-8 max-w-2xl">
            With over 15 years of experience in the hardware and paints
            industry, I bring a unique perspective to real estate that goes
            beyond the surface. My deep understanding of construction materials
            and finishes helps clients see the true potential in every property.
            At M. Zahir Properties, I operate with a strong foundation in
            Islamic ethics, ensuring all transactions are halal, fair, and
            transparent. Real estate isn't just about properties — it's about
            people and their dreams.
          </p>
          <p className="text-amber-500 font-lato font-medium mb-2">
            Real Estate Professional | Ethical Property Solutions
          </p>
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
          className="max-w-4xl h-[480px] object-cover object-right rounded-none shadow-none border-none"
          style={{ boxShadow: "none", border: "none" }}
        />
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
