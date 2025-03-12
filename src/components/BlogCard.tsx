interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  datePosted: string;
  image: string;
}

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-2xl p-4 hover:shadow-2xl transition-shadow duration-500 cursor-pointer">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-42 object-cover rounded-2xl mb-5"
      />
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {post.title}
        </h3>
        <p className="text-gray-500 mb-4 text-lg">{post.excerpt}</p>
        <div className="flex justify-end items-center text-gray-500">
          <span>{post.datePosted}</span>
        </div>
      </div>
    </div>
  );
};
