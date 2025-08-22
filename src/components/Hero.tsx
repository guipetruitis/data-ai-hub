import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse delay-500" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Para Desenvolvedores Curiosos
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Dados & IA
            </span>
            <br />
            <span className="text-foreground">para Devs</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubra dicas práticas, roadmaps estruturados, curiosidades fascinantes e os melhores recursos para dominar Data Science e Inteligência Artificial.
          </p>
          
          <div className="flex flex-col gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              <TrendingUp className="w-5 h-5" />
              Explorar Conteúdo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glow" size="lg">
              Ver Roadmaps
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>100+ Recursos Curados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Roadmaps Práticos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full" />
              <span>Dicas Exclusivas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;