import { Plus, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import logo from "@/assets/logo.png";

const chatHistory = [
  "Color names and codes",
  "Interface design suggestion",
  "ArXiv downloader status",
  "Yotta metadata range setup",
];

export const Sidebar = () => {
  return (
    <aside className="w-72 h-screen bg-card/40 backdrop-blur-xl border-r border-border/50 flex flex-col">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-semibold text-foreground">AI Chat</h1>
        </div>
        <Button 
          variant="default" 
          className="w-full justify-start gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all"
        >
          <Plus className="w-4 h-4" />
          New chat
        </Button>
      </div>

      <ScrollArea className="flex-1 px-4 py-6">
        <div className="space-y-2">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-3">
            Recent Chats
          </h2>
          {chatHistory.map((chat, index) => (
            <button
              key={index}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-accent/10 hover:text-foreground transition-all group flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
              <span className="truncate">{chat}</span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};
