import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MAX_MESSAGES } from '@/lib/constants';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: 'welcome',
    role: 'assistant',
    content: 'Hey! Hvussu kann eg hjálpa tær í dag?'
  }]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: userInput.trim()
    };

    const updatedMessages = [...messages, userMessage];
    const truncatedMessages = updatedMessages.length > MAX_MESSAGES
      ? updatedMessages.slice(-MAX_MESSAGES)
      : updatedMessages;

    setMessages(truncatedMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      // Always use absolute URL with current origin to ensure consistent behavior in all environments
      const baseUrl = window.location.origin;
      console.log('Making chat request to:', `${baseUrl}/api/chat`);
      
      const response = await fetch(`${baseUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: truncatedMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.details || 'Failed to get response. Please check your network connection or try again later.');
      }

      const data = await response.json();
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message || ''
      };

      setMessages(prev => {
        const newMessages = [...prev, botResponse];
        return newMessages.length > MAX_MESSAGES
          ? newMessages.slice(-MAX_MESSAGES)
          : newMessages;
      });
    } catch (err: any) {
      console.error('Chat Error:', err);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Error: ${err.message || 'Failed to connect to chat service. Please try again later.'}`
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 w-96 max-w-[calc(100vw-2rem)] bg-background rounded-lg shadow-lg border border-border overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-border">
        <h2 className="font-semibold">Chat</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="h-[400px] overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              'flex p-4',
              message.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            <div
              className={cn(
                'rounded-lg px-4 py-2 max-w-[80%]',
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              )}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            placeholder="Skriva eini boð..."
            className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !userInput.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;