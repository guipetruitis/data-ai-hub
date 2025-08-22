import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TipsSection from "@/components/TipsSection";
import RoadmapsSection from "@/components/RoadmapsSection";
import CuriositiesSection from "@/components/CuriositiesSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "DataDevHub - Dados & IA para Desenvolvedores";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra dicas práticas, roadmaps estruturados e os melhores recursos para dominar Data Science e Inteligência Artificial. Para desenvolvedores curiosos.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TipsSection />
        <RoadmapsSection />
        <CuriositiesSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;