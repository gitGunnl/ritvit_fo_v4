// '@/types/blog.ts'
export interface BlogPost {
  id: number;
  title: string;
  category: string;
  // Add other relevant properties as needed
}


import { type BlogPost } from "@/types/blog";
import BlogCard from "./BlogCard";

interface RelatedPostsProps {
  currentPost: BlogPost;
  posts: BlogPost[];
}

const RelatedPosts = ({ currentPost, posts }: RelatedPostsProps) => {
  // Get 2 posts from the same category, excluding the current post
  const relatedPosts = posts
    .filter(
      (post) =>
        post.category === currentPost.category && post.id !== currentPost.id
    )
    .slice(0, 2);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
        Did you like this post? Check out...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;