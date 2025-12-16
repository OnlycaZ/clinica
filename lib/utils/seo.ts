export const siteConfig = {
  name: "DentNow",
  shortName: "DentNow",
  url: "https://www.dentnow.ro",
  description:
    "DentNow este clinica stomatologica a familiei tale in Bucuresti: tratamente moderne, implanturi ghidate, estetica dentara si ingrijire pentru adulti si copii.",
  locale: "ro_RO",
  contactEmail: "office@dentnow.ro",
  contactPhone: "+40 720 509 802",
  defaultOgImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
};

const MAX_TITLE_LENGTH = 60;
const MAX_DESCRIPTION_LENGTH = 155;

const clamp = (value: string, max: number) => {
  if (!value) return value;
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trimEnd()}…`;
};

export const clampTitle = (value: string) => clamp(value, MAX_TITLE_LENGTH);
export const clampDescription = (value: string) => clamp(value, MAX_DESCRIPTION_LENGTH);

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
      "Clinica stomatologica DentNow din Bucuresti ofera implanturi ghidate digital, estetica dentara si tratamente pentru intreaga familie, intr-un spatiu modern din Dristor.",
    path: "/",
    keywords: ["dentnow", "clinica dentnow", "stomatologie dristor", "implant dentar bucuresti", "clinica familie"],
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
  },
  portofoliu: {
    title: "Portofoliu rezultate | DentNow",
    description:
      "Vezi portofoliul DentNow: reabilitari totale, fatete minim invazive si cazuri complexe tratate in clinica stomatologica din Bucuresti.",
    path: "/portofoliu",
    keywords: ["portofoliu dentnow", "rezultate pacienti", "before after stomatologie", "dentnow foto video"]
  },
  preturi: {
    title: "Preturi transparente | DentNow",
    description:
      "Preturi transparente pentru implanturi, estetica dentara, ortodontie si tratamente pentru copii, cu optiuni de plata in rate si oferte pentru familii.",
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
  },
  booking: {
    title: "Rezerva vizita la clinica DentNow",
    description:
      "Programeaza online o vizita la clinica stomatologica DentNow din Bucuresti pentru consultatii, implanturi si estetica dentara.",
    path: "/rezerva-vizita",
    keywords: ["rezerva vizita dentnow", "programare online stomatolog", "clinica stomatologica bucuresti"]
  }
};

export const buildCanonical = (path: string) => new URL(path, siteConfig.url).toString();

export const getSeoEntry = (key: keyof typeof seoPages) => {
  const entry = seoPages[key];
  const image = entry.image ?? siteConfig.defaultOgImage;
  return {
    ...entry,
    title: clampTitle(entry.title),
    description: clampDescription(entry.description),
    image,
    canonical: buildCanonical(entry.path)
  };
};
