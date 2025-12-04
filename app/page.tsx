'use client';

import React from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import SiteHeader from "@/components/SiteHeader";
import { megaMenus, navigation } from "@/lib/navigation";
import { getSeoEntry, siteConfig } from "@/lib/seo";

const homeSeo = getSeoEntry("home");

const SiteFooter = dynamic(() => import("@/components/SiteFooter"), { ssr: false, loading: () => <div style={styles.footerPlaceholder} aria-hidden="true" /> });

const palette = {
  navy: "#123c35",
  night: "#0f1f1b",
  teal: "#1fb67c",
  sand: "#f6fbf6",
  slate: "#6a7f74",
  border: "#d9efe3",
  light: "#ffffff"
};

const stats = Object.freeze([
  { value: "25+", label: "Ani de excelenta" },
  { value: "40K", label: "Pacienti tratati" },
  { value: "30", label: "Specialisti dedicati" }
]);

const highlights = Object.freeze([
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
  },
]);

const services = Object.freeze([
  {
    icon: "EST",
    title: "Estetica dentara integrata",
    description: "Design digital al zambetului, fatete minim invazive si albire ghidata clinic.",
    features: ["Mock-up vizual", "Laborator dedicat", "Materiale biomimetice"]
  },
  {
    icon: "IMG",
    title: "Implantologie ghidata",
    description: "Interventii confortabile cu planificare 3D si protetica provizorie imediata.",
    features: ["Ghizi chirurgicali", "Sedare constienta", "Echipa multidisciplinara"]
  },
  {
    icon: "RX",
    title: "Reabilitare complexa",
    description: "Tratamente functionale pentru ATM, ortodontie invizibila si reabilitari totale.",
    features: ["Scanare intraorala", "Monitorizare digitala", "Plan terapeutic integrat"]
  }
]);

const iconMap: Record<string, React.ReactNode> = Object.freeze({
  "3D": (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="16" cy="16" r="11" />
      <path d="M11 21l10-10M11 11l10 10" />
    </svg>
  ),
  SAFE: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="7" y="9" width="18" height="14" rx="3" />
      <path d="M16 13v6M13 16h6" />
    </svg>
  ),
  CARE: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M16 22s8-4.5 8-9a4.5 4.5 0 00-8-2 4.5 4.5 0 00-8 2c0 4.5 8 9 8 9z" />
    </svg>
  ),
  URG: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M16 6v10l5 5" />
      <path d="M16 6l-5 9 5 11 5-9" />
    </svg>
  ),
  ECO: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M10 18c2 1 5 .5 7-1s3-4 3-6c-2-1-5-.5-7 1s-3 4-3 6z" />
      <path d="M10 18c0 4 3 7 6 7 3 0 6-3 6-7" />
    </svg>
  ),
  EST: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 11c2-3 4-5 8-5s6 2 8 5c0 7-3 14-8 16-5-2-8-9-8-16z" />
      <path d="M11 18c2 2 4 2 5 2s3 0 5-2" />
    </svg>
  ),
  IMG: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="8" y="6" width="16" height="20" rx="4" />
      <path d="M12 12h8M12 16h8M12 20h5" />
    </svg>
  ),
  RX: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M10 8h8a4 4 0 010 8h-8zM18 16l6 8M18 24l6-8" />
    </svg>
  )
});

