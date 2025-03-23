
// This component has been removed as it's no longer needed
const ChatbotButton = () => {
  return null;
};

export default ChatbotButton;
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ChatbotButtonProps {
  onClick?: () => void;
  className?: string;
}

export function ChatbotButton({ onClick, className = '' }: ChatbotButtonProps) {
  return (
    <Button 
      onClick={onClick} 
      className={`fixed bottom-4 right-4 rounded-full p-3 ${className}`}
      variant="default"
      size="icon"
      aria-label="Open chat"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}

export default ChatbotButton;
