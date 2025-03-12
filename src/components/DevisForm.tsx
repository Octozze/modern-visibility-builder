import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Calculator, Send, Plus, Minus, Monitor, Smartphone, Brush, Search, ShieldCheck, RefreshCw, Globe } from "lucide-react";

const websiteTypes = [
  { id: "vitrine", label: "Site vitrine", basePrice: 550 },
];

const options = [
  { id: "design", label: "Design sur mesure", price: 800, icon: <Brush className="mr-2 h-4 w-4" /> },
  { id: "responsive", label: "Responsive design", price: 400, icon: <Smartphone className="mr-2 h-4 w-4" /> },
  { id: "seo", label: "Optimisation SEO", price: 600, icon: <Search className="mr-2 h-4 w-4" /> },
  { id: "multilingual", label: "Multi-langues", price: 500, icon: <Globe className="mr-2 h-4 w-4" /> },
  { id: "security", label: "Sécurité renforcée", price: 700, icon: <ShieldCheck className="mr-2 h-4 w-4" /> },
  { id: "maintenance", label: "Contrat de maintenance", price: 300, icon: <RefreshCw className="mr-2 h-4 w-4" /> },
];

const DevisForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    entreprise: "",
    websiteType: "",
    pagesCount: 5,
    optionsList: [] as string[],
    delai: "",
    budget: "",
    message: "",
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    let price = 0;
    
    const selectedType = websiteTypes.find((type) => type.id === formData.websiteType);
    if (selectedType) {
      price += selectedType.basePrice;
    }
    
    if (formData.pagesCount > 5) {
      price += (formData.pagesCount - 5) * 150;
    }
    
    formData.optionsList.forEach((optionId) => {
      const option = options.find((opt) => opt.id === optionId);
      if (option) {
        price += option.price;
      }
    });
    
    setTotalPrice(price);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePagesCountChange = (operation: 'add' | 'subtract') => {
    setFormData((prev) => ({
      ...prev,
      pagesCount: operation === 'add' 
        ? Math.min(prev.pagesCount + 1, 30) 
        : Math.max(prev.pagesCount - 1, 1)
    }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, pagesCount: value[0] }));
  };

  const handleOptionToggle = (optionId: string) => {
    setFormData((prev) => {
      const isSelected = prev.optionsList.includes(optionId);
      
      return {
        ...prev,
        optionsList: isSelected
          ? prev.optionsList.filter((id) => id !== optionId)
          : [...prev.optionsList, optionId]
      };
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Format d'email invalide";
    if (!formData.websiteType) newErrors.websiteType = "Veuillez sélectionner un type de site";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        ...formData,
        totalPrice,
        date: new Date().toISOString(),
      });
      
      toast({
        title: "Devis en cours de traitement",
        description: "Nous préparons votre devis personnalisé...",
      });
    } else {
      toast({
        title: "Erreur dans le formulaire",
        description: "Veuillez corriger les erreurs dans le formulaire.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Informations de contact</CardTitle>
            <CardDescription>Parlez-nous de vous et de votre projet</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form id="devis-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom*</Label>
                  <Input 
                    id="prenom" 
                    name="prenom" 
                    placeholder="Votre prénom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className={errors.prenom ? "border-destructive" : ""}
                  />
                  {errors.prenom && <p className="text-sm text-destructive">{errors.prenom}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom*</Label>
                  <Input 
                    id="nom" 
                    name="nom" 
                    placeholder="Votre nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className={errors.nom ? "border-destructive" : ""}
                  />
                  {errors.nom && <p className="text-sm text-destructive">{errors.nom}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input 
                    id="telephone" 
                    name="telephone" 
                    placeholder="Votre numéro de téléphone"
                    value={formData.telephone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="entreprise">Nom de l'entreprise</Label>
                <Input 
                  id="entreprise" 
                  name="entreprise" 
                  placeholder="Nom de votre entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                />
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">Détails du projet</h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="websiteType">Type de site*</Label>
                    <Select 
                      value={formData.websiteType} 
                      onValueChange={(value) => handleSelectChange("websiteType", value)}
                    >
                      <SelectTrigger id="websiteType" className={errors.websiteType ? "border-destructive" : ""}>
                        <SelectValue placeholder="Sélectionnez un type de site" />
                      </SelectTrigger>
                      <SelectContent>
                        {websiteTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.label} (à partir de {type.basePrice}€)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.websiteType && <p className="text-sm text-destructive">{errors.websiteType}</p>}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label>Nombre de pages : {formData.pagesCount}</Label>
                      <div className="flex items-center gap-2">
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="icon" 
                          onClick={() => handlePagesCountChange('subtract')}
                          disabled={formData.pagesCount <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{formData.pagesCount}</span>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="icon" 
                          onClick={() => handlePagesCountChange('add')}
                          disabled={formData.pagesCount >= 30}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Slider 
                      value={[formData.pagesCount]} 
                      min={1} 
                      max={30} 
                      step={1}
                      onValueChange={handleSliderChange}
                    />
                    <p className="text-sm text-muted-foreground">
                      {formData.pagesCount <= 5 
                        ? "Les 5 premières pages sont incluses dans le prix de base." 
                        : `Les pages supplémentaires (${formData.pagesCount - 5}) sont facturées 150€ par page.`
                      }
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Options et fonctionnalités supplémentaires</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {options.map((option) => (
                        <div 
                          key={option.id} 
                          className={`flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-accent transition-colors ${
                            formData.optionsList.includes(option.id) ? 'bg-accent border-primary' : ''
                          }`}
                          onClick={() => handleOptionToggle(option.id)}
                        >
                          <Checkbox 
                            id={`option-${option.id}`}
                            checked={formData.optionsList.includes(option.id)}
                            onCheckedChange={() => handleOptionToggle(option.id)}
                          />
                          <div className="flex-1">
                            <div className="flex items-center">
                              {option.icon}
                              <Label 
                                htmlFor={`option-${option.id}`}
                                className="cursor-pointer"
                              >
                                {option.label}
                              </Label>
                            </div>
                            <p className="text-sm text-muted-foreground">+{option.price}€</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="delai">Délai souhaité</Label>
                      <Select 
                        value={formData.delai} 
                        onValueChange={(value) => handleSelectChange("delai", value)}
                      >
                        <SelectTrigger id="delai">
                          <SelectValue placeholder="Sélectionnez un délai" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent ({"< 1 mois"})</SelectItem>
                          <SelectItem value="normal">Standard (1-2 mois)</SelectItem>
                          <SelectItem value="flexible">Flexible (2-3 mois)</SelectItem>
                          <SelectItem value="long">Long terme (3+ mois)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget approximatif</Label>
                      <Select 
                        value={formData.budget} 
                        onValueChange={(value) => handleSelectChange("budget", value)}
                      >
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Sélectionnez une fourchette" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">{"< 1 000€"}</SelectItem>
                          <SelectItem value="medium">1 000€ - 3 000€</SelectItem>
                          <SelectItem value="large">3 000€ - 5 000€</SelectItem>
                          <SelectItem value="enterprise">5 000€+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Détails supplémentaires sur votre projet</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Décrivez vos besoins spécifiques, fonctionnalités souhaitées, inspirations..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">Votre devis</CardTitle>
              <Calculator className="h-6 w-6 text-secondary" />
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {formData.websiteType && (
                  <div className="flex justify-between py-1">
                    <span className="text-sm">
                      {websiteTypes.find(t => t.id === formData.websiteType)?.label || ""}
                    </span>
                    <span className="font-medium">
                      {websiteTypes.find(t => t.id === formData.websiteType)?.basePrice || 0}€
                    </span>
                  </div>
                )}
                
                {formData.pagesCount > 5 && (
                  <div className="flex justify-between py-1">
                    <span className="text-sm">
                      Pages supplémentaires ({formData.pagesCount - 5})
                    </span>
                    <span className="font-medium">
                      {(formData.pagesCount - 5) * 150}€
                    </span>
                  </div>
                )}
                
                {formData.optionsList.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <p className="text-sm font-medium">Options sélectionnées:</p>
                    {formData.optionsList.map(optionId => {
                      const option = options.find(o => o.id === optionId);
                      return option ? (
                        <div key={option.id} className="flex justify-between">
                          <span className="text-sm ml-2">- {option.label}</span>
                          <span className="font-medium">{option.price}€</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total estimé</span>
                  <span className="text-xl font-bold text-secondary">{totalPrice}€</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Ce montant est une estimation basée sur les informations fournies. 
                  Le prix final peut varier en fonction des spécificités détaillées de votre projet.
                </p>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                type="submit" 
                form="devis-form" 
                className="w-full bg-secondary hover:bg-secondary/90 gap-2"
              >
                <Send className="h-4 w-4" />
                Demander mon devis personnalisé
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DevisForm;
