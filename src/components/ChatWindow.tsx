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
  const [requestCount, setRequestCount] = useState(0);
  const [lastRequestTime, setLastRequestTime] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Rate limiting: max 10 requests per minute
  const isRateLimited = () => {
    const now = Date.now();
    const oneMinute = 60 * 1000;
    
    if (now - lastRequestTime > oneMinute) {
      setRequestCount(0);
      setLastRequestTime(now);
    }
    
    return requestCount >= 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    // Add minimum interaction delay to prevent bot-like behavior
    const interactionDelay = 500; // 500ms minimum between interactions
    const now = Date.now();
    const timeSinceLastInteraction = now - lastRequestTime;
    
    if (timeSinceLastInteraction < interactionDelay) {
      await new Promise(resolve => setTimeout(resolve, interactionDelay - timeSinceLastInteraction));
    }

    // Rate limiting check
    if (isRateLimited()) {
      const errorMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'Ov nógvar fyrispurningar. Vinarliga bíða eina løtu áðrenn tú roynir aftur.'
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

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
    setRequestCount(prev => prev + 1);
    setLastRequestTime(Date.now());

    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller for this request
    abortControllerRef.current = new AbortController();

    try {
      const baseUrl = window.location.origin;
      
      const response = await fetch(`${baseUrl}/api/chat`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'User-Agent': 'RitVit-Chat/1.0'
        },
        body: JSON.stringify({
          messages: truncatedMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
        signal: abortControllerRef.current.signal,
        // Add timeout
        ...(fetch.length > 2 && { timeout: 30000 })
      });

      if (!response.ok) {
        let errorDetails = 'Network error';
        try {
          const errorData = await response.json();
          errorDetails = errorData.details || `HTTP ${response.status}`;
        } catch {
          errorDetails = `HTTP ${response.status} ${response.statusText}`;
        }
        throw new Error(errorDetails);
      }

      const data = await response.json();
      if (!data || typeof data.message !== 'string') {
        throw new Error('Invalid response format');
      }

      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message
      };

      setMessages(prev => {
        const newMessages = [...prev, botResponse];
        return newMessages.length > MAX_MESSAGES
          ? newMessages.slice(-MAX_MESSAGES)
          : newMessages;
      });
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return; // Request was cancelled, don't show error
      }

      console.error('Chat Error:', err);
      let errorMessage = 'Tøkniligar trupulleikar. Royn aftur seinni.';
      
      if (err.message.includes('HTTP 429')) {
        errorMessage = 'Ov nógvar fyrispurningar. Bíða eina løtu.';
      } else if (err.message.includes('HTTP 403')) {
        errorMessage = 'Atgongd noktað. Kontakta stuðul.';
      } else if (err.message.includes('HTTP 404')) {
        errorMessage = 'Tænasta ikki tøk. Kontakta stuðul.';
      } else if (err.message.includes('Network error') || err.message.includes('Failed to fetch')) {
        errorMessage = 'Netverkstrupulleikar. Kanna títt samband.';
      }

      const errorResponseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorMessage
      };
      setMessages(prev => [...prev, errorResponseMessage]);
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

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