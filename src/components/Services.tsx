
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Search, Smartphone, Zap, Shield, BarChart3 } from "lucide-react";

const serviceItems = [
  {
    icon: <Globe className="h-10 w-10 text-secondary" />,
    title: "Création de site web",
    description: "Sites vitrines modernes et professionnels adaptés à l'identité de votre entreprise.",
  },
  {
    icon: <Search className="h-10 w-10 text-secondary" />,
    title: "Optimisation SEO",
    description: "Amélioration du référencement naturel pour augmenter votre visibilité sur les moteurs de recherche.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-secondary" />,
    title: "Design responsive",
    description: "Sites parfaitement adaptés à tous les appareils : ordinateurs, tablettes et smartphones.",
  },
  {
    icon: <Zap className="h-10 w-10 text-secondary" />,
    title: "Performance optimisée",
    description: "Temps de chargement rapide et expérience utilisateur fluide pour réduire le taux de rebond.",
  },
  {
    icon: <Shield className="h-10 w-10 text-secondary" />,
    title: "Sécurité renforcée",
    description: "Protection contre les cybermenaces et conformité aux normes de sécurité actuelles.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-secondary" />,
    title: "Analytics & Rapports",
    description: "Suivi des performances de votre site et analyse du comportement des visiteurs.",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services</h2>
          <p className="text-muted-foreground">
            Des solutions web complètes pour développer votre présence en ligne
            et atteindre vos objectifs commerciaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card 
              key={index} 
              className="border border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
