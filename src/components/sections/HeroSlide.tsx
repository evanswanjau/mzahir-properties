import { motion } from "framer-motion";

type HeroSlideProps = {
  name: string;
  image: string;
  show: boolean;
  children?: React.ReactNode;
};

const HeroSlide = ({ name, image, show, children }: HeroSlideProps) => (
  <motion.div
    className="absolute top-0 left-0 w-full h-full z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: show ? 1 : 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    aria-hidden={!show}
  >
    <motion.img
      src={image}
      alt={name}
      className="w-full h-full object-cover object-center select-none"
      style={{ filter: "brightness(0.5)" }}
      draggable={false}
      initial={{ scale: 1.05 }}
      animate={{ scale: show ? 1 : 1.05 }}
      exit={{ scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
      <motion.h1
        className="text-white font-playfair font-normal text-3xl md:text-4xl lg:text-5xl mb-6 text-center drop-shadow-lg tracking-wide"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 40 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {name}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 40 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  </motion.div>
);

export default HeroSlide; 