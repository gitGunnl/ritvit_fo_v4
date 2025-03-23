
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ScenarioTrainer() {
  const location = useLocation();
  
  useEffect(() => {
    console.log("DEBUG - ScenarioTrainer mounted:", {
      pathname: location.pathname,
      component: "ScenarioTrainer",
      timestamp: new Date().toISOString()
    });
  }, []);
  useEffect(() => {
    console.log("ScenarioTrainer component mounted");
  }, []);

  console.log("ScenarioTrainer component rendering");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <h1 className="text-6xl font-bold">test</h1>
    </div>
  );
}
