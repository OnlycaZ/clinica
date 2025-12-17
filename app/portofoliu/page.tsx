'use client';

import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "@/components/ui/SiteHeader";
import { megaMenus, navigation } from "@/data/navigation";
import { getSeoEntry, siteConfig } from "@/lib/utils/seo";

const portfolioSeo = getSeoEntry("portofoliu");
const SiteFooter = dynamic(() => import("@/components/ui/SiteFooter"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", maxWidth: "1200px", minHeight: "360px", margin: "0 auto" }} aria-hidden="true" />
});

const palette = {
  navy: "#123c35",
  night: "#0f1f1b",
  teal: "#1fb67c",
  sand: "#f6fbf6",
  slate: "#6a7f74",
  border: "#d9efe3",
  light: "#ffffff"
};

const caseStudies = Object.freeze([
  {
    code: "01",
    title: "Reabilitare full-arch digitala",
    summary: "Implanturi ghidate cu lucrare provizorie imediata pentru redarea masticației si a esteticii.",
    highlights: ["Planare 3D integrata", "Fatete provizorii in 24h", "Lucrare finala zirconiu stratificat"],
    duration: "10 zile"
  },
  {
    code: "02",
    title: "Estetica minim invaziva",
    summary: "Fatete ultrafine si albire ghidata, livrate cu suport foto-video pentru comunicare clara.",
    highlights: ["Mock-up digital live", "Fatete Emax 0.3 mm", "Albire controlata clinic"],
    duration: "5 vizite"
  },
  {
    code: "03",
    title: "Corectie functionala ATM",
    summary: "Terapie interdisciplinara pentru bruxism si dezechilibru muscular.",
    highlights: ["Analiza CBCT + fotografie dinamica", "Gutiere personalizate", "Fizioterapie si coaching postural"],
    duration: "8 saptamani"
  }
]);

const behindTheScenes = Object.freeze([
  {
    title: "Scanare 3D si fotografie narativa",
    description: "Documentam fiecare expresie pentru a transmite emotia reala a rezultatului."
  },
  {
    title: "Laborator digital in-house",
    description: "Tehnicieni dedicati, imprimare 3D si fatete provizorii pregatite in aceeasi zi."
  },
  {
    title: "Prezentare interactiva",
    description: "Livram albume digitale si clipuri 4K cu before/after pentru pacienti si parteneri media."
  }
]);

