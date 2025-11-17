export type ServiceContent = {
  title: string;
  category: string;
  subtitle: string;
  tags: string[];
  heroImage: string;
  heroGradient: string;
  overview: string[];
  benefits: string[];
  highlights: Array<{ title: string; description: string }>;
  steps: string[];
  faq: Array<{ question: string; answer: string }>;
  layout?: "split" | "center" | "reverse";
  stats?: Array<{ label: string; value: string }>;
  quote?: { text: string; author: string };
  secondaryImage?: string;
};

const baseServicePages: Record<string, ServiceContent> = {
  "chirurgie-orala": {
    title: "Chirurgie orala",
    category: "Chirurgie",
    subtitle: "Interventii minim invazive planificate digital pentru confort maxim.",
    tags: ["Planificare 3D", "Sedare constienta", "Vindecare accelerata"],
    heroImage: "/dentnow-service-chirurgie-orala.jpg",
    heroGradient: "linear-gradient(135deg, rgba(18,75,60,0.85), rgba(0,194,199,0.35))",
    layout: "split",
    stats: [
      { label: "Sedare ghidata", value: "98% confort" },
      { label: "Monitorizare", value: "24/7" },
      { label: "Vindecare", value: "< 7 zile" }
    ],
    quote: {
      text: "Pacientii se simt in siguranta cand stiu ca fiecare pas este simulat digital inainte de operatie.",
      author: "Dr. Iulia, coordonator chirurgie"
    },
    overview: [
      "Chirurgia orala moderna se bazeaza pe analiza 3D, protocoale minim invazive si confortul absolut al pacientului. Inaintea oricarei interventii, realizam investigatii CBCT, scanari digitale si discutii interdisciplinare pentru a anticipa fiecare pas.",
      "Intraoperator folosim instrumentar ultrasonic si ghidare dinamica pentru a conserva tesutul si a asigura o vindecare predictibila. Comunicarea continua si briefing-urile foto-video te tin conectat la evolutia tratamentului."
    ],
    benefits: [
      "Diagnostic digital complet",
      "Sedare adaptata profilului medical",
      "Protocol de vindecare personalizat",
      "Raport chirurgical transparent"
    ],
    highlights: [
      { title: "Microchirurgie", description: "Lupă operatorie, fire delicate si membrane biomimetice pentru rezultate estetice." },
      { title: "Managementul durerii", description: "Tehnici moderne de anestezie si suport continuu post-operator." },
      { title: "Echipa multidisciplinara", description: "Chirurg, anestezist si protetician lucreaza simultan pentru acelasi plan." }
    ],
    steps: ["Evaluare completa si plan 3D", "Interventie ghidata si control intraoperator", "Monitorizare post-chirurgicala cu foto si instructiuni dedicate"],
    faq: [
      {
        question: "Cat dureaza recuperarea?",
        answer: "Majoritatea procedurilor permit reluarea activitatilor a doua zi. Oferim ghid alimentar, medicatie si controale video pentru a urmari evolutia."
      },
      {
        question: "Pot vedea planul inainte?",
        answer: "Da. Prezentam un timeline clar, imagini 3D si rezultatele asteptate pentru fiecare etapa astfel incat sa te simti pregatit."
      }
    ]
  },
  "chirurgie-omf": {
    title: "Chirurgie OMF",
    category: "Chirurgie",
    subtitle: "Corectii faciale, tratamente traumatice si reabilitari complexe coordonate in clinica.",
    tags: ["Echipa OMF", "Tehnici reconstructive", "Monitorizare spitaliceasca"],
    heroImage: "/dentnow-service-chirurgie-omf.jpg",
    heroGradient: "linear-gradient(135deg, rgba(0,82,73,0.85), rgba(11,180,155,0.45))",
    layout: "reverse",
    stats: [
      { label: "Interventii majore/an", value: "320+" },
      { label: "Timp internare", value: "24h-72h" },
      { label: "Echipa OMF", value: "6 medici" }
    ],
    quote: {
      text: "Sincronizam chirurgia, estetica si recuperarea astfel incat fiecare pacient sa plece cu incredere.",
      author: "Dr. Adrian, sef departament OMF"
    },
    overview: [
      "Interventiile OMF necesita sincronizare perfecta intre chirurgie, anestezie si estetica faciala. In clinica noastra, scenariile complexe sunt simulate digital, iar pacientul primeste un plan integrat ce include spitalizare, medicatie si sprijin logistic.",
      "Lucram cu tehnicieni specializati in reconstructii pentru a reda armonia faciala si functionalitatea articulatiei temporo-mandibulare."
    ],
    benefits: ["Analiza faciala 3D", "Plan logistic complet", "Echipa dedicata de recuperare", "Confidentialitate absoluta"],
    highlights: [
      { title: "Sala hibrida", description: "Echipata pentru proceduri OMF, cu acces la imagistica intraoperatorie." },
      { title: "Nursing personalizat", description: "Concierge medical si asistenta dedicata pentru pacientii internationali." },
      { title: "Reabilitare estetica", description: "Colaborare cu medici esteticieni pentru rezultate armonioase." }
    ],
    steps: ["Simulare digitala si avizare medicala", "Interventie coordonata de echipa OMF", "Program complet de recuperare si controale"],
    faq: [
      { question: "Ce investigatii sunt necesare?", answer: "CBCT, analize de sange, studiu foto-video si, la nevoie, consult neurologic/ORL." },
      { question: "Este necesara spitalizarea?", answer: "In cazul interventiilor extinse, asiguram camere dedicate si supraveghere 24/7." }
    ]
  },
  "implantologie-ghidata": {
    title: "Implantologie ghidata",
    category: "Chirurgie",
    subtitle: "Implanturi realizate in siguranta cu ghiduri chirurgicale printate 3D si protetica imediata.",
    tags: ["Flux digital complet", "Provizorii in aceeasi zi", "Sedare confortabila"],
    heroImage: "/dentnow-service-implantologie.jpg",
    heroGradient: "linear-gradient(135deg, rgba(2,90,60,0.85), rgba(0,194,199,0.35))",
    layout: "split",
    stats: [
      { label: "Inserari/zi", value: "15" },
      { label: "Ghiduri printate", value: "100%" },
      { label: "Provizorii", value: "in 2h" }
    ],
    quote: {
      text: "Ghidarea digitala ne permite sa fim extrem de precisi si sa livram zambetul provizoriu in aceeasi sedinta.",
      author: "Dr. Radu, specialist implantologie"
    },
    secondaryImage: "/dentnow-service-chirurgie-omf.jpg",
    overview: [
      "Planificam fiecare implant pe baza scanarilor digitale si a fotografiilor functionale. Ghidurile sunt printate in laboratorul nostru si verificate de echipa chirurgicala inainte de interventie.",
      "Pacientii beneficiaza de restaurari provizorii estetice chiar in ziua interventiei, iar echipa protetica ajusteaza muscatura in timp real."
    ],
    benefits: ["Predictibilitate maxima", "Interventie rapida", "Integrare tisulara controlata", "Colaborare stransa cu laboratorul"],
    highlights: [
      { title: "Plan 3D", description: "Simulam vectorii de forta si densitatea osoasa pentru fiecare implant." },
      { title: "Provizorii estetice", description: "Pacientii pleaca din clinica cu un zambet complet si functional." },
      { title: "Sedare asistata", description: "Monitoring permanent cu echipa de anestezie." }
    ],
    steps: ["Scanare si fotografie dinamica", "Design ghid si validare digitala", "Inserare si livrare provizorie"],
    faq: [
      { question: "Cat dureaza interventia?", answer: "In medie intre 60 si 120 de minute, in functie de numarul implanturilor." },
      { question: "Este dureros?", answer: "Protocolul de sedare si anestezie minima face interventia confortabila. Urmarirea post-operatorie este inclusa." }
    ]
  },
  fatete: {
    title: "Fatete dentare",
    category: "Estetica dentara",
    subtitle: "Design digital personalizat si fatete biomimetice create in laborator dedicat.",
    tags: ["Mock-up vizual", "Preparate minim invazive", "Control cromatic"],
    heroImage: "/dentnow-service-fatete.jpg",
    heroGradient: "linear-gradient(135deg, rgba(0,128,96,0.85), rgba(173,244,210,0.6))",
    layout: "center",
    stats: [
      { label: "Zambete create", value: "1200+" },
      { label: "Mock-up in", value: "48h" },
      { label: "Garantie", value: "5 ani" }
    ],
    quote: {
      text: "Fatetele devin perfecte cand pacientul participa la fiecare iteratie de design.",
      author: "Dr. Diana, coordonator estetica"
    },
    overview: [
      "Fatetele sunt desenate impreuna cu pacientul, iar fiecare etapa este testata prin mock-up si fotografii profesionale. Ajustarile se fac in clinica, astfel incat viitorul zambet sa se potriveasca trasaturilor si personalitatii tale.",
      "Laboratorul intern foloseste ceramica stratificata si tehnici biomimetice pentru a reda transluciditatea si textura naturala a dintilor."
    ],
    benefits: ["Sedinte condensate", "Control complet asupra nuantei", "Documentatie foto-video", "Garantie extinsa"],
    highlights: [
      { title: "Scanare digitala", description: "Eliminam amprentele clasice si pastram arhiva 3D pentru retusuri." },
      { title: "Mock-up din compozit", description: "Testam zambetul direct in cabinet, fara slefuire semnificativa." },
      { title: "Ceramica premium", description: "Utilizam materiale rezistente, care reflecta lumina natural." }
    ],
    steps: ["Consultatie estetica si fotografie", "Mock-up si analiza functionala", "Aplicare fatete si control final"],
    faq: [
      { question: "Cat dureaza procesul?", answer: "Intre 7 si 10 zile, in functie de complexitate." },
      { question: "Cum ingrijesc fatetele?", answer: "Igiena zilnica si controlul la 6 luni mentin lucrarea impecabila." }
    ]
  },
  "albirea-dintilor": {
    title: "Albirea dintilor",
    category: "Estetica dentara",
    subtitle: "Protocol clinic controlat pentru un zambet luminos si sanatos.",
    tags: ["Protectie smalt", "Rezultate rapide", "Kit personalizat acasa"],
    heroImage: "/dentnow-service-albirea-dintilor.jpg",
    heroGradient: "linear-gradient(135deg, rgba(0,110,95,0.85), rgba(255,255,255,0.6))",
    layout: "reverse",
    stats: [
      { label: "Durata sedinta", value: "40 min" },
      { label: "Crestere nuanta", value: "2-6 tonuri" },
      { label: "Pacienti anual", value: "850+" }
    ],
    quote: {
      text: "Albirea sigura inseamna igienizare, protectie gingivala si educatie pentru mentenanta acasa.",
      author: "Dr. Mara, estetica dentara"
    },
    overview: [
      "Albirea se realizeaza sub controlul medicului, cu geluri profesionale care protejeaza smaltul si gingiile. Inainte, se efectueaza o igienizare completa si se documenteaza nuanta pentru a masura rezultatul.",
      "Pentru mentenanta, pacientii primesc gutiere personalizate si instructiuni clare, astfel incat zambetul sa ramana luminos pentru mult timp."
    ],
    benefits: ["Sedinte rapide", "Sensibilitate minima", "Rezultate masurabile", "Plan de mentenanta"],
    highlights: [
      { title: "Lampa profesionala", description: "Activeaza gelul pentru o albire uniforma in 40 de minute." },
      { title: "Kit acasa", description: "Pentru retusuri, folosim geluri cu concentratie adaptata." },
      { title: "Fotografie comparativa", description: "Inainte/dupa pentru a vedea progresul real." }
    ],
    steps: ["Consultatie si igienizare", "Albire in cabinet", "Program personalizat acasa"],
    faq: [
      { question: "Albirea afecteaza smaltul?", answer: "Nu. Folosim geluri cu nitrati de potasiu si fluor pentru a proteja smaltul." },
      { question: "Cat dureaza rezultatul?", answer: "Intre 12 si 24 de luni, in functie de dieta si igiena." }
    ]
  },
  "bijuterii-dentare": {
    title: "Bijuterii dentare",
    category: "Estetica dentara",
    subtitle: "Accente discrete aplicate cu adezivi siguri, fara a afecta smaltul.",
    tags: ["Design personalizat", "Aplicare rapida", "Fara slefuire"],
    heroImage: "/dentnow-service-bijuterii-dentare.jpg",
    heroGradient: "linear-gradient(135deg, rgba(1,90,70,0.85), rgba(255,255,255,0.7))",
    layout: "split",
    stats: [
      { label: "Modele disponibile", value: "40+" },
      { label: "Timp aplicare", value: "25 min" },
      { label: "Reaplicari", value: "gratuite 12 luni" }
    ],
    quote: {
      text: "Un accent stralucitor e o declaratie personala, iar procedura trebuie sa fie complet reversibila.",
      author: "Dr. Ioana, estetica"
    },
    secondaryImage: "/dentnow-service-bijuterii-detail.jpg",
    overview: [
      "Bijuteriile dentare sunt aplicate cu adezivi de inalta performanta, fara sa slefuim smaltul. Pacientul poate alege cristale, metale pretioase sau simboluri personalizate.",
      "Procedura dureaza mai putin de 30 de minute si poate fi indepartata oricand fara urme."
    ],
    benefits: ["Aplicare minim invaziva", "Posibilitate de schimb rapid", "Design unic", "Protectie anti-colorare"],
    highlights: [
      { title: "Consult estetica", description: "Alegem impreuna combinatia de culoare si forma." },
      { title: "Montaj sigur", description: "Folosim adezivi certificati si lampa polimerizare." },
      { title: "Ingrijire simpla", description: "Primesti instructiuni pentru curatare si igiena." }
    ],
    steps: ["Selectie design", "Aplicare si finisare", "Control dupa 2 saptamani"],
    faq: [
      { question: "Se poate indeparta?", answer: "Da, in cateva minute, fara a deteriora smaltul." },
      { question: "Afecteaza masticatia?", answer: "Nu. Bijuteria este plasata intr-o zona care nu interfereaza cu muscatura." }
    ]
  },
  "gutiere-personalizate": {
    title: "Gutiere personalizate",
    category: "Terapie & ATM",
    subtitle: "Gutiere terapeutice create pe scanarea digitala pentru confort maxim.",
    tags: ["Scanare 3D", "Material hipoalergenic", "Monitorizare ATM"],
    heroImage: "/dentnow-service-gutiere.jpg",
    heroGradient: "linear-gradient(135deg, rgba(0,100,85,0.85), rgba(0,194,199,0.45))",
    layout: "reverse",
    stats: [
      { label: "Scanari pe ora", value: "6" },
      { label: "Timp productie", value: "48h" },
      { label: "Material", value: "bio compatibil" }
    ],
    quote: {
      text: "Gutierele eficiente sunt cele pe care pacientul abia le simte, dar pe care medicul le poate monitoriza.",
      author: "Dr. Vlad, terapie functionala"
    },
    overview: [
      "Gutierele personalizate sunt indicate pentru bruxism, protectie sportiva sau terapii ATM. Folosim scanari digitale pentru a crea un fit perfect si pentru a controla grosimea in zonele sensibile.",
      "Pacientii primesc instructiuni clare si un calendar de controale pentru ajustari."
    ],
    benefits: ["Potrivire perfecta", "Materiale rezistente", "Protocol de adaptare", "Raport foto-video"],
    highlights: [
      { title: "Scanare digitala", description: "Elimina disconfortul amprentelor clasice." },
      { title: "Material certificat", description: "Flexibil dar rezistent, fara BPA." },
      { title: "Monitorizare ATM", description: "Evaluam miscarile mandibulare si efectul asupra musculaturii." }
    ],
    steps: ["Consult si diagnostic", "Scanare si productie", "Ajustare si control periodic"],
    faq: [
      { question: "Cat timp se poarta?", answer: "Depinde de indicatie. Unele gutiere se poarta doar noaptea, altele pe durata tratamentului." },
      { question: "Se curata usor?", answer: "Da, oferim kit si instructiuni pentru igienizare." }
    ]
  },
  "ortodontie-invizibila": {
    title: "Ortodontie invizibila",
    category: "Terapie & ATM",
    subtitle: "Aliniere predictibila cu alignere transparente si monitorizare digitala.",
    tags: ["Plan 3D", "Transmitere rapida", "Controale online"],
    heroImage: "/dentnow-service-ortodontie.jpg",
    heroGradient: "linear-gradient(135deg, rgba(3,90,80,0.85), rgba(111,224,197,0.5))",
    layout: "center",
    stats: [
      { label: "Alignere livrate", value: "50k+" },
      { label: "Controale video", value: "800+/luna" },
      { label: "Vizite fizice", value: "1 la 3 luni" }
    ],
    quote: {
      text: "Alignerele devin eficiente cand pacientul are un mentor digital disponibil oricand.",
      author: "Dr. Oana, ortodont"
    },
    overview: [
      "Alignerele sunt proiectate pe baza unui plan 3D in care poti vedea fiecare etapa a tratamentului. Seturile sunt livrate rapid, iar medicul ajusteaza timeline-ul in functie de raspunsul tesuturilor.",
      "Aplicatia noastra permite trimiterea fotografiilor de acasa pentru a reduce vizitele fizice."
    ],
    benefits: ["Discret", "Confortabil", "Usor de igienizat", "Control digital"],
    highlights: [
      { title: "Plan vizual", description: "Vezi cum se misca dintii inainte de a incepe tratamentul." },
      { title: "Material avansat", description: "Alignere rezistente, care aplica forte constante." },
      { title: "Coaching digital", description: "Reminder pentru schimbarea alignerelor si feedback rapid." }
    ],
    steps: ["Scanare si fotografie", "Planificare digitala", "Livrare adaptata si controale"],
    faq: [
      { question: "Cat dureaza tratamentul?", answer: "Intre 6 si 18 luni, in functie de caz." },
      { question: "Trebuie purtate permanent?", answer: "Recomandam 22 de ore pe zi pentru rezultate eficiente." }
    ]
  },
  "reabilitare-atm": {
    title: "Reabilitare ATM",
    category: "Terapie & ATM",
    subtitle: "Tratam durerile articulare si dezechilibrele musculare cu protocoale interdisciplinare.",
    tags: ["Analiza functionala", "Fizioterapie", "Coaching postural"],
    heroImage: "/dentnow-service-reabilitare-atm.jpg",
    heroGradient: "linear-gradient(135deg, rgba(0,82,73,0.85), rgba(173,244,210,0.45))",
    layout: "split",
    stats: [
      { label: "Evaluari ATM", value: "400+/an" },
      { label: "Sedinte fizio", value: "6-12" },
      { label: "Rata ameliorare", value: "92%" }
    ],
    quote: {
      text: "Tratamentul ATM inseamna rabdare, continuitate si comunicare permanenta intre medici si pacient.",
      author: "Dr. Sorin, coordonator terapie"
    },
    overview: [
      "Simptomele ATM sunt abordate prin evaluare functionala, electromiografie si analizarea miscarilor mandibulare. In baza acestor date, medicul si fizioterapeutul construiesc un plan personalizat.",
      "Sedinte de coaching postural si exercitii ghidate ajuta la relaxarea musculaturii si la corectarea obiceiurilor nocive."
    ],
    benefits: ["Diagnostic clar", "Abordare interdisciplinara", "Program acasa", "Urmarire constanta"],
    highlights: [
      { title: "Electromiografie", description: "Masuram activitatea musculara pentru a vedea progresul." },
      { title: "Gutiere terapeutice", description: "Stabilizam articulatia si permitem relaxarea musculaturii." },
      { title: "Fizioterapie dedicata", description: "Lucram cu terapeuti specializati pe zona cranio-cervicala." }
    ],
    steps: ["Evaluare clinica si imagistica", "Plan integrat terapie + gutiere", "Monitorizare si ajustari"],
    faq: [
      { question: "Cat dureaza tratamentul?", answer: "In medie 3-6 luni, in functie de severitatea simptomelor." },
      { question: "Este dureros?", answer: "Nu. Exercitiile sunt adaptate nivelului tau, iar progresul este monitorizat constant." }
    ]
  }
};

