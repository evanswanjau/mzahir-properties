import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef, useCallback } from "react";

const images = [
  {
    src: "/images/1.jpg",
    alt: "Property 1",
    description: "Stunning Waterfront Property",
  },
  {
    src: "/images/2.jpg",
    alt: "Property 2",
    description: "Charming Family Home",
  },
  {
    src: "/images/3.jpg",
    alt: "Property 3",
    description: "Modern City Apartment",
  },
  {
    src: "/images/4.jpg",
    alt: "Property 4",
    description: "Luxury Villa",
  },
  {
    src: "/images/5.jpg",
    alt: "Property 5",
    description: "Elegant Townhouse",
  },
  {
    src: "/images/6.jpg",
    alt: "Property 6",
    description: "Spacious Penthouse",
  },
];

const leftColumnImages = [
  ...images.filter((_, i) => i % 2 === 0),
  ...images.filter((_, i) => i % 2 === 0),
];
const rightColumnImages = [
  ...images.filter((_, i) => i % 2 === 1),
  ...images.filter((_, i) => i % 2 === 1),
];

const Hero = () => {
  const [scrollY1, setScrollY1] = useState(0);
  const [scrollY2, setScrollY2] = useState(0);
  const leftColumnHeight = useRef(0);
  const rightColumnHeight = useRef(0);
  const animationRef = useRef<number | null>(null);
  const speedFactor = 0.03;

  const updateScrollPosition = useCallback(() => {
    setScrollY1((prev) => {
      const newPos = prev + speedFactor;
      if (newPos >= leftColumnHeight.current) {
        return 0;
      }
      return newPos;
    });

    setScrollY2((prev) => {
      const newPos = prev + speedFactor;
      if (newPos >= rightColumnHeight.current) {
        return 0;
      }
      return newPos;
    });

    animationRef.current = requestAnimationFrame(updateScrollPosition);
  }, [speedFactor]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateScrollPosition);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateScrollPosition]);

  useEffect(() => {
    const calculateColumnHeights = () => {
      const leftImages = document.querySelectorAll(".left-column .image-item");
      const rightImages = document.querySelectorAll(
        ".right-column .image-item"
      );

      if (leftImages.length > 0 && rightImages.length > 0) {
        const originalLeftImagesCount = images.filter(
          (_, i) => i % 2 === 0
        ).length;
        const originalRightImagesCount = images.filter(
          (_, i) => i % 2 === 1
        ).length;

        let leftHeight = 0;
        let rightHeight = 0;

        for (let i = 0; i < originalLeftImagesCount; i++) {
          leftHeight += (leftImages[i] as HTMLElement).offsetHeight;
          if (i < originalLeftImagesCount - 1) leftHeight += 24; 
        }

        for (let i = 0; i < originalRightImagesCount; i++) {
          rightHeight += (rightImages[i] as HTMLElement).offsetHeight;
          if (i < originalRightImagesCount - 1) rightHeight += 24; 
        }

        leftColumnHeight.current = leftHeight;
        rightColumnHeight.current = rightHeight;
      }
    };

    window.addEventListener("load", calculateColumnHeights);
    calculateColumnHeights();

    return () => window.removeEventListener("load", calculateColumnHeights);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-white py-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white to-transparent pointer-events-none z-10"></div>
      <div className="flex flex-col md:flex-row items-center max-w-[80%] w-full gap-12">
        <div className="md:w-1/2 text-left mb-8 md:mb-0 z-20">
          <p className="text-green-700 text-lg mb-4 tracking-wider font-semibold">
            — DISCOVER NOW!
          </p>
          <h1 className="text-6xl md:text-[5em] font-bold text-gray-800 mb-6 leading-22 tracking-wide">
            Instant Property Deals with MZahir
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Explore my exclusive listings featuring stunning properties and
            modern lifestyles tailored for you.
          </p>
          <p className="text-lg md:text-xl text-gray-500 mb-8">
            Whether you're looking for a cozy family home, a luxurious villa, or
            a modern city apartment, we have something for everyone. Our
            properties are carefully selected to meet the highest standards of
            quality and comfort.
          </p>
          <div className="flex items-center space-x-6">
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

        <div className="md:w-1/2 overflow-hidden relative px-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="left-column overflow-hidden">
              <div
                className="space-y-6"
                style={{
                  transform: `translateY(-${scrollY1}px)`,
                  transition: "transform 0.1s linear",
                }}
              >
                {leftColumnImages.map((image, index) => (
                  <div
                    key={`left-${index}`}
                    className="relative rounded-lg overflow-hidden image-item"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="right-column overflow-hidden">
              <div
                className="space-y-6 -mt-24"
                style={{
                  transform: `translateY(${scrollY2}px)`,
                  transition: "transform 0.1s linear",
                }}
              >
                {rightColumnImages.map((image, index) => (
                  <div
                    key={`right-${index}`}
                    className="relative rounded-lg overflow-hidden image-item"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
