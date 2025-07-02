import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
    image: "/images/4.jpg",
  },
  {
    title: "2-Bedroom Apartment in Westlands",
    price: "Ksh 8.5M",
    image: "/images/1.jpg",
  },
  {
    title: "3-Bedroom Apartment in Kileleshwa",
    price: "Ksh 10M",
    image: "/images/1.jpg",
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
  {
    title: "2-Bedroom Apartment in Westlands",
    price: "Ksh 8.5M",
    image: "/images/1.jpg",
  },
  {
    title: "3-Bedroom Apartment in Kileleshwa",
    price: "Ksh 10M",
    image: "/images/1.jpg",
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
  <section className="py-24 px-8 lg:px-16 bg-[#1C1C1C]">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="w-2 h-20 bg-[#FF8800] mr-4" />
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white uppercase tracking-wide">
          LISTINGS
        </h2>
      </div>
      <div className="text-gray-300 mb-8 w-8/12">
        <p>
          Whether you're looking for a high-rise residential complex, a gated
          community, or a modern apartment building, we offer exceptional
          investment opportunities.
        </p>
      </div>
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
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
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        className="w-full listings-swiper"
        style={{ paddingBottom: 40 }}
      >
        {listings.map((listing, idx) => (
          <SwiperSlide
            key={idx}
            className="flex flex-col aspect-square"
            style={{ minWidth: 0, width: "100%", height: "100%" }}
          >
            <motion.div
              className="cursor-pointer group flex-1 w-full h-full aspect-square transition-all duration-300 border-2 border-transparent hover:border-[#FF8800]"
              style={{ transitionProperty: "border", borderRadius: 0 }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
            >
              <div className="relative w-full h-full aspect-square overflow-hidden">
                <img
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={listing.image}
                  style={{
                    borderRadius: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
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
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default ListingsCarousel;
