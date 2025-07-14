import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

const listings = [
  {
    title: "3-Bedroom Apartment in Kileleshwa",
    price: "Ksh 10M",
    image: "/images/1.jpg",
  },
  {
    title: "4-Bedroom Villa in Karen Water Front",
    price: "Ksh 15M",
    image: "/images/2.jpg",
  },
  {
    title: "2-Bedroom Apartment in Westlands",
    price: "Ksh 8.5M",
    image: "/images/3.jpg",
  },
  {
    title: "3-Bedroom Apartment in Kileleshwa",
    price: "Ksh 10M",
    image: "/images/4.jpg",
  },
  {
    title: "4-Bedroom Villa in Karen Water Front",
    price: "Ksh 15M",
    image: "/images/5.jpg",
  },
  {
    title: "2-Bedroom Apartment in Westlands",
    price: "Ksh 8.5M",
    image: "/images/6.jpg",
  },
  {
    title: "2-Bedroom Apartment in Westlands",
    price: "Ksh 8.5M",
    image: "/images/about_m_background.jpg",
  },
  {
    title: "3-Bedroom Apartment in Kileleshwa",
    price: "Ksh 10M",
    image: "/images/sell-property.jpg",
  },
  {
    title: "4-Bedroom Villa in Karen Water Front",
    price: "Ksh 15M",
    image: "/images/4.jpg",
  },
  {
    title: "2-Bedroom Apartment in Westlands",
    price: "Ksh 8.5M",
    image: "/images/1.jpg",
  },
];

const ListingsCarousel = () => (
  <section className="py-24 bg-[#1C1C1C] w-full">
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center mb-8 px-0"
      >
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white uppercase tracking-wide text-center">
          LISTINGS
        </h2>
        <div className="h-2 w-20 bg-[#FF8800] mt-4" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        className="text-gray-300 mb-8 w-8/12 mx-auto px-0 text-center"
      >
        <p>
          Whether you're looking for a high-rise residential complex, a gated
          community, or a modern apartment building, we offer exceptional
          investment opportunities.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            640: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
            1280: { slidesPerView: 5, slidesPerGroup: 1 },
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="w-full listings-swiper"
          style={{ paddingBottom: 40 }}
        >
          {listings.map((listing, idx) => (
            <SwiperSlide
              key={idx}
              className="flex flex-col aspect-square w-full h-full p-0 m-0"
              style={{
                minWidth: 0,
                width: "100%",
                height: "100%",
                padding: 0,
                margin: 0,
              }}
            >
              <div
                className="cursor-pointer group flex-1 w-full h-full aspect-square transition-all duration-300 border-2 border-transparent hover:border-[#FF8800]"
                style={{
                  transitionProperty: "border",
                  borderRadius: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  className="relative w-full h-full aspect-square overflow-hidden"
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={listing.image}
                    style={{
                      borderRadius: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"
                    style={{ borderRadius: 0 }}
                  ></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold font-playfair">
                      {listing.title}
                    </h3>
                    <p className="text-lg font-bold text-orange-400">
                      {listing.price}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  </section>
);

export default ListingsCarousel;
