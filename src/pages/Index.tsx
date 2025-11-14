import { Sidebar } from "@/components/Sidebar";
import { ChatInput } from "@/components/ChatInput";
import { Sparkles, Zap, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-background via-card/20 to-background relative">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <Sidebar />
      
      <main className="flex-1 flex flex-col relative z-10">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-orange animate-pulse" />
              <Zap className="w-6 h-6 text-primary" />
              <MessageCircle className="w-7 h-7 text-orange/70 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h1 className="text-6xl font-light tracking-tight">
              <span className="bg-gradient-to-r from-primary via-orange to-primary bg-clip-text text-transparent animate-fade-in">
                What can I help with?
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Start a conversation or choose from your{" "}
              <span className="text-orange font-medium">recent chats</span>
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {['Creative', 'Analytical', 'Helpful'].map((trait, i) => (
                <div
                  key={trait}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-orange/10 border border-orange/20 text-sm text-foreground/80 hover:border-orange/40 hover:scale-105 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <ChatInput />
      </main>
    </div>
  );
};

export default Index;
