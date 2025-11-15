import { Sidebar } from "@/components/Sidebar";
import { ChatInput } from "@/components/ChatInput";
import { ModelSelector } from "@/components/ModelSelector";
import logo from "@/assets/chat-logo.png";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-background via-card/20 to-background relative">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <Sidebar />
      
      <main className="flex-1 flex flex-col relative z-10">
        <div className="p-6">
          <ModelSelector />
        </div>
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <img src={logo} alt="Chat Logo" className="w-24 h-24 animate-logo-load" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange/40 via-gold/40 to-primary/30 blur-3xl rounded-full animate-logo-load" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-orange/20 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
            </div>
            
            <h1 className="text-6xl font-light tracking-tight">
              <span className="bg-gradient-to-r from-primary via-gold to-orange bg-clip-text text-transparent animate-fade-in">
                What can I help with?
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Start a conversation or choose from your{" "}
              <span className="bg-gradient-to-r from-gold to-orange bg-clip-text text-transparent font-medium">recent chats</span>
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {['Creative', 'Analytical', 'Helpful'].map((trait, i) => (
                <div
                  key={trait}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-gold/5 to-orange/10 border border-gold/30 text-sm text-foreground/80 hover:border-gold/50 hover:shadow-[0_0_16px_rgba(234,179,8,0.2)] hover:scale-105 transition-all duration-300 cursor-default"
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
