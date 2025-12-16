'use client';

import React from "react";
import Head from "next/head";
import SiteFooter from "@/components/ui/SiteFooter";
import SiteHeader from "@/components/ui/SiteHeader";
import { priceListSections } from "@/data/data/price-list";
import { megaMenus, navigation } from "@/data/navigation";
import { getSeoEntry, siteConfig } from "@/lib/utils/seo";

const pricingSeo = getSeoEntry("preturi");

const palette = {
  navy: "#123c35",
  night: "#0f1f1b",
  teal: "#1fb67c",
  sand: "#f6fbf6",
  slate: "#6a7f74",
  border: "#d9efe3",
  light: "#ffffff"
};

const commitments = [
  "Preturi afisate includ evaluari interdisciplinare si instructaj post-procedura.",
  "Platile se pot realiza in 4 rate fara dobanda pentru planuri peste 2500 RON.",
  "Pacientii internationali beneficiaza de consilier dedicat si traducere documente.",
  "Pentru lucrari extinse oferim simulare financiara inainte de inceperea tratamentului."
];

const tariffIncludes = [
  {
    key: "plan",
    title: "Management de caz",
    detail: "Plan personalizat redactat de echipa interdisciplinara si sincronizat cu laboratorul digital."
  },
  {
    key: "monitor",
    title: "Monitorizare priority",
    detail: "Urmarire post-interventie la 24h si acces direct la concierge medical."
  },
  {
    key: "docs",
    title: "Documentatie digitala",
    detail: "Radiografii, planuri si instructiuni livrate securizat in maxim 24 de ore."
  }
];

const inclusionIcons: Record<string, React.ReactNode> = {
  plan: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="5" width="16" height="14" rx="3" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  ),
  monitor: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16v9H4z" />
      <path d="M8 21h8" />
      <path d="M8 12l2-3 2 4 2-2 2 3" />
    </svg>
  ),
  docs: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 3h8l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  )
};

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
    left: "16px",
    boxShadow: "0 10px 25px rgba(18,75,60,0.25)"
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
    padding: "12px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "nowrap"
  },
  brand: {
    fontWeight: 700,
    fontSize: "22px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    display: "flex",
    gap: "6px",
    color: palette.navy
  },
  navRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    position: "relative",
    flex: "1 1 auto",
    justifyContent: "center",
    minWidth: 0
  },
  nav: {
    display: "flex",
    gap: "26px",
    fontSize: "15px",
    fontWeight: 600,
    justifyContent: "center",
    flexWrap: "wrap"
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
    boxShadow: "0 25px 70px rgba(18,75,60,0.15)",
    border: `1px solid ${palette.border}`,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "20px",
    minWidth: "480px",
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
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    border: `1px solid ${palette.border}`,
    backgroundColor: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: palette.navy,
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(18,75,60,0.08)"
  },
  languageButton: {
    borderRadius: "20px",
    border: `1px solid ${palette.border}`,
    padding: "8px 18px",
    backgroundColor: "#fff",
    fontWeight: 600,
    color: palette.navy,
    boxShadow: "0 5px 15px rgba(18,75,60,0.08)"
  },
  headerActions: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    flex: "0 0 auto"
  },
  headerButton: {
    backgroundColor: "#118ae1",
    color: "#fff",
    border: "none",
    padding: "12px 28px",
    borderRadius: "14px",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(17,138,225,0.4)"
  },
  primaryButton: {
    background: `linear-gradient(120deg, ${palette.teal}, #8bf2c5)`,
    color: palette.night,
    border: `1px solid rgba(31,182,124,0.2)`,
    padding: "12px 22px",
    borderRadius: "999px",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 15px 30px rgba(31,182,124,0.35)"
  },
  hero: {
    width: "100%",
    maxWidth: "1100px",
    margin: "32px auto 0",
    backgroundImage:
      "radial-gradient(circle at top right, rgba(31,182,124,0.25), transparent 60%), linear-gradient(135deg, rgba(255,255,255,0.98), rgba(233,247,238,0.92))",
    color: palette.navy,
    padding: "96px 48px",
    borderRadius: "44px",
    boxShadow: "0 45px 110px rgba(18,75,60,0.18)",
    border: `1px solid ${palette.border}`,
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(6px)"
  },
  heroInner: {
    maxWidth: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px"
  },
  heroContent: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  heroGlow: {
    position: "absolute",
    width: "360px",
    height: "360px",
    background: "radial-gradient(circle, rgba(31,182,124,0.35) 0%, transparent 65%)",
    top: "-140px",
    right: "-60px",
    filter: "blur(10px)",
    opacity: 0.6,
    pointerEvents: "none"
  },
  heroTitle: {
    fontSize: "48px",
    lineHeight: 1.1,
    margin: 0
  },
  heroText: {
    margin: 0,
    lineHeight: 1.6,
    color: palette.slate,
    fontSize: "20px",
    maxWidth: "640px"
  },
  heroHighlightCard: {
    background: "linear-gradient(145deg, rgba(255,255,255,0.96), rgba(233,247,238,0.92))",
    color: palette.navy,
    borderRadius: "32px",
    padding: "32px",
    boxShadow: "0 35px 90px rgba(18,75,60,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    border: `1px solid ${palette.border}`
  },
  heroHighlightHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  heroHighlightList: {
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },
  heroHighlightItem: {
    display: "flex",
    gap: "12px",
    padding: "12px",
    borderRadius: "18px",
    backgroundColor: "rgba(255,255,255,0.9)",
    boxShadow: "0 12px 30px rgba(18,75,60,0.08)",
    alignItems: "flex-start"
  },
  heroHighlightIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "14px",
    backgroundColor: "rgba(31,182,124,0.15)",
    color: palette.navy,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },
  heroHighlightCTA: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    color: palette.slate
  },
  heroBadges: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },
  heroBadge: {
    backgroundColor: "rgba(31,182,124,0.12)",
    border: "1px solid rgba(31,182,124,0.3)",
    color: palette.navy,
    padding: "6px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    letterSpacing: "0.08em",
    textTransform: "uppercase"
  },
  pricingSection: {
    padding: "80px 24px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%"
  },
  priceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px"
  },
  priceCard: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: "30px",
    padding: "28px",
    boxShadow: "0 18px 45px rgba(18,75,60,0.12)",
    border: `1px solid ${palette.border}`,
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    opacity: 0,
    transform: "translateY(24px)",
    animation: "priceTabEnter 0.7s ease forwards",
    willChange: "transform, opacity"
  },
  priceCardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  priceCode: {
    backgroundColor: palette.sand,
    color: palette.navy,
    borderRadius: "12px",
    padding: "8px 12px",
    fontWeight: 700,
    letterSpacing: "0.08em"
  },
  priceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: "12px"
  },
  priceItem: {
    border: `1px solid ${palette.border}`,
    borderRadius: "18px",
    padding: "12px 16px",
    backgroundColor: "rgba(255,255,255,0.75)",
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 600,
    gap: "12px"
  },
  priceValue: {
    color: palette.teal,
    fontWeight: 700
  },
  priceInfo: {
    margin: "6px 0 0",
    fontSize: "14px",
    color: palette.slate,
    lineHeight: 1.4
  },
  commitmentsSection: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: "34px",
    margin: "0 auto 80px",
    padding: "40px",
    boxShadow: "0 25px 70px rgba(18,75,60,0.12)",
    border: `1px solid ${palette.border}`,
    maxWidth: "1100px",
    width: "100%"
  },
  commitmentsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  commitmentItem: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start"
  }
};

