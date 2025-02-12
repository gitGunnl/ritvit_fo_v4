import { useState } from 'react';
import { Button } from './ui/button';
import { MessageSquare } from 'lucide-react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={handleClick}
        size="lg"
        className="rounded-full w-16 h-16 bg-primary hover:bg-primary/80"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ChatbotButton;