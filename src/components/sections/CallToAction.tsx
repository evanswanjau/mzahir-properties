import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <div
      className="text-center"
      style={{
        backgroundImage: "url(" + "/images/sell-property.jpg" + ")",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/40 rounded-lg py-32 px-12 mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Ready to Buy Your Next Home?
        </motion.h2>
        <motion.p
          className="text-gray-200 mb-8 w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Contact us today to start the process with Nairobi’s trusted real
          estate expert. Whether you're looking to buy your dream home, invest
          in a property, or simply explore your options, our team is here to
          guide you every step of the way. Let us help you make informed
          decisions and turn your real estate goals into reality.
        </motion.p>
        <Button
          asChild
          className="bg-green-700 text-white hover:bg-green-800 px-8 py-7 cursor-pointer transition-colors delay-300"
        >
          <motion.a
            href="/contact-us"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Get Started Today
          </motion.a>
        </Button>
      </div>
    </div>
  );
};