const metrics = Object.freeze([
  { value: "350+", label: "Studii foto/video pe an", note: "fiecare cu storyboard personalizat" },
  { value: "12", label: "Tehnicieni dedicati", note: "laborator integrat in clinica" },
  { value: "24h", label: "Timp mediu pentru mock-up", note: "de la scanare la prezentare" }
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
  header: {
    backgroundColor: palette.light,
    borderBottom: `1px solid ${palette.border}`,
    position: "sticky",
    top: 0,
    zIndex: 40,
    width: "100%"
  },
  topBar: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "18px 32px",
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    gap: "24px"
  },
  brand: {
    fontWeight: 700,
    fontSize: "22px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    display: "flex",
    gap: "6px"
  },
  navRow: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    position: "relative",
    justifyContent: "center",
    justifySelf: "center",
    width: "100%"
  },
  nav: {
    display: "flex",
    gap: "30px",
    fontSize: "15px",
    fontWeight: 600,
    justifyContent: "center"
  },
  navLink: {
    color: palette.navy,
    textDecoration: "none"
  },
  navTrigger: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    padding: "6px 0",
    borderRadius: "0",
    backgroundColor: "transparent"
  },
  navArrow: {
    fontSize: "12px",
    color: palette.slate
  },
  navItem: {
    position: "relative"
  },
  megaMenu: {
    position: "absolute",
    top: "32px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: "26px",
    padding: "24px 28px",
    border: `1px solid ${palette.border}`,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "20px",
    minWidth: "320px",
    zIndex: 60
  },
  megaColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  megaHeading: {
    margin: 0,
    fontSize: "13px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: palette.slate
  },
  megaLink: {
    textDecoration: "none",
    color: palette.navy,
    fontWeight: 500,
    fontSize: "14px"
  },
  navExtras: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  iconButton: {
    width: "38px",
    height: "38px",
    borderRadius: "12px",
    border: `1px solid ${palette.border}`,
    backgroundColor: palette.light,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: palette.navy,
    cursor: "pointer"
  },
  languageButton: {
    borderRadius: "20px",
    border: `1px solid ${palette.border}`,
    padding: "8px 16px",
    backgroundColor: "transparent",
    fontWeight: 600,
    color: palette.navy
  },
  headerActions: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    justifySelf: "end"
  },
  headerButton: {
    backgroundColor: "#118ae1",
    color: "#fff",
    border: "none",
    padding: "12px 28px",
    borderRadius: "14px",
    fontWeight: 600,
    cursor: "pointer"
  },
  primaryButton: {
    background: `linear-gradient(120deg, ${palette.teal}, #8bf2c5)`,
    color: palette.night,
    border: `1px solid rgba(31,182,124,0.2)`,
    padding: "12px 22px",
    borderRadius: "999px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "transform 0.35s ease, opacity 0.35s ease"
  },
  phoneLink: {
    borderRadius: "999px",
    border: `1px solid ${palette.border}`,
    padding: "12px 22px",
    color: palette.navy,
    backgroundColor: "rgba(31,182,124,0.08)",
    fontWeight: 600,
    textDecoration: "none"
  },
  hero: {
    width: "100%",
    maxWidth: "1200px",
    margin: "30px auto 0",
    minHeight: "640px",
    backgroundImage:
      "radial-gradient(circle at top right, rgba(31,182,124,0.3), transparent 60%), linear-gradient(135deg, rgba(255,255,255,0.98), rgba(233,247,238,0.92))",
    color: palette.navy,
    padding: "90px 48px 60px",
    borderRadius: "48px",
    border: `1px solid ${palette.border}`,
    position: "relative",
    overflow: "hidden",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  heroGlow: {
    display: "none"
  },
  heroInner: {
    maxWidth: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    minHeight: "400px"
  },
  heroContent: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    minHeight: "320px"
  },
  heroTitle: {
    fontSize: "48px",
    lineHeight: 1.1,
    margin: 0
  },
  heroText: {
    margin: 0,
    lineHeight: 1.6,
    color: palette.slate
  },
  heroStats: {
    borderRadius: "28px",
    backgroundColor: "rgba(255,255,255,0.72)",
    border: `1px solid ${palette.border}`,
    padding: "18px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "12px"
  },
  heroStat: {
    margin: 0,
    color: palette.navy
  },
  heroAsideGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px"
  },
  heroStoryCard: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: "26px",
    padding: "24px",
    border: `1px solid ${palette.border}`,
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  heroStoryEyebrow: {
    margin: 0,
    fontSize: "13px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: palette.teal
  },
  heroStoryTitle: {
    margin: 0,
    fontSize: "22px",
    color: palette.navy
  },
  heroStoryList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    color: palette.slate
  },
  caseSection: {
    padding: "80px 24px 20px",
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto"
  },
  sectionHeader: {
    maxWidth: "720px",
    marginBottom: "32px"
  },
  sectionEyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.25em",
    fontSize: "12px",
    color: palette.slate,
    marginBottom: "12px"
  },
  sectionTitle: {
    fontSize: "36px",
    margin: "0 0 12px"
  },
  sectionCopy: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6
  },
  caseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px"
  },
  caseCard: {
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: "32px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    border: `1px solid ${palette.border}`,
    minHeight: "280px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  highlightList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    color: palette.navy
  },
  timelineSection: {
    width: "100%",
    maxWidth: "1200px",
    margin: "20px auto 0",
    padding: "0 24px"
  },
  timeline: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px"
  },
  timelineCard: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: "26px",
    padding: "26px",
    border: `1px solid ${palette.border}`,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  metricsSection: {
    width: "100%",
    maxWidth: "1200px",
    margin: "40px auto 0",
    padding: "0 24px 60px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },
  metricCard: {
    borderRadius: "24px",
    padding: "24px",
    backgroundColor: "rgba(255,255,255,0.92)",
    border: `1px solid ${palette.border}`,
    willChange: "transform",
    transform: "translateZ(0)"
  },
  ctaSection: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.95), rgba(219,245,232,0.92))",
    color: palette.navy,
    borderRadius: "36px",
    padding: "40px",
    border: `1px solid ${palette.border}`,
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    alignItems: "center",
    minHeight: "360px",
    willChange: "transform",
    transform: "translateZ(0)"
  }
};

