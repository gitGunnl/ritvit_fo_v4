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
  if (id === 'tech-stack') {
    return {
      id,
      title: "Complete Technical Documentation & Architecture Overview",
      content: `
        <h2>Tech Stack Overview</h2>
        <p>Our application is built with modern web technologies, focusing on performance, developer experience, and maintainability:</p>

        <h3>Core Technologies</h3>
        <ul>
          <li><strong>React 18:</strong> Our frontend framework, utilizing hooks and functional components</li>
          <li><strong>TypeScript:</strong> For type safety and better developer experience</li>
          <li><strong>Vite:</strong> Our build tool, providing fast HMR and optimized production builds</li>
        </ul>

        <h3>Styling & UI</h3>
        <ul>
          <li><strong>Tailwind CSS:</strong> For utility-first styling with custom configurations</li>
          <li><strong>shadcn/ui:</strong> Accessible and customizable UI components</li>
          <li><strong>Custom Animations:</strong> Including fade, glitch, and transition effects</li>
        </ul>

        <h3>State Management & Data Fetching</h3>
        <ul>
          <li><strong>TanStack Query:</strong> For efficient server state management and data fetching</li>
          <li><strong>React Router:</strong> For client-side routing with dynamic routes</li>
        </ul>

        <h2>Project Structure</h2>
        <p>The project follows a feature-based organization:</p>
        <ul>
          <li><strong>/src/components/:</strong> Reusable UI components</li>
          <li><strong>/src/components/ui/:</strong> shadcn/ui components</li>
          <li><strong>/src/pages/:</strong> Route components and page layouts</li>
          <li><strong>/src/hooks/:</strong> Custom React hooks</li>
          <li><strong>/src/lib/:</strong> Utility functions and helpers</li>
        </ul>

        <h2>Key Features</h2>
        <ul>
          <li><strong>Responsive Design:</strong> Mobile-first approach with Tailwind breakpoints</li>
          <li><strong>Blog System:</strong> With search, categories, and individual post views</li>
          <li><strong>Animations:</strong> Custom keyframes and transitions for enhanced UX</li>
          <li><strong>Accessibility:</strong> ARIA labels and keyboard navigation support</li>
        </ul>

        <h2>Development Practices</h2>
        <ul>
          <li><strong>Component Structure:</strong> Small, focused components (≤50 lines)</li>
          <li><strong>Type Safety:</strong> Strict TypeScript usage throughout</li>
          <li><strong>Error Handling:</strong> Proper error boundaries and loading states</li>
          <li><strong>Code Style:</strong> Consistent formatting with ESLint and Prettier</li>
        </ul>

        <h2>Performance Optimizations</h2>
        <ul>
          <li><strong>Code Splitting:</strong> Route-based splitting with React Router</li>
          <li><strong>Asset Optimization:</strong> Vite's built-in optimizations</li>
          <li><strong>Caching Strategy:</strong> TanStack Query's smart caching</li>
        </ul>

        <h2>Getting Started</h2>
        <p>To start development:</p>
        <ol>
          <li>Clone the repository</li>
          <li>Install dependencies with \`npm install\`</li>
          <li>Start development server with \`npm run dev\`</li>
        </ol>

        <h2>Deployment</h2>
        <p>The application can be deployed through:</p>
        <ul>
          <li>Direct deployment via Lovable platform</li>
          <li>Manual deployment to services like Netlify</li>
          <li>Custom deployment with provided build commands</li>
        </ul>
      `,
      date: "2024-02-21",
      readTime: "8 min read",
      category: "Documentation",
      imageUrl: "/placeholder.svg"
    };
  }
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
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <Navigation />
        <div className="flex-grow container mx-auto px-4 py-24">
          <div className="animate-pulse max-w-3xl mx-auto">
            <div className="h-8 bg-gray-800 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-1/4 mb-8"></div>
            <div className="h-48 bg-gray-800 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-800 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) return null;

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
            <span className="text-purple-400 font-medium">
              {post.category}
            </span>
          </div>

          <div className="relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-lg" />
          </div>

          <div 
            className="prose prose-lg max-w-none prose-invert prose-headings:text-gray-100 prose-p:text-gray-300 prose-strong:text-purple-400 prose-a:text-purple-400"
            dangerouslySetInnerHTML={{ 
              __html: post.content.split('\n').map((line, index) => 
                `<div data-key="${index}">${line}</div>`
              ).join('')
            }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;