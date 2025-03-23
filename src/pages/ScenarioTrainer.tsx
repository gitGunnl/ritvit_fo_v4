
import React from "react";
console.log("ScenarioTrainer module loaded");
import { useNavigate } from "react-router-dom";

export default function ScenarioTrainer() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <h1 className="text-6xl font-bold">test</h1>
    </div>
  );
}
