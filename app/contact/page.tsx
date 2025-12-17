'use client';

import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "@/components/ui/SiteHeader";
import { megaMenus, navigation } from "@/data/navigation";
import { getSeoEntry, siteConfig } from "@/lib/utils/seo";
import { contactPalette } from "@/lib/utils/theme";

const contactSeo = getSeoEntry("contact");
const SiteFooter = dynamic(() => import("@/components/ui/SiteFooter"), { ssr: false });
const InteractiveMap = dynamic(() => import("@/components/sections/InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{ width: "100%", minHeight: "320px", borderRadius: "32px" }}
      className="skeleton"
      aria-hidden="true"
    />
  )
});

const palette = contactPalette;

const contactCards = Object.freeze([
  { title: "Telefon receptie", value: siteConfig.contactPhone, description: "Linie prioritara DentNow", icon: "TEL" },
  { title: "Email programari", value: siteConfig.contactEmail, description: "Raspuns in max. 2 ore", icon: "MAIL" },
  { title: "WhatsApp & urgente", value: "+40 735 223 920", description: "Disponibil 08:00 - 22:00", icon: "CHAT" }
]);
const clinics = Object.freeze([
  {
    label: "DentNow Dristor",
    address: "Str. Ramnicu Valcea 29, Bloc 20D, Parter",
    hours: ["Luni - Vineri: 08:00 - 21:00", "Sambata: 09:00 - 17:00"],
    highlights: ["Cabinete pentru adulti & copii", "Laborator digital intern", "Parcare dedicata"],
    coordinator: "Bianca - Concierge DentNow",
    phone: siteConfig.contactPhone
  },
  {
    label: "DentNow Studio",
    address: "Str. Baba Novac 15, corp B",
    hours: ["Luni - Vineri: 09:00 - 20:00", "Sambata: 09:00 - 15:00"],
    highlights: ["Sedinte media pentru planuri", "Zona VIP & coworking", "Consultatii online"],
    coordinator: "Razvan - Concierge digital",
    phone: "+40 720 509 803"
  }
]);

