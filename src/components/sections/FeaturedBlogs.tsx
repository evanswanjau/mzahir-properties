import { Swiper, SwiperSlide } from "swiper/react";
import { BlogCard } from "@/components/BlogCard";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  datePosted: string;
  image: string;
}
export const FeaturedBlogs = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Top 5 Tips for First-Time Home Buyers",
      excerpt:
        "Buying your first home can be overwhelming. Here are five tips to make the process smoother.",
      author: "Jane Mwangi",
      datePosted: "March 5, 2025",
      image: "/images/1.jpg",
    },
    {
      id: 2,
      title: "Why Karen is Nairobi’s Hidden Gem",
      excerpt:
        "Discover why Karen remains one of the most sought-after neighborhoods in Nairobi for luxury living.",
      author: "Peter Kimani",
      datePosted: "February 28, 2025",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      title: "How to Stage Your Home for a Quick Sale",
      excerpt:
        "Learn the best staging techniques and legal documentation to make your property irresistible.",
      author: "Sarah Wanjiku",
      datePosted: "February 15, 2025",
      image: "/images/3.jpg",
    },
    {
      id: 4,
      title: "The Rise of Smart Homes in Westlands",
      excerpt:
        "Explore how smart home technology is transforming properties in Westlands into futuristic living.",
      author: "John Otieno",
      datePosted: "January 30, 2025",
      image: "/images/4.jpg",
    },
    {
      id: 5,
      title: "Real Estate Trends to Watch in 2025",
      excerpt:
        "A look at the top trends shaping the real estate market this year, from sustainability to urban expansion.",
      author: "Mary Njoroge",
      datePosted: "January 10, 2025",
      image: "/images/5.jpg",
    },
    {
      id: 6,
      title: "Investing in Kileleshwa: Is It Worth It?",
      excerpt:
        "An detailed approach analysis of Kileleshwa’s real estate market and why it’s attracting savvy investors.",
      author: "David Mwangi",
      datePosted: "December 20, 2024",
      image: "/images/6.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-[80%] mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-5">
          Featured Blogs
        </h2>
        <p className="w-4xl mx-auto text-gray-500 leading-relaxed text-center">
          Explore expert advice, real estate trends, and practical tips to guide
          you through buying, selling, and investing in Nairobi’s dynamic
          property market.
        </p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={4}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {blogPosts.map((blog) => (
            <SwiperSlide key={blog.id} className="my-24">
              <BlogCard post={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
