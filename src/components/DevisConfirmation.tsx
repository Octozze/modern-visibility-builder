
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DevisConfirmationProps {
  devisNumber: string;
  devisData: any;
}

const DevisConfirmation = ({ devisNumber, devisData }: DevisConfirmationProps) => {
  const { toast } = useToast();

  const formattedDate = new Date(devisData.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleDownloadPDF = () => {
    // Dans une application réelle, générez un PDF ici 
    // avec une bibliothèque comme jsPDF
    toast({
      title: "Téléchargement du PDF",
      description: "Votre devis au format PDF sera bientôt disponible.",
    });
  };

  const handleSendEmail = () => {
    // Dans une application réelle, envoyez un email ici
    toast({
      title: "Email envoyé",
      description: "Une copie de votre devis a été envoyée à votre adresse email.",
    });
  };

  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-green-100 text-green-700 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Merci pour votre demande !</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Votre demande de devis a été enregistrée avec succès. Voici un récapitulatif des informations que vous nous avez transmises.
          </p>
        </div>

        <Card className="mb-8 border-green-200 shadow-md">
          <CardHeader className="bg-green-50 border-b border-green-100">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl">Devis #{devisNumber}</CardTitle>
                <CardDescription>Généré le {formattedDate}</CardDescription>
              </div>
              <div className="text-right">
                <p className="font-semibold text-2xl text-secondary">{devisData.totalPrice}€</p>
                <p className="text-xs text-muted-foreground">Estimation</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Informations de contact</h3>
                <p className="font-medium">{devisData.prenom} {devisData.nom}</p>
                <p>{devisData.email}</p>
                {devisData.telephone && <p>{devisData.telephone}</p>}
                {devisData.entreprise && <p>{devisData.entreprise}</p>}
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Détails du projet</h3>
                <p>
                  <span className="font-medium">Type de site:</span>{" "}
                  {devisData.websiteType === "vitrine" && "Site vitrine"}
                  {devisData.websiteType === "boutique" && "Site e-commerce"}
                  {devisData.websiteType === "blog" && "Blog"}
                  {devisData.websiteType === "application" && "Application web"}
                  {devisData.websiteType === "landing" && "Landing page"}
                </p>
                <p><span className="font-medium">Nombre de pages:</span> {devisData.pagesCount}</p>
                {devisData.delai && (
                  <p>
                    <span className="font-medium">Délai souhaité:</span>{" "}
                    {devisData.delai === "urgent" && "Urgent (< 1 mois)"}
                    {devisData.delai === "normal" && "Standard (1-2 mois)"}
                    {devisData.delai === "flexible" && "Flexible (2-3 mois)"}
                    {devisData.delai === "long" && "Long terme (3+ mois)"}
                  </p>
                )}
              </div>
            </div>
            
            {devisData.optionsList.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Options sélectionnées</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {devisData.optionsList.map((option: string) => (
                    <li key={option} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      {option === "design" && "Design sur mesure"}
                      {option === "responsive" && "Responsive design"}
                      {option === "seo" && "Optimisation SEO"}
                      {option === "multilingual" && "Multi-langues"}
                      {option === "security" && "Sécurité renforcée"}
                      {option === "maintenance" && "Contrat de maintenance"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {devisData.message && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Message</h3>
                <p className="text-sm whitespace-pre-wrap">{devisData.message}</p>
              </div>
            )}
            
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Un membre de notre équipe vous contactera sous 24 à 48 heures pour discuter plus en détail de votre projet et vous fournir un devis définitif. Si vous avez des questions, n'hésitez pas à nous contacter à contact@webvista.fr
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleDownloadPDF} variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Télécharger en PDF
          </Button>
          <Button onClick={handleSendEmail} variant="outline" className="gap-2">
            <Send className="h-4 w-4" />
            Recevoir par email
          </Button>
          <Button onClick={() => window.location.href = "/"} className="bg-secondary hover:bg-secondary/90 gap-2">
            Retour à l'accueil
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DevisConfirmation;