const galleryImages = Object.freeze([
  {
    title: "Cabinet chirurgie",
    caption: "Spatiu dedicat interventiilor minim invazive cu monitorizare digitala.",
    tone: "deep",
    imageUrl: "https://images.pexels.com/photos/3055687/pexels-photo-3055687.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title: "Studio estetica",
    caption: "Laborator foto-video pentru designul digital al zambetului.",
    tone: "light",
    imageUrl: "https://images.pexels.com/photos/5570001/pexels-photo-5570001.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title: "Sterilizare trasabila",
    caption: "Linie dedicata pentru pregatirea instrumentarului in flux inchis.",
    tone: "sand",
    imageUrl: "https://images.pexels.com/photos/4506110/pexels-photo-4506110.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title: "Radiologie 3D",
    caption: "Flux complet in-house pentru investigatii rapide si sigure.",
    tone: "deep",
    imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
]);

const facilityFeatures = Object.freeze([
  { title: "Sterilizare trasabila", detail: "Circuit inchis cu etichetare QR pentru fiecare instrument." },
  { title: "Radiologie 3D", detail: "CBCT, panorame si bitewing efectuate in clinica, cu rapoarte in 15 minute." },
  { title: "Laborator estetic", detail: "Studio foto-video, mock-up digital si fatete provizorii in aceeasi zi." },
  { title: "Lounge pacienti", detail: "Spatii dedicate familiilor si pacientilor internationali." }
]);

const showcaseElements = Object.freeze([
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

const assurances = Object.freeze([
  "Consultatii interdisciplinare in aceeasi vizita",
  "Asistenta pentru pacienti internationali",
  "Suport post-tratament 24/7",
  "Planuri financiare transparente"
]);

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
    margin: 0,
    backgroundColor: "transparent",
    color: palette.navy,
    minHeight: "100vh",
    width: "100%",
    padding: "0 16px 96px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "28px"
  },
  skipLink: {
    position: "absolute",
    left: "-999px",
    top: "16px",
    zIndex: 100,
    backgroundColor: palette.teal,
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 600
  },
  skipLinkVisible: {
    left: "16px"
  },
  hero: {
    width: "100%",
    maxWidth: "1200px",
    margin: "30px auto 0",
    minHeight: "640px",
    backgroundImage:
      "radial-gradient(circle at top right, rgba(31,182,124,0.25), transparent 55%), linear-gradient(135deg, rgba(255,255,255,0.98), rgba(233,247,238,0.92))",
    color: palette.navy,
    padding: "96px 48px",
    borderRadius: "48px",
    border: `1px solid ${palette.border}`,
    position: "relative",
    overflow: "hidden",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  heroInner: {
    maxWidth: "100%",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "48px",
    alignItems: "stretch",
    minHeight: "420px"
  },
  heroContent: {
    flex: "2 1 420px",
    minHeight: "320px"
  },
  heroGlow: {
    position: "absolute",
    inset: 0,
    borderRadius: "48px",
    background:
      "linear-gradient(180deg, rgba(11,42,61,0.12), rgba(6,14,24,0.9)), radial-gradient(circle at 22% 24%, rgba(255,255,255,0.35), transparent 42%)",
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity 0.35s ease",
    zIndex: 0,
    display: "block"
  },
  heroEyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.35em",
    fontSize: "12px",
    fontWeight: 600,
    margin: "0 0 16px",
    color: palette.teal
  },
  heroTitle: {
    fontSize: "48px",
    lineHeight: 1.1,
    margin: "0 0 20px"
  },
  heroText: {
    fontSize: "18px",
    lineHeight: 1.6,
    margin: "0 0 32px",
    color: palette.slate
  },
  heroCtas: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "32px"
  },
  primaryButton: {
    background: `linear-gradient(120deg, ${palette.teal}, #8bf2c5)`,
    color: palette.night,
    border: `1px solid rgba(31,182,124,0.2)`,
    padding: "12px 24px",
    borderRadius: "999px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "transform 0.35s ease, opacity 0.35s ease"
  },
  secondaryButton: {
    backgroundColor: "rgba(255,255,255,0.5)",
    color: palette.navy,
    border: `1px solid ${palette.border}`,
    padding: "12px 24px",
    borderRadius: "999px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "transform 0.35s ease, opacity 0.35s ease"
  },
  heroStats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))",
    gap: "20px",
    margin: 0
  },
  heroStatBlock: {
    borderLeft: "1px solid rgba(18,60,53,0.2)",
    paddingLeft: "16px"
  },
  heroStatValue: {
    fontSize: "32px",
    fontWeight: 700,
    margin: 0,
    color: palette.navy
  },
  heroStatLabel: {
    margin: 0,
    color: palette.slate,
    fontSize: "14px"
  },
  heroCard: {
    flex: "1 1 300px",
    backgroundColor: "rgba(255,255,255,0.9)",
    color: palette.navy,
    borderRadius: "30px",
    padding: "32px",
    border: `1px solid ${palette.border}`,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    willChange: "transform",
    transform: "translateZ(0)",
    minHeight: "320px"
  },
  heroCardLabel: {
    fontSize: "20px",
    fontWeight: 600,
    margin: 0
  },
  heroCardDetail: {
    margin: "0 0 12px",
    color: palette.slate
  },
  heroContactLink: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "18px",
    borderRadius: "22px",
    backgroundColor: "rgba(31,182,124,0.08)",
    border: "1px solid rgba(31,182,124,0.2)",
    textDecoration: "none",
    color: palette.navy,
    fontWeight: 600,
    transition: "transform 0.35s ease, opacity 0.35s ease",
    flex: "1 1 240px",
    minWidth: "240px",
    textAlign: "center"
  },
  heroContactText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 1.4
  },
  contactBadge: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    backgroundColor: palette.teal,
    color: "#fff",
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "0.08em",
    fontSize: "12px",
    textTransform: "uppercase"
  },
  highlightsWrapper: {
    width: "100%",
    padding: "0 24px",
    marginTop: "24px",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  highlightSection: {
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: "34px",
    padding: "26px 34px",
    maxWidth: "100%",
    margin: "0 auto",
    display: "flex",
    gap: "18px",
    justifyContent: "space-between",
    flexWrap: "wrap",
    border: `1px solid ${palette.border}`,
    minHeight: "220px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  highlightCard: {
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: "24px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    minHeight: "150px",
    border: `1px solid rgba(18,75,60,0.08)`,
    flex: "1 1 200px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  highlightIcon: {
    width: "64px",
    height: "64px",
    borderRadius: "18px",
    backgroundColor: "rgba(31,182,124,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: palette.teal
  },
  highlightTitle: {
    margin: "8px 0 0",
    fontSize: "18px",
    fontWeight: 700
  },
  highlightText: {
    margin: "4px 0 0",
    color: palette.slate,
    lineHeight: 1.5
  },
  servicesSection: {
    padding: "80px 24px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    minHeight: "560px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  sectionHeader: {
    textAlign: "left",
    maxWidth: "720px",
    marginBottom: "32px"
  },
  sectionEyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.25em",
    color: palette.teal,
    fontSize: "12px",
    marginBottom: "12px"
  },
  sectionTitle: {
    fontSize: "36px",
    lineHeight: 1.2,
    margin: "0 0 16px"
  },
  sectionCopy: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    minHeight: "420px"
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: "30px",
    padding: "32px",
    border: `1px solid ${palette.border}`,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minHeight: "320px"
  },
  serviceIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    backgroundColor: "rgba(31,182,124,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: palette.teal
  },
  cardTitle: {
    margin: 0,
    fontSize: "22px"
  },
  cardCopy: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6
  },
  cardList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    color: palette.navy
  },
  cardListItem: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    fontSize: "14px"
  },
  cardBullet: {
    display: "inline-flex",
    width: "26px",
    height: "26px",
    borderRadius: "8px",
    backgroundColor: "rgba(31,182,124,0.12)",
    color: palette.teal,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700
  },
  linkButton: {
    marginTop: "8px",
    background: "none",
    border: "none",
    color: palette.teal,
    fontWeight: 600,
    textAlign: "left",
    padding: 0,
    cursor: "pointer"
  },
  gallerySection: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: "36px",
    padding: "70px 32px",
    margin: "40px auto 60px",
    minHeight: "600px",
    border: `1px solid ${palette.border}`,
    maxWidth: "1200px",
    width: "100%"
  },
  galleryIntro: {
    maxWidth: "700px",
    marginBottom: "32px"
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },
  galleryInfoGrid: {
    marginTop: "32px",
    borderRadius: "36px",
    padding: "32px",
    backgroundColor: "rgba(255,255,255,0.95)",
    border: `1px solid ${palette.border}`,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "18px"
  },
  galleryInfoTitle: {
    margin: "0 0 6px",
    fontWeight: 700
  },
  galleryInfoText: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6
  },
  galleryCard: {
    borderRadius: "30px",
    padding: "26px 22px",
    minHeight: "320px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(233,247,238,0.85))",
    border: "1px solid rgba(18,75,60,0.08)",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  galleryFrame: {
    borderRadius: "22px",
    border: "1px solid rgba(18,75,60,0.15)",
    aspectRatio: "3 / 4",
    margin: "0 auto 18px",
    width: "100%",
    maxWidth: "320px",
    backgroundColor: "rgba(255,255,255,0.5)",
    overflow: "hidden",
    position: "relative",
    boxShadow: "inset 0 0 15px rgba(18,75,60,0.08)"
  },
  galleryImage: {
    objectFit: "cover",
    display: "block",
    backgroundColor: "#dfe6ee",
    transition: "transform 0.6s ease",
    transform: "scale(1.02)"
  },
  galleryTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600
  },
  galleryText: {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.5,
    opacity: 0.9
  },
  galleryBadge: {
    alignSelf: "flex-start",
    padding: "6px 14px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 600,
    border: "1px solid rgba(255,255,255,0.35)",
    color: palette.light,
    backgroundColor: "rgba(255,255,255,0.15)"
  },
  ctaSection: {
    backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.95), rgba(219,245,232,0.92))",
    color: palette.navy,
    borderRadius: "36px",
    margin: "40px auto 80px",
    padding: "40px",
    display: "flex",
    flexWrap: "wrap",
    gap: "32px",
    alignItems: "center",
    border: `1px solid ${palette.border}`,
    maxWidth: "1200px",
    width: "100%",
    minHeight: "420px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  footerPlaceholder: {
    width: "100%",
    maxWidth: "1200px",
    minHeight: "360px",
    margin: "0 auto"
  },
  ctaContent: {
    flex: "2 1 360px"
  },
  ctaActions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "24px"
  },
  phonePill: {
    backgroundColor: "rgba(31,182,124,0.12)",
    color: palette.navy,
    borderRadius: "999px",
    padding: "12px 20px",
    textDecoration: "none",
    fontWeight: 600,
    border: "1px solid rgba(31,182,124,0.3)",
    transition: "transform 0.35s ease, opacity 0.35s ease"
  },
  assuranceList: {
    flex: "1 1 260px",
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  assuranceItem: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    color: palette.slate
  },
  assuranceBullet: {
    display: "inline-flex",
    width: "18px",
    justifyContent: "center",
    color: palette.teal,
    fontWeight: 700
  },
  clinicShowcaseSection: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px",
    borderRadius: "36px",
    border: `1px solid ${palette.border}`,
    backgroundColor: "rgba(255,255,255,0.96)",
    boxShadow: "0 30px 60px rgba(18,75,60,0.09)",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  clinicShowcaseIntro: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  clinicShowcaseTitle: {
    margin: 0,
    fontSize: "32px",
    color: palette.navy
  },
  clinicShowcaseCopy: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6
  },
  clinicShowcaseGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px"
  },
  clinicShowcaseCard: {
    borderRadius: "28px",
    border: `1px solid rgba(18,75,60,0.12)`,
    padding: "18px",
    backgroundColor: "#fefefc",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minHeight: "260px"
  },
  clinicShowcaseImage: {
    borderRadius: "22px",
    overflow: "hidden",
    position: "relative",
    height: "160px",
    border: `1px solid rgba(18,75,60,0.15)`
  },
  clinicShowcaseCardTitle: {
    margin: 0,
    fontSize: "20px"
  },
  clinicShowcaseCardCopy: {
    margin: 0,
    fontSize: "15px",
    color: palette.slate,
    lineHeight: 1.6
  },
  clinicShowcaseTags: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    gap: "8px"
  },
  clinicShowcaseTag: {
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "999px",
    border: `1px solid rgba(31,182,124,0.3)`,
    color: palette.teal,
    textTransform: "uppercase",
    letterSpacing: "0.06em"
  }
};

