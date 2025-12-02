import type { CSSProperties } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SiteHeader from "@/components/SiteHeader";
import { getSeoEntry, siteConfig } from "@/lib/seo";
import { megaMenus, navigation } from "@/lib/navigation";

const cookiesSeo = getSeoEntry("cookies");
const SiteFooter = dynamic(() => import("@/components/SiteFooter"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", maxWidth: "1200px", minHeight: "360px", margin: "0 auto" }} aria-hidden="true" />
});

export const metadata: Metadata = {
  title: cookiesSeo.title,
  description: cookiesSeo.description,
  alternates: {
    canonical: cookiesSeo.canonical
  },
  openGraph: {
    title: cookiesSeo.title,
    description: cookiesSeo.description,
    url: cookiesSeo.canonical,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "article",
    images: [
      {
        url: cookiesSeo.image ?? siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: cookiesSeo.title
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: cookiesSeo.title,
    description: cookiesSeo.description,
    images: [cookiesSeo.image ?? siteConfig.defaultOgImage]
  }
};

const palette = {
  navy: "#0b2a3d",
  night: "#031226",
  teal: "#00c2c7",
  sand: "#f7f4ef",
  slate: "#4a6072",
  border: "#dfe6ee",
  light: "#ffffff"
};

const cookieCategories = Object.freeze([
  {
    type: "Necesar",
    purpose: "Activeaza autentificarea, protejeaza formularele si mentine preferintele de securitate.",
    duration: "Sesiune / 12 luni",
    cookies: ["csrf-token", "trident_session"]
  },
  {
    type: "Functionale",
    purpose: "Retin limba site-ului, clinicile favorite si setarile de accesibilitate.",
    duration: "6 luni",
    cookies: ["locale", "preferred-clinic"]
  },
  {
    type: "Analitice",
    purpose: "Ne ajuta sa intelegem traficul anonim si performanta paginilor.",
    duration: "24 luni",
    cookies: ["analytics-id", "heatmap"]
  },
  {
    type: "Marketing",
    purpose: "Duc campaniile catre pacientii care au acceptat comunicari personalizate.",
    duration: "1-18 luni",
    cookies: ["campaign", "referrer"]
  }
]);

const managementSteps = Object.freeze([
  "Bannerul de consimtamant iti permite sa activezi sau sa dezactivezi rapid fiecare categorie.",
  "Poti sterge cookie-urile din browser (Chrome, Safari, Edge) folosind optiunea Clear Browsing Data.",
  "Trimite-ne preferintele tale la cookie@dentnow.ro pentru asistenta directa.",
  "Optiunile pot fi schimbate oricand; actualizam preferintele in maxim 48 de ore." 
]);

const auditNotes = Object.freeze([
  "Monitorizam partenerii externi si semnam acorduri de prelucrare a datelor.",
  "Reevaluam etichetele de marketing si politicile de retentie la fiecare 6 luni.",
  "Utilizam Content Security Policy pentru a bloca scripturi neautorizate.",
  "Jurnalizam accesul la date pentru a detecta rapid activitati suspecte."
]);

const styles: Record<string, CSSProperties> = {
  page: {
    fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
    minHeight: "100vh",
    background: "radial-gradient(circle at top,#fefefe 0%,#f5efe3 45%,#ebe5da 100%)"
  },
  header: {
    backgroundColor: palette.light,
    borderBottom: `1px solid ${palette.border}`,
    position: "sticky",
    top: 0,
    zIndex: 40
  },
  topBar: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "18px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    flexWrap: "wrap"
  },
  brand: {
    fontWeight: 700,
    fontSize: "22px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    display: "flex",
    gap: "6px"
  },
  nav: {
    display: "flex",
    gap: "18px",
    fontWeight: 600,
    fontSize: "15px"
  },
  navLink: {
    color: palette.navy,
    textDecoration: "none"
  },
  headerActions: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    flexWrap: "wrap"
  },
  phoneLink: {
    color: palette.teal,
    fontWeight: 600,
    textDecoration: "none",
    fontSize: "15px"
  },
  primaryButton: {
    backgroundColor: palette.teal,
    color: "#fff",
    border: "none",
    padding: "12px 22px",
    borderRadius: "999px",
    fontWeight: 600,
    cursor: "pointer"
  },
  contentWrap: {
    width: "100%",
    maxWidth: "1080px",
    margin: "0 auto",
    padding: "48px 24px 80px",
    display: "flex",
    flexDirection: "column",
    gap: "28px"
  },
  hero: {
    borderRadius: "42px",
    background: "#fff",
    padding: "48px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    border: `1px solid ${palette.border}`,
    minHeight: "480px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  heroLink: {
    color: palette.teal,
    fontWeight: 600,
    textDecoration: "none"
  },
  categoryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px"
  },
  categoryCard: {
    borderRadius: "26px",
    background: "#fff",
    border: `1px solid ${palette.border}`,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    minHeight: "220px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  badge: {
    alignSelf: "flex-start",
    padding: "6px 12px",
    borderRadius: "999px",
    background: palette.sand,
    fontSize: "13px"
  },
  list: {
    paddingLeft: "18px",
    margin: 0
  },
  sectionCard: {
    borderRadius: "32px",
    background: "#fff",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    lineHeight: 1.7,
    border: `1px solid ${palette.border}`,
    minHeight: "260px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  splitPanel: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px"
  },
  infoPanel: {
    borderRadius: "24px",
    padding: "24px",
    background: "linear-gradient(135deg, rgba(0,194,199,0.12), rgba(11,42,61,0.1))",
    border: `1px solid ${palette.border}`,
    minHeight: "200px"
  },
  auditList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }
};

