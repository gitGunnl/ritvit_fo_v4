import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    imageUrl: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`} className="group hover-lift">
      <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-purple-600 font-medium">
            Read More
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;