import { motion } from "framer-motion";

const ContactSection = () => (
  <section
    className="relative bg-black py-24 px-8 lg:px-16 overflow-hidden"
    style={{
      backgroundImage: `url('/images/hero_background.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Black gradient overlay */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)",
      }}
    />
    <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-16">
      <motion.div
        className="w-full max-w-xl flex flex-col items-center"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <form className="w-full max-w-xl">
          <h2 className="text-3xl lg:text-[33.8px] font-playfair font-bold text-white mb-8 uppercase tracking-wide text-center">
            We'd Love to Hear From You
          </h2>
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