export default function PoliticaCookie() {
  return (
    <main style={styles.page}>
      <SiteHeader palette={palette} navigation={navigation} megaMenus={megaMenus} />

      <div style={styles.contentWrap}>
        <section style={styles.hero}>
          <p style={{ textTransform: "uppercase", letterSpacing: "0.25em", fontSize: "12px", color: palette.slate, margin: 0 }}>
            Politici digitale
          </p>
          <h1 style={{ margin: "10px 0 12px", fontSize: "40px" }}>Politica de utilizare a cookie-urilor</h1>
          <p style={{ margin: 0, lineHeight: 1.7 }}>
            Ne dorim sa-ti oferim o experienta sigura si relevanta. In aceasta pagina gasesti explicatii detaliate despre tehnologiile pe care le folosim, duratele de stocare si controlul preferintelor tale.
          </p>
          <a href="/politica-confidentialitate" style={styles.heroLink}>
            Vezi si politica de confidentialitate &rsaquo;
          </a>
        </section>

        <section style={styles.categoryGrid}>
          {cookieCategories.map((category) => (
            <article key={category.type} style={styles.categoryCard}>
              <span style={styles.badge}>{category.type}</span>
              <p style={{ margin: 0, color: palette.slate }}>{category.purpose}</p>
              <p style={{ margin: 0, fontWeight: 600 }}>Durata: {category.duration}</p>
              <p style={{ margin: 0, fontSize: "13px", color: palette.slate }}>Exemple: {category.cookies.join(", ")}</p>
            </article>
          ))}
        </section>

        <section style={styles.sectionCard}>
          <h2>Modul in care folosim cookie-urile</h2>
          <p>
            Cookie-urile necesare se incarca implicit pentru securitate si functionalitati de baza. Restul categoriilor se activeaza doar dupa ce iti exprimi consimtamantul prin bannerul afisat la prima vizita sau dupa stergerea cache-ului.
          </p>
          <ul style={styles.list}>
            <li>Nu vindem si nu oferim acces tertilor la identificatori comerciali fara acord.</li>
            <li>Aplicam etichete diferite pentru sesiune vs. preferinte persistente.</li>
            <li>Datele analitice sunt agregate si anonimizate inainte de raportare.</li>
          </ul>
        </section>

        <section style={styles.splitPanel}>
          <article style={styles.infoPanel}>
            <h3 style={{ marginTop: 0 }}>Durata si stocare</h3>
            <p style={{ margin: 0 }}>
              Retinem cookie-urile doar pe perioada necesara scopului declarat. Infrastructura ruleaza pe servere din UE, iar backup-urile sunt criptate si auditate periodic.
            </p>
          </article>
          <article style={styles.infoPanel}>
            <h3 style={{ marginTop: 0 }}>Cum controlezi preferintele</h3>
            <ul style={styles.list}>
              {managementSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>
        </section>

        <section style={styles.sectionCard}>
          <h2>Audit si responsabilitate</h2>
          <ul style={styles.auditList}>
            {auditNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <p style={{ margin: 0 }}>
            Pentru orice intrebare, scrie-ne la <a href="mailto:cookie@dentnow.ro">cookie@dentnow.ro</a>. Raspundem in maxim 48h lucratoare.
          </p>
        </section>
      </div>

      <React.Suspense fallback={<div style={{ width: "100%", maxWidth: "1080px", minHeight: "360px", margin: "40px auto 0" }} aria-hidden="true" />}>
        <SiteFooter palette={palette} />
      </React.Suspense>
    </main>
  );
}
