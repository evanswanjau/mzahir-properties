import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import FeaturedBlogs from "@/components/sections/FeaturedBlogs";

const HomePage = () => {
  return (
    <main className="flex-1">
      <Hero />
      <FeaturedProperties />
      <FeaturedBlogs />
    </main>
  );
};

export default HomePage;
