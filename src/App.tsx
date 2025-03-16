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

const queryClient = new QueryClient();

const App = () => (
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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const ScenarioTrainer = lazy(() => import('./pages/scenario-trainer/App'))

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/scenario-trainer/*" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ScenarioTrainer />
            </Suspense>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
