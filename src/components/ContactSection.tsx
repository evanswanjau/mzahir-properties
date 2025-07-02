import { motion } from "framer-motion";

const ContactSection = () => (
  <section className="bg-black py-24 px-8 lg:px-16">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <motion.div
        className="w-full lg:w-5/12 flex justify-center lg:justify-start mb-10 lg:mb-0"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <img
          src="/images/potrait.jpg"
          alt="M. Zahir - Real Estate Professional"
          className="h-[520px] object-cover object-center grayscale select-none"
          style={{ filter: "grayscale(1)" }}
        />
      </motion.div>
      <motion.div
        className="w-full lg:w-7/12 flex flex-col items-start"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-8 uppercase tracking-wide">
          We'd Love to Hear From You
        </h2>
        <form className="w-full max-w-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col">
              <label className="text-white mb-2 font-lato text-sm">
                First Name
              </label>
              <input
                type="text"
                className="bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-[#FF8800] transition-colors duration-300 py-2"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2 font-lato text-sm">
                Last Name
              </label>
              <input
                type="text"
                className="bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-[#FF8800] transition-colors duration-300 py-2"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2 font-lato text-sm">Phone</label>
              <input
                type="tel"
                className="bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-[#FF8800] transition-colors duration-300 py-2"
                placeholder="Phone"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2 font-lato text-sm">Email</label>
              <input
                type="email"
                className="bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-[#FF8800] transition-colors duration-300 py-2"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <label className="text-white mb-2 font-lato text-sm">Message</label>
            <textarea
              rows={5}
              className="bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:border-[#FF8800] transition-colors duration-300 p-4 resize-none font-lato"
              placeholder="Type your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 px-0 bg-transparent border border-white text-white font-playfair text-lg uppercase tracking-widest transition-all duration-500 hover:bg-[#FF8800] hover:border-[#FF8800] hover:text-white rounded-none"
            style={{ borderRadius: 0 }}
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