const fadeIn = (delay = 0): React.CSSProperties => ({
  animation: "fadeInUp 0.9s ease forwards",
  animationDelay: `${delay}s`
});

export default function Portofoliu() {
  const [skipFocused, setSkipFocused] = React.useState(false);

  return (
    <>
      <Head>
        <title>{portfolioSeo.title}</title>
        <meta name="description" content={portfolioSeo.description} />
        <meta name="keywords" content={portfolioSeo.keywords.join(", ")} />
        <link rel="canonical" href={portfolioSeo.canonical} />
        <meta property="og:title" content={portfolioSeo.title} />
        <meta property="og:description" content={portfolioSeo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={siteConfig.locale} />
        <meta property="og:url" content={portfolioSeo.canonical} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:image" content={portfolioSeo.image ?? siteConfig.defaultOgImage} />
        <meta property="og:image:alt" content={portfolioSeo.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={portfolioSeo.title} />
        <meta name="twitter:description" content={portfolioSeo.description} />
        <meta name="twitter:image" content={portfolioSeo.image ?? siteConfig.defaultOgImage} />
      </Head>
      <main style={styles.page}>
      <a
        href="#studii"
        style={{ ...styles.skipLink, ...(skipFocused ? styles.skipLinkVisible : {}) }}
        onFocus={() => setSkipFocused(true)}
        onBlur={() => setSkipFocused(false)}
      >
        Sari la studiile de caz
      </a>

      <SiteHeader palette={palette} navigation={navigation} megaMenus={megaMenus} />

      <section style={{ ...styles.hero, ...fadeIn(0.05) }} aria-labelledby="portofoliu-hero-title">
        <div style={styles.heroGlow} aria-hidden="true" />
        <div style={styles.heroInner}>
          <div style={styles.heroContent}>
            <p style={styles.sectionEyebrow}>Portofoliu clinic</p>
            <h1 id="portofoliu-hero-title" style={styles.heroTitle}>
              Documentam fiecare zambet ca pe o experienta cinematica
            </h1>
            <p style={styles.heroText}>
              Stocam toate studiile foto-video in biblioteca digitala DentNow pentru referinte clinice rapide si inspiratie.
              Pacientii urmaresc progresul in timp real si primesc suport media pentru comunicare personala.
            </p>
            <div style={styles.heroStats}>
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p style={{ margin: 0, fontSize: "32px", fontWeight: 700 }}>{metric.value}</p>
                  <p style={{ margin: 0, color: palette.slate }}>{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={styles.heroAsideGrid}>
            <div style={styles.heroStoryCard}>
              <p style={styles.heroStoryEyebrow}>Studiori dedicate</p>
              <h3 style={styles.heroStoryTitle}>Integram fotografie, video si prezentari digitale pentru a arata parcursul complet al pacientului.</h3>
              <ul style={styles.heroStoryList}>
                <li>Studio foto cu lumina calibrata.</li>
                <li>Platforma privata pentru pacient.</li>
                <li>Colaborare cu reviste de design.</li>
              </ul>
            </div>
            <div style={styles.heroStoryCard}>
              <p style={styles.heroStoryEyebrow}>Livrare rapida</p>
              <h3 style={styles.heroStoryTitle}>Documentam fiecare caz in 24h pentru a ghida comunicarea medic-pacient.</h3>
              <ul style={styles.heroStoryList}>
                <li>Stocare securizata in biblioteca digitala DentNow.</li>
                <li>Alarme automate pentru actualizari.</li>
                <li>Suport media pentru parteneri internationali.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="studii" style={{ ...styles.caseSection, ...fadeIn(0.15) }} aria-labelledby="studii-title">
        <div style={styles.sectionHeader}>
          <p style={styles.sectionEyebrow}>Studii de caz</p>
          <h2 id="studii-title" style={styles.sectionTitle}>
            Reabilitari complexe prezentate transparent
          </h2>
          <p style={styles.sectionCopy}>
            Selectie de proiecte documentate vizual pentru pacienti din Romania si diaspora. Fiecare include planificare digitala,
            interventie si fotografie finala.
          </p>
        </div>

        <div style={styles.caseGrid}>
          {caseStudies.map((study) => (
            <article key={study.code} style={styles.caseCard} className="interactive-card">
              <p style={{ margin: 0, letterSpacing: "0.25em", fontSize: "12px", color: palette.slate }}>#{study.code}</p>
              <h3 style={{ margin: "8px 0" }}>{study.title}</h3>
              <p style={{ margin: 0, color: palette.slate }}>{study.summary}</p>
              <ul style={styles.highlightList}>
                {study.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p style={{ margin: 0, fontWeight: 600 }}>Durata: {study.duration}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ ...styles.timelineSection, ...fadeIn(0.25) }} aria-label="Flux productie media">
        <div style={styles.sectionHeader}>
          <p style={styles.sectionEyebrow}>Behind the scenes</p>
          <h2 style={styles.sectionTitle}>Atelierul nostru digital</h2>
          <p style={styles.sectionCopy}>
            Echipa de studio documenteaza fiecare detaliu. Pacientii primesc actualizari video dupa fiecare etapa importanta.
          </p>
        </div>

        <div style={styles.timeline}>
          {behindTheScenes.map((item) => (
            <article key={item.title} style={styles.timelineCard} className="interactive-card">
              <h3 style={{ margin: "0 0 6px" }}>{item.title}</h3>
              <p style={{ margin: 0, color: palette.slate }}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ ...styles.metricsSection, ...fadeIn(0.35) }} aria-label="Indicatori de proiect">
        {metrics.map((metric) => (
          <article key={metric.label} style={styles.metricCard} className="interactive-card">
            <p style={{ margin: "0 0 4px", fontSize: "32px", fontWeight: 700 }}>{metric.value}</p>
            <p style={{ margin: "0 0 8px", fontWeight: 600 }}>{metric.label}</p>
            <p style={{ margin: 0, color: palette.slate }}>{metric.note}</p>
          </article>
        ))}
      </section>

      <section style={{ ...styles.ctaSection, ...fadeIn(0.45) }} aria-label="Colaborare media">
        <div style={{ flex: "2 1 320px" }}>
          <p style={styles.sectionEyebrow}>Colaborari media</p>
          <h2 style={{ margin: "0 0 12px", fontSize: "32px" }}>Solicita acces la biblioteca privata</h2>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Editorii si partenerii pot solicita albume, filmari behind-the-scenes sau interviuri cu specialistii nostri.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/contact" className="btn-animate" style={{ ...styles.primaryButton, boxShadow: "none" }}>
            Trimite brief
          </a>
          <a href="mailto:media@dentnow.ro" className="btn-animate" style={styles.phoneLink}>
            media@dentnow.ro
          </a>
        </div>
      </section>

      <SiteFooter palette={palette} />

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
      `}</style>
      </main>
    </>
  );
}
