
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-secondary">Web</span>Vista
            </h3>
            <p className="text-primary-foreground/70 mb-4">
              Nous créons des sites web modernes et performants qui aident les entreprises à se développer en ligne.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Création de site web
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Optimisation SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Design responsive
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Maintenance web
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Refonte de site
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#temoignages" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-primary-foreground/70 mb-4">
              Inscrivez-vous pour recevoir nos conseils web et actualités.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-secondary"
                required
              />
              <button
                type="submit"
                className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-secondary/90 transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WebVista. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors"
            aria-label="Retour en haut"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
