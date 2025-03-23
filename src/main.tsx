import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("main.tsx starting up");
console.log("Routes available:", ["/", "/about", "/services", "/contact", "/blog", "/blog/:id", "/aboutCourse", "/scenariotrainer"]);

// Add error boundary
try {
  createRoot(document.getElementById("root")!).render(<App />);
  console.log("App successfully rendered");
} catch (error) {
  console.error("Failed to render App:", error);
}
