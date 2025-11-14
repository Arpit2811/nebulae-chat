import { Sidebar } from "@/components/Sidebar";
import { ChatInput } from "@/components/ChatInput";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-background via-background to-card">
      <Sidebar />
      
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl font-light text-foreground tracking-tight">
              What can I help with?
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Start a conversation or choose from your recent chats
            </p>
          </div>
        </div>
        
        <ChatInput />
      </main>
    </div>
  );
};

export default Index;
