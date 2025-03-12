
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WebVista | Création de sites web professionnels et optimisés SEO</title>
        <meta name="description" content="WebVista crée des sites vitrines modernes, rapides et optimisés SEO pour améliorer votre visibilité en ligne et convertir vos visiteurs en clients." />
        <meta name="keywords" content="création site web, site vitrine, optimisation SEO, référencement naturel, site responsive, agence web" />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
