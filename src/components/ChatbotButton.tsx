import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <Card className="mb-4 w-[300px] p-4 animate-fade-up glass-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Chat with us</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="h-[300px] overflow-y-auto border rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-600">
              Hi! How can I help you today?
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="sm">Send</Button>
          </div>
        </Card>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-600 hover:-translate-y-1"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ChatbotButton;