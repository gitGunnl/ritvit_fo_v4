import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeHumanBehaviorTracking } from "./lib/humanBehavior.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Initialize human behavior tracking after app loads
document.addEventListener('DOMContentLoaded', () => {
  initializeHumanBehaviorTracking();
});