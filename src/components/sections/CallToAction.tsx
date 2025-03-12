import { Button } from '@/components/ui/button';

export const CallToAction = () => {
  return (
    <div
      className="text-center"
      style={{
        backgroundImage: "url(" + "/images/sell-property.jpg" + ")",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/40 rounded-lg py-32 px-12 mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Buy Your Next Home?
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Contact us today to start the process with Nairobi’s trusted real
          estate expert.
        </p>
        <a href="/contact-us">
          <Button className="bg-green-700 text-white hover:bg-green-800 px-8 py-7 text-lg cursor-pointer">
            Get Started Today
          </Button>
        </a>
      </div>
    </div>
  );
};
