import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import blogPosts from "@/data/blogPosts.json";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-text">
        <Navigation />
        <div className="flex-grow container mx-auto px-4 py-24 text-center">
          <p className="text-text/60">Loading or post not found…</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-24">
        <article className="max-w-3xl mx-auto">
          <Link to="/blog">
            <Button
              variant="ghost"
              className="mb-8 hover-lift text-text/80 hover:text-text hover:bg-text/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Gradient text heading using our primary->accent */}
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-text/60 mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span className="text-primary font-medium">{post.category}</span>
          </div>

          <div className="relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            {/* Faint overlay from text color with alpha */}
            <div className="absolute inset-0 bg-gradient-to-t from-text/20 to-transparent rounded-lg" />
          </div>

          <div
            className="
              prose
              prose-lg
              max-w-none
              prose-headings:text-text
              prose-p:text-text/80
              prose-strong:text-primary
              prose-a:text-primary
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
