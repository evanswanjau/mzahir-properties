import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FeaturedBlogs from "@/components/sections/FeaturedBlogs";

const HomePage = () => {
  const fadeInUpBase = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInUpDelayed = (delay: number) => ({
    ...fadeInUpBase,
    transition: { ...fadeInUpBase.transition, delay },
  });

  return (
    <main className="flex-1">
      <Hero />

      <section className="flex items-center justify-center bg-slate-900 p-16">
        <div
          className="w-full h-full bg-cover flex justify-between bg-center relative z-0"
          style={{
            backgroundImage: "url('/images/about_m_background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.section {...fadeInUpBase} className="bg-slate-900/90">
            <motion.div
              {...fadeInUpBase}
              className="flex flex-col lg:flex-row items-center gap-16"
            >
              <motion.div {...fadeInUpBase} className="w-full lg:w-7/12 z-20">
                <div className="w-6/12 mx-auto">
                  <motion.p
                    {...fadeInUpDelayed(0.2)}
                    className="text-amber-500 mb-2 tracking-wider font-semibold text-sm uppercase"
                  >
                    — MEET YOUR AGENT
                  </motion.p>

                  <motion.h2
                    {...fadeInUpDelayed(0.4)}
                    className="text-4xl lg:text-5xl font-bold text-white mb-6"
                  >
                    M. Zahir
                  </motion.h2>

                  <motion.p
                    {...fadeInUpDelayed(0.6)}
                    className="text-amber-500 mb-8 font-medium"
                  >
                    Real Estate Professional | Ethical Property Solutions
                  </motion.p>

                  <motion.div
                    {...fadeInUpDelayed(0.8)}
                    className="space-y-4 text-white leading-relaxed mb-8"
                  >
                    <p className="text-justify">
                      With over 15 years of experience in the hardware and
                      paints industry, I bring a unique perspective to real
                      estate that goes beyond the surface. My deep understanding
                      of construction materials and finishes helps clients see
                      the true potential in every property. At M. Zahir
                      Properties, I operate with a strong foundation in Islamic
                      ethics, ensuring all transactions are halal, fair, and
                      transparent. Real estate isn't just about properties —
                      it's about people and their dreams.
                    </p>
                  </motion.div>

                  <motion.div
                    {...fadeInUpDelayed(1.0)}
                    className="flex flex-col sm:flex-row gap-6"
                  >
                    <Button
                      variant="outline"
                      className="tracking-widest bg-transparent cursor-pointer text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-white px-8 py-5 rounded-lg transition-all duration-300"
                    >
                      ABOUT ME
                    </Button>
                    <Button
                      variant="outline"
                      className="tracking-widest bg-transparent cursor-pointer text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-white px-8 py-5 rounded-lg transition-all duration-300"
                    >
                      MY SERVICES
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                {...fadeInUpBase}
                className="w-full lg:w-5/12 flex justify-endz-20"
              >
                <img
                  src="/images/potrait.jpg"
                  alt="M. Zahir - Real Estate Professional"
                  className="max-w-4xl h-[800px] object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </section>

      <motion.section {...fadeInUpBase} className="bg-slate-900 p-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div {...fadeInUpBase} className="w-full lg:w-6/12 relative">
            <div className="absolute inset-10 border-5 border-amber-500 z-20"></div>
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            <motion.img
              {...fadeInUpDelayed(0.2)}
              src="/images/search_home.jpg"
              alt="Beautiful Interior"
              className="w-full h-[800px] object-cover"
            />
          </motion.div>

          <motion.div
            {...fadeInUpBase}
            className="w-full lg:w-6/12 text-white p-32"
          >
            <motion.h2
              {...fadeInUpDelayed(0.2)}
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Searching for your dream home?
            </motion.h2>

            <motion.p
              {...fadeInUpDelayed(0.4)}
              className="text-amber-400 mb-8 text-lg"
            >
              Let's find your perfect property together
            </motion.p>

            <motion.div {...fadeInUpDelayed(0.6)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  PROPERTY ENQUIRY FORM
                </label>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <select className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400">
                      <option value="">Property Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="commercial">Commercial</option>
                      <option value="land">Land</option>
                    </select>
                    <select className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400">
                      <option value="">Budget Range</option>
                      <option value="under500k">Under 500K</option>
                      <option value="500k-1m">$500K - 1M</option>
                      <option value="above1m">Above 1M</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="Additional Information"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 resize-none"
                  ></textarea>

                  <Button className="w-full tracking-widest bg-amber-500 cursor-pointer text-white hover:bg-amber-600 hover:text-white px-8 py-6 rounded-lg transition-all duration-300">
                    SUBMIT ENQUIRY
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <FeaturedBlogs />
    </main>
  );
};

export default HomePage;
