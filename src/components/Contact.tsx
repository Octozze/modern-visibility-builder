
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique pour envoyer le formulaire
    console.log("Formulaire soumis");
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-muted-foreground">
            Vous avez un projet web ? Parlons-en ! Remplissez le formulaire ci-dessous
            ou utilisez nos coordonnées directes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card border border-border/50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" placeholder="Votre nom" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Sujet de votre message" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                Envoyer
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nos informations</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-secondary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Téléphone</h4>
                    <p className="text-muted-foreground">+33 (0)1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-secondary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">contact@webvista.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-secondary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Adresse</h4>
                    <p className="text-muted-foreground">
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-secondary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horaires</h4>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi: 9h00 - 18h00<br />
                      Weekend: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-xl overflow-hidden h-64 border border-border/50">
              <iframe
                title="Carte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047033197!2d2.295477076664659!3d48.87378170066168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4a09ed44f%3A0xcc948da50b430144!2sArc%20de%20Triomphe!5e0!3m2!1sfr!2sfr!4v1689025175187!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