const servicePages: Record<string, ServiceContent> = { ...baseServicePages };
const serviceCategoryAliases: Record<string, { base: string; title: string; subtitle?: string; heroImage?: string }> = {
  general: { base: "chirurgie-orala", title: "General", heroImage: "/dentnow-consult.jpg" },
  chirurgie: { base: "chirurgie-orala", title: "Chirurgie", heroImage: "/dentnow-service-chirurgie-orala.jpg" },
  "cosmetica-dentara": { base: "fatete", title: "Cosmetica dentara", heroImage: "/dentnow-service-fatete.jpg" },
  endodontie: { base: "gutiere-personalizate", title: "Endodontie", heroImage: "/dentnow-service-gutiere.jpg" },
  "estetica-dentara": { base: "albirea-dintilor", title: "Estetica dentara", heroImage: "/dentnow-service-albirea-dintilor.jpg" },
  implantologie: { base: "implantologie-ghidata", title: "Implantologie", heroImage: "/dentnow-service-implantologie.jpg" },
  odontologie: { base: "bijuterii-dentare", title: "Odontologie", heroImage: "/dentnow-chair.jpg" },
  ortodontie: { base: "ortodontie-invizibila", title: "Ortodontie", heroImage: "/dentnow-service-ortodontie.jpg" },
  parodontologie: { base: "reabilitare-atm", title: "Parodontologie", heroImage: "/dentnow-service-parodontologie.jpg" },
  profilaxie: { base: "albirea-dintilor", title: "Profilaxie", heroImage: "/dentnow-sterilizare.jpg" },
  pedodontie: { base: "bijuterii-dentare", title: "Pedodontie", heroImage: "/dentnow-lounge.jpg" },
  "protetica-dentara": { base: "fatete", title: "Protetica dentara", heroImage: "/dentnow-service-bijuterii-detail.jpg" },
  radiologie: { base: "implantologie-ghidata", title: "Radiologie", heroImage: "/dentnow-panorama.jpg" }
};

Object.entries(serviceCategoryAliases).forEach(([alias, config]) => {
  const basePage = servicePages[config.base];
  if (!basePage) {
    return;
  }
  servicePages[alias] = {
    ...basePage,
    title: config.title,
    category: config.title,
    subtitle: config.subtitle ?? basePage.subtitle,
    heroImage: config.heroImage ?? basePage.heroImage
  };
});
export const serviceSlugs = Object.keys(servicePages);

export function getServiceContent(slug: string) {
  return servicePages[slug];
}

export function getServicePreview(slug: string) {
  const data = getServiceContent(slug);
  if (!data) {
    return null;
  }
  const summary = data.overview?.[0] ?? data.subtitle;
  return {
    title: data.title,
    description: summary ?? "",
    image: data.heroImage
  };
}
