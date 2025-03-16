
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import Index from "./pages/Index";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import BlogIndex from "./pages/blog";
import BlogPost from "./pages/blog/[id]";
import AboutCourse from "./pages/aboutCourse";

const queryClient = new QueryClient();

const App = () => {
  useTheme();

  return (
    <div className="min-h-screen bg-background">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/aboutCourse" element={<AboutCourse />} />
            </Routes>
          </main>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
