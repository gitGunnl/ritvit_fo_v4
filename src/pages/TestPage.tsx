
import React, { useEffect } from "react";

export default function TestPage() {
  console.log("TestPage rendering");
  
  useEffect(() => {
    console.log("TestPage mounted");
    // Using console.error to make it more visible
    console.error("TEST PAGE MOUNTED - THIS SHOULD BE VISIBLE");
    // Try to write to document directly as a fallback
    document.body.dataset.test = "mounted";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <h1 className="text-4xl font-bold">Test Page Working</h1>
    </div>
  );
}
