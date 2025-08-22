import { Button } from "@/components/ui/button";
import { Code2, Database, BrainCircuit } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <BrainCircuit className="w-8 h-8 text-primary" />
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            DataDevHub
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('dicas')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Dicas
          </button>
          <button
            onClick={() => scrollToSection('roadmaps')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Roadmaps
          </button>
          <button
            onClick={() => scrollToSection('curiosidades')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Curiosidades
          </button>
          <button
            onClick={() => scrollToSection('recursos')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Recursos
          </button>
          <Button variant="hero" size="sm">
            <Code2 className="w-4 h-4" />
            Começar
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;