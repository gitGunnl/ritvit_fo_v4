import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("main.tsx starting up");
console.log("Routes available:", ["/", "/about", "/services", "/contact", "/blog", "/blog/:id", "/aboutCourse", "/scenariotrainer"]);

// Add error boundary with more detailed logging
try {
  // Log to document for visibility in case console isn't working
  const logToPage = (msg) => {
    const logElement = document.createElement('div');
    logElement.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:black;color:white;padding:10px;z-index:9999;';
    logElement.textContent = msg;
    document.body.appendChild(logElement);
  };

  window.onerror = (msg, url, line, col, error) => {
    console.error("GLOBAL ERROR:", { msg, url, line, col, error });
    logToPage(`Error: ${msg} at ${url}:${line}:${col}`);
    return false;
  };

  createRoot(document.getElementById("root")!).render(<App />);
  console.log("App successfully rendered");
  console.error("APP RENDERED - SHOULD BE VISIBLE IN CONSOLE");
} catch (error) {
  console.error("Failed to render App:", error);
  // Try to render a fallback UI
  const root = document.getElementById("root");
  if (root) {
    root.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif;">
        <h1>Error Starting App</h1>
        <p>There was an error starting the application: ${error?.message}</p>
        <p>Please check the console for more details.</p>
        <a href="/test" style="color: blue;">Try Test Page</a>
      </div>
    `;
  }
}
