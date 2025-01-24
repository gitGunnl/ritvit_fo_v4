import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

const fetchBlogPost = async (id: string): Promise<BlogPost> => {
  // This would normally be an API call
  return {
    id,
    title: "Getting Started with Digital Transformation",
    content: `
      <p>Digital transformation is revolutionizing how businesses operate in today's fast-paced world...</p>
      <h2>Why Digital Transformation Matters</h2>
      <p>In an increasingly connected world, businesses must adapt to survive and thrive...</p>
      <!-- Add more content as needed -->
    `,
    date: "2024-02-20",
    readTime: "5 min read",
    category: "Digital Transformation",
    imageUrl: "/placeholder.svg"
  };
};

const BlogPost = () => {
  const { id } = useParams();
  
  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: () => fetchBlogPost(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <Navigation />
        <div className="flex-grow container mx-auto px-4 py-24">
          <div className="animate-pulse max-w-3xl mx-auto">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-48 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-24">
        <article className="max-w-3xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 hover-lift">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-500 mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span className="text-purple-600 font-medium">
              {post.category}
            </span>
          </div>

          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;