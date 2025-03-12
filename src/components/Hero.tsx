
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="accueil" className="relative pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/30 -z-10"></div>
      
      {/* Decorative element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm">
              Création de sites web optimisés SEO
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Créez votre <span className="text-secondary">présence en ligne</span> qui convertit
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Nous concevons des sites vitrines modernes, rapides et optimisés pour le référencement,
              qui aident votre entreprise à se démarquer et à atteindre ses objectifs commerciaux.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-6">
                Demander un devis gratuit
              </Button>
              <Button variant="outline" className="group">
                Découvrir nos services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  JD
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                  AS
                </div>
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white">
                  MR
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Rejoignez <span className="font-bold text-foreground">50+ clients</span> satisfaits
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-blue-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-card border border-border/40 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
                  alt="Design de site web moderne" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background rounded-lg p-4 shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">100% Responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
