
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DevisForm from "@/components/DevisForm";
import DevisConfirmation from "@/components/DevisConfirmation";

const Devis = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [devisNumber, setDevisNumber] = useState("");
  const [devisData, setDevisData] = useState<any>(null);

  const handleDevisSubmit = (data: any) => {
    // Générer un numéro de devis unique
    const uniqueId = Date.now().toString().slice(-6);
    const devisNum = `WV-${uniqueId}`;
    
    setDevisNumber(devisNum);
    setDevisData(data);
    setIsSubmitted(true);
    
    // Dans un environnement réel, on enverrait les données au backend ici
    console.log("Devis soumis:", { ...data, devisNumber: devisNum });
  };

  return (
    <>
      <Helmet>
        <title>Demander un devis | WebVista</title>
        <meta 
          name="description" 
          content="Demandez un devis gratuit pour votre projet de site web. Estimez le coût de votre site et recevez une proposition personnalisée." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-12">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">Demandez votre devis personnalisé</h1>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Remplissez le formulaire ci-dessous pour recevoir une estimation précise de votre projet web. 
                    Notre calculateur vous donnera un aperçu instantané du coût.
                  </p>
                </div>
                
                <DevisForm onSubmit={handleDevisSubmit} />
              </>
            ) : (
              <DevisConfirmation devisNumber={devisNumber} devisData={devisData} />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Devis;
