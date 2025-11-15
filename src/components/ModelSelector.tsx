import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const models = [
  { id: "param-1", name: "Param-1" },
  { id: "ayurparam", name: "Ayurparam" },
  { id: "financeparam", name: "FinanceParam" },
  { id: "legalparam", name: "LegalParam" },
];

export const ModelSelector = () => {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/60 backdrop-blur-xl border border-gold/30 hover:border-gold/50 hover:shadow-[0_0_16px_rgba(234,179,8,0.2)] transition-all duration-300 outline-none group">
        <span className="text-sm font-medium bg-gradient-to-r from-primary via-gold to-orange bg-clip-text text-transparent">
          {selectedModel.name}
        </span>
        <ChevronDown className="w-4 h-4 text-gold group-hover:translate-y-0.5 transition-transform" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-48 bg-card/95 backdrop-blur-xl border-gold/30 shadow-[0_0_24px_rgba(234,179,8,0.15)] z-50"
      >
        {models.map((model) => (
          <DropdownMenuItem
            key={model.id}
            onClick={() => setSelectedModel(model)}
            className="cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:via-gold/5 hover:to-orange/10 transition-all duration-200"
          >
            <span className={selectedModel.id === model.id ? "text-gold font-medium" : "text-foreground"}>
              {model.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
