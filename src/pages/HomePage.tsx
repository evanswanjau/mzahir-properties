import Hero from "@/components/Hero";
import ListingsCarousel from "@/components/ListingsCarousel";
import SocialMediaSection from "@/components/SocialMediaSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/sections/AboutSection";

const HomePage = () => {
  return (
    <main className="flex-1">
      <Hero />

      <AboutSection />

      <ListingsCarousel />

      <SocialMediaSection />

      <ContactSection />
    </main>
  );
};

export default HomePage;
