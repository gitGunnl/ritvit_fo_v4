import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogCard from "@/components/blog/BlogCard";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  // This would normally be an API call
  return [
    {
      id: "tech-stack",
      title: "Complete Technical Documentation & Architecture Overview",
      excerpt: "A comprehensive guide to our tech stack, architecture, and development practices for quick onboarding of new developers.",
      date: "2024-02-21",
      readTime: "8 min read",
      category: "Documentation",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "1",
      title: "Getting Started with Digital Transformation",
      excerpt: "Learn how to transform your business with modern digital solutions...",
      date: "2024-02-20",
      readTime: "5 min read",
      category: "Digital Transformation",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "2",
      title: "The Future of Web Development",
      excerpt: "Explore the latest trends and technologies shaping the future of web development...",
      date: "2024-02-18",
      readTime: "7 min read",
      category: "Development",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "3",
      title: "Mastering User Experience Design",
      excerpt: "Discover key principles and practices for creating exceptional user experiences...",
      date: "2024-02-15",
      readTime: "6 min read",
      category: "Design",
      imageUrl: "/placeholder.svg"
    },
  ];
};

const BlogIndex = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
  });

  const categories = Array.from(new Set(posts.map(post => post.category)));

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-24 animate-fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Our Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
                <div key={post.id} 
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <BlogCard post={post} />
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
