
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Check, Copy, ChevronRight, ChevronLeft, Lock } from "lucide-react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

// Define types for our prompts
interface PromptTask {
  promptText: string;
  checkText: string;
  preCheck?: {
    checkText: string;
  };
}

interface CompanyPrompts {
  [key: string]: PromptTask[];
}

// Define our prompt data
const companyPrompts: CompanyPrompts = {
  "Bakkafrost": [
    {
      preCheck: {
        checkText: "I have opened a new chat"
      },
      promptText: "Analyze the latest salmon market trends and provide a summary of how this might affect Bakkafrost's exports to the US market in the next quarter. Consider tariffs, consumer demand, and competition.",
      checkText: "I've copied this prompt to ChatGPT and received a market analysis summary"
    },
    {
      promptText: "Create a sustainability report outline for Bakkafrost that highlights our commitment to environmentally friendly aquaculture practices. Include sections on carbon footprint reduction, fish welfare, and sustainable feed sourcing.",
      checkText: "I've created a sustainability report outline with ChatGPT"
    },
    {
      preCheck: {
        checkText: "I have started a fresh conversation"
      },
      promptText: "Based on Bakkafrost's annual report data, suggest three innovation areas that could improve operational efficiency and reduce production costs in our salmon farming facilities.",
      checkText: "I've identified three potential innovation areas using this prompt"
    }
  ],
  "Betri": [
    {
      preCheck: {
        checkText: "I have opened a new chat"
      },
      promptText: "Draft a customer communication email explaining Betri's new digital banking features. The tone should be friendly but professional, emphasizing security and convenience.",
      checkText: "I've created a customer email draft using ChatGPT"
    },
    {
      promptText: "Analyze the current financial market situation in the Faroe Islands and suggest investment strategies that Betri could recommend to different customer segments (young professionals, families, retirees).",
      checkText: "I've generated investment strategy recommendations"
    },
    {
      preCheck: {
        checkText: "I have cleared my conversation history"
      },
      promptText: "Create a training plan for Betri customer service representatives to improve their ability to explain insurance products clearly to customers from different demographics.",
      checkText: "I've created a training plan outline with this prompt"
    }
  ]
};

