import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="h-screen flex items-center justify-center bg-white py-12 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero_background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="flex flex-col md:flex-row items-center max-w-[60%] w-full gap-12">
        <div className="text-center mb-8 md:mb-0 z-20">
          <p className="text-green-400 text-lg mb-4 tracking-wider font-semibold">
            — DISCOVER NOW!
          </p>
          <h1 className="text-6xl md:text-[5em] font-bold text-white mb-6 leading-22 tracking-wide">
            Instant Property Deals with MZahir
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Whether you're looking for a cozy family home, a luxurious villa, or
            a modern city apartment, we have something for everyone. Our
            properties are carefully selected to meet the highest standards of
            quality and comfort.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <Button
              variant="default"
              className="bg-green-700 border-green-700 cursor-pointer hover:bg-green-900 hover:border-green-900 text-white font-body text-lg px-8 py-7 rounded-lg transition-all duration-500"
            >
              View Properties
            </Button>
            <Button
              variant="outline"
              className="border-green-700 cursor-pointer text-green-700 hover:bg-green-700 hover:text-white font-body text-lg px-8 py-7 rounded-lg transition-all duration-300"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
