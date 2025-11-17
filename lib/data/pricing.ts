import { getServiceContent } from "./services";

export type PricePageContent = {
  title: string;
  category: string;
  price: string;
  subtitle: string;
  description: string[];
  includes: string[];
  addOns: string[];
  financing: string[];
  image: string;
  serviceSlug?: string;
};

const basePricePages: Record<string, PricePageContent> = {
  "fatete-integral-ceramice": {
    title: "Fatete integral ceramice",
    category: "Estetica premium",
    price: "de la 1 450 lei / dinte",
    subtitle: "Design digital complet, mock-up si garantie extinsa 5 ani.",
    description: [
      "Pachetul include analiza foto-video, mock-up fizic, sedinte de adaptare si aplicare finala in laboratorul intern.",
      "Materialele provin din ceramica stratificata cu transluciditate naturala, iar culoarea este verificata in lumina neutra."
    ],
    includes: ["Mock-up vizual si functional", "Sedinta de pregatire minim invaziva", "Aplicare fatete + control 48h"],
    addOns: ["Optiune Express in 5 zile", "Set gutiere protectie noapte", "Retus cromatic gratuit 12 luni"],
    financing: ["Plata in 4 rate fara dobanda", "Posibilitate leasing medical", "Reducere 5% pentru plata integrala"],
    image: "/dentnow-service-fatete.jpg",
    serviceSlug: "fatete"
  },
  "albire-profesionala": {
    title: "Albire profesionala",
    category: "Estetica premium",
    price: "980 RON / sedinta",
    subtitle: "Protocol clinic controlat pentru un zambet luminos si sanatos.",
    description: [
      "Realizam igienizare completa, protectie gingivala si doua cicluri de albire activate cu lampa profesionala.",
      "Primesti gutiere personalizate si gel pentru retusuri acasa, plus instructiuni clare pentru mentenanta."
    ],
    includes: ["Igienizare profesionala", "Albire in cabinet 40 minute", "Kit acasa pentru 2 saptamani"],
    addOns: ["Sedinta suplimentara -20%", "Protectie sensibility boost", "Program de mentenanta 6 luni"],
    financing: ["Plata in clinica sau online", "Gift card-uri disponibile"],
    image: "/dentnow-service-albirea-dintilor.jpg",
    serviceSlug: "albirea-dintilor"
  },
  "mock-up-digital": {
    title: "Mock-up digital",
    category: "Estetica premium",
    price: "450 lei",
    subtitle: "Simuleaza zambetul final inainte de orice interventie estetica.",
    description: [
      "Colectam scanari si materiale foto, apoi construim digital noul zambet. Il poti testa in cabinet sau in format AR.",
      "Mock-up-ul se poate integra ulterior in orice tratament protetic sau ortodontic."
    ],
    includes: ["Scanare 3D + fotografie profesionala", "Prezentare video a conceptului", "Adaptare in gura a mock-up-ului"],
    addOns: ["Retus suplimentar gratuit", "Rapoarte PDF pentru parteneri"],
    financing: ["Se deduce din costul final al tratamentului daca il continui la DentNow"],
    image: "/dentnow-service-fatete.jpg",
    serviceSlug: "fatete"
  },
  "implant-ghidat-digital": {
    title: "Implant ghidat digital",
    category: "Implantologie",
    price: "de la 3 200 lei / arcadă",
    subtitle: "Ghiduri chirurgicale printate 3D si provizorii estetice in aceeasi zi.",
    description: [
      "Pretul include planificarea digitala, ghidurile fizice, interventia si proteza provizorie.",
      "Sedarea este asigurata de echipa de anestezie, iar monitorizarea continua 48h este inclusa."
    ],
    includes: ["Plan 3D + print ghid", "Interventie + provizoriu imediat", "Controale 1, 7 si 30 zile"],
    addOns: ["Upgrade zirconiu stratificat", "Program complet de igienizare 12 luni"],
    financing: ["Rate fixe pana la 24 luni", "Plan corporate pentru companii"],
    image: "/dentnow-service-implantologie.jpg",
    serviceSlug: "implantologie-ghidata"
  },
  "all-on-4": {
    title: "All-on-4",
    category: "Implantologie",
    price: "de la 8 900 lei / arcadă",
    subtitle: "Reabilitare completa cu doar patru implanturi si suport logistic dedicat.",
    description: [
      "Include interventia, sedarea, provizoriu screw-retained si analizele pre-operatorii.",
      "Pacientii beneficiaza de cazare partenera si transfer aeroport, daca este necesar."
    ],
    includes: ["Consult interdisciplinar", "Interventie All-on-4", "Provizorii + ajustari"],
    addOns: ["Upgrade All-on-6", "Garantii extinse 10 ani"],
    financing: ["Rate fixe 24 luni", "Posibilitate plata in EUR/USD"],
    image: "/dentnow-service-implantologie.jpg",
    serviceSlug: "implantologie-ghidata"
  },
  "sinus-lift": {
    title: "Sinus lift",
    category: "Implantologie",
    price: "de la 2 100 lei",
    subtitle: "Tehnici piezo si biomateriale premium pentru augmentari predictibile.",
    description: [
      "Include evaluare CBCT, interventie, biomateriale si controale foto.",
      "Lucram cu anestezie locala si, la cerere, sedare constienta."
    ],
    includes: ["CBCT + plan 3D", "Interventie + biomaterial", "Kit ingrijire 7 zile"],
    addOns: ["PRF pentru vindecare accelerata", "Sedare intravenoasa"],
    financing: ["Plata integrala sau rate 6 luni"],
    image: "/dentnow-service-implantologie.jpg",
    serviceSlug: "implantologie-ghidata"
  },
  "consultatie-atm": {
    title: "Consultatie ATM",
    category: "Terapie functionala",
    price: "600 RON",
    subtitle: "Analiza functionala completa, electromiografie si plan integrat.",
    description: [
      "Incluse: consult stomatologic, electromiografie si raport scris.",
      "Rezultatul este discutat cu fizioterapeutul pentru eventuale sedinte suplimentare."
    ],
    includes: ["Consult + EMG", "Raport scris", "Recomandari personalizate"],
    addOns: ["Sedinta fizio la pret preferential", "Gutiere terapeutice -10%"],
    financing: ["Plata la receptie sau online"],
    image: "/dentnow-service-reabilitare-atm.jpg",
    serviceSlug: "reabilitare-atm"
  },
  "plan-aligners": {
    title: "Plan aligners",
    category: "Terapie functionala",
    price: "de la 2 800 lei",
    subtitle: "Alignere transparente cu monitorizare digitala si coaching lunar.",
    description: [
      "Include plan 3D, livrare 6 seturi alignere si controale video.",
      "Vizitele fizice se planifica la fiecare 3 luni sau la cerere."
    ],
    includes: ["Scanare + plan digital", "Produse alignere", "Aplicatie de monitorizare"],
    addOns: ["Retainere finale", "Kit albire pentru final"],
    financing: ["Rate 18 luni", "Discount 5% plata integrala"],
    image: "/dentnow-service-ortodontie.jpg",
    serviceSlug: "ortodontie-invizibila"
  },
  "gutiere-bruxism": {
    title: "Gutiere pentru bruxism",
    category: "Terapie functionala",
    price: "520 RON",
    subtitle: "Protectie personalizata realizata din materiale hipoalergenice.",
    description: [
      "Include consult, scanare si livrarea gutierei in 48h.",
      "Pacientii primesc instructiuni de uzura si kit de curatare."
    ],
    includes: ["Scanare digitala", "Gutie personalizata", "Control ajustare"],
    addOns: ["Box portabil premium", "Plan fizio bruxism"],
    financing: ["Plata integrala / card"],
    image: "/dentnow-service-gutiere.jpg",
    serviceSlug: "gutiere-personalizate"
  }
};


