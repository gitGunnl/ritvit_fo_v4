import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogCard from "@/components/blog/BlogCard";
import blogPosts from "@/data/blogPosts.json";
import SEO from "@/components/SEO";
import { siteUrl } from "@/lib/seo";

const BlogIndex = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const posts = blogPosts;
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Bloggur - Vitlíkisstovan"
        description="Greinar um AI í Føroyum, vitlíki og ChatGPT."
        url={`${siteUrl}/blog`}
      />
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-24 animate-fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Our Blog
            </h1>
            <p className="text-text/80 max-w-2xl mx-auto">
              Explore our latest insights, tutorials, and updates about digital
              transformation and web development.
            </p>
          </div>

          {/* Replaced old "glass-card" with a semantic approach */}
          <div className="bg-primary/10 p-6 rounded-xl mb-12 border border-border">
            <div className="flex flex-col md:flex-row gap-8">
              <BlogSearch
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <BlogCategories
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div
                  key={`post-${post.id}`}
                  className="opacity-0 animate-fade-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text/60">
                No posts found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default BlogIndex;