const fadeIn = (delay = 0): React.CSSProperties => ({
  animation: "fadeInUp 0.9s ease forwards",
  animationDelay: `${delay}s`
});

export default function Preturi() {
  const [skipFocused, setSkipFocused] = React.useState(false);

  return (
    <>
      <Head>
        <title>{pricingSeo.title}</title>
        <meta name="description" content={pricingSeo.description} />
        <meta name="keywords" content={pricingSeo.keywords.join(", ")} />
        <link rel="canonical" href={pricingSeo.canonical} />
        <meta property="og:title" content={pricingSeo.title} />
        <meta property="og:description" content={pricingSeo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={siteConfig.locale} />
        <meta property="og:url" content={pricingSeo.canonical} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:image" content={pricingSeo.image ?? siteConfig.defaultOgImage} />
        <meta property="og:image:alt" content={pricingSeo.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pricingSeo.title} />
        <meta name="twitter:description" content={pricingSeo.description} />
        <meta name="twitter:image" content={pricingSeo.image ?? siteConfig.defaultOgImage} />
      </Head>
      <main style={styles.page}>
      <a
        href="#preturi"
        style={{ ...styles.skipLink, ...(skipFocused ? styles.skipLinkVisible : {}) }}
        onFocus={() => setSkipFocused(true)}
        onBlur={() => setSkipFocused(false)}
      >
        Mergi la lista de preturi
      </a>

      <SiteHeader palette={palette} navigation={navigation} megaMenus={megaMenus} />

      <section style={{ ...styles.hero, ...fadeIn(0.05) }} aria-labelledby="preturi-hero-title">
        <div style={styles.heroGlow} aria-hidden="true" />
        <div style={styles.heroInner}>
          <div style={styles.heroContent}>
            <div style={styles.heroBadges}>
              <span style={styles.heroBadge}>Preturi transparente</span>
              <span style={styles.heroBadge}>Optiuni flexibile</span>
            </div>
            <h1 id="preturi-hero-title" style={styles.heroTitle}>
              Planuri tarifare create pentru tratamente premium
            </h1>
            <p style={styles.heroText}>
              Afisam transparent fiecare cost si explicam pas cu pas ce inseamna investitia intr-un tratament premium. Evaluam
              statusul clinic, tehnologiile implicate si durata fiecarei etape, astfel incat sa iei o decizie informata fara
              surprize ulterioare.
            </p>
            <p style={styles.heroText}>
              Coordonatorii DentNow lucreaza alaturi de tine pentru a personaliza planul financiar, propun randamente sigure pentru
              timpul tau si adapteaza platile la ritmul tau de viata. Alegi pachete modulare, beneficiezi de asistenta dedicata si
              primesti rapoarte clare dupa fiecare vizita.
            </p>
          </div>
          <aside style={styles.heroHighlightCard} className="interactive-panel">
            <div style={styles.heroHighlightHeader}>
              <p style={{ margin: 0, fontWeight: 700, letterSpacing: "0.04em" }}>Ce include fiecare tarif</p>
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(31,182,124,0.15)",
                  fontSize: "12px",
                  fontWeight: 600
                }}
              >
                Transparent pricing
              </span>
            </div>
            <div style={styles.heroHighlightList}>
              {tariffIncludes.map((item) => (
                <div key={item.key} style={styles.heroHighlightItem}>
                  <span style={styles.heroHighlightIcon}>{inclusionIcons[item.key]}</span>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600 }}>{item.title}</p>
                    <p style={{ margin: "4px 0 0", color: palette.slate }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={styles.heroHighlightCTA}>
              <span>Detaliile financiare finale se transmit dupa consultatia initiala.</span>
              <a href="/contact" className="link-animate" style={{ color: palette.teal, fontWeight: 600 }}>
                Programeaza analiza
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="preturi" style={{ ...styles.pricingSection, ...fadeIn(0.15) }} aria-labelledby="preturi-tabel">
        <div style={{ maxWidth: "720px", margin: "0 auto 32px" }}>
          <p style={{ textTransform: "uppercase", letterSpacing: "0.25em", fontSize: "12px", color: palette.slate }}>
            Tarife de referinta
          </p>
          <h2 id="preturi-tabel" style={{ fontSize: "36px", margin: "0 0 16px" }}>
            Exemplu de investitii pentru cele mai solicitate servicii
          </h2>
          <p style={{ margin: 0, color: palette.slate, lineHeight: 1.6 }}>
            Valorile includ TVA si pot varia in functie de complexitatea cazului. Pretul final este confirmat dupa consultatia
            initiala si analiza imagistica completa.
          </p>
        </div>

        <div style={styles.priceGrid}>
          {priceListSections.map((category, index) => (
            <article
              key={category.title}
              style={{ ...styles.priceCard, animationDelay: `${0.05 * index}s` }}
              aria-label={category.title}
              className="interactive-card"
            >
              <div style={styles.priceCardHeader}>
                <div>
                  <h3 style={{ margin: "0 0 6px" }}>{category.title}</h3>
                  <p style={{ margin: 0, color: palette.slate }}>{category.description}</p>
                </div>
                <span style={styles.priceCode}>{category.code}</span>
              </div>

              <ul
                style={{
                  ...styles.priceList,
                  gridTemplateColumns: category.items.length > 6 ? "repeat(auto-fit, minmax(220px, 1fr))" : "1fr"
                }}
              >
                {category.items.map((item) => (
                  <li key={item.name} style={styles.priceItem}>
                    <div style={styles.priceRow}>
                      <span>{item.name}</span>
                      <span style={styles.priceValue}>{item.price}</span>
                    </div>
                    <p style={styles.priceInfo}>{item.info}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section style={{ ...styles.commitmentsSection, ...fadeIn(0.35) }} aria-label="Informatii financiare">
        <h2 style={{ margin: "0 0 16px" }}>Transparenta financiara DentNow</h2>
        <ul style={styles.commitmentsList}>
          {commitments.map((item) => (
            <li key={item} style={styles.commitmentItem}>
              <span style={{ color: palette.teal, fontWeight: 700 }}>{"\u003e"}</span>
              <span style={{ lineHeight: 1.6 }}>{item}</span>
            </li>
          ))}
        </ul>
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

        @keyframes priceTabEnter {
          from {
            opacity: 0;
            transform: translateY(32px) scale(0.98);
          }
          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.01);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .interactive-card,
        .interactive-panel {
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .interactive-card:hover,
        .interactive-panel:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 80px rgba(18,75,60,0.18) !important;
        }
      `}</style>
      </main>
    </>
  );
}