const pricePages: Record<string, PricePageContent> = { ...basePricePages };

Object.entries(pricePages).forEach(([slug, data]) => {
  const hero = getServiceContent(data.serviceSlug ?? slug)?.heroImage;
  if (hero) {
    data.image = hero;
  }
});

const priceCategoryAliases: Record<
  string,
  { base: string; title: string; category?: string; subtitle?: string; serviceSlug?: string }
> = {
  general: { base: "mock-up-digital", title: "General", serviceSlug: "general" },
  chirurgie: { base: "implant-ghidat-digital", title: "Chirurgie", serviceSlug: "chirurgie" },
  "cosmetica-dentara": { base: "fatete-integral-ceramice", title: "Cosmetica dentara", serviceSlug: "cosmetica-dentara" },
  endodontie: { base: "consultatie-atm", title: "Endodontie", serviceSlug: "endodontie" },
  "estetica-dentara": { base: "albire-profesionala", title: "Estetica dentara", serviceSlug: "estetica-dentara" },
  implantologie: { base: "implant-ghidat-digital", title: "Implantologie", serviceSlug: "implantologie" },
  odontologie: { base: "mock-up-digital", title: "Odontologie", serviceSlug: "odontologie" },
  ortodontie: { base: "plan-aligners", title: "Ortodontie", serviceSlug: "ortodontie" },
  parodontologie: { base: "consultatie-atm", title: "Parodontologie", serviceSlug: "parodontologie" },
  profilaxie: { base: "albire-profesionala", title: "Profilaxie", serviceSlug: "profilaxie" },
  pedodontie: { base: "gutiere-bruxism", title: "Pedodontie", serviceSlug: "pedodontie" },
  "protetica-dentara": { base: "fatete-integral-ceramice", title: "Protetica dentara", serviceSlug: "protetica-dentara" },
  radiologie: { base: "implant-ghidat-digital", title: "Radiologie", serviceSlug: "radiologie" }
};

Object.entries(priceCategoryAliases).forEach(([alias, config]) => {
  const base = pricePages[config.base];
  if (!base) {
    return;
  }
  const serviceSlug = config.serviceSlug ?? alias;
  const hero = getServiceContent(serviceSlug)?.heroImage;
  pricePages[alias] = {
    ...base,
    title: config.title,
    category: config.category ?? base.category,
    subtitle: config.subtitle ?? base.subtitle,
    serviceSlug,
    image: hero ?? base.image
  };
});


export const priceSlugs = Object.keys(pricePages);

export function getPriceContent(slug: string) {
  return pricePages[slug];
}

export function getPricePreview(slug: string) {
  const data = getPriceContent(slug);
  if (!data) {
    return null;
  }
  const summary = data.description?.[0] ?? data.subtitle;
  return {
    title: data.title,
    description: summary ?? "",
    image: data.image
  };
}

