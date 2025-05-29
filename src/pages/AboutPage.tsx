import { Button } from "@/components/ui/button";
import FeaturedBlogs from "@/components/sections/FeaturedBlogs";
import { FeaturedFAQs } from "@/components/sections/FeaturedFAQs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
import { CallToAction } from "@/components/sections/CallToAction";
import { motion } from "framer-motion";

const AboutUs = () => {
  const testimonials = [
    {
      name: "Amina Hussein",
      quote:
        "M. Zahir Properties made buying my first home a breeze. Their ethical approach gave me peace of mind throughout the process.",
      image: "/images/1.jpg",
    },
    {
      name: "David Ochieng",
      quote:
        "Selling my property was seamless thanks to their expertise. I highly recommend them to anyone in Nairobi!",
      image: "/images/1.jpg",
    },
    {
      name: "Fatima Mwende",
      quote:
        "Their knowledge of Nairobi’s real estate market is unmatched. I found my dream apartment in just two weeks!",
      image: "/images/1.jpg",
    },
    {
      name: "Joseph Kiptoo",
      quote:
        "The team’s dedication to fair dealings and personal attention made investing with them a rewarding experience.",
      image: "/images/1.jpg",
    },
  ];

  // Define animation variants
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
    <div className="bg-gray-50">
      <div className="bg-white">
        <div
          style={{
            backgroundImage: "url(" + "/images/white-background.png" + ")",
            backgroundPosition: "center center",
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[80%] mx-auto"
        >
          <motion.div {...fadeInUpBase} className="mb-12 py-12 bg-white/80">
            <div className="w-4xl mx-auto text-center bg-white/90">
              <motion.h1
                {...fadeInUpBase}
                className="text-6xl font-bold text-gray-800 text-center mb-8 leading-18"
              >
                Learn more <span className="text-green-700">About Us</span> and
                our commitment to excellence.
              </motion.h1>
            </div>
          </motion.div>
        </div>
        <motion.section {...fadeInUpBase} className="pb-24">
          <div className="max-w-5xl mx-auto text-center px-6">
            <motion.img
              {...fadeInUpBase}
              src="images/5.jpg"
              alt="M. Zahir Properties"
              className="w-4xl h-80 object-cover object-bottom mx-auto mb-8 rounded-2xl"
            />
            <motion.p
              {...fadeInUpBase}
              className="text-gray-600 leading-relaxed mb-6"
            >
              With over 15 years of experience in the hardware and paints
              industry, I have developed a deep appreciation for the
              transformation of a property—from its foundation to the final
              touches. This expertise in construction materials and finishes
              provides me with a unique perspective when assisting clients in
              finding their ideal home.
            </motion.p>
            <motion.p
              {...fadeInUpBase}
              className="text-gray-600 leading-relaxed"
            >
              At M. Zahir Properties, our mission is clear: to help you discover
              your dream home. Whether you’re buying, selling, or investing, we
              are dedicated to guiding you through the process with
              transparency, professionalism, and a foundation in Islamic ethics.
            </motion.p>
          </div>
        </motion.section>
      </div>

      {/* Sell Your Property With Us Section */}
      <motion.section {...fadeInUpBase} className="bg-gray-50 py-24">
        <div className="max-w-[80%] mx-auto px-6">
          <motion.div
            {...fadeInUpBase}
            className="flex flex-col md:flex-row items-center rounded-lg p-8"
          >
            <motion.img
              {...fadeInUpBase}
              src="/images/1.jpg"
              alt="Sell Your Property"
              className="w-full md:w-1/2 h-[600px] object-cover rounded-lg mb-8 md:mb-0 md:mr-16"
            />
            <motion.div {...fadeInUpBase} className="w-full md:w-1/2">
              <motion.p
                {...fadeInUpDelayed(0.2)}
                className="text-green-700 mb-4 tracking-wider font-semibold"
              >
                — DISCOVER NOW!
              </motion.p>
              <motion.h2
                {...fadeInUpDelayed(0.4)}
                className="text-4xl font-semibold text-gray-800 mb-4"
              >
                Sell Your Property With Us
              </motion.h2>
              <motion.p
                {...fadeInUpDelayed(0.6)}
                className="text-gray-600 leading-relaxed mb-6"
              >
                Ready to sell your property? We offer a streamlined,
                professional process to maximize your property’s value while
                ensuring a fair and ethical transaction. Let our expertise work
                for you.
              </motion.p>
              <motion.p
                {...fadeInUpDelayed(0.8)}
                className="text-gray-600 leading-relaxed mb-6"
              >
                Our team of experienced professionals will guide you through
                every step of the selling process, from initial consultation to
                closing the deal. We use the latest marketing strategies to
                showcase your property to potential buyers and negotiate the
                best terms on your behalf.
              </motion.p>
              <motion.p
                {...fadeInUpDelayed(1.0)}
                className="text-gray-600 leading-relaxed mb-12"
              >
                Trust M. Zahir Properties to handle your sale with the utmost
                care and dedication. Contact us today to get started and see how
                we can help you achieve your real estate goals.
              </motion.p>
              <motion.a {...fadeInUpDelayed(1.2)} href="/sell-property">
                <div className="flex items-center space-x-6">
                  <Button
                    variant="default"
                    className="bg-green-700 cursor-pointer hover:bg-green-900 text-white font-body text-lg px-8 py-7 rounded-lg transition-all duration-500"
                  >
                    View Properties
                  </Button>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section {...fadeInUpBase} className="bg-gray-50 py-24">
        <div className="max-w-[80%] mx-auto px-6">
          <motion.h2
            {...fadeInUpBase}
            className="text-4xl font-bold text-gray-800 text-center mb-5"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            {...fadeInUpBase}
            className="w-4xl mx-auto text-gray-600 leading-relaxed text-center mb-16"
          >
            Hear what our satisfied clients have to say about their experiences
            with M. Zahir Properties. We pride ourselves on delivering
            exceptional service and building lasting relationships.
          </motion.p>
          <motion.div {...fadeInUpBase}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={3}
              slidesPerGroup={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name}>
                  <motion.div
                    {...fadeInUpBase}
                    className="bg-white rounded-lg p-6 h-full justify-center items-center flex flex-col space-y-4"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mr-4"
                    />
                    <p className="text-gray-800 text-lg font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.section>

      <FeaturedFAQs />
      <FeaturedBlogs />
      <CallToAction />
    </div>
  );
};

export default AboutUs;