const fadeIn = (delay = 0): React.CSSProperties => ({
  animation: "fadeInUp 0.9s ease forwards",
  animationDelay: `${delay}s`
});

const galleryToneStyles: Record<string, React.CSSProperties> = {
  deep: {
    backgroundColor: "#1f4b41",
    color: palette.light
  },
  light: {
    backgroundColor: "rgba(255,255,255,0.9)",
    color: palette.navy
  },
  sand: {
    backgroundColor: palette.sand,
    color: palette.navy
  }
};

export default function Home() {
  const [skipFocused, setSkipFocused] = React.useState(false);
  const sanitizedPhone = siteConfig.contactPhone.replace(/\s+/g, "");
  const bookingEmail = siteConfig.contactEmail;

  return (
    <>
      <Head>
        <title>{homeSeo.title}</title>
        <meta name="description" content={homeSeo.description} />
        <meta name="keywords" content={homeSeo.keywords.join(", ")} />
        <link rel="canonical" href={homeSeo.canonical} />
        <meta property="og:title" content={homeSeo.title} />
        <meta property="og:description" content={homeSeo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={siteConfig.locale} />
        <meta property="og:url" content={homeSeo.canonical} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:image" content={homeSeo.image} />
        <meta property="og:image:alt" content={homeSeo.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homeSeo.title} />
        <meta name="twitter:description" content={homeSeo.description} />
        <meta name="twitter:image" content={homeSeo.image} />
      </Head>
      <main style={styles.page} className="home-page">
      <a
        href="#programare"
        style={{ ...styles.skipLink, ...(skipFocused ? styles.skipLinkVisible : {}) }}
        onFocus={() => setSkipFocused(true)}
        onBlur={() => setSkipFocused(false)}
      >
        Sari direct la programari
      </a>

      <SiteHeader palette={palette} navigation={navigation} megaMenus={megaMenus} />

      <section id="hero" style={{ ...styles.hero, ...fadeIn(0.05) }} aria-labelledby="hero-title" className="hero-section">
        <div style={styles.heroGlow} className="hero-glow" aria-hidden="true" />
        <div style={styles.heroInner} className="hero-inner">
          <div style={styles.heroContent}>
            <p style={styles.heroEyebrow} className="hero-eyebrow">
              Clinica dentara integrata
            </p>
            <h1 id="hero-title" style={styles.heroTitle}>
              DentNow este clinica familiei tale din Dristor
            </h1>
            <p style={styles.heroText} className="hero-text">
              DentNow imbina expertiza medicala cu tehnologii digitale si finantare usor de accesat. Tratam adulti si copii cu
              aceeasi grija, astfel incat fiecare vizita sa se termine cu un zambet relaxat.
            </p>

            <div style={styles.heroCtas}>
              <button type="button" style={styles.primaryButton} className="btn-animate">
                Programeaza consultatia
              </button>
              <a href="/portofoliu" style={styles.secondaryButton} className="btn-animate">
                Vezi portofoliul
              </a>
            </div>

            <dl style={styles.heroStats} className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} style={styles.heroStatBlock}>
                  <dt style={styles.heroStatValue}>{stat.value}</dt>
                  <dd style={styles.heroStatLabel}>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div style={styles.heroCard} role="complementary" aria-label="Informatii pentru programari" className="hero-info-card">
            <p style={styles.heroCardLabel}>Programam pacienti din tara si din strainatate</p>
            <p style={styles.heroCardDetail}>Program cabinet: Luni - Sambata, 08:00 - 21:00</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href={`tel:${sanitizedPhone}`} style={styles.heroContactLink} className="btn-animate">
                <span aria-hidden="true" style={styles.contactBadge}>
                  TEL
                </span>
                <span style={styles.heroContactText}>
                  {siteConfig.contactPhone}
                  <br />
                  <small style={{ fontWeight: 400, color: palette.slate }}>Linie prioritara</small>
                </span>
              </a>

              <a href={`mailto:${bookingEmail}`} style={styles.heroContactLink} className="btn-animate">
                <span aria-hidden="true" style={styles.contactBadge}>
                  MAIL
                </span>
                <span style={styles.heroContactText}>
                  {bookingEmail}
                  <br />
                  <small style={{ fontWeight: 400, color: palette.slate }}>Raspuns in max. 2 ore</small>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.highlightsWrapper, ...fadeIn(0.15) }} aria-label="Avantajele clinicii" className="highlight-wrapper">
        <div style={styles.highlightSection} className="interactive-panel highlight-panel">
          {highlights.map((item) => (
            <article key={item.title} style={styles.highlightCard} className="highlight-card">
              <span style={styles.highlightIcon} aria-hidden="true">
                {iconMap[item.icon] || item.icon}
              </span>
              <h3 style={styles.highlightTitle}>{item.title}</h3>
              <p style={styles.highlightText}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="servicii"
        style={{ ...styles.servicesSection, ...fadeIn(0.25) }}
        aria-labelledby="servicii-title"
        className="services-section"
      >
        <div style={styles.sectionHeader}>
          <p style={styles.sectionEyebrow}>Servicii complete</p>
          <h2 id="servicii-title" style={styles.sectionTitle}>
            Solutii moderne pentru fiecare etapa a zambetului tau
          </h2>
          <p style={styles.sectionCopy}>
            De la estetica dentara pana la reabilitari complexe, coordonam fiecare specializare in acelasi loc pentru a-ti oferi
            siguranta si confort.
          </p>
        </div>

        <div style={styles.cardsGrid} className="services-grid">
          {services.map((service) => (
            <article key={service.title} style={styles.card} aria-label={service.title} className="interactive-card">
              <span style={styles.serviceIcon} aria-hidden="true">
                {iconMap[service.icon] || service.icon}
              </span>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardCopy}>{service.description}</p>
              <ul style={styles.cardList}>
                {service.features.map((feature) => (
                  <li key={feature} style={styles.cardListItem}>
                    <span aria-hidden="true" style={styles.cardBullet}>
                      +
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" style={styles.linkButton} className="link-animate">
                Afla detalii
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        id="galerie"
        style={{ ...styles.gallerySection, ...fadeIn(0.35) }}
        aria-labelledby="galerie-title"
        className="gallery-section"
      >
        <div style={styles.galleryIntro}>
          <p style={styles.sectionEyebrow}>Galerie clinica</p>
          <h2 id="galerie-title" style={{ ...styles.sectionTitle, marginBottom: "12px" }}>
            Spatii concepute pentru confort si precizie
          </h2>
          <p style={styles.sectionCopy}>
            Rezervam zone distincte pentru chirurgie, estetica si consiliere, astfel incat fiecare interactiune sa fie fluida si
            predictibila. Insertiile de lemn si lumina naturala pregatesc cadrul perfect pentru prezentarea rezultatelor.
          </p>
        </div>

        <div style={styles.galleryGrid} className="gallery-grid">
          {galleryImages.map((item) => {
            const toneStyle = galleryToneStyles[item.tone] || {};
            const badgeStyle =
              item.tone === "deep"
                ? styles.galleryBadge
                : {
                    ...styles.galleryBadge,
                    border: `1px solid ${palette.border}`,
                    color: palette.navy,
                    backgroundColor: "rgba(31,182,124,0.08)"
                  };

            return (
              <figure key={item.title} style={{ ...styles.galleryCard, ...toneStyle }} className="interactive-card">
                <div
                  style={{
                    ...styles.galleryFrame,
                    borderColor: item.tone === "deep" ? "rgba(255,255,255,0.45)" : "rgba(11,42,61,0.3)",
                    backgroundColor: item.tone === "deep" ? "rgba(255,255,255,0.08)" : "rgba(11,42,61,0.05)"
                  }}
                  aria-hidden="true"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    style={styles.galleryImage}
                  />
                </div>
                <div>
                  <p style={badgeStyle}>Spatiu dedicat</p>
                  <h3 style={styles.galleryTitle}>{item.title}</h3>
                  <figcaption style={styles.galleryText}>{item.caption}</figcaption>
                </div>
              </figure>
            );
          })}
        </div>

      <div style={styles.galleryInfoGrid}>
        {facilityFeatures.map((feature) => (
          <div key={feature.title}>
            <p style={styles.galleryInfoTitle}>{feature.title}</p>
            <p style={styles.galleryInfoText}>{feature.detail}</p>
          </div>
        ))}
      </div>
    </section>

    <section
      style={{ ...styles.clinicShowcaseSection, ...fadeIn(0.37) }}
      aria-labelledby="clinic-showcase-title"
    >
      <div style={styles.clinicShowcaseIntro}>
        <p style={styles.sectionEyebrow}>Cabinetul DentNow</p>
        <h2 id="clinic-showcase-title" style={styles.clinicShowcaseTitle}>
          Suprafete, echipamente si cadre dedicate stomatologiei moderne
        </h2>
        <p style={styles.clinicShowcaseCopy}>
          Fiecare spatiu este optimizat pentru siguranta si confort — de la blocul operator pana la zonele de consiliere,
          pentru ca tu si familia ta sa simtiti ca intr-un cabinet premium.
        </p>
      </div>
      <div style={styles.clinicShowcaseGrid}>
        {showcaseElements.map((element) => (
          <article key={element.imageUrl} style={styles.clinicShowcaseCard}>
            <div style={styles.clinicShowcaseImage}>
              <Image src={element.imageUrl} alt={element.title} fill sizes="(max-width: 768px) 100vw, 240px" style={{ objectFit: "cover" }} />
            </div>
            <h3 style={styles.clinicShowcaseCardTitle}>{element.title}</h3>
            <p style={styles.clinicShowcaseCardCopy}>{element.description}</p>
            <ul style={styles.clinicShowcaseTags}>
              {element.tags.map((tag) => (
                <li key={tag} style={styles.clinicShowcaseTag}>
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>

    <section
      id="programare"
      style={{ ...styles.ctaSection, ...fadeIn(0.45) }}
        aria-labelledby="programare-title"
        className="cta-section"
      >
        <div style={styles.ctaContent}>
          <p style={styles.sectionEyebrow}>Programari rapide</p>
          <h2 id="programare-title" style={{ margin: "0 0 12px", fontSize: "32px" }}>
            Ramai conectat cu echipa ta medicala
          </h2>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Coordonatorii DentNow iti confirma vizita in cel mult 30 de minute. Trimite-ne istoricul tau medical in siguranta si
            pregatim traseul optim inaintea sosirii.
          </p>
          <div style={styles.ctaActions}>
            <a href={`tel:${sanitizedPhone}`} style={styles.phonePill} className="btn-animate">
              Suna acum
            </a>
            <button type="button" style={{ ...styles.primaryButton, boxShadow: "none" }} className="btn-animate">
              Trimite mesaj
            </button>
          </div>
        </div>
        <ul style={styles.assuranceList} className="assurance-list">
          {assurances.map((item) => (
            <li key={item} style={styles.assuranceItem}>
              <span aria-hidden="true" style={styles.assuranceBullet}>
                {">"}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <React.Suspense fallback={<div style={styles.footerPlaceholder} aria-hidden="true" />}>
        <SiteFooter palette={palette} />
      </React.Suspense>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .interactive-card,
        .interactive-panel {
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .interactive-card:hover,
        .interactive-panel:hover {
          transform: translateY(-12px);
        }

        .gallery-section .interactive-card:hover img {
          transform: scale(1.08);
        }

        @media (max-width: 768px) {
          body {
            background: linear-gradient(180deg, #e7f3ec 0%, #ebf6f2 45%, #fefaf8 100%);
          }
          .home-page {
            background: transparent;
            padding: 0 12px 60px !important;
            gap: 18px !important;
          }
          .hero-section {
            background: #fdfefc;
            box-shadow: 0 10px 30px rgba(9, 64, 51, 0.1);
            min-height: auto !important;
            margin-top: 24px !important;
            border-radius: 36px;
            border: 1px solid rgba(18, 60, 53, 0.1);
          }
          .hero-inner {
            flex-direction: column !important;
            gap: 32px !important;
            align-items: stretch !important;
          }
          #hero-title {
            font-size: 34px !important;
          }
          .hero-section .hero-text {
            line-height: 1.6 !important;
            font-size: 18px !important;
          }
          .hero-stats {
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
            gap: 12px !important;
            margin-top: 18px;
          }
          .hero-info-card {
            padding: 24px !important;
            border-radius: 24px !important;
            border: 1px solid rgba(18, 60, 53, 0.12);
            box-shadow: 0 12px 30px rgba(31, 182, 124, 0.1);
          }
          .hero-info-card p {
            color: ${palette.navy} !important;
          }
          .hero-contact-link {
            background: rgba(31, 182, 124, 0.08) !important;
            color: ${palette.navy} !important;
          }
          .highlight-wrapper {
            padding: 0 12px !important;
          }
          .highlight-panel {
            padding: 20px !important;
            flex-direction: column !important;
            gap: 16px !important;
          }
          .highlight-card {
            min-height: auto !important;
          }
          .services-section {
            padding: 56px 16px !important;
          }
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) !important;
            gap: 18px !important;
          }
          .gallery-section {
            padding: 48px 20px !important;
          }
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) !important;
          }
          .cta-section {
            padding: 32px 20px !important;
            flex-direction: column !important;
            gap: 20px !important;
          }
          .assurance-list {
            gap: 8px !important;
            width: 100% !important;
          }
          .btn-animate,
          .phonePill {
            width: 100% !important;
            text-align: center !important;
          }
          .gallery-frame {
            max-width: 100% !important;
            aspect-ratio: 4 / 5 !important;
          }
        }

        @media (max-width: 480px) {
          .home-page {
            padding: 0 10px 48px !important;
          }
          #hero-title {
            font-size: 30px !important;
            line-height: 1.15 !important;
          }
          .hero-section {
            padding: 44px 18px !important;
            gap: 20px !important;
          }
          .hero-stats {
            grid-template-columns: 1fr !important;
          }
          .hero-stats dt {
            font-size: 28px !important;
          }
          .services-section {
            padding: 48px 12px !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .card,
          .hero-info-card,
          .cta-section {
            min-height: auto !important;
          }
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-section {
            padding: 28px 16px !important;
            text-align: left !important;
          }
          .cta-section .btn-animate,
          .cta-section .phonePill {
            max-width: 100% !important;
          }
        }

        @media (max-width: 768px) {
          section {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 28px;
          }
          section img {
            width: 100%;
            height: auto;
          }
          section h1,
          section h2,
          section h3,
          section p {
            font-size: clamp(14px, 4vw, 18px);
          }
          button,
          .primaryButton,
          .secondaryButton,
          .btn-animate,
          .link-animate,
          .phonePill {
            padding: 12px;
          }
          .services-grid,
          .gallery-grid,
          .highlight-panel,
          .cardsGrid,
          .highlight-section {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      </main>
    </>
  );
}
