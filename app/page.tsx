'use client';

import React from "react";
import Head from "next/head";
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
    features: ["Mock-up vizual", "Laborator dedicat", "Materiale biomimetice"],
    image: "/dentnow-service-fatete.jpg"
  },
  {
    icon: "IMG",
    title: "Implantologie ghidata",
    description: "Interventii confortabile cu planificare 3D si protetica provizorie imediata.",
    features: ["Ghizi chirurgicali", "Sedare constienta", "Echipa multidisciplinara"],
    image: "/dentnow-service-implantologie.jpg"
  },
  {
    icon: "RX",
    title: "Reabilitare complexa",
    description: "Tratamente functionale pentru ATM, ortodontie invizibila si reabilitari totale.",
    features: ["Scanare intraorala", "Monitorizare digitala", "Plan terapeutic integrat"],
    image: "/dentnow-service-albirea-dintilor.jpg"
  }
]);

type ServiceCardVariant =
  | "active"
  | "incoming-next"
  | "incoming-prev"
  | "outgoing-next"
  | "outgoing-prev";

const SLIDE_TRANSITION_MS = 520;

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
    tone: "deep"
  },
  {
    title: "Studio estetica",
    caption: "Laborator foto-video pentru designul digital al zambetului.",
    tone: "light"
  },
  {
    title: "Sterilizare trasabila",
    caption: "Linie dedicata pentru pregatirea instrumentarului in flux inchis.",
    tone: "sand"
  },
  {
    title: "Radiologie 3D",
    caption: "Flux complet in-house pentru investigatii rapide si sigure.",
    tone: "deep"
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
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#eaf6f0",
    color: palette.navy,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: "0",
    padding: "0",
  },
  hero: {
    width: "100vw",
    maxWidth: "none",
    marginLeft: "calc(50% - 50vw)",
    minHeight: "90vh",
    padding: "120px 32px 96px",
    background: "linear-gradient(135deg, #0fac7b, #0d9770 60%, #0a6645)",
    position: "relative",
    overflow: "hidden",
    color: palette.light,
    borderRadius: 0,
    transform: "translateZ(0)",
  },
  heroInner: {
    width: "100%",
    maxWidth: "1320px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
  },
  heroContent: {
    textAlign: "center",
    maxWidth: "960px",
    margin: "0 auto",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(4, 120, 87, 0.25)), radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.45), transparent 45%)",
    pointerEvents: "none",
    zIndex: 1
  },
  heroVideoWrapper: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    zIndex: 0,
    borderRadius: 0
  },
  heroVideo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "140%",
    height: "140%",
    transform: "translate(-50%, -50%)",
    objectFit: "cover",
    filter: "brightness(0.65) saturate(1.2)"
  },
  heroEyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.4em",
    fontSize: "12px",
    color: "rgba(255,255,255,0.85)",
    marginBottom: "18px",
    fontWeight: 600,
  },
  heroTitle: {
    fontSize: "clamp(40px, 6vw, 64px)",
    lineHeight: 1.15,
    margin: "0 0 24px",
    fontWeight: 800,
    textShadow: "0 30px 60px rgba(4, 120, 87, 0.45)",
  },
  heroText: {
    fontSize: "clamp(16px, 2.2vw, 20px)",
    lineHeight: 1.75,
    color: "rgba(255,255,255,0.95)",
    margin: "0 0 32px",
    textShadow: "0 15px 30px rgba(4, 120, 87, 0.35)",
  },
  heroCtas: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "560px",
    margin: "0 auto 12px",
  },
  primaryButton: {
    background: `linear-gradient(120deg, ${palette.teal}, #9cf1d3)`,
    color: palette.night,
    padding: "14px 36px",
    borderRadius: "999px",
    fontWeight: 700,
    border: "none",
    boxShadow: "0 18px 45px rgba(31,182,124,0.35)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  secondaryButton: {
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.5)",
    color: "#fff",
    padding: "14px 34px",
    fontWeight: 600,
    background: "rgba(255,255,255,0.15)",
    transition: "background 0.3s ease, transform 0.3s ease",
  },
  heroStats: {
    width: "100%",
    maxWidth: "960px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "24px",
  },
  heroStatBlock: {
    borderLeft: "1px solid rgba(255,255,255,0.5)",
    paddingLeft: "16px",
    textAlign: "center",
  },
  heroStatValue: {
    fontSize: "36px",
    fontWeight: 700,
    margin: 0,
    color: "#fff",
  },
  heroStatLabel: {
    margin: 0,
    color: "rgba(255,255,255,0.85)",
    fontSize: "14px",
  },
  heroCard: {
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: "36px",
    padding: "34px",
    boxShadow: "0 32px 90px rgba(11,42,61,0.15)",
    maxWidth: "560px",
    margin: "32px auto 0",
    position: "relative",
    zIndex: 2,
    color: palette.navy,
    border: "none",
  },
  heroCardLabel: {
    fontSize: "20px",
    fontWeight: 700,
    margin: 0,
  },
  heroCardDetail: {
    margin: "0 0 18px",
    color: palette.slate,
    fontSize: "15px",
  },
  heroContactLink: {
    backgroundColor: "rgba(31,182,124,0.08)",
    border: "1px solid rgba(31,182,124,0.25)",
    borderRadius: "22px",
    display: "flex",
    gap: "16px",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "16px 20px",
    textDecoration: "none",
    color: palette.navy,
    fontWeight: 600,
    minWidth: "240px",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  },
  heroContactText: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.4,
    alignItems: "flex-start",
  },
  contactBadge: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    backgroundColor: palette.teal,
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "0.08em",
    fontSize: "11px",
    fontWeight: 700,
  },
  highlightsWrapper: {
    width: "100%",
    padding: "70px 0",
    background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(233,247,238,0.82))",
  },
  highlightSection: {
    maxWidth: "1320px",
    margin: "0 auto",
    padding: "42px 32px",
    borderRadius: "36px",
    backgroundColor: "rgba(255,255,255,0.96)",
    boxShadow: "0 40px 90px rgba(18,60,53,0.05)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
  },
  highlightCard: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: "32px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minHeight: "160px",
    border: `1px solid rgba(31,182,124,0.15)`,
    boxShadow: "0 25px 60px rgba(31,182,124,0.08)",
  },
  highlightIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "18px",
    backgroundColor: "rgba(31,182,124,0.16)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: palette.teal,
  },
  highlightTitle: {
    margin: "0",
    fontSize: "20px",
    fontWeight: 700,
  },
  highlightText: {
    margin: "0",
    color: palette.slate,
    lineHeight: 1.6,
  },
  servicesSection: {
    width: "100%",
    padding: "96px 24px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(221,248,238,0.94))",
  },
  servicesContent: {
    width: "100%",
    maxWidth: "1320px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  sliderHeader: {
    marginBottom: "24px",
    textAlign: "center",
    padding: "0 20px",
  },
  sliderHeaderLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.35em",
    fontSize: "12px",
    color: palette.teal,
    marginBottom: "12px",
  },
  sliderHeaderTitle: {
    fontSize: "32px",
    lineHeight: 1.2,
    margin: "0 0 12px",
    fontWeight: 700,
    color: palette.navy,
  },
  sliderHeaderCopy: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6,
  },
  sliderWrapper: {
    position: "relative",
    borderRadius: "28px",
    overflow: "hidden",
    padding: "36px 32px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.18))",
    width: "100%",
    boxShadow: "0 40px 90px rgba(3, 55, 46, 0.35)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
  },
  carouselStage: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
    gap: "16px",
  },
  carouselRow: {
    display: "grid",
    gridTemplateColumns: "minmax(200px, 1fr) 380px minmax(200px, 1fr)",
    gap: "20px",
    alignItems: "center",
    justifyItems: "center",
  },
  sidePreview: {
    width: "285px",
    height: "315px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.08)",
    boxShadow: "0 20px 50px rgba(2, 52, 40, 0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
    position: "relative",
    overflow: "hidden",
  },
  sideOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0))",
    borderRadius: "inherit",
  },
  sidePreviewContent: {
    position: "absolute",
    inset: "20px",
    color: "#fff",
    fontSize: "14px",
    zIndex: 1,
  },
  activeCardWrapper: {
    minHeight: "320px",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "380px",
    height: "420px",
  },
  sliderArrow: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(0,0,0,0.45)",
    color: "#fff",
    fontSize: "34px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  sliderArrowSide: {
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
  },
  sliderArrowDisabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  serviceTile: {
    position: "relative",
    width: "380px",
    height: "420px",
    borderRadius: "24px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "24px",
    color: "#fff",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 35px 90px rgba(2, 52, 40, 0.45), 0 0 40px rgba(255,255,255,0.25)",
    border: "1px solid rgba(255,255,255,0.25)",
    minHeight: "420px",
  },
  previewCard: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "22px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "16px 18px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0 25px 65px rgba(2, 52, 40, 0.35)",
    backdropFilter: "blur(12px)",
  },
  previewTile: {
    width: "100%",
    height: "100%",
    padding: "18px",
    borderRadius: "22px",
    opacity: 0.76,
    filter: "blur(4px) saturate(0.78)",
    boxShadow: "inset 0 0 25px rgba(255,255,255,0.35), 0 20px 55px rgba(2,52,40,0.35)",
  },
  previewTileContent: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  previewTileDesc: {
    margin: 0,
    fontSize: "13px",
    lineHeight: 1.4,
    color: "rgba(255,255,255,0.8)",
  },
  tileGradient: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(3, 29, 30, 0.25), rgba(3, 29, 30, 0.75))",
  },
  tileContent: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  tileTitle: {
    margin: 0,
    fontSize: "22px",
    fontWeight: 700,
  },
  tileDesc: {
    margin: 0,
    fontSize: "16px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.9)",
  },
  tileLink: {
    marginTop: "8px",
    color: palette.teal,
    textDecoration: "underline",
    fontWeight: 600,
  },
  sectionHeader: {
    maxWidth: "720px",
    marginBottom: "32px",
  },
  sectionEyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.3em",
    color: palette.teal,
    fontSize: "12px",
    marginBottom: "12px",
  },
  sectionTitle: {
    fontSize: "36px",
    lineHeight: 1.4,
    margin: "0 0 16px",
  },
  sectionCopy: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.7,
  },
  cardsGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "30px",
    padding: "28px",
    border: `1px solid rgba(31,182,124,0.12)`,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minHeight: "320px",
    boxShadow: "0 32px 80px rgba(18,60,53,0.06)",
  },
  serviceIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "18px",
    backgroundColor: "rgba(31,182,124,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: palette.teal,
  },
  cardTitle: {
    margin: 0,
    fontSize: "22px",
  },
  cardCopy: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6,
  },
  cardList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    color: palette.navy,
  },
  cardListItem: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    fontSize: "14px",
  },
  cardBullet: {
    width: "26px",
    height: "26px",
    borderRadius: "8px",
    backgroundColor: "rgba(31,182,124,0.15)",
    color: palette.teal,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  },
  linkButton: {
    marginTop: "8px",
    background: "none",
    border: "none",
    color: palette.teal,
    fontWeight: 600,
    cursor: "pointer",
    padding: 0,
  },
  gallerySection: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: "36px",
    padding: "80px 36px",
    margin: "40px auto",
    maxWidth: "1200px",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 30px 70px rgba(18,60,53,0.08)",
  },
  galleryIntro: {
    maxWidth: "700px",
    marginBottom: "32px",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
  },
  galleryCard: {
    borderRadius: "32px",
    padding: "26px 22px",
    minHeight: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(233,247,238,0.85))",
    border: "1px solid rgba(18,75,60,0.08)",
    boxShadow: "0 20px 50px rgba(18,60,53,0.08)",
  },
  galleryFrame: {
    borderRadius: "24px",
    border: "1px solid rgba(18,75,60,0.15)",
    width: "100%",
    aspectRatio: "3 / 4",
    overflow: "hidden",
    boxShadow: "inset 0 0 15px rgba(18,75,60,0.08)",
    backgroundColor: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  galleryFramePlaceholder: {
    width: "80%",
    height: "80%",
    borderRadius: "18px",
    background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.18))",
    filter: "blur(0.5px)",
  },
  galleryTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
  },
  galleryText: {
    margin: 0,
    fontSize: "15px",
    lineHeight: 1.5,
    color: palette.slate,
  },
  galleryBadge: {
    alignSelf: "flex-start",
    padding: "6px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.35)",
    fontSize: "12px",
    fontWeight: 600,
    color: palette.navy,
    backgroundColor: "rgba(31,182,124,0.08)",
  },
  galleryInfoGrid: {
    marginTop: "32px",
    borderRadius: "32px",
    padding: "32px",
    backgroundColor: "rgba(255,255,255,0.97)",
    border: `1px solid ${palette.border}`,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },
  galleryInfoTitle: {
    marginBottom: "6px",
    fontWeight: 700,
  },
  galleryInfoText: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6,
  },
  ctaSection: {
    width: "100%",
    maxWidth: "1200px",
    margin: "40px auto 80px",
    borderRadius: "36px",
    padding: "56px 48px",
    backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.95), rgba(219,245,232,0.92))",
    display: "flex",
    flexWrap: "wrap",
    gap: "32px",
    alignItems: "center",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 32px 80px rgba(18,60,53,0.08)",
  },
  footerPlaceholder: {
    width: "100%",
    maxWidth: "1200px",
    minHeight: "360px",
    margin: "0 auto",
  },
  ctaContent: {
    flex: "2 1 380px",
  },
  ctaActions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "24px",
  },
  phonePill: {
    borderRadius: "999px",
    padding: "12px 20px",
    border: "1px solid rgba(31,182,124,0.3)",
    backgroundColor: "rgba(31,182,124,0.12)",
    color: palette.navy,
    fontWeight: 600,
    textDecoration: "none",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  },
  assuranceList: {
    flex: "1 1 260px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  assuranceItem: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    color: palette.slate,
  },
  assuranceBullet: {
    color: palette.teal,
    fontWeight: 700,
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
    gap: "24px",
  },
  clinicShowcaseIntro: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  clinicShowcaseTitle: {
    margin: 0,
    fontSize: "32px",
    color: palette.navy,
  },
  clinicShowcaseCopy: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6,
  },
  clinicShowcaseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  clinicShowcaseCard: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: "32px",
    padding: "24px",
    border: `1px solid rgba(18,75,60,0.12)`,
    boxShadow: "0 20px 60px rgba(18,60,53,0.08)",
    minHeight: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  clinicShowcaseImage: {
    width: "100%",
    height: "180px",
    borderRadius: "24px",
    background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(242,249,247,0.5))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid rgba(18,75,60,0.15)`
  },
  clinicShowcaseCardTitle: {
    margin: 0,
    fontSize: "20px",
  },
  clinicShowcaseCardCopy: {
    margin: 0,
    fontSize: "15px",
    color: palette.slate,
    lineHeight: 1.6,
  },
  clinicShowcaseTags: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  clinicShowcaseTag: {
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "999px",
    border: `1px solid rgba(31,182,124,0.3)`,
    color: palette.teal,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
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
  const sanitizedPhone = siteConfig.contactPhone.replace(/\s+/g, "");
  const bookingEmail = siteConfig.contactEmail;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [transitionDirection, setTransitionDirection] = React.useState<"idle" | "next" | "prev">("idle");
  const [activeArrow, setActiveArrow] = React.useState<"none" | "prev" | "next">("none");
  const [transitionTarget, setTransitionTarget] = React.useState<number | null>(null);
  const [previewAnimationKey, setPreviewAnimationKey] = React.useState(0);
  const prevIndex = (currentIndex - 1 + services.length) % services.length;
  const nextIndex = (currentIndex + 1) % services.length;
  const previewCenterIndex = transitionTarget ?? currentIndex;
  const previewPrevIndex = (previewCenterIndex - 1 + services.length) % services.length;
  const previewNextIndex = (previewCenterIndex + 1) % services.length;

  const triggerArrow = (direction: "prev" | "next") => {
    setActiveArrow(direction);
    setTimeout(() => setActiveArrow("none"), 220);
  };

  const changeSlide = (direction: "prev" | "next") => {
    if (transitionDirection !== "idle") {
      return;
    }
    const target = direction === "next" ? nextIndex : prevIndex;
    setTransitionDirection(direction);
    setTransitionTarget(target);
    setPreviewAnimationKey((value) => value + 1);
    setTimeout(() => {
      setCurrentIndex(target);
      setTransitionDirection("idle");
      setTransitionTarget(null);
    }, SLIDE_TRANSITION_MS);
  };

  const goPrev = () => {
    triggerArrow("prev");
    changeSlide("prev");
  };

  const goNext = () => {
    triggerArrow("next");
    changeSlide("next");
  };

  const renderServiceCard = (serviceIndex: number, variant: ServiceCardVariant = "active") => {
    const service = services[serviceIndex];
    if (!service) return null;
    const variantClass = `service-tile--${variant}`;
    const isOutgoing = variant.startsWith("outgoing");
    return (
      <article
        style={styles.serviceTile}
        className={`service-tile ${variantClass}`}
        data-variant={variant}
        aria-hidden={isOutgoing}
      >
        <div style={styles.tileGradient} aria-hidden="true" />
        <div style={styles.tileContent}>
          <h3 style={styles.tileTitle}>{service.title}</h3>
          <p style={styles.tileDesc}>{service.description}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
            {service.features.map((feature) => (
              <li key={feature} style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)" }}>
                · {feature}
              </li>
            ))}
          </ul>
          <a href="/contact" style={styles.tileLink} className="link-animate">
            Vezi detalii
          </a>
        </div>
      </article>
    );
  };

  const renderServicePreview = (serviceIndex: number) => {
    const service = services[serviceIndex];
    if (!service) return null;
    return (
      <article className="preview-panel" style={{ ...styles.previewCard, ...styles.previewTile }} aria-hidden="true">
        <div style={styles.tileGradient} aria-hidden="true" />
        <div style={styles.previewTileContent}>
          <h4 style={{ ...styles.tileTitle, fontSize: "18px" }}>{service.title}</h4>
          <p style={styles.previewTileDesc}>{service.description}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
            {service.features.slice(0, 2).map((feature) => (
              <li key={feature} style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)" }}>
                · {feature}
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  };

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
      <main style={styles.page} className="home-page w-screen overflow-x-hidden">
        <SiteHeader palette={palette} navigation={navigation} megaMenus={megaMenus} />

        <section
          id="hero"
          aria-labelledby="hero-title"
          className="hero-section w-full px-0"
          style={{ ...styles.hero, ...fadeIn(0.05) }}
        >
          <div style={styles.heroVideoWrapper} aria-hidden="true">
            <video
              src="/Dental_Clinic_Video_Presentation_Request.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={styles.heroVideo}
            />
          </div>
          <div style={styles.heroOverlay} aria-hidden="true" />
          <div style={styles.heroInner} className="hero-inner">
            <div style={styles.heroContent}>
              <p style={styles.heroEyebrow}>Clinica dentara integrata</p>
              <h1 id="hero-title" style={styles.heroTitle}>
                DentNow este clinica familiei tale din Dristor
              </h1>
              <p style={styles.heroText}>
                DentNow imbina expertiza medicala cu tehnologii digitale si finantare usor de accesat. Tratam adulti si
                copii cu aceeasi grija, astfel incat fiecare vizita sa se termine cu un zambet relaxat.
              </p>
              <div style={styles.heroCtas}>
                <a href="/rezerva-vizita" style={styles.primaryButton} className="hero-primary btn-animate">
                  Programeaza consultatia
                </a>
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

            <div style={styles.heroCard} role="complementary" aria-label="Informatii pentru programari">
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

        <section
          style={{ ...styles.highlightsWrapper, ...fadeIn(0.15) }}
          aria-label="Avantajele clinicii"
          className="w-full px-4 lg:px-0"
        >
          <div style={styles.highlightSection} className="interactive-panel">
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
          aria-labelledby="servicii-title"
          className="services-section w-full px-4 lg:px-0"
          style={{ ...styles.servicesSection, ...fadeIn(0.25) }}
        >
          <div style={styles.servicesContent}>
            <div style={styles.sliderHeader}>
              <p style={styles.sliderHeaderLabel}>Servicii complete</p>
              <h2 id="servicii-title" style={styles.sliderHeaderTitle}>
                Tratamente fauritoare de bucurie
              </h2>
              <p style={styles.sliderHeaderCopy}>
                De la estetica dentara pana la reabilitari complexe, coordonam fiecare specializare in acelasi loc pentru a-ti oferi siguranta si confort.
              </p>
            </div>
            <div style={styles.sliderWrapper}>
              <div style={styles.carouselStage}>
                <button
                  type="button"
                  onClick={goPrev}
                  className={activeArrow === "prev" ? "sliderArrow button-press" : "sliderArrow"}
                  style={{
                    ...styles.sliderArrow,
                    ...styles.sliderArrowSide,
                    ...(services.length <= 1 ? styles.sliderArrowDisabled : {}),
                  }}
                  aria-label="Slide anterior"
                >
                  {"<"}
                </button>
                <div style={styles.carouselRow}>
                  <div style={styles.sidePreview} key={`preview-prev-${previewAnimationKey}`}>
                    {renderServicePreview(previewPrevIndex)}
                  </div>
                <div style={styles.activeCardWrapper}>
                  {transitionDirection === "idle" || transitionTarget === null ? (
                    renderServiceCard(currentIndex, "active")
                  ) : (
                    <>
                      <div className="slider-card-layer outgoing" key="outgoing-card">
                        {renderServiceCard(
                          currentIndex,
                          transitionDirection === "next" ? "outgoing-next" : "outgoing-prev"
                        )}
                      </div>
                      <div className="slider-card-layer incoming" key="incoming-card">
                        {renderServiceCard(
                          transitionTarget!,
                          transitionDirection === "next" ? "incoming-next" : "incoming-prev"
                        )}
                      </div>
                    </>
                  )}
                </div>
                  <div style={styles.sidePreview} key={`preview-next-${previewAnimationKey}`}>
                    {renderServicePreview(previewNextIndex)}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  className={activeArrow === "next" ? "sliderArrow button-press" : "sliderArrow"}
                  style={{
                    ...styles.sliderArrow,
                    ...styles.sliderArrowSide,
                    ...(services.length <= 1 ? styles.sliderArrowDisabled : {}),
                  }}
                  aria-label="Slide urmator"
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="galerie"
          aria-labelledby="galerie-title"
          className="gallery-section w-full px-4 lg:px-0"
          style={{ ...styles.gallerySection, ...fadeIn(0.35) }}
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
                      backgroundColor: "rgba(31,182,124,0.08)",
                    };
              return (
                <figure key={item.title} style={{ ...styles.galleryCard, ...toneStyle }} className="interactive-card">
                <div style={styles.galleryFrame} aria-hidden="true">
                  <div style={styles.galleryFramePlaceholder} />
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
          aria-labelledby="clinic-showcase-title"
          className="section-bg w-full px-4 lg:px-0"
          style={{ ...styles.clinicShowcaseSection, ...fadeIn(0.37) }}
        >
          <div style={styles.clinicShowcaseIntro}>
            <p style={styles.sectionEyebrow}>Cabinetul DentNow</p>
            <h2 id="clinic-showcase-title" style={styles.clinicShowcaseTitle}>
              Suprafete, echipamente si cadre dedicate stomatologiei moderne
            </h2>
            <p style={styles.clinicShowcaseCopy}>
              Fiecare spatiu este optimizat pentru siguranta si confort - de la blocul operator pana la zonele de consiliere,
              pentru ca tu si familia ta sa simtiti ca intr-un cabinet premium.
            </p>
          </div>
          <div style={styles.clinicShowcaseGrid}>
            {showcaseElements.map((element) => (
              <article key={element.imageUrl} style={styles.clinicShowcaseCard}>
            <div style={styles.clinicShowcaseImage} aria-hidden="true">
              <span style={{ fontSize: "12px", color: "rgba(18,60,53,0.5)", letterSpacing: "0.3em" }}>IMAGINE</span>
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
          aria-labelledby="programare-title"
          className="cta-section w-full px-4 lg:px-0"
          style={{ ...styles.ctaSection, ...fadeIn(0.45) }}
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

        <style jsx global>{`
          .home-page {
            background: transparent;
            padding: 0;
          }
          .hero-section {
            background: none !important;
          }
          .interactive-card,
          .interactive-panel {
            transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
            box-shadow: 0 20px 45px rgba(18, 60, 53, 0.08);
          }
          .interactive-card:hover,
          .interactive-panel:hover {
            transform: translateY(-3px) scale(1.01);
            box-shadow: 0 30px 60px rgba(18, 60, 53, 0.16);
          }
          .slider-card-layer {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: stretch;
            justify-content: center;
            pointer-events: none;
          }
          .slider-card-layer.incoming {
            z-index: 3;
          }
          .slider-card-layer.outgoing {
            z-index: 2;
          }
          .service-tile {
            transition: transform 0.85s ease-in-out, opacity 0.85s ease-in-out, filter 0.85s ease-in-out,
              box-shadow 0.85s ease-in-out;
            will-change: transform, opacity, filter;
          }
          .service-tile::after {
            content: "";
            position: absolute;
            inset: 12px;
            border-radius: 18px;
            background: radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.4), transparent 55%);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.6s ease;
          }
          .service-tile:hover::after {
            opacity: 0.45;
          }
          .service-tile--active {
            transform: scale(1);
            opacity: 1;
            filter: blur(0px) saturate(1.1);
            box-shadow: 0 40px 90px rgba(6, 78, 51, 0.45), 0 0 40px rgba(255, 255, 255, 0.35);
          }
          .service-tile--incoming-next,
          .service-tile--incoming-prev {
            animation: sliderIncomingFade 0.54s ease forwards;
          }
          .service-tile--outgoing-next,
          .service-tile--outgoing-prev {
            animation: sliderOutgoingFade 0.45s ease forwards;
          }
          .gallery-grid .interactive-card:hover img {
            transform: scale(1.08);
          }
          @keyframes sliderIncomingFade {
            0% {
              transform: translate3d(0, 6px, 0);
              opacity: 0;
              filter: blur(4px);
            }
            50% {
              opacity: 0.65;
            }
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 1;
              filter: blur(0px);
            }
          }
          @keyframes sliderOutgoingFade {
            0% {
              opacity: 1;
              filter: blur(0px);
            }
            100% {
              transform: translate3d(0, -6px, 0);
              opacity: 0;
              filter: blur(3px);
            }
          }
          .preview-panel {
            animation: previewFade 0.65s ease forwards;
            filter: blur(5px);
            will-change: opacity, transform;
          }
          @keyframes previewFade {
            0% {
              opacity: 0;
              transform: translate3d(0, 12px, 0);
            }
            50% {
              opacity: 0.6;
              transform: translate3d(0, 6px, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          @keyframes sideGlow {
            0%,
            100% {
              filter: blur(6px) brightness(0.7);
            }
            50% {
              filter: blur(4px) brightness(0.85);
            }
          }
          @media (max-width: 768px) {
            .home-page {
              padding: 0 12px 60px !important;
            }
            .hero-section {
              padding: 80px 18px 60px !important;
            }
            .heroCtas,
            .hero-stats,
            .hero-info-card {
              margin: 0 auto !important;
            }
            .hero-stats {
              grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
            }
            .services-section,
            .gallery-section,
            .cta-section,
            .section-bg {
              padding: 56px 16px !important;
            }
            .services-grid,
            .gallery-grid,
            .highlight-section {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>
    </>
  );
}
