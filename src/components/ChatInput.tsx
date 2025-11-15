import { Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto px-6 pb-8">
      <div className={`relative bg-card/60 backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
        isFocused 
          ? 'border-gold/50 shadow-[0_0_32px_rgba(234,179,8,0.2),0_0_16px_rgba(249,115,22,0.15),0_0_8px_rgba(59,130,246,0.1)]' 
          : 'border-border/50 shadow-2xl'
      }`}>
        {/* Gradient glow bar */}
        <div className={`absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-opacity duration-300 ${
          isFocused ? 'opacity-100' : 'opacity-0'
        }`} />
        
        <div className="flex items-center gap-2 p-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-gold hover:bg-gold/10 transition-all duration-300 hover:scale-110 group"
          >
            <Paperclip className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
          
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Ask anything..."
            className="flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
          />
          
          <Button
            size="icon"
            className="relative bg-gradient-to-br from-primary via-gold to-orange hover:from-primary/90 hover:via-gold/95 hover:to-orange/90 text-white shadow-lg hover:shadow-[0_0_24px_rgba(234,179,8,0.4),0_0_12px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-110 group overflow-hidden"
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <Send className="w-5 h-5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};
