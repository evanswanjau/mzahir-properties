import { Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/",
    icon: <Instagram className="w-10 h-10" color="#FF8800" />,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/",
    icon: <Facebook className="w-10 h-10" color="#FF8800" />,
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/",
    icon: (
      <svg className="w-10 h-10" fill="#FF8800" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path>
      </svg>
    ),
  },
];

const posts = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
    caption: "Tour of luxury apartment in Kileleshwa",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
    caption: "Karen Villa - Premium finishing details",
  },
  {
    image:
      "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
    caption: "Real estate investment tips",
  },
  {
    image:
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
    caption: "Westlands high-rise views",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
    caption: "Property valuation secrets",
  },
  {
    image:
      "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
    caption: "New development showcase",
  },
];

const SocialMediaSection = () => (
  <motion.section
    className="bg-white py-24 px-8 lg:px-16"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="flex flex-col items-start mb-12"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
      >
        <div className="flex items-center mb-6">
          <div className="w-2 h-20 bg-[#FF8800] mr-4" />
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-black uppercase tracking-wide text-left">
            GET SOCIAL WITH US
          </h2>
        </div>
        <motion.div
          className="flex flex-row gap-8 mt-4 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="hover:scale-110 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <h3 className="text-xl font-bold text-left text-black mb-8 pl-2">
          Latest from Instagram
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              className="group cursor-pointer relative aspect-square overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform"
              style={{ borderRadius: 0 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
            >
              <div
                className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-600 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: 0,
                }}
              ></div>
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"
                style={{ borderRadius: 0 }}
              ></div>
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderRadius: 0 }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                style={{ borderRadius: 0 }}
              >
                <p className="text-white text-sm font-medium line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="text-left pl-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <p className="text-gray-600 text-lg mb-6">
          Follow us for daily property updates and real estate insights
        </p>
        <a
          href="https://instagram.com/mzahirproperties"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#E4405F] hover:bg-[#e4405ee8] cursor-pointer text-white px-4 py-3 text-lg font-semibold tracking-wide transition-all duration-300 rounded-lg inline-block"
        >
          Follow @mzahirproperties
        </a>
      </motion.div>
    </div>
  </motion.section>
);

export default SocialMediaSection;
