import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
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
      <FeaturedProperties />
      <motion.section {...fadeInUpBase} className="bg-gray-100 py-24">
        <div className="max-w-[80%] mx-auto px-6">
          <motion.div
            {...fadeInUpBase}
            className="flex flex-col md:flex-row items-center rounded-lg p-8"
          >
            <motion.img
              {...fadeInUpBase}
              src="/images/1.jpg"
              alt="About M. Zahir Properties"
              className="w-full md:w-1/2 h-[600px] object-cover rounded-lg mb-8 md:mb-0 md:mr-16"
            />
            <motion.div {...fadeInUpBase} className="w-full md:w-1/2">
              <motion.p
                {...fadeInUpDelayed(0.2)}
                className="text-green-700 mb-4 tracking-wider font-semibold"
              >
                — ABOUT US
              </motion.p>
              <motion.h2
                {...fadeInUpDelayed(0.4)}
                className="text-4xl font-semibold text-gray-800 mb-4"
              >
                About M. Zahir Properties
              </motion.h2>
              <motion.p
                {...fadeInUpDelayed(0.6)}
                className="text-gray-600 leading-relaxed mb-6"
              >
                With over 15 years of experience in the hardware and paints
                industry, I have always been fascinated by the transformation of
                a property from its foundation to the final touches. This deep
                understanding of construction materials and finishes gives me a
                unique perspective when helping clients find their perfect home.
              </motion.p>
              <motion.p
                {...fadeInUpDelayed(0.8)}
                className="text-gray-600 leading-relaxed mb-6"
              >
                At M. Zahir Properties, my mission is simple: to help you find
                your dream home. Whether you're looking to buy, sell, or invest,
                I am committed to guiding you through the process with
                transparency and expertise.
              </motion.p>
              <motion.p
                {...fadeInUpDelayed(1.0)}
                className="text-gray-600 leading-relaxed mb-12"
              >
                What sets me apart? I operate with a strong foundation in
                Islamic ethics, ensuring that all transactions are halal, fair,
                and ethical. Real estate is not just about properties — it's
                about people, and I take pride in helping individuals and
                families achieve their homeownership dreams while staying true
                to their values.
              </motion.p>
              <motion.a {...fadeInUpDelayed(1.2)} href="/about">
                <div className="flex items-center space-x-6">
                  <Button
                    variant="default"
                    className="bg-green-700 cursor-pointer hover:bg-green-900 text-white font-body text-lg px-8 py-7 rounded-lg transition-all duration-500"
                  >
                    Learn More About Us
                  </Button>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <FeaturedBlogs />
    </main>
  );
};

export default HomePage;
