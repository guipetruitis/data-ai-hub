import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Route, Clock, Users, Star } from "lucide-react";

const RoadmapsSection = () => {
  const roadmaps = [
    {
      title: "Data Science Completo",
      description: "Do básico ao avançado: Python, Pandas, Numpy, Scikit-learn, e muito mais",
      duration: "6-8 meses",
      level: "Iniciante",
      rating: "4.9",
      students: "2.5k",
      topics: ["Python", "Pandas", "Machine Learning", "Visualização"]
    },
    {
      title: "Machine Learning Engineer",
      description: "MLOps, deploy de modelos, monitoramento e escalabilidade em produção",
      duration: "4-6 meses",
      level: "Intermediário",
      rating: "4.8",
      students: "1.8k",
      topics: ["MLOps", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      title: "Deep Learning & IA",
      description: "Redes neurais, TensorFlow, PyTorch, NLP, Computer Vision e muito mais",
      duration: "8-10 meses",
      level: "Avançado",
      rating: "4.9",
      students: "1.2k",
      topics: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"]
    },
    {
      title: "IA Generativa & LLMs",
      description: "GPT, BERT, fine-tuning, prompt engineering, RAG, agents e aplicações práticas",
      duration: "5-7 meses",
      level: "Intermediário",
      rating: "4.8",
      students: "950",
      topics: ["LLMs", "Fine-tuning", "RAG", "Langchain", "Agents"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Iniciante": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Intermediário": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Avançado": return "bg-red-500/10 text-red-400 border-red-500/20";
      default: return "bg-accent/10 text-accent border-accent/20";
    }
  };

  return (
    <section id="roadmaps" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Route className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Roadmaps Estruturados
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seu Caminho para o <span className="bg-gradient-primary bg-clip-text text-transparent">Sucesso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trilhas de aprendizado cuidadosamente planejadas para você dominar cada área de dados e IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmaps.map((roadmap, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className={getLevelColor(roadmap.level)}>
                    {roadmap.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{roadmap.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {roadmap.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {roadmap.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{roadmap.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{roadmap.students}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {roadmap.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors">
                  Ver Roadmap Completo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapsSection;