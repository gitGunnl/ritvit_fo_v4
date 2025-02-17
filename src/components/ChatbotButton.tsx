import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { MessageSquare, Send, X } from 'lucide-react';

// Placeholder ChatWindow component -  Needs actual implementation
const ChatWindow = ({ onClose }) => {
  return (
    <div className="absolute bottom-20 right-0 w-96 h-[500px] bg-background border border-border rounded-lg shadow-lg flex flex-col">
      {/*  Replace this with actual chat window content */}
      <div>Chat Window Content Here</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};


const MAX_MESSAGES = 10; // Limit conversation history

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="rounded-full w-16 h-16 bg-primary hover:bg-primary/80 transition-transform duration-200 hover:scale-105"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ChatbotButton;