const assurances = Object.freeze([
  { title: "Cum raspundem", text: "Echipa concierge monitorizeaza formularul in timp real si atribuie un consultant dedicat." },
  { title: "Ce informatii verificam", text: "Istoricul tau dentar, preferintele de programare si optiunile de plata sunt stocate criptat." },
  { title: "Ce primesti dupa trimitere", text: "Calendar propus, ghid de pregatire si link direct pentru a adauga detalii suplimentare." }
]);

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(180deg,#f6fbf6 0%,#fdfdfd 65%)",
    color: palette.navy,
    padding: "0 16px 96px"
  },
  skipLink: {
    position: "absolute",
    left: "-999px",
    top: "16px",
    backgroundColor: palette.teal,
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 600,
    zIndex: 100
  },
  skipLinkVisible: {
    left: "16px",
    boxShadow: "0 15px 35px rgba(18,75,60,0.35)"
  },
  hero: {
    maxWidth: "1200px",
    margin: "0 auto",
    borderRadius: "48px",
    padding: "clamp(32px, 5vw, 48px)",
    background: "linear-gradient(135deg, rgba(31,182,124,0.12), rgba(255,255,255,0.95))",
    boxShadow: "0 30px 80px rgba(18,75,60,0.12)",
    display: "grid",
    gap: "clamp(24px, 4vw, 32px)",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))"
  },
  heroBadge: {
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "12px",
    color: palette.slate
  },
  heroTitle: {
    margin: "12px 0 16px",
    fontSize: "clamp(2.1rem, 3vw, 2.6rem)",
    lineHeight: 1.18,
    maxWidth: "26ch"
  },
  heroText: {
    margin: "0 0 18px",
    fontSize: "clamp(0.98rem, 1.5vw, 1.1rem)",
    color: palette.slate,
    lineHeight: 1.7
  },
  heroStats: {
    listStyle: "none",
    padding: 0,
    margin: "24px 0 0",
    display: "flex",
    flexWrap: "wrap",
    gap: "16px"
  },
  statCard: {
    padding: "18px 22px",
    borderRadius: "18px",
    border: `1px solid ${palette.border}`,
    backgroundColor: palette.light,
    minWidth: "140px",
    boxShadow: "0 15px 35px rgba(18,75,60,0.08)"
  },
  cardGrid: {
    maxWidth: "1200px",
    margin: "32px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px"
  },
  contactCard: {
    borderRadius: "26px",
    padding: "24px",
    border: `1px solid ${palette.border}`,
    backgroundColor: palette.light,
    boxShadow: "0 18px 45px rgba(18,75,60,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  iconBadge: {
    width: "40px",
    height: "40px",
    borderRadius: "14px",
    backgroundColor: "rgba(31,182,124,0.12)",
    color: palette.teal,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700
  },
  clinicsSection: {
    maxWidth: "1200px",
    margin: "48px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "24px"
  },
  clinicCard: {
    borderRadius: "32px",
    padding: "32px",
    backgroundColor: palette.light,
    border: `1px solid ${palette.border}`,
    boxShadow: "0 25px 70px rgba(18,75,60,0.12)",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  mapWrap: {
    margin: "48px auto 0",
    width: "100%",
    maxWidth: "1200px",
    borderRadius: "40px",
    padding: "32px",
    backgroundColor: "rgba(255,255,255,0.95)",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 30px 90px rgba(18,75,60,0.15)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "32px",
    alignItems: "center"
  },
  mapFrame: {
    width: "100%",
    maxWidth: "480px",
    margin: "0 auto"
  },
  mapInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  mapBulletList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px",
    width: "100%",
    margin: "16px 0 0"
  },
  mapBullet: {
    margin: 0,
    color: palette.navy,
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 18px",
    borderRadius: "18px",
    backgroundColor: "rgba(255,255,255,0.85)",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 18px 45px rgba(18,75,60,0.08)"
  },
  mapBulletIcon: {
    width: "34px",
    height: "34px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, rgba(31,182,124,0.2), rgba(18,75,60,0.08))",
    color: palette.teal,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px"
  },
  formSection: {
    maxWidth: "1200px",
    margin: "48px auto 0",
    borderRadius: "48px",
    padding: "40px",
    backgroundColor: palette.light,
    boxShadow: "0 30px 90px rgba(18,75,60,0.15)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "32px",
    alignItems: "stretch"
  },
  formIntro: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "18px",
    background:
      "radial-gradient(circle at 10% 20%, rgba(31,182,124,0.12), transparent 60%), radial-gradient(circle at 90% 0%, rgba(8,46,39,0.12), transparent 50%), rgba(255,255,255,0.95)",
    borderRadius: "36px",
    padding: "32px 36px",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 20px 55px rgba(18,75,60,0.08)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },
  input: {
    borderRadius: "18px",
    border: `1px solid ${palette.border}`,
    padding: "14px 18px",
    backgroundColor: "rgba(31,182,124,0.05)",
    fontSize: "15px",
    color: palette.navy
  },
  textarea: {
    borderRadius: "22px",
    border: `1px solid ${palette.border}`,
    padding: "16px 20px",
    minHeight: "140px",
    resize: "vertical",
    fontSize: "15px",
    backgroundColor: "rgba(31,182,124,0.05)",
    color: palette.navy
  },
  consentGroup: {
    borderRadius: "22px",
    border: `1px solid ${palette.border}`,
    padding: "18px",
    background: "rgba(255,255,255,0.9)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "0 12px 35px rgba(18,75,60,0.08)"
  },
  consentCheckbox: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    fontSize: "14px",
    lineHeight: 1.5
  },
  consentHelper: {
    margin: "6px 0 0",
    fontSize: "12px",
    color: palette.slate
  },
  policyLink: {
    color: palette.teal,
    textDecoration: "underline",
    fontWeight: 600
  },
  primaryButton: {
    background: `linear-gradient(120deg, ${palette.teal}, #8bf2c5)`,
    color: palette.night,
    border: "none",
    borderRadius: "18px",
    fontWeight: 600,
    padding: "14px 24px",
    cursor: "pointer",
    boxShadow: "0 20px 45px rgba(31,182,124,0.35)"
  },
  assuranceList: {
    listStyle: "none",
    padding: 0,
    margin: "24px 0 0",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    color: palette.slate,
    fontSize: "18px",
    lineHeight: 1.8
  },
  formAssuranceList: {
    listStyle: "none",
    padding: 0,
    margin: "16px 0 0",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    color: palette.slate,
    fontSize: "18px",
    lineHeight: 1.8
  },
  formAssuranceItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  }
};

