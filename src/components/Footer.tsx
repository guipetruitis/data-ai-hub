import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BrainCircuit, Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    recursos: [
      { name: "Roadmaps", href: "#roadmaps" },
      { name: "Curiosidades", href: "#curiosidades" },
      { name: "Repositórios", href: "#recursos" },
      { name: "Dicas", href: "#dicas" }
    ],
    aprendizado: [
      { name: "Kaggle Learn", href: "https://kaggle.com/learn" },
      { name: "Fast.ai", href: "https://fast.ai" },
      { name: "Coursera ML", href: "https://coursera.org" },
      { name: "Papers With Code", href: "https://paperswithcode.com" }
    ],
    comunidade: [
      { name: "GitHub", href: "https://github.com" },
      { name: "Reddit r/MachineLearning", href: "https://reddit.com/r/MachineLearning" },
      { name: "Towards Data Science", href: "https://towardsdatascience.com" },
      { name: "Kaggle Discussions", href: "https://kaggle.com/discussions" }
    ]
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <BrainCircuit className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                DataDevHub
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Sua fonte definitiva para recursos de Data Science e Inteligência Artificial. 
              Feito por desenvolvedores, para desenvolvedores.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Recursos</h4>
            <ul className="space-y-2">
              {links.recursos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Aprendizado</h4>
            <ul className="space-y-2">
              {links.aprendizado.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Comunidade</h4>
            <ul className="space-y-2">
              {links.comunidade.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} DataDevHub. Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>para a comunidade dev.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;