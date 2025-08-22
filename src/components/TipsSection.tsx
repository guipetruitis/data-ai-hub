import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Code, Database, Brain, ArrowRight } from "lucide-react";

const TipsSection = () => {
  const tips = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Otimize seu Pipeline de Dados",
      description: "Use ferramentas como Apache Airflow para automatizar workflows e garantir consistência nos seus dados.",
      category: "Pipeline"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Versionamento de Dados",
      description: "Implemente DVC (Data Version Control) para versionar datasets e experimentos como você faz com código.",
      category: "Versionamento"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Feature Engineering Inteligente",
      description: "Automatize a criação de features com ferramentas como Featuretools para acelerar seus projetos de ML.",
      category: "ML"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Monitoramento de Modelos",
      description: "Use MLflow ou Weights & Biases para trackear performance e detectar data drift em produção.",
      category: "MLOps"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Prompt Engineering Eficaz",
      description: "Domine técnicas como Chain-of-Thought, Few-shot prompting e RAG para maximizar a performance de LLMs.",
      category: "IA Generativa"
    }
  ];

  return (
    <section id="dicas" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Dicas Práticas
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Acelere seu Desenvolvimento
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dicas testadas e aprovadas por desenvolvedores experientes para otimizar seus projetos de dados e IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tips.map((tip, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 group hover:shadow-accent">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent/20 transition-colors">
                    {tip.icon}
                  </div>
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {tip.category}
                  </span>
                </div>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {tip.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="glow" size="lg" className="group">
            Ver Mais Dicas
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;