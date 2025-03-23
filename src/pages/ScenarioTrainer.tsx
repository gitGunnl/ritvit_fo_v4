
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ScenarioTrainer() {
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
