import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-70px)]  flex items-center justify-center bg-slate-900 p-16">
      <div
        className="w-full h-full bg-cover bg-center relative z-0"
        style={{
          backgroundImage: "url('/images/hero_background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] flex flex-col lg:flex-row items-center z-20">
          <div className="max-w-2xl flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Discover a place you'll love to live!
            </h1>

            <p className="text-lg lg:text-xl text-white mb-10 max-w-2xl leading-relaxed">
              Find premium properties with M. Zahir Properties.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <Button
                variant="secondary"
                className="bg-white hover:bg-amber-500 text-black hover:text-white cursor-pointer px-8 !py-6 tracking-widest"
              >
                VIEW PROPERTIES
              </Button>
              <Button
                variant="secondary"
                className="bg-amber-500 text-white hover:bg-white hover:text-black cursor-pointer px-8 !py-6 tracking-widest"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
