
import React, { useEffect, useState, useRef } from "react";

// A helper to detect & embed clickable link for ritvit.fo.
function parseLineForLink(line) {
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

const HeroChat = () => {
  // The messages to display on screen:
  // Each is { role: 'user'|'assistant', text, partialText, done }
  const [displayedMessages, setDisplayedMessages] = useState<Array<{
    role: string;
    text: string;
    partialText: string;
    done: boolean;
  }>>([]);

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
    const words = fullText.split(/(\s+)/); // Split by whitespace but keep it
    let currentWordIndex = 0;

    // Function to add one word at a time
    function streamNextWord() {
      if (currentWordIndex >= words.length) {
        // All words added, mark as done
        setDisplayedMessages(prev => prev.map((msg, i) => {
          if (i === prev.length - 1) {
            return { ...msg, done: true };
          }
          return msg;
        }));

        // Move to the next message after a delay
        setTimeout(() => {
          showNextMessage(index + 1);
        }, 1000);
        return;
      }

      // Add the next word
      setDisplayedMessages(prev => {
        const updatedMessages = [...prev];
        const lastMsg = updatedMessages[updatedMessages.length - 1];
        lastMsg.partialText += words[currentWordIndex];
        return updatedMessages;
      });

      // Schedule the next word
      currentWordIndex++;
      setTimeout(streamNextWord, 40); // Adjust speed as needed
    }

    // Start the streaming
    streamNextWord();
  }

  // Function to render messages with proper formatting
  const renderMessageContent = (text: string) => {
    // Split by newlines and process each line
    return text.split('\n').map((line, lineIndex) => {
      // Check if line starts with "- " for bullet points
      if (line.startsWith('- ')) {
        return (
          <li key={lineIndex} className="ml-5 list-disc">
            {parseLineForLink(line.substring(2))}
          </li>
        );
      }
      
      // Regular lines
      return (
        <React.Fragment key={lineIndex}>
          {parseLineForLink(line)}
          {lineIndex < text.split('\n').length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background/80 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">See how <span className="text-primary">ritvit</span> can help you</h2>
        
        <div className="bg-background/60 border border-border rounded-xl shadow-lg p-4 md:p-6 backdrop-blur-sm">
          <div className="flex flex-col gap-4 mb-4">
            {displayedMessages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up [animation-delay:200ms]`}
              >
                <div 
                  className={`max-w-[80%] p-4 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-primary/10 border border-primary/30' 
                      : 'bg-background border border-border'
                  }`}
                >
                  <div className="prose prose-sm dark:prose-invert">
                    {renderMessageContent(message.partialText)}
                    {!message.done && (
                      <span className="inline-block w-2 h-4 bg-primary/50 ml-1 animate-pulse"></span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border pt-4 mt-4">
            <div className="relative">
              <input
                type="text"
                disabled
                placeholder="Type your message..."
                className="w-full p-3 pr-12 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button 
                disabled
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary/10 p-2 rounded-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <p className="text-center text-sm mt-3 text-text/60">This is a demonstration of what you can learn in our course!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroChat;
