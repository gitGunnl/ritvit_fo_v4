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
    <Link to={`/blog/${post.id}`} className="group">
      <article className="bg-background/30 backdrop-blur-md border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-text/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-text/60 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          {/* Gradient underline on hover */}
          <h2 className="text-xl font-semibold text-text mb-2 bg-gradient-to-r from-primary to-accent bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-300">
            {post.title}
          </h2>

          <p className="text-text/80 mb-4 line-clamp-2">{post.excerpt}</p>

          <div className="flex items-center text-primary font-medium">
            Read More
            <ChevronRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
