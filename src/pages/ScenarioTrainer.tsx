import React, { useEffect } from "react";

export default function ScenarioTrainer() {
  console.log("ScenarioTrainer rendering");

  useEffect(() => {
    console.log("ScenarioTrainer mounted");
    console.error("SCENARIO TRAINER MOUNTED - THIS SHOULD BE VISIBLE");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-4xl font-bold mb-4">Scenario Trainer</h1>
        <p className="text-lg mb-4">This is a minimal implementation of the Scenario Trainer page.</p>
      </div>
    </div>
  );
}