const Birt = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [company, setCompany] = useState<string | null>(null);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState<boolean[]>([]);
  const [preChecksCompleted, setPreChecksCompleted] = useState<boolean[]>([]);

  // Handle password check
  const checkPassword = () => {
    if (Object.keys(companyPrompts).includes(password)) {
      setAuthenticated(true);
      setCompany(password);
      // Initialize tasks completed array
      setTasksCompleted(Array(companyPrompts[password].length).fill(false));
      setPreChecksCompleted(Array(companyPrompts[password].length).fill(false));
      toast.success(`Welcome to ${password} prompts`, {
        duration: 3000,
      });
    } else {
      toast.error("Invalid password", {
        duration: 3000,
      });
    }
  };

  // Handle copying prompt to clipboard
  const copyPrompt = () => {
    if (!company) return;
    
    const promptText = companyPrompts[company][currentPromptIndex].promptText;
    navigator.clipboard.writeText(promptText).then(() => {
      toast.success("Prompt copied to clipboard!", {
        duration: 2000,
      });
    }).catch(err => {
      toast.error("Failed to copy: " + err, {
        duration: 3000,
      });
    });
  };

  // Toggle task completion
  const toggleTaskCompleted = () => {
    const newTasksCompleted = [...tasksCompleted];
    newTasksCompleted[currentPromptIndex] = !newTasksCompleted[currentPromptIndex];
    setTasksCompleted(newTasksCompleted);
  };

  // Toggle pre-check completion
  const togglePreCheckCompleted = () => {
    const newPreChecksCompleted = [...preChecksCompleted];
    newPreChecksCompleted[currentPromptIndex] = !newPreChecksCompleted[currentPromptIndex];
    setPreChecksCompleted(newPreChecksCompleted);
  };

  // Navigate to the next prompt
  const goToNextPrompt = () => {
    if (!company) return;
    
    if (currentPromptIndex < companyPrompts[company].length - 1) {
      setCurrentPromptIndex(currentPromptIndex + 1);
    }
  };

  // Navigate to the previous prompt
  const goToPrevPrompt = () => {
    if (currentPromptIndex > 0) {
      setCurrentPromptIndex(currentPromptIndex - 1);
    }
  };

  // Reset and log out
  const logout = () => {
    setAuthenticated(false);
    setCompany(null);
    setPassword("");
    setCurrentPromptIndex(0);
    setTasksCompleted([]);
    setPreChecksCompleted([]);
  };

  // Check if current prompt has a pre-check
  const hasPreCheck = () => {
    return company && companyPrompts[company][currentPromptIndex].preCheck;
  };

  // Get current pre-check text
  const getCurrentPreCheckText = () => {
    if (!company || !hasPreCheck()) return "";
    return companyPrompts[company][currentPromptIndex].preCheck?.checkText || "";
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-24 animate-fade-up">
        <div className="max-w-3xl mx-auto">
          {!authenticated ? (
            // Password entry screen
            <Card className="p-8 bg-primary/10 border border-border shadow-xl backdrop-blur-sm">
              <div className="text-center mb-6 space-y-4">
                <Lock className="w-12 h-12 mx-auto text-primary" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                  Prompt Access
                </h1>
                <p className="text-text/80 max-w-md mx-auto">
                  Enter your company password to access your custom prompts.
                </p>
              </div>
              
              <div className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      checkPassword();
                    }
                  }}
                />
                <Button 
                  className="w-full bg-primary hover:bg-primary/80"
                  onClick={checkPassword}
                >
                  Access Prompts
                </Button>
                
                <div className="text-center mt-4 text-text/60 text-sm">
                  <p>Try "Bakkafrost" or "Betri" for demo access</p>
                </div>
              </div>
            </Card>
          ) : (
            // Prompt display interface
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                  {company} Prompts
                </h1>
                <Button variant="outline" onClick={logout} className="text-text/80">
                  Log Out
                </Button>
              </div>
              
              <div className="bg-primary/5 p-1 rounded-full mb-6">
                <div className="flex justify-between px-4">
                  <span className="text-text/60 text-sm">
                    Prompt {currentPromptIndex + 1} of {company ? companyPrompts[company].length : 0}
                  </span>
                  <span className="text-text/60 text-sm">
                    {tasksCompleted.filter(Boolean).length} completed
                  </span>
                </div>
                <div className="relative h-2 mt-1">
                  <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-accent rounded-full" style={{
                    width: `${(currentPromptIndex + 1) / (company ? companyPrompts[company].length : 1) * 100}%`
                  }}></div>
                  <div className="absolute top-0 left-0 h-2 w-full bg-background/50 -z-10 rounded-full"></div>
                </div>
              </div>
              
              <Card className="p-6 bg-background border border-border shadow-lg">
                <div className="mb-4 flex justify-between">
                  <span className="text-sm text-text/60">Prompt #{currentPromptIndex + 1}</span>
                  {!hasPreCheck() || preChecksCompleted[currentPromptIndex] ? (
                    <Button variant="ghost" size="icon" onClick={copyPrompt}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  ) : null}
                </div>
                
                {/* Pre-check area */}
                {hasPreCheck() && (
                  <div className="mb-4 p-4 bg-primary/5 rounded-md border border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Checkbox 
                        id="precheck" 
                        checked={preChecksCompleted[currentPromptIndex]}
                        onCheckedChange={() => togglePreCheckCompleted()}
                      />
                      <label htmlFor="precheck" className="text-sm cursor-pointer select-none">
                        {getCurrentPreCheckText()}
                      </label>
                    </div>
                  </div>
                )}
                
                {/* Prompt area - only show if no pre-check or pre-check is completed */}
                {(!hasPreCheck() || preChecksCompleted[currentPromptIndex]) && (
                  <>
                    <div className="p-4 bg-primary/10 rounded-md mb-4 text-text font-mono text-sm whitespace-pre-wrap">
                      {company && companyPrompts[company][currentPromptIndex].promptText}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Button 
                        variant="outline" 
                        className={`flex items-center gap-2 ${tasksCompleted[currentPromptIndex] ? 'bg-green-500/20 border-green-500/50 text-green-500' : 'bg-background border-border text-text/70'}`}
                        onClick={toggleTaskCompleted}
                      >
                        {tasksCompleted[currentPromptIndex] ? <Check className="h-4 w-4" /> : null}
                        {company && companyPrompts[company][currentPromptIndex].checkText}
                      </Button>
                    </div>
                  </>
                )}
                
                <div className="flex justify-between mt-6">
                  <Button 
                    variant="outline"
                    onClick={goToPrevPrompt}
                    disabled={currentPromptIndex === 0}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" /> Previous
                  </Button>
                  
                  <Button 
                    onClick={goToNextPrompt}
                    disabled={
                      (hasPreCheck() && !preChecksCompleted[currentPromptIndex]) ||
                      (!hasPreCheck() && !tasksCompleted[currentPromptIndex]) ||
                      (hasPreCheck() && preChecksCompleted[currentPromptIndex] && !tasksCompleted[currentPromptIndex]) ||
                      (company && currentPromptIndex === companyPrompts[company].length - 1)
                    }
                    className="flex items-center gap-2 bg-primary hover:bg-primary/80"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Birt;