const fadeIn = (delay = 0): React.CSSProperties => ({
  animation: "fadeInUp 0.8s ease forwards",
  animationDelay: `${delay}s`
});

type FormStatus = "idle" | "success" | "error";

export default function Contact() {
  const [skipFocused, setSkipFocused] = React.useState(false);
  const [csrfToken, setCsrfToken] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formState, setFormState] = React.useState<{ status: FormStatus; message: string }>({ status: "idle", message: "" });
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consentCommunication: false,
    consentMarketing: false,
    honeypot: ""
  });

  React.useEffect(() => {
    if (typeof document === "undefined") return;
    const token = document.cookie.split("; ").find((item) => item.startsWith("csrf-token="))?.split("=")[1];
    if (token) {
      setCsrfToken(token);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{contactSeo.title}</title>
        <meta name="description" content={contactSeo.description} />
        <meta name="keywords" content={contactSeo.keywords.join(", ")} />
        <link rel="canonical" href={contactSeo.canonical} />
        <meta property="og:title" content={contactSeo.title} />
        <meta property="og:description" content={contactSeo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={siteConfig.locale} />
        <meta property="og:url" content={contactSeo.canonical} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:image" content={contactSeo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={contactSeo.title} />
        <meta name="twitter:description" content={contactSeo.description} />
        <meta name="twitter:image" content={contactSeo.image} />
      </Head>
      <main style={styles.page}>
        <a
          href="#contact-form"
          style={{ ...styles.skipLink, ...(skipFocused ? styles.skipLinkVisible : {}) }}
          onFocus={() => setSkipFocused(true)}
          onBlur={() => setSkipFocused(false)}
        >
          Sari la formular
        </a>

        <SiteHeader palette={palette} navigation={navigation} megaMenus={megaMenus} />

        <section
          style={{ ...styles.hero, ...fadeIn(0.1) }}
          className="contact-hero"
          aria-labelledby="contact-hero-title"
        >
          <div className="contact-hero-primary">
            <p style={styles.heroBadge}>DentNow  Clinica familiei tale</p>
            <h1 id="contact-hero-title" style={styles.heroTitle} className="contact-hero-title">
              Programeaza-ti vizita in clinica DentNow
            </h1>
            <p style={styles.heroText} className="contact-hero-subtitle">
              Scrie-ne sau suna-ne, iar concierge-ul DentNow iti pregateste agenda, variantele de plata si ghidul pentru
              prezentarea in clinica Dristor.
            </p>
            <a href="#contact-form" className="contact-hero-cta">
              Programeaza o discutie
            </a>
            <ul style={styles.heroStats} className="contact-hero-stats">
              {["24 rate fara dobanda", "Dosar medical securizat", "Sedinte online de clarificare"].map((item) => (
                <li key={item} style={styles.statCard}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-hero-secondary">
            <ul style={styles.assuranceList}>
              {assurances.map((item) => (
                <li key={item.title}>
                  <strong style={{ display: "block", marginBottom: "4px" }}>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ ...styles.cardGrid, ...fadeIn(0.2) }} aria-label="Date de contact DentNow">
          {contactCards.map((card) => (
            <article key={card.title} style={styles.contactCard}>
              <span style={styles.iconBadge} aria-hidden="true">
                {card.icon}
              </span>
              <p style={{ margin: "4px 0", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "12px", color: palette.slate }}>
                {card.title}
              </p>
              <a href={card.value.startsWith("+40") ? `tel:${card.value.replace(/\s+/g, "")}` : `mailto:${card.value}`} style={{ fontSize: "20px", fontWeight: 600, color: palette.navy }}>
                {card.value}
              </a>
              <p style={{ margin: 0, color: palette.slate }}>{card.description}</p>
            </article>
          ))}
        </section>

        <section style={{ ...styles.clinicsSection, ...fadeIn(0.3) }} aria-label="Locatii DentNow">
          {clinics.map((clinic) => (
            <article key={clinic.label} style={styles.clinicCard}>
              <p style={styles.heroBadge}>{clinic.label}</p>
              <h2 style={{ margin: "6px 0 4px" }}>{clinic.address}</h2>
              <p style={{ margin: "0 0 6px", color: palette.slate }}>{clinic.hours.join("  ")}</p>
              <p style={{ margin: "0 0 12px", color: palette.slate }}>
                {clinic.highlights.join("  ")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong>{clinic.coordinator}</strong>
                <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`} style={{ color: palette.teal, fontWeight: 600 }}>
                  {clinic.phone}
                </a>
              </div>
            </article>
          ))}
        </section>

        <section style={{ ...styles.mapWrap, ...fadeIn(0.35) }}>
          <div style={styles.mapFrame}>
            <InteractiveMap variant="square" />
          </div>
          <div style={styles.mapInfo}>
            <p style={styles.heroBadge}>Ne gasesti rapid</p>
            <h2 style={{ margin: "6px 0 10px" }}>Clinica DentNow este la 5 minute de metroul Dristor</h2>
            <p style={{ margin: 0, color: palette.slate }}>
              Suntem pe Str. Ramnicu Valcea 29, langa statiile de metrou Dristor 1 &amp; 2 si in vecinatatea liniilor RATB 19/23.
            </p>
            <div style={styles.mapBulletList}>
              {["Parcare privata cu acces din Str. Rmnicu Vlcea", "Linii 1/10/19/23/27 la doar 2 minute", "Transfer dedicat pentru pacientii din tara"].map(
                (item) => (
                  <div key={item} style={styles.mapBullet}>
                    <span aria-hidden="true" style={styles.mapBulletIcon}>
                      
                    </span>
                    <p style={{ margin: 0, color: palette.slate }}>{item}</p>
                  </div>
                )
              )}
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://maps.app.goo.gl/M2e3ni4n3mBtPUfw7"
                target="_blank"
                rel="noreferrer"
                style={styles.primaryButton}
                className="btn-animate"
              >
                Deschide Google Maps
              </a>
              <a href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`} className="btn-animate" style={{ ...styles.primaryButton, background: "rgba(31,182,124,0.12)", color: palette.navy }}>
                Apeleaza-ne
              </a>
            </div>
          </div>
        </section>

        <section id="contact-form" style={{ ...styles.formSection, ...fadeIn(0.4) }} aria-label="Formular de contact">
          <div style={styles.formIntro}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={styles.heroBadge}>Formular rapid</p>
              <h2 style={{ margin: 0 }}>Trimite-ne cateva detalii</h2>
              <p style={{ margin: 0, color: palette.slate }}>
                Revenim cu un raspuns personalizat in cel mult doua ore in intervalul 08:00 - 21:00. Datele sunt criptate si verificate manual.
              </p>
            </div>
            <ul style={styles.formAssuranceList}>
              {assurances.map((item) => (
                <li key={item.title} style={styles.formAssuranceItem}>
                  <strong style={{ marginBottom: "4px" }}>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            style={styles.form}
            onSubmit={async (event) => {
              event.preventDefault();
              setIsSubmitting(true);
              setFormState({ status: "idle", message: "" });
              const payload = {
                name: formValues.name.trim(),
                email: formValues.email.trim(),
                phone: formValues.phone.trim(),
                message: formValues.message.trim(),
                consentCommunication: formValues.consentCommunication,
                consentMarketing: formValues.consentMarketing,
                honeypot: formValues.honeypot.trim()
              };
              try {
                const response = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "x-csrf-token": csrfToken
                  },
                  body: JSON.stringify(payload)
                });
                const data = await response.json();
                if (!response.ok) {
                  throw new Error(data.error ?? "Momentan nu putem trimite mesajul.");
                }
                setFormState({ status: "success", message: "Multumim! Te sunam in cel mai scurt timp." });
                setFormValues({
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                  consentCommunication: false,
                  consentMarketing: false,
                  honeypot: ""
                });
              } catch (error) {
                setFormState({
                  status: "error",
                  message: error instanceof Error ? error.message : "A aparut o eroare temporara."
                });
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            {/* Honeypot anti-spam: ascuns pentru utilizatori reali */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
              value={formValues.honeypot}
              onChange={(event) => setFormValues((prev) => ({ ...prev, honeypot: event.target.value }))}
            />
            <input
              type="text"
              required
              minLength={2}
              maxLength={80}
              placeholder="Nume complet"
              style={styles.input}
              value={formValues.name}
              onChange={(event) => setFormValues((prev) => ({ ...prev, name: event.target.value }))}
            />
            <input
              type="email"
              required
              placeholder="Adresa de email"
              style={styles.input}
              value={formValues.email}
              onChange={(event) => setFormValues((prev) => ({ ...prev, email: event.target.value }))}
            />
            <input
              type="tel"
              placeholder="Telefon (optional)"
              style={styles.input}
              value={formValues.phone}
              onChange={(event) => setFormValues((prev) => ({ ...prev, phone: event.target.value }))}
            />
            <textarea
              required
              minLength={10}
              maxLength={1200}
              placeholder="Spune-ne obiectivul tau"
              style={styles.textarea}
              value={formValues.message}
              onChange={(event) => setFormValues((prev) => ({ ...prev, message: event.target.value }))}
            />
            <div style={styles.consentGroup} role="group" aria-labelledby="gdpr-label">
              <p id="gdpr-label" style={{ margin: "0 0 6px", fontWeight: 600, color: palette.navy }}>
                Consimtamant GDPR
              </p>
              <label style={styles.consentCheckbox}>
                <input
                  type="checkbox"
                  required
                  checked={formValues.consentCommunication}
                  onChange={(event) => setFormValues((prev) => ({ ...prev, consentCommunication: event.target.checked }))}
                />
                <span>
                  Sunt de acord ca DentNow sa imi prelucreze datele pentru a raspunde solicitarii mele, conform{" "}
                  <a href="/politica-confidentialitate" style={styles.policyLink}>
                    Politicii de confidentialitate
                  </a>{" "}
                  si{" "}
                  <a href="/politica-cookie" style={styles.policyLink}>
                    Politicii de cookie
                  </a>
                  .
                </span>
              </label>
              <label style={styles.consentCheckbox}>
                <input
                  type="checkbox"
                  checked={formValues.consentMarketing}
                  onChange={(event) => setFormValues((prev) => ({ ...prev, consentMarketing: event.target.checked }))}
                />
                <span>
                  Doresc sa primesc recomandari personalizate, oferte sau informari dentare. Pot sa imi retrag consimtamantul oricand.
                </span>
              </label>
              <p style={styles.consentHelper}>
                Datele tale sunt criptate si pot solicita acces, rectificare sau stergere la{" "}
                <a href="mailto:dpo@dentnow.ro" style={styles.policyLink}>
                  dpo@dentnow.ro
                </a>
                .
              </p>
            </div>
            <button
              type="submit"
              style={styles.primaryButton}
              className="btn-animate"
              disabled={isSubmitting || !csrfToken || !formValues.consentCommunication}
            >
              {isSubmitting ? "Se trimite..." : "Trimite solicitarea"}
            </button>
            {formState.status !== "idle" && (
              <p style={{ margin: 0, color: formState.status === "success" ? palette.teal : "#c0392b" }} aria-live="polite">
                {formState.message}
              </p>
            )}
          </form>
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
          .contact-hero-cta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 8px 0 12px;
            padding: 0.85rem 1.6rem;
            border-radius: 999px;
            background: linear-gradient(120deg, #ffffff, #f8fbff);
            color: ${palette.night};
            font-weight: 600;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            font-size: clamp(0.8rem, 1.6vw, 0.9rem);
            text-decoration: none;
            box-shadow: 0 20px 40px rgba(255, 255, 255, 0.9), 0 10px 30px rgba(31, 182, 124, 0.4);
          }
          .contact-hero-cta:hover {
            transform: translateY(-1px);
            box-shadow: 0 26px 60px rgba(31, 182, 124, 0.5);
          }
          @media (max-width: 768px) {
            .contact-hero {
              margin-top: 4.5rem;
              padding: clamp(24px, 5vw, 32px);
              border-radius: 36px;
              gap: 24px;
              text-align: center;
            }
            .contact-hero-primary {
              order: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.75rem;
            }
            .contact-hero-secondary {
              order: 2;
            }
            .contact-hero-title {
              font-size: clamp(1.8rem, 6vw, 2.2rem);
              max-width: 22ch;
            }
            .contact-hero-subtitle {
              font-size: clamp(0.95rem, 3.2vw, 1.05rem);
              max-width: 40ch;
            }
            .contact-hero-stats {
              flex-direction: column;
              align-items: stretch;
              width: 100%;
              max-width: 28rem;
              margin-top: 0.75rem;
            }
            .contact-hero-cta {
              width: 100%;
              max-width: 20rem;
            }
            .contact-hero-stats li {
              text-align: center;
            }
          }
        `}</style>
      </main>
    </>
  );
}









