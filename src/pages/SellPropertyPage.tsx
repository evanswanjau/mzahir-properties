import { motion, Easing } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { CallToAction } from "@/components/sections/CallToAction";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import { FeaturedFAQs } from "@/components/sections/FeaturedFAQs";

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
    transition: { duration: 0.6, ease: "easeOut" as Easing },
  };

  return (
    <>
      <section className="min-h-screen">
        <div
          style={{
            backgroundImage: "url(/images/white-background.png)",
            backgroundPosition: "center center",
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[80%] mx-auto"
        >
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="mb-12 py-12 bg-white/80"
          >
            <div className="w-4xl mx-auto text-center bg-white/90">
              <motion.h1
                initial={fadeInUp.initial}
                whileInView={fadeInUp.whileInView}
                viewport={fadeInUp.viewport}
                transition={fadeInUp.transition}
                className="text-6xl font-bold text-gray-800 text-center mb-8 leading-18"
              >
                Discover how{" "}
                <span className="text-green-700">Our Services</span> can support
                your Real Estate needs.
              </motion.h1>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Target Audience Section */}
        <div className="bg-white pb-32">
          <div className="max-w-[80%] mx-auto px-6 lg:px-8">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              <motion.div
                initial={fadeInUp.initial}
                whileInView={fadeInUp.whileInView}
                viewport={fadeInUp.viewport}
                transition={fadeInUp.transition}
                className="bg-linear-to-tl from-green-100 to-green-50 py-16 px-8 rounded-2xl"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="/images/1.jpg"
                    alt="First-Time Buyers"
                    className="w-38 h-38 mb-6 rounded-full object-cover border-8 border-white"
                  />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    First-Time Buyers
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    New to the market? We simplify the process and help you find
                    your dream home.
                  </p>
                  <ul className="text-left text-gray-600 space-y-2 w-full pl-3">
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Step-by-step purchasing guidance</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>First-time buyer incentives</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Financial planning assistance</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={fadeInUp.initial}
                whileInView={fadeInUp.whileInView}
                viewport={fadeInUp.viewport}
                transition={fadeInUp.transition}
                className="bg-linear-to-tl from-green-100 to-green-50 py-16 px-8 rounded-2xl"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="/images/1.jpg"
                    alt="Real Estate Investors"
                    className="w-38 h-38 mb-6 rounded-full object-cover border-8 border-white"
                  />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Real Estate Investors
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    Maximize your ROI with expert guidance on high-value
                    properties.
                  </p>
                  <ul className="text-left text-gray-600 space-y-2 w-full pl-5">
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Market analysis & trend reports</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Portfolio diversification strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Tax advantage consultation</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={fadeInUp.initial}
                whileInView={fadeInUp.whileInView}
                viewport={fadeInUp.viewport}
                transition={fadeInUp.transition}
                className="bg-linear-to-tl from-green-100 to-green-50 py-16 px-8 rounded-2xl"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="/images/1.jpg"
                    alt="Property Managers"
                    className="w-38 h-38 mb-6 rounded-full object-cover border-8 border-white"
                  />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Property Managers
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    Comprehensive solutions for landlords and tenants alike.
                  </p>
                  <ul className="text-left text-gray-600 space-y-2 w-full pl-5">
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Tenant screening services</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Lease agreement preparation</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Maintenance coordination</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-white to-gray-50 pb-24">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="text-center mb-18"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Solutions for Every Client
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over 20 years of industry experience, we deliver tailored
              real estate services to meet the unique needs of our diverse
              clientele.
            </p>
          </motion.div>
          <div className="max-w-[80%] mx-auto px-6">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.whileInView}
                  viewport={fadeInUp.viewport}
                  transition={fadeInUp.transition}
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
      <FeaturedFAQs />
      <CallToAction />
    </>
  );
};

export default ServicesPage;
