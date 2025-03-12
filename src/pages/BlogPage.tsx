import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BlogCard } from "@/components/BlogCard";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  datePosted: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Tips for First-Time Home Buyers",
    excerpt:
      "Buying your first home can be overwhelming. Here are five essential tips to make the process smoother and more enjoyable.",
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
      "Learn the best staging techniques to make your property irresistible to potential buyers.",
    author: "Sarah Wanjiku",
    datePosted: "February 15, 2025",
    image: "/images/3.jpg",
  },
  {
    id: 4,
    title: "The Rise of Smart Homes in Westlands",
    excerpt:
      "Explore how smart home technology is transforming properties in Westlands into futuristic living spaces.",
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
      "An analysis of Kileleshwa’s real estate market and why it’s attracting savvy investors.",
    author: "David Mwangi",
    datePosted: "December 20, 2024",
    image: "/images/6.jpg",
  },
  {
    id: 7,
    title: "The Benefits of Living Near Nairobi’s Waterfronts",
    excerpt:
      "From scenic views to serene living, explore why waterfront properties are in high demand.",
    author: "Lucy Kamau",
    datePosted: "December 5, 2024",
    image: "/images/1.jpg",
  },
  {
    id: 8,
    title: "How to Choose the Perfect Neighborhood",
    excerpt:
      "Key factors to consider when picking a neighborhood that suits your lifestyle and budget.",
    author: "James Kariuki",
    datePosted: "November 25, 2024",
    image: "/images/2.jpg",
  },
  {
    id: 9,
    title: "Renovation Ideas to Boost Property Value",
    excerpt:
      "Simple upgrades that can significantly increase your home’s market appeal.",
    author: "Esther Njeri",
    datePosted: "November 10, 2024",
    image: "/images/3.jpg",
  },
  {
    id: 10,
    title: "The Future of Eco-Friendly Homes in Kenya",
    excerpt:
      "How sustainable building practices are shaping the next generation of Kenyan homes.",
    author: "Michael Omondi",
    datePosted: "October 30, 2024",
    image: "/images/4.jpg",
  },
  {
    id: 11,
    title: "Understanding Property Taxes in Nairobi",
    excerpt:
      "A beginner’s guide to navigating property taxes and avoiding common pitfalls.",
    author: "Grace Wambui",
    datePosted: "October 15, 2024",
    image: "/images/5.jpg",
  },
  {
    id: 12,
    title: "Why Apartments Are Gaining Popularity in Nairobi",
    excerpt:
      "The shift toward apartment living and what it means for the city’s real estate market.",
    author: "Thomas Mburu",
    datePosted: "September 28, 2024",
    image: "/images/6.jpg",
  },
  {
    id: 13,
    title: "Selling Your Home: Common Mistakes to Avoid",
    excerpt:
      "Steer clear of these frequent errors to ensure a smooth and profitable sale.",
    author: "Ann Kiptoo",
    datePosted: "September 10, 2024",
    image: "/images/1.jpg",
  },
  {
    id: 14,
    title: "The Impact of Infrastructure on Property Values",
    excerpt:
      "How new roads and developments are driving up prices in Nairobi’s suburbs.",
    author: "Paul Ndung’u",
    datePosted: "August 25, 2024",
    image: "/images/2.jpg",
  },
  {
    id: 15,
    title: "Tips for Negotiating Your Dream Home Price",
    excerpt:
      "Master the art of negotiation to secure your ideal property at the best price.",
    author: "Rachel Achieng",
    datePosted: "August 5, 2024",
    image: "/images/3.jpg",
  },
  {
    id: 16,
    title: "A Guide to Renting vs. Buying in Nairobi",
    excerpt:
      "Weigh the pros and cons of renting versus buying in today’s market.",
    author: "Samuel Kinyanjui",
    datePosted: "July 4, 2024",
    image: "/images/4.jpg",
  },
];

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
        <p className="text-gray-500">
          Stay updated with the latest real estate insights, tips, and trends
          from Mzahir. Explore our articles to make informed decisions about
          buying, selling, and living in Nairobi’s best properties.
        </p>
      </div>

      <div className="max-w-[80%] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-12 space-x-2">
        <Button
          variant="outline"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => handlePageChange(page)}
            className={
              currentPage === page
                ? "bg-green-700 text-white hover:bg-green-800"
                : "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
            }
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default BlogPage;
