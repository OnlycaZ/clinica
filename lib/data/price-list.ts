export type PriceListItem = {
  name: string;
  price: string;
  info?: string;
};

export type PriceListSection = {
  code: string;
  title: string;
  description: string;
  items: PriceListItem[];
};

export const priceListSections: PriceListSection[] = [
  {
    code: "FAV",
    title: "Tratamente si tarife favorite",
    description: "Pachetele cu cele mai multe solicitari in clinica DentNow.",
    items: [
      { name: "Consultatie primara", price: "150 lei" },
      { name: "Igienizare Guided Biofilm Therapy", price: "320 lei", info: "Redusa de la 400 lei" },
      { name: "Pachet consultatie + igienizare completa", price: "350 lei", info: "In loc de 550 lei" },
      {
        name: "Pachet consultatie + igienizare + radiografie panoramica",
        price: "390 lei",
        info: "In loc de 650 lei"
      },
      { name: "Pachet consultatie + radiografie panoramica", price: "190 lei", info: "In loc de 250 lei" },
      { name: "Implant dentar", price: "1490 lei", info: "Redus de la 2500 lei" },
      { name: "Obturatie superficiala", price: "290 lei", info: "Redusa de la 350 lei" },
      { name: "Obturatie profunda", price: "350 lei", info: "Redusa de la 440 lei" },
      { name: "Aparat dentar bracketi metalici / arcada", price: "2500 lei" },
      { name: "Alignere / arcada", price: "de la 1250 lei", info: "Gutiere dedicate indreptarii dintilor" },
      { name: "Extractie dinte prezent pe arcada", price: "180 - 250 lei" },
      { name: "Sigilare / dinte (copii)", price: "130 - 170 lei" },
      { name: "Fluorizare / arcada (copii)", price: "50 lei" },
      { name: "Albire dentara BlancOne Click", price: "390 lei", info: "Redusa de la 590 lei" },
      { name: "Tratament endodontic cu lupe", price: "300 - 600 lei" },
      { name: "Tratament endodontic la microscop", price: "500 - 800 lei" },
      { name: "Retratament endodontic", price: "600 - 900 lei" }
    ]
  },
  {
    code: "CON",
    title: "Consultatii si igienizari",
    description: "Evaluari medicale si igienizari Guided Biofilm Therapy.",
    items: [
      { name: "Igienizare completa GBT", price: "320 lei", info: "Redusa de la 400 lei" },
      { name: "Consultatie primara", price: "150 lei" },
      { name: "Consultatie medic specialist", price: "150 lei" },
      { name: "Pachet consultatie + igienizare completa", price: "350 lei", info: "Oferta DentNow" },
      {
        name: "Pachet consultatie + igienizare + radiografie panoramica",
        price: "390 lei",
        info: "Economisesti 260 lei fata de tariful standard"
      },
      { name: "Pachet consultatie + radiografie panoramica", price: "190 lei", info: "In loc de 250 lei" }
    ]
  },
  {
    code: "PARO",
    title: "Parodontologie",
    description: "Interventii minim invazive pentru controlul bolii parodontale.",
    items: [
      { name: "Chiuretaj in camp deschis / hemiarcada", price: "1200 lei" },
      { name: "Chiuretaj in camp deschis / dinte", price: "200 lei" },
      { name: "Chiuretaj in camp inchis / dinte", price: "100 lei" },
      { name: "Alungire coronara / dinte", price: "200 lei" },
      { name: "Full mouth disinfection", price: "900 lei" },
      { name: "Tratament de urgenta parodontal", price: "150 lei" }
    ]
  },
  {
    code: "PRO1",
    title: "Protetica dentara - Proteze",
    description: "Solutii mobile si mobilizabile realizate in laboratorul DentNow.",
    items: [
      { name: "Proteza totala acrilica", price: "1600 lei" },
      { name: "Proteza partiala acrilica", price: "1500 lei" },
      { name: "Proteza totala flexibila", price: "2000 lei" },
      { name: "Proteza partiala flexibila", price: "1800 lei" },
      { name: "Proteza scheletata mobilizabila", price: "2500 lei" },
      { name: "Proteza partiala mobilizabila", price: "2500 lei" },
      { name: "Supraproteza pe implanturi", price: "12000 lei", info: "Include extractiile necesare" },
      { name: "Reconstructie corono-radiculara zirconiu", price: "700 lei" },
      { name: "Proteza provizorie partiala Kemeny (element)", price: "250 lei" },
      { name: "Ablatie lucrare protetica / element", price: "120 lei" }
    ]
  },
  {
    code: "PRO2",
    title: "Protetica dentara - Coroane si fatete",
    description: "Restaurari fixe din ceramica, zirconiu si E-MAX.",
    items: [
      { name: "Coroana metalo-ceramica", price: "810 lei" },
      { name: "Coroana ceramica pe zirconiu - Standard", price: "1300 lei" },
      { name: "Coroana ceramica pe zirconiu - Premium", price: "1600 lei" },
      { name: "Coroana integral zirconiu - Standard", price: "1300 lei" },
      { name: "Coroana integral zirconiu - Premium", price: "1600 lei" },
      { name: "Coroana integral ceramica", price: "1500 lei" },
      { name: "Gutiere bruxism / arcada", price: "350 lei" },
      { name: "Gutiere pentru inaltarea ocluziei", price: "250 lei" },
      { name: "Incrustatie integral zirconiu", price: "800 lei" },
      { name: "Incrustatie ceramica E-MAX", price: "1650 lei" },
      { name: "Coroana provizorie", price: "200 lei" },
      { name: "Fateta ceramica E-MAX", price: "1900 lei" }
    ]
  },
  {
    code: "IMP",
    title: "Implantologie",
    description: "Planuri pe implante unice sau arcade intregi.",
    items: [
      { name: "Implant dentar Standard", price: "1490 lei" },
      { name: "Implant dentar Premium", price: "de la 2190 lei" },
      {
        name: "All-on-4 (lucrare provizorie inclusa)",
        price: "13000 lei",
        info: "Redus de la 30000 lei"
      },
      {
        name: "All-on-6 (lucrare provizorie inclusa)",
        price: "16000 lei",
        info: "Redus de la 35000 lei"
      },
      { name: "Coroana metalo-ceramica pe implant", price: "910 lei" },
      { name: "Coroana ceramica pe implant", price: "1600 lei" },
      { name: "Coroana integral zirconiu pe implant", price: "1700 lei" },
      { name: "Descoperire de implant", price: "350 lei" }
    ]
  },
  {
    code: "ODO",
    title: "Odontoterapie",
    description: "Plombe estetice si tratamente de desensibilizare.",
    items: [
      { name: "Obturatie compozit profunda", price: "300 lei", info: "Redusa de la 440 lei" },
      { name: "Obturatie compozit superficiala", price: "220 lei", info: "Redusa de la 350 lei" },
      { name: "Tratament desensibilizare (ambele arcade)", price: "200 lei" },
      { name: "Obturatie fizionomica grup frontal/MOD", price: "390 - 420 lei" }
    ]
  },
  {
    code: "ORTO",
    title: "Ortodontie",
    description: "Aparate fixe, mobilizabile si alignere pentru toate varstele.",
    items: [
      { name: "Aparat dentar bracketi metalici / arcada", price: "2500 lei" },
      { name: "Aparat metalic fizionomic / arcada", price: "2800 lei" },
      { name: "Aparat bracketi safir / arcada", price: "3500 lei" },
      { name: "Aparat autoligaturant / arcada", price: "3900 lei" },
      { name: "Control lunar aparat fix (2 arcade)", price: "200 lei" },
      { name: "Alignere / arcada", price: "de la 1250 lei" },
      { name: "Indepartare aparat fix / arcada", price: "200 lei" },
      { name: "Mini-implant ortodontic", price: "700 lei" },
      { name: "Aparat mobil", price: "1400 lei" },
      { name: "Aparat activator", price: "1500 lei" }
    ]
  },
  {
    code: "CHIR",
    title: "Chirurgie dentara - Extractii",
    description: "Interventii rapide pentru extractii si pregatire protetica.",
    items: [
      { name: "Extractie masea de minte", price: "390 lei" },
      { name: "Extractie masea de minte semi-inclusa", price: "720 lei" },
      { name: "Extractie masea de minte inclusa", price: "970 lei" },
      { name: "Extractie alti dinti inclusi", price: "600 lei" },
      { name: "Extractie canin inclus", price: "800 lei" },
      { name: "Extractie resturi radiculare irecuperabile", price: "250 lei" },
      { name: "Extractie monoradicular", price: "180 lei" },
      { name: "Extractie pluriradicular", price: "250 lei" },
      { name: "Lifting sinusal intern", price: "2500 lei" },
      { name: "Lifting sinusal extern", price: "3500 lei" }
    ]
  },
  {
    code: "CHIR+",
    title: "Chirurgie dentara - Regenerari",
    description: "Lucrari adjuvante implanturilor si refacerii tesuturilor.",
    items: [
      { name: "Regularizare de creasta / hemiarcada", price: "600 lei" },
      { name: "Augmentare de cresta alveolara", price: "1000 - 3000 lei", info: "In functie de grefa" },
      { name: "Inchidere comunicare oro-sinusala", price: "de la 600 lei" },
      { name: "Extirpare formatiuni benigne intraorale", price: "500 lei" },
      { name: "Rezectie apicala / radacina", price: "500 lei" },
      { name: "Extirpare cicatrici vicioase intraorale", price: "400 lei" },
      { name: "Extirpare alte formatiuni intraorale", price: "de la 400 lei" }
    ]
  },
  {
    code: "PED",
    title: "Pedodontie - Ingrijire zilnica",
    description: "Profilaxie si restaurari blande pentru copii.",
    items: [
      { name: "Consultatie primara copil", price: "150 lei" },
      { name: "Igienizare 6-11 ani (ambele arcade)", price: "250 lei" },
      { name: "Igienizare 12-18 ani (ambele arcade)", price: "320 lei" },
      { name: "Fluorizare / arcada", price: "50 lei" },
      { name: "Obturatie fizionomica profunda dinte permanent", price: "370 lei" },
      { name: "Obturatie fizionomica superficiala dinte permanent", price: "280 lei" },
      { name: "Sigilare dinte permanent", price: "170 lei" },
      { name: "Sigilare dinte temporar", price: "130 lei" },
      { name: "Obturatie superficiala dinte temporar", price: "150 lei" },
      { name: "Obturatie profunda dinte temporar", price: "200 lei" },
      { name: "Obturatie dinte permanent cu glassionomer", price: "250 lei" },
      { name: "Obturatie preventiva profunda", price: "250 lei" },
      { name: "Obturatie preventiva superficiala", price: "200 lei" }
    ]
  },
  {
    code: "PED+",
    title: "Pedodontie - Interventii",
    description: "Tratamente complexe si gestionarea urgentelor pediatrice.",
    items: [
      { name: "Extractie dinte temporar fara mobilitate", price: "150 lei" },
      { name: "Extractie dinte temporar mobil", price: "100 lei" },
      { name: "Extractie dinte temporar - rest radicular", price: "100 lei" },
      { name: "Sedinta tratament intermediar", price: "100 lei" },
      { name: "Sedinta de acomodare", price: "100 lei" },
      { name: "Pulpotomie dinte temporar (obturatie inclusa)", price: "250 lei" },
      { name: "Pulpectomie dinte temporar / radacina", price: "100 lei" },
      { name: "Reconstructie dinte temporar post-traumatism", price: "180 lei" },
      { name: "Reconstructie dinte definitiv post-traumatism", price: "300 lei" },
      { name: "Reatasare fragment dentar", price: "200 lei" },
      { name: "Replantare dinte definitiv", price: "400 lei" },
      { name: "Tratament de urgenta pediatric", price: "150 lei" }
    ]
  },
  {
    code: "COS",
    title: "Cosmetica dentara",
    description: "Albiri profesionale si tratamente pentru dintii devitali.",
    items: [
      { name: "Albire dentara profesionala (cu lampa)", price: "390 lei", info: "Reducere de la 590 lei" },
      { name: "Albire in gutiere / ambele arcade", price: "900 lei" },
      { name: "Albire dinti devitali / dinte", price: "30 lei" }
    ]
  },
  {
    code: "ENDO",
    title: "Endodontie - Tratamente primare",
    description: "Lucrari realizate cu lupe sau microscop operator.",
    items: [
      { name: "Reconstructie preendodontica", price: "150 lei" },
      {
        name: "Tratament endodontic monoradicular cu microscop",
        price: "500 lei",
        info: "Per primam"
      },
      { name: "Tratament endodontic biradicular cu microscop", price: "700 lei" },
      { name: "Tratament endodontic pluriradicular cu microscop", price: "800 lei" },
      { name: "Tratament endodontic biradicular cu lupe", price: "500 lei" },
      { name: "Tratament endodontic monoradicular cu lupe", price: "300 lei" },
      { name: "Tratament endodontic pluriradicular cu lupe", price: "600 lei" }
    ]
  },
  {
    code: "ENDO+",
    title: "Endodontie - Retratamente si proceduri",
    description: "Refaceri, inchideri de perforatii si drenaje.",
    items: [
      { name: "Retratament endodontic monoradicular cu microscop", price: "600 lei" },
      { name: "Retratament endodontic biradicular cu microscop", price: "800 lei" },
      { name: "Retratament endodontic pluriradicular cu microscop", price: "900 lei" },
      { name: "Pivot fibra + build", price: "250 lei" },
      { name: "Inchidere perforatie (MTA)", price: "250 lei" },
      { name: "Inchidere apex / radacina", price: "150 lei" },
      { name: "Indepartare RCR / dinte", price: "200 lei" },
      { name: "Indepartare corp strain / radacina", price: "250 lei" },
      { name: "Drenaj endodontic cu pansament calmant", price: "150 lei" }
    ]
  }
];

const priceSectionIndex = priceListSections.reduce<Record<string, PriceListSection>>((acc, section) => {
  acc[section.code] = section;
  return acc;
}, {});

export const slugPriceMap: Record<string, string[]> = {
  general: ["FAV", "CON"],
  profilaxie: ["CON"],
  implantologie: ["IMP"],
  parodontologie: ["PARO"],
  odontologie: ["ODO"],
  ortodontie: ["ORTO"],
  chirurgie: ["CHIR", "CHIR+"],
  pedodontie: ["PED", "PED+"],
  "protetica-dentara": ["PRO1", "PRO2"],
  endodontie: ["ENDO", "ENDO+"],
  "cosmetica-dentara": ["COS"],
  "estetica-dentara": ["PRO2", "COS"],
  radiologie: ["CON"]
};

export function getPriceSectionsForSlug(slug: string) {
  const codes = slugPriceMap[slug] ?? [];
  return codes.map((code) => priceSectionIndex[code]).filter((section): section is PriceListSection => Boolean(section));
}
