import type { CSSProperties } from "react";
import type { Metadata } from "next";
import SiteHeader from "@/components/ui/SiteHeader";
import SiteFooter from "@/components/ui/SiteFooter";
import { getSeoEntry, siteConfig } from "@/lib/utils/seo";
import { megaMenus, navigation } from "@/data/navigation";

const privacySeo = getSeoEntry("privacy");

export const metadata: Metadata = {
  title: privacySeo.title,
  description: privacySeo.description,
  alternates: {
    canonical: privacySeo.canonical
  },
  openGraph: {
    title: privacySeo.title,
    description: privacySeo.description,
    url: privacySeo.canonical,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "article",
    images: [
      {
        url: privacySeo.image ?? siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: privacySeo.title
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: privacySeo.title,
    description: privacySeo.description,
    images: [privacySeo.image ?? siteConfig.defaultOgImage]
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

const highlights = Object.freeze([
  { title: "Date colectate", detail: "Nume, contact, documente medicale" },
  { title: "Baza legala", detail: "Consimtamant & obligatii legale" },
  { title: "Retentie", detail: "Minimum necesar conform legislatiei" }
]);

const policySections = Object.freeze([
  {
    title: "Ce date colectam",
    description:
      "Date trimise prin formulare, documente pentru planuri de tratament, comunicari cu concierge-ul medical si preferinte exprimate pentru servicii.",
    list: [
      "Date de identificare si contact (nume, telefon, email, data nasterii)",
      "Informatii medicale furnizate de tine sau rezultate din consultatii",
      "Documente fiscale necesare emiterii facturilor si contractelor",
      "Istoric de conversatii si preferinte logistice (transfer, cazare)"
    ]
  },
  {
    title: "Scopul prelucrarii",
    description:
      "Procesam datele strict pentru a livra servicii stomatologice premium si pentru a raspunde solicitarilor administrative sau legale.",
    list: [
      "Programarea vizitelor si comunicarea planului terapeutic",
      "Verificari de eligibilitate financiara si emiterea documentelor fiscale",
      "Transmiterea de recomandari personalizate doar cu acordul tau",
      "Audit intern de securitate si imbunatatirea experientei digitale"
    ]
  },
  {
    title: "Temei legal",
    description: "Aliniem fiecare flux la GDPR si normele Colegiului Medicilor Dentisti.",
    list: [
      "Executarea contractului medical si a planului financiar",
      "Respectarea obligatiilor fiscale si medicale nationale",
      "Consimtamant explicit pentru comunicari de marketing",
      "Interes legitim pentru securitatea infrastructurii"
    ]
  }
]);

const safeguards = Object.freeze([
  { title: "Acces controlat", detail: "Doar personal autorizat cu autentificare MFA." },
  { title: "Criptare completa", detail: "Datele sunt cifrate la rest si in tranzit." },
  { title: "Audit continuu", detail: "Testam procedurile de backup si logging trimestrial." }
]);

const rights = Object.freeze([
  "Acces si rectificare",
  "Portabilitate",
  "Restrictie sau opozitie",
  "Scoatere din comunicari",
  "Plangere la ANSPDCP"
]);

const styles: Record<string, CSSProperties> = {
  page: {
    fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
    minHeight: "100vh",
    background: "radial-gradient(circle at top,#fefefe 0%,#f2eee4 45%,#ebe5da 100%)",
    padding: "0 16px 80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px"
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
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "48px 24px 72px",
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  },
  hero: {
    borderRadius: "42px",
    background: "linear-gradient(140deg, #ffffff 0%, #eef4ff 60%, #f7f4ef 100%)",
    padding: "48px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    minHeight: "480px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  heroGlow: {
    display: "none"
  },
  heroContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center"
  },
  heroBadges: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  badge: {
    padding: "10px 16px",
    borderRadius: "999px",
    border: `1px solid ${palette.border}`,
    fontSize: "13px",
    backgroundColor: palette.sand
  },
  sectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
    alignItems: "stretch",
    minHeight: "420px"
  },
  sectionCard: {
    borderRadius: "28px",
    background: "#fff",
    padding: "24px 26px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    lineHeight: 1.6,
    border: `1px solid ${palette.border}`,
    minHeight: "260px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  sectionCardTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 700,
    letterSpacing: "0.04em"
  },
  sectionList: {
    paddingLeft: "18px",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  safeguards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "14px"
  },
  safeguardCard: {
    borderRadius: "24px",
    background: "linear-gradient(135deg, rgba(0,194,199,0.12), rgba(11,42,61,0.08))",
    padding: "18px",
    border: `1px solid ${palette.border}`
  },
  rightsStrip: {
    borderRadius: "34px",
    background: "#fff",
    padding: "28px",
    boxShadow: "0 25px 70px rgba(11,42,61,0.12)",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  rightsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  chip: {
    padding: "10px 14px",
    borderRadius: "999px",
    border: `1px solid ${palette.border}`
  },
  infoStrip: {
    borderRadius: "34px",
    padding: "28px",
    background: palette.navy,
    color: palette.light,
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid rgba(255,255,255,0.2)",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  infoText: {
    maxWidth: "520px",
    margin: 0,
    lineHeight: 1.6
  },
  infoLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  infoAnchor: {
    color: palette.teal,
    fontWeight: 600,
    textDecoration: "none"
  }
};

export default function PoliticaConfidentialitate() {
  return (
    <main style={styles.page}>
      <SiteHeader palette={palette} navigation={navigation} megaMenus={megaMenus} />

      <div style={styles.contentWrap}>
        <section style={styles.hero}>
          <div style={styles.heroGlow} aria-hidden="true" />
          <div style={styles.heroContent}>
            <p style={{ textTransform: "uppercase", letterSpacing: "0.25em", fontSize: "12px", color: palette.slate, margin: 0 }}>
              Protectia datelor
            </p>
            <h1 style={{ margin: "10px 0 12px", fontSize: "40px" }}>Politica de confidentialitate</h1>
            <p style={{ margin: 0, maxWidth: "640px", lineHeight: 1.7 }}>
              Integram proceduri medicale, logistice si digitale, iar documentul de fata descrie clar modul in care colectam, folosim si protejam datele personale.
            </p>
            <div style={styles.heroBadges}>
              {highlights.map((item) => (
                <span key={item.title} style={styles.badge}>
                  <strong>{item.title}:</strong> {item.detail}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.sectionGrid}>
          {policySections.map((section) => (
            <article key={section.title} style={styles.sectionCard}>
              <h2 style={styles.sectionCardTitle}>{section.title}</h2>
              <p style={{ margin: 0 }}>{section.description}</p>
              <ul style={styles.sectionList}>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section style={styles.rightsStrip}>
          <h2 style={{ margin: 0 }}>Masuri de securitate si drepturile tale</h2>
          <div style={styles.safeguards}>
            {safeguards.map((item) => (
              <div key={item.title} style={styles.safeguardCard}>
                <strong>{item.title}</strong>
                <p style={{ margin: "6px 0 0", color: palette.slate }}>{item.detail}</p>
              </div>
            ))}
          </div>
          <ul style={styles.rightsList}>
            {rights.map((right) => (
              <li key={right} style={styles.chip}>
                {right}
              </li>
            ))}
          </ul>
          <p style={{ margin: 0 }}>
            Solicitarile GDPR pot fi transmise la <a href="mailto:privacy@dentnow.ro">privacy@dentnow.ro</a> sau direct responsabilului nostru cu protectia datelor.
          </p>
        </section>

        <section style={styles.infoStrip}>
          <p style={styles.infoText}>
            Responsabil Protectia Datelor: <strong>dpo@dentnow.ro</strong>. In lipsa unui raspuns satisfacator poti contacta Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal.
          </p>
          <div style={styles.infoLinks}>
            <a href="mailto:dpo@dentnow.ro" style={styles.infoAnchor}>
              Scrie catre DPO
            </a>
            <a href="https://dataprotection.ro" target="_blank" rel="noreferrer" style={styles.infoAnchor}>
              ANSPDCP
            </a>
            <a href="/politica-cookie" style={styles.infoAnchor}>
              Citeste politica de cookie
            </a>
          </div>
        </section>
      </div>

      <SiteFooter palette={palette} />
    </main>
  );
}
