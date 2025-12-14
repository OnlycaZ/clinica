import React from "react";

export type ServiceCardData = {
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  href?: string;
};

export type HighlightData = {
  icon: string;
  title: string;
  description: string;
};

export type ShowcaseData = {
  title: string;
  imageUrl: string;
  description: string;
  tags: string[];
};

export const services: ReadonlyArray<ServiceCardData> = Object.freeze([
  {
    icon: "EST",
    title: "Estetica dentara integrata",
    description: "Design digital al zambetului, fatete minim invazive si albire ghidata clinic.",
    features: ["Mock-up vizual", "Laborator dedicat", "Materiale biomimetice"],
    image: "/service-images/estetica-modern.svg",
    href: "/servicii/estetica-dentara"
  },
  {
    icon: "IMG",
    title: "Implantologie ghidata",
    description: "Interventii confortabile cu planificare 3D si protetica provizorie imediata.",
    features: ["Ghizi chirurgicali", "Sedare constienta", "Echipa multidisciplinara"],
    image: "/service-images/implantologie-modern.svg",
    href: "/servicii/implantologie-ghidata"
  },
  {
    icon: "RX",
    title: "Reabilitare complexa",
    description: "Tratamente functionale pentru ATM, ortodontie invizibila si reabilitari totale.",
    features: ["Scanare intraorala", "Monitorizare digitala", "Plan terapeutic integrat"],
    image: "/service-images/reabilitare-modern.svg",
    href: "/servicii/reabilitare-complexa"
  }
]);

export const highlights: ReadonlyArray<HighlightData> = Object.freeze([
  {
    icon: "3D",
    title: "Clinica de excelenta",
    description: "Certificare internationala Dentsply Sirona CEE si fluxuri complet digitale."
  },
  {
    icon: "SAFE",
    title: "Sterilizare trasabila",
    description: "Linie dedicata ce monitorizeaza fiecare instrument si ciclu de sterilizare."
  },
  {
    icon: "CARE",
    title: "Bloc operator",
    description: "Sala chirurgicala la standarde de spital pentru interventii complexe."
  },
  {
    icon: "URG",
    title: "Urgente stomatologice",
    description: "Program extins si echipe dedicate pentru interventii rapide."
  }
]);

export const showcaseElements: ReadonlyArray<ShowcaseData> = Object.freeze([
  {
    title: "Bloc operator & chirurgie ghidata",
    imageUrl: "/dentnow-chair.jpg",
    description: "Camere sterile cu iluminare circumferentiala, filtre HEPA si echipamente Dentsply Sirona pentru interventii minim invazive.",
    tags: ["Bloc operator", "Flux digital", "Monitorizare integrate"]
  },
  {
    title: "Laborator digital si protetica rapida",
    imageUrl: "/dentnow-service-chirurgie-orala.jpg",
    description: "Scanare intraorala, imprimante 3D si frezare CNC conectate direct la laboratorul clinicii.",
    tags: ["Scanare 3D", "Frezare CNC", "Control calitate"]
  },
  {
    title: "Consultatii & experienta pacientilor",
    imageUrl: "/dentnow-service-ortodontie.jpg",
    description: "Zone dedicate pentru consultatii video, lounge pentru pacienti si concierge care ordoneaza vizitele.",
    tags: ["Concierge medical", "Tururi virtuale", "Acces familie"]
  }
]);
