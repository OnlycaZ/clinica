export const siteConfig = {
  name: "DentNow",
  shortName: "DentNow",
  url: "https://www.dentnow.ro",
  description:
    "DentNow este clinica stomatologica a familiei tale: tratamente moderne in Dristor, implanturi ghidate, estetica dentara si ingrijire personalizata pentru adulti si copii.",
  locale: "ro_RO",
  contactEmail: "office@dentnow.ro",
  contactPhone: "+40 720 509 802",
  defaultOgImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
};

type SeoEntry = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  image?: string;
};

export const seoPages: Record<string, SeoEntry> = {
  home: {
    title: "DentNow | Clinica stomatologica a familiei tale",
    description:
      "DentNow aduce tratamente digitale, medici empatici si finantare rapida intr-o clinica moderna din Dristor. Implanturi, estetica, ortodontie si pediatrie sub acelasi acoperis.",
    path: "/",
    keywords: ["dentnow", "clinica dentnow", "stomatologie dristor", "implant dentar bucuresti", "clinica familie"],
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
  },
  portofoliu: {
    title: "Portofoliu rezultate | DentNow",
    description: "Transformari reale din clinica DentNow: reabilitari totale, fatete minim invazive si zambete pentru intreaga familie.",
    path: "/portofoliu",
    keywords: ["portofoliu dentnow", "rezultate pacienti", "before after stomatologie", "dentnow foto video"]
  },
  preturi: {
    title: "Preturi transparente | DentNow",
    description:
      "Tarife DentNow pentru implanturi, estetica, ortodontie si planuri pentru copii, cu plata in 24 de rate fara dobanda si oferte pentru familii.",
    path: "/preturi",
    keywords: ["preturi dentnow", "tarife stomatologie bucuresti", "rate dentnow", "pret implant dentar"]
  },
  contact: {
    title: "Contact DentNow | Programari rapide in Dristor",
    description:
      "Programeaza-te la DentNow telefonic sau online. Raspundem in cel mult doua ore si pregatim dosarul tau medical in siguranta.",
    path: "/contact",
    keywords: ["contact dentnow", "programare dentnow", "clinica stomatologica dristor"]
  },
  privacy: {
    title: "Politica de confidentialitate | DentNow",
    description: "Afla cum DentNow protejeaza datele medicale, financiare si logistice si ce drepturi ai conform GDPR.",
    path: "/politica-confidentialitate",
    keywords: ["politica confidentialitate dentnow", "gdpr stomatologie", "protectia datelor dentnow"]
  },
  cookies: {
    title: "Politica cookie | DentNow",
    description:
      "Vezi cum foloseste DentNow cookie-urile necesare, analitice si de marketing si cum iti poti administra preferintele.",
    path: "/politica-cookie",
    keywords: ["politica cookie dentnow", "preferinte cookie", "consimtamant dentnow"]
  }
};

export const buildCanonical = (path: string) => new URL(path, siteConfig.url).toString();

export const getSeoEntry = (key: keyof typeof seoPages) => {
  const entry = seoPages[key];
  const image = entry.image ?? siteConfig.defaultOgImage;
  return {
    ...entry,
    image,
    canonical: buildCanonical(entry.path)
  };
};
