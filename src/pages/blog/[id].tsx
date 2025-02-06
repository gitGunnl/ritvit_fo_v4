import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
// Import the JSON array of blog posts.
import blogPosts from "@/data/blogPosts.json";

const BlogPost = () => {
  const { id } = useParams();

  // Find the post in our JSON data.
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <Navigation />
        <div className="flex-grow container mx-auto px-4 py-24 text-center">
          <p className="text-gray-600">Loading or post not found…</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-24">
        <article className="max-w-3xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 hover-lift text-gray-300 hover:text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-400 mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span className="text-purple-400 font-medium">{post.category}</span>
          </div>

          <div className="relative">
            <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-lg" />
          </div>

          <div
            className="prose prose-lg max-w-none prose-invert prose-headings:text-gray-100 prose-p:text-gray-300 prose-strong:text-purple-400 prose-a:text-purple-400"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
