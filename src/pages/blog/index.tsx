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
      id: "1",
      title: "Getting Started with Digital Transformation",
      excerpt: "Learn how to transform your business with modern digital solutions...",
      date: "2024-02-20",
      readTime: "5 min read",
      category: "Digital Transformation",
      imageUrl: "/placeholder.svg"
    },
    // Add more mock posts as needed
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
      
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            Our Blog
          </h1>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <BlogCategories 
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
