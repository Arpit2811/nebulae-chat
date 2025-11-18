import { Plus, MessageSquare, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import logo from "@/assets/chat-logo.png";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const chatHistory = [
  "Color names and codes",
  "Interface design suggestion",
  "ArXiv downloader status",
  "Yotta metadata range setup",
];

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <aside className={`h-screen bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl border-r border-orange/20 flex flex-col relative overflow-hidden transition-all duration-300 ease-in-out ${
      isOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full'
    }`}>
      {/* Animated orange glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="relative z-10 p-6 border-b border-gold/20">
        <div className="flex items-center gap-3 mb-6 group">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="absolute top-4 right-4 h-8 w-8 hover:bg-gold/10 hover:text-gold transition-all duration-300"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="relative">
            <img src={logo} alt="Logo" className="w-10 h-10 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange/40 via-gold/40 to-primary/30 blur-2xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
          </div>
          <h1 className="text-base font-semibold bg-gradient-to-r from-primary via-gold to-orange bg-clip-text text-transparent">
            Param-1 2.9B
          </h1>
          {/*<Sparkles className="w-4 h-4 text-gold ml-auto opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />*/}
        </div>
        <Button 
          variant="default" 
          className="w-full justify-start gap-2 bg-gradient-to-r from-primary via-gold to-orange hover:from-primary/90 hover:via-gold/90 hover:to-orange/90 text-white shadow-lg hover:shadow-[0_0_24px_rgba(234,179,8,0.3),0_0_12px_rgba(249,115,22,0.2)] transition-all duration-300 hover:scale-[1.02] group"
        >
          <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
          New chat
        </Button>
      </div>

      <ScrollArea className="flex-1 px-4 py-6 relative z-10">
        <div className="space-y-2">
          <h2 className="text-xs font-semibold text-gold/90 uppercase tracking-wider px-3 mb-3 flex items-center gap-2">
            Recent Chats
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 via-orange/20 to-transparent" />
          </h2>
          {chatHistory.map((chat, index) => (
            <button
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-foreground transition-all duration-300 group flex items-center gap-2 relative overflow-hidden hover:scale-[1.02]"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 via-gold/5 to-orange/10 rounded-lg transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
              
              {/* Golden accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-orange to-primary transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
              
              <MessageSquare className="w-4 h-4 text-primary/60 group-hover:text-gold transition-all duration-300 relative z-10 group-hover:scale-110" />
              <span className="truncate relative z-10">{chat}</span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};
