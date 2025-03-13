import { motion } from "framer-motion";
import { CallToAction } from "@/components/sections/CallToAction";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
const services = [
  {
    id: 1,
    slug: "buying-selling-assistance",
    title: "Buying & Selling Assistance",
    excerpt:
      "We guide buyers and sellers through every step, ensuring fair deals and smooth transactions.",
    image: "/images/4.jpg",
  },
  {
    id: 2,
    slug: "real-estate-investment-guidance",
    title: "Real Estate Investment Guidance",
    excerpt:
      "Insights on ROI and market trends to help you choose properties that maximize value.",
    image: "/images/5.jpg",
  },
  {
    id: 3,
    slug: "rental-leasing-services",
    title: "Rental & Leasing Services",
    excerpt:
      "Support for landlords and tenants with tenant sourcing, maintenance, and legal leasing.",
    image: "/images/6.jpg",
  },
  {
    id: 4,
    slug: "market-advice-consultations",
    title: "Market Advice & Consultations",
    excerpt:
      "Personalized consultations on pricing, locations, and market trends for buyers and sellers.",
    image: "/images/2.jpg",
  },
  {
    id: 5,
    slug: "paperwork-legal-assistance",
    title: "Paperwork & Legal Assistance",
    excerpt:
      "Assistance with ownership transfers, title deeds, and legal compliance, ensuring transparency.",
    image: "/images/1.jpg",
  },
];

const ServicesPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
      <section className="min-h-screen">
        <div
          style={{
            backgroundImage: "url(" + "/images/white-background.png" + ")",
            backgroundPosition: "center center",
            backgroundSize: "90%",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[80%] mx-auto"
        >
          <motion.div {...fadeInUp} className="mb-12 py-12 bg-white/80">
            <div className="w-4xl mx-auto text-center bg-white/90">
              <motion.h1
                {...fadeInUp}
                className="text-6xl font-bold text-gray-800 text-center mb-8 leading-18"
              >
                Discover how{" "}
                <span className="text-green-700">Our Services</span> can support
                your Real Estate needs.
              </motion.h1>
            </div>
          </motion.div>
        </div>
        <div className="bg-gradient-to-b from-white to-gray-50 pb-24">
          <div className="max-w-[80%] mx-auto px-6">
            <motion.div
              {...fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  {...fadeInUp}
                  className="bg-white hover:shadow-2xl rounded-2xl p-4 transition-shadow duration-500 cursor-pointer flex flex-col min-h-[300px]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-42 object-cover rounded-2xl mb-5"
                  />
                  <div className="flex flex-col flex-1 justify-between">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.excerpt}
                    </p>
                    <a
                      href={`#`}
                      className="mb-1 text-green-700 font-semibold hover:underline"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <FeaturedProperties />
      <CallToAction />
    </>
  );
};

export default ServicesPage;
