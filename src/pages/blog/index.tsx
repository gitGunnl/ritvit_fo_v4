import React from 'react';
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogCard from "@/components/blog/BlogCard";

// Import the JSON “database” of blog posts
import blogPostsData from "@/data/blogPosts.json";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  content?: string; // content is optional here
}

// Simulate an async fetch (e.g. using a Promise)
const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogPostsData);
    }, 300);
  });
};

const BlogIndex = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchBlogPosts().then((data) => {
      setPosts(data);
      setIsLoading(false);
    });
  }, []);

  const categories = Array.from(new Set(posts.map((post) => post.category)));

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-24 animate-fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
              Our Blog
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our latest insights, tutorials, and updates about digital transformation
              and web development.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <BlogCategories 
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="animate-pulse glass-card p-6 rounded-xl">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div
                  key={`post-${post.id}`}
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <BlogCard post={post} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
