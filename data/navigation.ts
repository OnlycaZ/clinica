type MegaMenuLink = {
  label: string;
  href: string;
};

type MegaMenuSection = {
  title: string;
  links: MegaMenuLink[];
};

export type MegaMenuConfig = Record<string, MegaMenuSection[]>;

export type NavigationItem = {
  label: string;
  href: string;
  menuKey?: keyof MegaMenuConfig;
};

export const serviceMenuSections: MegaMenuSection[] = [
  {
    title: "General",
    links: [
      { label: "General", href: "/servicii/general" },
      { label: "Chirurgie", href: "/servicii/chirurgie" },
      { label: "Cosmetica dentara", href: "/servicii/cosmetica-dentara" },
      { label: "Endodontie", href: "/servicii/endodontie" },
      { label: "Estetica dentara", href: "/servicii/estetica-dentara" }
    ]
  },
  {
    title: "Implantologie",
    links: [
      { label: "Implantologie", href: "/servicii/implantologie" },
      { label: "Odontologie", href: "/servicii/odontologie" },
      { label: "Ortodontie", href: "/servicii/ortodontie" },
      { label: "Parodontologie", href: "/servicii/parodontologie" }
    ]
  },
  {
    title: "Profilaxie",
    links: [
      { label: "Profilaxie", href: "/servicii/profilaxie" },
      { label: "Pedodontie", href: "/servicii/pedodontie" },
      { label: "Protetica dentara", href: "/servicii/protetica-dentara" },
      { label: "Radiologie", href: "/servicii/radiologie" }
    ]
  }
];

export const priceMenuSections: MegaMenuSection[] = [
  {
    title: "General",
    links: [
      { label: "General", href: "/preturi/general" },
      { label: "Chirurgie", href: "/preturi/chirurgie" },
      { label: "Cosmetica dentara", href: "/preturi/cosmetica-dentara" },
      { label: "Endodontie", href: "/preturi/endodontie" },
      { label: "Estetica dentara", href: "/preturi/estetica-dentara" }
    ]
  },
  {
    title: "Implantologie",
    links: [
      { label: "Implantologie", href: "/preturi/implantologie" },
      { label: "Odontologie", href: "/preturi/odontologie" },
      { label: "Ortodontie", href: "/preturi/ortodontie" },
      { label: "Parodontologie", href: "/preturi/parodontologie" }
    ]
  },
  {
    title: "Profilaxie",
    links: [
      { label: "Profilaxie", href: "/preturi/profilaxie" },
      { label: "Pedodontie", href: "/preturi/pedodontie" },
      { label: "Protetica dentara", href: "/preturi/protetica-dentara" },
      { label: "Radiologie", href: "/preturi/radiologie" }
    ]
  }
];

export const megaMenus: MegaMenuConfig = {
  Servicii: serviceMenuSections,
  Preturi: priceMenuSections
};

export const navigation: NavigationItem[] = [
  { label: "Acasa", href: "/" },
  { label: "Servicii", href: "/#servicii", menuKey: "Servicii" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Preturi", href: "/preturi", menuKey: "Preturi" },
  { label: "Contact", href: "/contact" }
];
