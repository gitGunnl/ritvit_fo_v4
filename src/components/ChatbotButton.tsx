import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <Card className={`mb-4 ${isMobile ? 'w-[calc(100vw-32px)] mx-4' : 'w-[350px]'} p-4 animate-fade-up glass-card`}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <h3 className="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Chat with us
              </h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className={`${isMobile ? 'h-[50vh]' : 'h-[350px]'} overflow-y-auto border rounded-lg p-4 mb-4 bg-white/50 backdrop-blur-sm`}>
            <div className="space-y-4">
              <div className="flex gap-2 items-start fade-in">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                  AI
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg p-3 text-sm">
                  Hi! How can I help you today? 👋
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70 backdrop-blur-sm"
            />
            <Button
              size="icon"
              className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition-opacity"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`${isMobile ? 'h-12 w-12' : 'h-14 w-14'} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-600 hover:-translate-y-1`}
      >
        <MessageCircle className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
      </Button>
    </div>
  );
};

export default ChatbotButton;