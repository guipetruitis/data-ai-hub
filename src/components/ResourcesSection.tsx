import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, BookOpen, Video, ExternalLink, Star, GitFork } from "lucide-react";

const ResourcesSection = () => {
  const repositories = [
    {
      name: "awesome-machine-learning",
      description: "Lista curada dos melhores frameworks, bibliotecas e software de Machine Learning",
      stars: "64.2k",
      forks: "14.1k",
      language: "Python",
      category: "Awesome List"
    },
    {
      name: "scikit-learn",
      description: "Biblioteca de Machine Learning mais popular do Python com algoritmos robustos",
      stars: "58.1k", 
      forks: "25.2k",
      language: "Python",
      category: "Framework"
    },
    {
      name: "tensorflow",
      description: "Plataforma open-source completa para Machine Learning e Deep Learning",
      stars: "182k",
      forks: "74.1k", 
      language: "C++",
      category: "Framework"
    },
    {
      name: "langchain",
      description: "Framework para desenvolver aplicações com LLMs, RAG, agents e muito mais",
      stars: "87.2k",
      forks: "13.8k",
      language: "Python",
      category: "IA Generativa"
    }
  ];

  const platforms = [
    {
      name: "Kaggle Learn",
      description: "Cursos gratuitos e práticos com certificados em Data Science e ML",
      type: "Cursos",
      rating: "4.8",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      name: "Fast.ai",
      description: "Curso prático de Deep Learning focado em aplicações reais",
      type: "Video",
      rating: "4.9",
      icon: <Video className="w-5 h-5" />
    },
    {
      name: "Coursera ML",
      description: "Especializações da Stanford, DeepLearning.ai e outras universidades",
      type: "Certificação",
      rating: "4.7",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      name: "Prompt Engineering Guide",
      description: "Guia completo com técnicas e estratégias para otimizar prompts em LLMs",
      type: "Guia",
      rating: "4.9",
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  return (
    <section id="recursos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Github className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Recursos Essenciais
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Repositórios</span> e Plataformas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Os melhores recursos da comunidade: repositórios GitHub curados e plataformas de aprendizado recomendadas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Repositórios GitHub */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Github className="w-6 h-6 text-accent" />
              Repositórios Top
            </h3>
            <div className="space-y-4">
              {repositories.map((repo, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-300 group hover:shadow-accent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {repo.category}
                      </Badge>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span>{repo.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          <span>{repo.forks}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {repo.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-muted-foreground">
                      {repo.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {repo.language}
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-accent hover:text-accent-glow group/btn">
                        Ver no GitHub
                        <ExternalLink className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Plataformas de Estudo */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Plataformas de Estudo
            </h3>
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-primary">
                        {platform.icon}
                        <Badge variant="outline" className="text-xs">
                          {platform.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{platform.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {platform.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-muted-foreground">
                      {platform.description}
                    </CardDescription>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors group/btn">
                      Acessar Plataforma
                      <ExternalLink className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Github className="w-4 h-4" />
            Ver Todos os Recursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;