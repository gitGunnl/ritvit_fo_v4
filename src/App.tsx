import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import BlogIndex from "./pages/blog";
import BlogPost from "./pages/blog/[id]";
import AboutCourse from "./pages/aboutCourse";
import ScenarioTrainer from "./pages/ScenarioTrainer"; // Added import

const queryClient = new QueryClient();

const App = () => {
  console.log("App component rendering");
  
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/aboutCourse" element={<AboutCourse />} />
          <Route 
            path="/scenariotrainer" 
            element={
              <>
                {console.log("DEBUG - Route attempted to render:", {
                  path: "/scenariotrainer",
                  component: ScenarioTrainer?.name,
                  location: window.location.pathname
                })}
                <ScenarioTrainer />
              </>
            } 
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

// Log app initialization
console.log("App.tsx module loaded");

export default App;