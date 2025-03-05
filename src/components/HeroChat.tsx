
import React, { useEffect, useState, useRef } from "react";

// A helper to detect & embed clickable link for ritvit.fo.
function parseLineForLink(line: string) {
  // Regex capturing https://ritvit.fo in a group.
  const linkRegex = /(https?:\/\/ritvit\.fo)/g;
  const parts = line.split(linkRegex);

  if (parts.length === 1) {
    // No link in this piece of text.
    return [line];
  }

  // Return a mixture of text and link elements.
  return parts.map((part, idx) => {
    if (part.match(linkRegex)) {
      return (
        <a
          key={idx}
          href="https://ritvit.fo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400 hover:text-blue-500"
        >
          www.ritvit.fo
        </a>
      );
    } else {
      return part;
    }
  });
}

// Our chat messages.
const chatSequence = [
  {
    role: "user",
    text: "What can i use chatgpt for?"
  },
  {
    role: "assistant",
    text: "It is hard to say, what do you do for work and are you good at using chatgpt?"
  },
  {
    role: "user",
    text: "I work in an office setting. No, I am not good at using chatgpt"
  },
  {
    role: "assistant",
    text: `Ok, then you can use it for many things, like:\n- Summarizing emails\n- Brainstorming ideas\n- Drafting documents\n\nBut first you need to learn how to use it. I recommend taking a course on it, like this one:\nhttps://ritvit.fo\nYes, you'll find many helpful tips there!`
  }
];

interface DisplayedMessage {
  role: "user" | "assistant";
  text: string;
  partialText: string;
  done: boolean;
}

const HeroChat: React.FC = () => {
  // The messages to display on screen:
  // Each is { role: 'user'|'assistant', text, partialText, done }
  const [displayedMessages, setDisplayedMessages] = useState<DisplayedMessage[]>([]);

  // We only want to start the conversation once.
  const conversationStartedRef = useRef(false);

  useEffect(() => {
    if (conversationStartedRef.current) return;
    conversationStartedRef.current = true;
    showNextMessage(0);
  }, []);

  // This function handles one message from chatSequence.
  // index: which message in chatSequence.
  function showNextMessage(index: number) {
    if (index >= chatSequence.length) return; // done.

    const nextMsg = chatSequence[index];

    if (nextMsg.role === "user") {
      // Immediately display user message.
      setDisplayedMessages((prev) => [
        ...prev,
        {
          role: "user",
          text: nextMsg.text,
          partialText: nextMsg.text,
          done: true
        }
      ]);

      // After 1 second, go to next.
      setTimeout(() => {
        showNextMessage(index + 1);
      }, 1000);
    } else {
      // Assistant message => do word streaming.

      // Add the message with empty partialText.
      setDisplayedMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: nextMsg.text,
          partialText: "",
          done: false
        }
      ]);

      // Wait a moment so the new message is appended.
      setTimeout(() => {
        startStreaming(index);
      }, 200);
    }
  }

  // Streams the assistant message at chatSequence[index].
  function startStreaming(index: number) {
    const fullText = chatSequence[index].text;

    // Replace newlines so we can preserve line breaks after splitting on spaces.
    const replacedText = fullText.replace(/\n/g, " \n ");
    const words = replacedText.split(/\s+/).filter((w) => w.length > 0);

    let i = 0;
    const intervalId = setInterval(() => {
      i++;
      setDisplayedMessages((prev) => {
        const updated = [...prev];
        const lastIndex = updated.length - 1;
        if (lastIndex < 0) return updated;
        const lastMsg = updated[lastIndex];

        // If for some reason it's not assistant or is done, bail.
        if (lastMsg.role !== "assistant" || lastMsg.done) {
          return updated;
        }

        // Build partial from first i words.
        const partial = words.slice(0, i).join(" ");

        updated[lastIndex] = {
          ...lastMsg,
          partialText: partial.replace(/ \n /g, "\n"),
        };

        return updated;
      });

      if (i === words.length) {
        // Streaming done.
        clearInterval(intervalId);
        // Mark message as done.
        setDisplayedMessages((prev) => {
          const updated = [...prev];
          const lastIndex = updated.length - 1;
          if (lastIndex >= 0 && updated[lastIndex].role === "assistant") {
            updated[lastIndex] = {
              ...updated[lastIndex],
              done: true
            };
          }
          return updated;
        });
        // Move on after a short delay.
        setTimeout(() => {
          showNextMessage(index + 1);
        }, 1000);
      }
    }, 80);
  }

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative bg-gradient-to-br from-background to-primary/10 overflow-hidden">
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s forwards;
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_65%)] opacity-80 animate-pulse [animation-duration:8s]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--accent)_0%,_transparent_70%)] opacity-30 mix-blend-overlay"></div>

      <div className="mx-auto w-full max-w-xl p-6 z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-primary">Se hvordan ChatGPT kan hjælpe dig</h2>
          <p className="text-xl text-text/80">En demonstration af hvordan AI kan svare på dine spørgsmål</p>
        </div>
        <div className="bg-background/80 backdrop-blur-md text-text rounded-lg shadow-lg p-5 space-y-4 overflow-y-auto border border-primary/30">
          {displayedMessages.map((message, index) => {
            const isUser = message.role === "user";
            const label = isUser ? "Dig" : "ChatGPT";

            // We'll display partialText for assistant messages, or the entire user text.
            const displayedText = message.partialText;

            // Split on literal "\n" for line breaks.
            const lines = displayedText.split("\n");

            return (
              <div
                key={index}
                className={`transition-opacity duration-500 opacity-0 animate-fadeIn ${
                  isUser ? "text-right" : "text-left"
                }`}
              >
                <div className="mb-1 text-xs text-text/60">{label}</div>
                <div
                  className={`inline-block max-w-xs px-4 py-2 rounded-lg ${
                    isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-text"
                  }`}
                >
                  {lines.map((line, idx) => {
                    // parseLineForLink returns an array of text/link fragments.
                    const chunks = parseLineForLink(line);
                    return (
                      <p key={idx} className="mb-1">
                        {Array.isArray(chunks)
                          ? chunks.map((chunk, cIdx) => (
                              <React.Fragment key={cIdx}>{chunk}</React.Fragment>
                            ))
                          : chunks}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroChat;
