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
    title: "Doha Twin Towers",
    location: "Parklands",
    price: "Ksh 10M",
    image: "/images/1.jpg",
    details: "3 BD | 2 BA | 1,750 SQFT",
    status: "For Sale",
  },
  {
    title: "Greenwood Villas",
    location: "Karen Water Front",
    price: "Ksh 15M",
    image: "/images/2.jpg",
    details: "4 BD | 3 BA | 2,200 SQFT",
    status: "For Sale",
  },
  {
    title: "Westlands Heights",
    location: "Westlands",
    price: "Ksh 8.5M",
    image: "/images/3.jpg",
    details: "2 BD | 2 BA | 1,200 SQFT",
    status: "For Rent",
  },
  {
    title: "Doha Twin Towers",
    location: "Kileleshwa",
    price: "Ksh 10M",
    image: "/images/4.jpg",
    details: "3 BD | 2 BA | 1,750 SQFT",
    status: "For Sale",
  },
  {
    title: "Greenwood Villas",
    location: "Karen Water Front",
    price: "Ksh 15M",
    image: "/images/5.jpg",
    details: "4 BD | 3 BA | 2,200 SQFT",
    status: "For Sale",
  },
  {
    title: "Westlands Heights",
    location: "Westlands",
    price: "Ksh 8.5M",
    image: "/images/6.jpg",
    details: "2 BD | 2 BA | 1,200 SQFT",
    status: "For Rent",
  },
  {
    title: "Westlands Heights",
    location: "Westlands",
    price: "Ksh 8.5M",
    image: "/images/about_m_background.jpg",
    details: "2 BD | 2 BA | 1,200 SQFT",
    status: "For Rent",
  },
  {
    title: "Doha Twin Towers",
    location: "Kileleshwa",
    price: "Ksh 10M",
    image: "/images/sell-property.jpg",
    details: "3 BD | 2 BA | 1,750 SQFT",
    status: "For Sale",
  },
  {
    title: "Greenwood Villas",
    location: "Karen Water Front",
    price: "Ksh 15M",
    image: "/images/4.jpg",
    details: "4 BD | 3 BA | 2,200 SQFT",
    status: "For Sale",
  },
  {
    title: "Westlands Heights",
    location: "Westlands",
    price: "Ksh 8.5M",
    image: "/images/1.jpg",
    details: "2 BD | 2 BA | 1,200 SQFT",
    status: "For Rent",
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
                className="group flex-1 w-full h-full aspect-square transition-all duration-300 border-2 border-transparent hover:border-[#FF8800] relative"
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
                    alt={`${listing.title} – ${listing.location}`}
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
                  {/* Bottom Left: Name & location, and details on hover */}
                  <div className="absolute bottom-4 left-4 text-white flex items-start">
                    {/* Orange vertical border spanning the full block */}
                    <div
                      className="h-full w-1 mr-3 rounded-none"
                      style={{ background: "#FF8800", minHeight: "3.5em" }}
                    />
                    <div className="flex flex-col gap-1 justify-center">
                      <h3 className="text-lg md:text-xl font-semibold font-playfair leading-tight">
                        {listing.title}
                      </h3>
                      <div className="text-sm text-gray-200 font-normal leading-tight">
                        {listing.location}
                      </div>
                      <div
                        className="overflow-hidden"
                        style={{ height: "1.5em" }}
                      >
                        <span
                          className="block text-sm text-gray-200 font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                          style={{ willChange: "transform, opacity" }}
                        >
                          {listing.details}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Right: View Details button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a href={`/property/1`}>
                      <button className="cursor-pointer bg-white text-black font-semibold px-3 py-1 rounded-none shadow hover:bg-[#FF8800] hover:text-white transition-colors duration-300 text-xs">
                        View Details
                      </button>
                    </a>
                  </div>
                  {/* Top Left: Status badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span
                      className="text-white text-xs font-bold px-3 py-1 rounded-none shadow"
                      style={{ background: "#FF8800" }}
                    >
                      {listing.status}
                    </span>
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
