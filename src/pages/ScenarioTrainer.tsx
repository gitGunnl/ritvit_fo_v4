
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Log module loading
console.log("ScenarioTrainer.tsx module loaded");

export default function ScenarioTrainer() {
  // Immediate logging
  console.log("ScenarioTrainer function called");
  
  const location = useLocation();
  console.log("Current location:", location);
  
  useEffect(() => {
    // Use alert to make sure we see this even if console is filtered
    alert("ScenarioTrainer component mounted");
    
    console.log("DEBUG - ScenarioTrainer mounted:", {
      pathname: location.pathname,
      component: "ScenarioTrainer",
      timestamp: new Date().toISOString()
    });
  }, [location]);
  
  // Log rendering
  console.log("ScenarioTrainer component rendering");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <h1 className="text-6xl font-bold">test</h1>
    </div>
  );
}
