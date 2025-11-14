import { Send, Paperclip, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const ChatInput = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full max-w-4xl mx-auto px-6 pb-8">
      <div className="relative bg-card/60 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl">
        <div className="flex items-center gap-2 p-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          >
            <Paperclip className="w-5 h-5" />
          </Button>
          
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
          />
          
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
          >
            <Mic className="w-5 h-5" />
          </Button>
          
          <Button
            size="icon"
            className="bg-gradient-to-br from-primary to-accent hover:opacity-90 text-white shadow-lg hover:shadow-primary/30 transition-all"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
