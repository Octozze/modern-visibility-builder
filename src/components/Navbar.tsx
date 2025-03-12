import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-background/95 shadow-sm backdrop-blur-sm" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center">
          <span className="text-secondary">Web</span>Vista
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#accueil" className="nav-link text-foreground hover:text-secondary transition-colors">
            Accueil
          </a>
          <a href="#services" className="nav-link text-foreground hover:text-secondary transition-colors">
            Services
          </a>
          <a href="#temoignages" className="nav-link text-foreground hover:text-secondary transition-colors">
            Témoignages
          </a>
          <a href="#contact" className="nav-link text-foreground hover:text-secondary transition-colors">
            Contact
          </a>
        </nav>

        {/* Bouton hamburger pour mobile */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg absolute w-full py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-4">
            <a 
              href="#accueil" 
              className="text-foreground hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#temoignages" 
              className="text-foreground hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
