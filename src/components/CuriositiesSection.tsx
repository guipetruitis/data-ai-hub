import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, TrendingUp, Sparkles, ExternalLink } from "lucide-react";

const CuriositiesSection = () => {
  const curiosities = [
    {
      title: "GPT-4 tem 175 bilhões de parâmetros?",
      description: "Na verdade, a OpenAI nunca confirmou o número exato de parâmetros do GPT-4. Especula-se que seja uma arquitetura mixture-of-experts com aproximadamente 1.7 trilhões de parâmetros.",
      tag: "LLMs",
      trend: "+1200%"
    },
    {
      title: "O primeiro algoritmo de ML foi criado em 1943",
      description: "A rede neural perceptron foi desenvolvida por McCulloch e Pitts, inspirada no funcionamento dos neurônios biológicos. O conceito tem mais de 80 anos!",
      tag: "História",
      trend: "Clássico"
    },
    {
      title: "Data Scientists passam 80% do tempo limpando dados",
      description: "Apenas 20% do tempo é gasto realmente fazendo análises. Por isso ferramentas de AutoML e pipelines automatizados são tão valiosas.",
      tag: "Realidade",
      trend: "80/20"
    },
    {
      title: "O termo 'Big Data' surgiu em 2005",
      description: "Foi cunhado por Roger Mougalas da O'Reilly Media. Antes disso, falávamos apenas sobre 'large datasets' ou 'data warehousing'.",
      tag: "Curiosidade",
      trend: "2005"
    },
    {
      title: "Python não foi criado para Data Science",
      description: "Guido van Rossum criou Python em 1991 como uma linguagem de propósito geral. Sua adoção em DS aconteceu principalmente após 2010 com NumPy e Pandas.",
      tag: "Python",
      trend: "1991"
    },
    {
      title: "O algoritmo de Random Forest usa... árvores!",
      description: "Mas você sabia que uma única Random Forest pode ter milhares de árvores de decisão? Cada uma vota na predição final, criando um 'ensemble democrático'.",
      tag: "Algoritmos",
      trend: "Ensemble"
    }
  ];

  return (
    <section id="curiosidades" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Curiosidades Fascinantes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fatos que vão <span className="bg-gradient-primary bg-clip-text text-transparent">Surpreender</span> Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra histórias incríveis, estatísticas surpreendentes e fatos pouco conhecidos do mundo de dados e IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {curiosities.map((curiosity, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 group hover:shadow-accent cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {curiosity.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-primary">
                    <TrendingUp className="w-3 h-3" />
                    <span>{curiosity.trend}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-accent transition-colors">
                  {curiosity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {curiosity.description}
                </CardDescription>
                <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-accent hover:text-accent-glow group/btn">
                  Saiba mais
                  <ExternalLink className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="glow" size="lg">
            <Sparkles className="w-4 h-4" />
            Explorar Mais Curiosidades
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CuriositiesSection;