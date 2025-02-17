import { useState } from 'react';
import { Button } from './ui/button';
import { MessageSquare } from 'lucide-react';
import ChatWindow from './ChatWindow';

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