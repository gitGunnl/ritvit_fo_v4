import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

// Get OpenAI API key from environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// We'll store the created assistant ID in localStorage under this key.
const LOCALSTORAGE_ASSISTANT_ID_KEY = "myCompanyAssistantId";
// We'll store the active thread ID in localStorage under this key.
const LOCALSTORAGE_THREAD_ID_KEY = "myCompanyThreadId";

// A simple type for our local message state
interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Keep a local list of messages for the UI.
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  // Track the current text input
  const [userInput, setUserInput] = useState("");

  // We only want to create or fetch the assistant/thread IDs one time.
  const [assistantId, setAssistantId] = useState<string | null>(null);
  const [threadId, setThreadId] = useState<string | null>(null);

  const isMobile = useIsMobile();
  const abortControllerRef = useRef<AbortController | null>(null);

  // -------------------------------
  //  1. Create or Retrieve Assistant
  // -------------------------------
  // A function that checks localStorage for an existing assistant ID.
  // If none is found, we create a new assistant via the API and store it locally.
  async function getOrCreateAssistant(): Promise<string> {
    let storedAssistantId = localStorage.getItem(LOCALSTORAGE_ASSISTANT_ID_KEY);
    if (storedAssistantId) {
      return storedAssistantId;
    }

    // Create new assistant
    const res = await fetch("https://api.openai.com/v1/assistants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "OpenAI-Beta": "assistants=v2",
      },
      body: JSON.stringify({
        // Give your assistant a name and instructions relevant to your company Q&A
        name: "Company Q&A Bot",
        instructions:
          "You are a helpful assistant that answers questions about our company. Provide concise, friendly answers.",
        model: "gpt-4o", // or "gpt-4-turbo" if available
      }),
    });

    if (!res.ok) {
      throw new Error(`Assistant creation failed: ${res.statusText}`);
    }

    const data = await res.json();
    storedAssistantId = data.id;
    localStorage.setItem(LOCALSTORAGE_ASSISTANT_ID_KEY, storedAssistantId);
    return storedAssistantId;
  }

  // -------------------------------
  //  2. Create or Retrieve a Thread
  // -------------------------------
  async function getOrCreateThread(): Promise<string> {
    let storedThreadId = localStorage.getItem(LOCALSTORAGE_THREAD_ID_KEY);
    if (storedThreadId) {
      return storedThreadId;
    }

    // Create a new thread
    const res = await fetch("https://api.openai.com/v1/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "OpenAI-Beta": "assistants=v2",
      },
      // No body needed unless you want to pre-seed the thread with messages
      body: JSON.stringify({}),
    });

    if (!res.ok) {
      throw new Error(`Thread creation failed: ${res.statusText}`);
    }
    const data = await res.json();
    storedThreadId = data.id;
    localStorage.setItem(LOCALSTORAGE_THREAD_ID_KEY, storedThreadId);
    return storedThreadId;
  }

  // -------------------------------
  //  Utility: Create a user message
  // -------------------------------
  async function createUserMessage(threadId: string, content: string) {
    const res = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "OpenAI-Beta": "assistants=v2",
      },
      body: JSON.stringify({
        role: "user",
        content,
      }),
    });

    if (!res.ok) {
      throw new Error(`Could not create user message: ${res.statusText}`);
    }
    return res.json(); // returns the message object
  }

  // -------------------------------
  //  3. Run the assistant
  // -------------------------------
  // We'll do the "createAndPoll" style approach (which we implement manually)
  // for a simpler, single-step approach to get the assistant's reply.
  async function runAssistant(threadId: string, assistantId: string) {
    // In a production environment, you might want to handle cancellations,
    // timeouts, or streaming. For brevity, we'll do a standard fetch & poll.

    // 3a. Create the run
    const createRunRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "OpenAI-Beta": "assistants=v2",
      },
      body: JSON.stringify({
        assistant_id: assistantId,
      }),
    });

    if (!createRunRes.ok) {
      throw new Error(`Could not create run: ${createRunRes.statusText}`);
    }
    const runData = await createRunRes.json();

    // 3b. Poll until the run is in a terminal state: completed, failed, etc.
    let runStatus = runData.status;
    let runId = runData.id;

    while (!["completed", "failed", "cancelled", "incomplete"].includes(runStatus)) {
      // Wait a bit before polling again
      await new Promise((r) => setTimeout(r, 2000));

      const runCheck = await fetch(
        `https://api.openai.com/v1/threads/${threadId}/runs/${runId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "OpenAI-Beta": "assistants=v2",
          },
        }
      );
      if (!runCheck.ok) {
        throw new Error(`Polling the run failed: ${runCheck.statusText}`);
      }
      const updatedRun = await runCheck.json();
      runStatus = updatedRun.status;
    }

    // If runStatus is not 'completed', we can handle or display errors
    if (runStatus !== "completed") {
      throw new Error(`Run ended with status: ${runStatus}`);
    }
    // That means the assistant has appended messages. We can fetch them.
    return;
  }

  // -------------------------------
  //  4. Fetch the current conversation (messages)
  // -------------------------------
  async function fetchMessages(threadId: string) {
    const res = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "OpenAI-Beta": "assistants=v2",
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch messages: ${res.statusText}`);
    }
    const data = await res.json();

    // data is of shape { data: [ { id, role, content }, ... ] }
    // content can be an array of { type: "text"/"image_url"/... } objects.
    // For simplicity, we'll join all "text" parts into one string.
    const transformed = data.data.map((m: any) => {
      // Each message has content: ContentPart[]
      // We'll just flatten for a simple text UI.
      let textParts = (m.content || [])
        .filter((part: any) => part.type === "text")
        .map((part: any) => part.text.value);
      const contentString = textParts.join("\n");

      return {
        id: m.id,
        role: m.role,
        content: contentString,
      } as ChatMessage;
    });

    return transformed;
  }

  // -------------------------------
  //  On component mount, ensure we have an assistant & thread
  // -------------------------------
  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const asstId = await getOrCreateAssistant();
        if (cancel) return;
        setAssistantId(asstId);

        const tId = await getOrCreateThread();
        if (cancel) return;
        setThreadId(tId);

        // Optionally fetch existing messages if any:
        const initialMessages = await fetchMessages(tId);
        if (!cancel) {
          setMessages(initialMessages);
        }
      } catch (err) {
        console.error("Error setting up assistant & thread:", err);
      }
    })();

    return () => {
      cancel = true;
    };
  }, []);

  // -------------------------------
  //  Sending user message & updating conversation
  // -------------------------------
  async function handleSendMessage() {
    if (!userInput.trim() || !assistantId || !threadId) return;

    const userText = userInput.trim();
    setUserInput("");

    // 1. Add user message to local state
    const newUserMsg: ChatMessage = {
      id: `local-${Date.now()}`,
      role: "user",
      content: userText,
    };
    setMessages((prev) => [...prev, newUserMsg]);

    try {
      // 2. Actually create the user message on the thread
      await createUserMessage(threadId, userText);

      // 3. Run the assistant
      await runAssistant(threadId, assistantId);

      // 4. Fetch all updated messages
      const updatedMessages = await fetchMessages(threadId);
      setMessages(updatedMessages);
    } catch (err) {
      console.error("Error sending or receiving message:", err);
      // Optionally display an error message in the UI
    }
  }

  // -------------------------------
  //  Render
  // -------------------------------
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <Card
          className={`
            mb-4
            ${isMobile ? "w-[calc(100vw-32px)] mx-4" : "w-[350px]"}
            p-4
            animate-fade-up
            bg-background/90
            border
            border-border
            backdrop-blur-md
            shadow-lg
          `}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <h3 className="font-semibold text-primary">Chat with us</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 hover:bg-primary/20 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div
            className={`
              ${isMobile ? "h-[50vh]" : "h-[350px]"}
              overflow-y-auto
              border
              border-border
              rounded-lg
              p-4
              mb-4
              bg-background
            `}
          >
            {messages.length === 0 && (
              <div className="text-sm text-text/70">
                Ask us anything about our company!
              </div>
            )}
            {messages.map((msg) => (
              <div key={msg.id} className="flex gap-2 items-start mb-4">
                {msg.role === "assistant" ? (
                  <>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-text text-sm font-bold shadow-md">
                      AI
                    </div>
                    <div className="flex-1 bg-primary/10 rounded-lg p-3 text-sm text-text border border-border whitespace-pre-wrap">
                      {msg.content}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-sm font-bold text-text">
                      Me
                    </div>
                    <div className="flex-1 bg-border/30 rounded-lg p-3 text-sm text-text border border-border whitespace-pre-wrap">
                      {msg.content}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="
                flex-1
                px-4 py-2
                border
                border-border
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:ring-primary
                bg-background
                text-text
                placeholder:text-text/60
              "
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <Button
              size="icon"
              className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 shadow-md transition-all"
              onClick={handleSendMessage}
            >
              <Send className="h-4 w-4 text-text" />
            </Button>
          </div>
        </Card>
      )}

      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`
          ${isMobile ? "h-12 w-12" : "h-14 w-14"}
          rounded-full
          shadow-lg
          hover:shadow-xl
          transition-all
          duration-300
          bg-gradient-to-r
          from-primary
          to-accent
          hover:from-primary/80
          hover:to-accent/80
          hover:-translate-y-1
        `}
      >
        <MessageCircle className={`${isMobile ? "h-5 w-5" : "h-6 w-6"}`} />
      </Button>
    </div>
  );
};

export default ChatbotButton;
