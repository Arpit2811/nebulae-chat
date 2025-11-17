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
        <div className="flex-1 flex items-center justify-start px-6 pl-24">
          <div className="space-y-8 animate-[slide-in-right_0.8s_ease-out_reverse]">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <img src={logo} alt="Chat Logo" className="w-24 h-24 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange/30 via-gold/30 to-primary/20 blur-2xl rounded-full" />
              </div>
              
              <div>
                <h1 className="text-5xl font-bold tracking-tight mb-1">
                  <span className="bg-gradient-to-r from-primary via-gold to-orange bg-clip-text text-transparent animate-fade-in">
                    BharatGen
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground italic">
                  GenAI for Bharat, by Bharat
                </p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Start a conversation or choose from your{" "}
              <span className="bg-gradient-to-r from-gold to-orange bg-clip-text text-transparent font-medium">recent chats</span>
            </p>
          </div>
        </div>
        
        <ChatInput />
      </main>
    </div>
  );
};

export default Index;
