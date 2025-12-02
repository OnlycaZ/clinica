'use client';

import React from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { navigation, megaMenus } from "@/lib/navigation";
import { siteConfig } from "@/lib/seo";

const palette = {
  navy: "#0d2f3c",
  teal: "#1fb67c",
  sky: "#1ca8ff",
  slate: "#5d6b75",
  border: "#d9efe3",
  light: "#ffffff",
  shell: "#f6fbf6",
  accent: "#1fb67c"
};

const clinics = [
  {
    name: "Clinica DentNow Dristor",
    address: "Splaiul Unirii 20, București",
    phone: siteConfig.contactPhone,
    email: siteConfig.contactEmail,
    hours: [
      { label: "Luni - Vineri", time: "08:00 - 21:00" },
      { label: "Sâmbătă", time: "09:00 - 15:00" }
    ]
  },
  {
    name: "Clinica DentNow Aviatorilor",
    address: "Strada Aviatorilor 45, București",
    phone: siteConfig.contactPhone,
    email: "aviatorilor@dentnow.ro",
    hours: [
      { label: "Luni - Vineri", time: "08:30 - 20:30" },
      { label: "Sâmbătă", time: "09:00 - 13:00" }
    ]
  }
];

const padNumber = (value: number) => value.toString().padStart(2, "0");
const formatTime = (value: Date) => `${padNumber(value.getHours())}:${padNumber(value.getMinutes())}`;

const generalHours = clinics[0].hours;

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
    backgroundColor: palette.shell,
    color: palette.navy,
    minHeight: "100vh"
  },
  main: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px 24px 80px",
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  },
  hero: {
    borderRadius: "40px",
    backgroundColor: palette.light,
    padding: "32px",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 35px 80px rgba(18,75,60,0.08)"
  },
  heroHeading: {
    margin: 0,
    fontSize: "38px",
    fontWeight: 700,
    color: palette.teal
  },
  heroCopy: {
    margin: "16px 0 0",
    fontSize: "16px",
    color: palette.slate,
    lineHeight: 1.6
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1.4fr)",
    gap: "32px"
  },
  contactCard: {
    borderRadius: "32px",
    padding: "28px",
    border: `1px solid ${palette.border}`,
    background: "linear-gradient(180deg, #fefefe 0%, #f1fffb 100%)",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    minHeight: "430px",
    justifyContent: "space-between"
  },
  contactTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
    color: palette.navy
  },
  contactGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    width: "100%"
  },
  contactHeading: {
    margin: 0,
    fontWeight: 700,
    fontSize: "18px",
    color: palette.navy
  },
  contactDetail: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6,
    fontSize: "16px"
  },
  hoursList: {
    listStyle: "none",
    margin: "8px 0 0",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  serviceNote: {
    margin: 0,
    color: palette.slate,
    fontSize: "15px",
    lineHeight: 1.7
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 14px",
    borderRadius: "999px",
    backgroundColor: "rgba(31,182,124,0.12)",
    fontSize: "12px",
    color: palette.teal,
    textTransform: "uppercase",
    letterSpacing: "0.3em"
  },
  formCard: {
    borderRadius: "32px",
    padding: "32px",
    border: `1px solid ${palette.border}`,
    backgroundColor: palette.light,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    boxShadow: "0 30px 60px rgba(18,75,60,0.1)"
  },
  input: {
    width: "100%",
    borderRadius: "14px",
    border: `1px solid ${palette.border}`,
    padding: "14px 18px",
    fontSize: "16px",
    fontFamily: "'Inter','Segoe UI',system-ui,sans-serif"
  },
  textarea: {
    minHeight: "120px",
    borderRadius: "14px",
    border: `1px solid ${palette.border}`,
    padding: "14px 18px",
    fontSize: "16px",
    fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
    resize: "vertical"
  },
  checkboxRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    color: palette.slate
  },
  submitButton: {
    marginTop: "8px",
    borderRadius: "12px",
    backgroundColor: palette.teal,
    color: "#fff",
    border: "none",
    padding: "14px 24px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer"
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
    gap: "16px"
  },
  dateWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "14px",
    border: `1px solid ${palette.border}`,
    overflow: "hidden"
  },
  dateInput: {
    paddingRight: "48px",
    border: "none",
    borderRadius: 0,
    flex: 1,
    backgroundColor: "transparent",
    fontSize: "15px",
    color: palette.navy,
    outline: "none",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)",
    fontWeight: 500,
    paddingLeft: "14px",
    paddingTop: "12px",
    paddingBottom: "12px"
  },
  calendarIcon: {
    position: "absolute",
    right: "12px",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "rgba(31,182,124,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    color: palette.teal,
    pointerEvents: "none",
    boxShadow: "0 4px 10px rgba(18,75,60,0.12)"
  },
  meter: {
    marginTop: "8px",
    fontSize: "14px",
    color: palette.teal
  }
};

export default function RezervaVizita() {
  const todayString = React.useMemo(() => new Date().toISOString().split("T")[0], []);
  const formatCurrentTime = () => formatTime(new Date());
  const [selectedDate, setSelectedDate] = React.useState(todayString);
  const [minTime, setMinTime] = React.useState(formatCurrentTime);

  React.useEffect(() => {
    if (selectedDate === todayString) {
      setMinTime(formatCurrentTime());
    } else {
      setMinTime("06:00");
    }
  }, [selectedDate, todayString]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <main style={styles.page}>
        <SiteHeader palette={palette} navigation={navigation} megaMenus={megaMenus} />
        <div style={styles.main}>
          <section style={styles.hero}>
            <p style={styles.badge}>Solicită o programare</p>
            <h1 style={styles.heroHeading}>Rezervă vizita ta la DentNow</h1>
            <p style={styles.heroCopy}>
              Alege clinica preferată, completează datele de contact și primești confirmarea prin telefon sau e-mail. Echipa coordonatoare te va ghida în alegerea sloturilor disponibile.
            </p>
          </section>

          <section style={styles.layout}>
            <div style={styles.contactCard}>
              <h2 style={styles.contactTitle}>Clinici DentNow</h2>
              {clinics.map((clinic) => (
                <div key={clinic.name} style={styles.contactGroup}>
                  <h3 style={styles.contactHeading}>{clinic.name}</h3>
                  <p style={styles.contactDetail}>{clinic.address}</p>
                  <p style={styles.contactDetail}>Tel: {clinic.phone}</p>
                  <p style={styles.contactDetail}>Email: {clinic.email}</p>
                </div>
              ))}
              {generalHours && (
                <ul style={styles.hoursList}>
                  {generalHours.map((entry) => (
                    <li key={`${entry.label}-${entry.time}`}>
                      <strong>{entry.label}:</strong> {entry.time}
                    </li>
                  ))}
                </ul>
              )}
              <p style={styles.serviceNote}>
                Servicii în regim de urgență, tratamente estetice și protetică rapidă, toate coordonate în aceleași clinici.
              </p>
            </div>

            <div style={styles.formCard}>
              <form style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={styles.formRow}>
                  <input placeholder="Nume*" style={styles.input} type="text" required />
                  <input placeholder="Prenume*" style={styles.input} type="text" required />
                </div>
                <div style={styles.formRow}>
                  <input placeholder="Telefon*" style={styles.input} type="tel" required />
                  <input placeholder="Email*" style={styles.input} type="email" required />
                </div>
                <div style={styles.dateWrapper}>
                  <input
                    placeholder="Data dorită (zi/lună/an)"
                    style={{ ...styles.input, ...styles.dateInput }}
                    type="date"
                    min={todayString}
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                  <span style={styles.calendarIcon} aria-hidden="true">
                    📅
                  </span>
                </div>
                <input
                  placeholder="Ora preferată"
                  style={styles.input}
                  type="time"
                  min={minTime}
                />
                <textarea placeholder="Detalii despre tratament sau întrebări" style={styles.textarea} />
                <div style={styles.checkboxRow}>
                  <input type="checkbox" id="privacy" />
                  <label htmlFor="privacy">Sunt de acord cu Politica de confidențialitate</label>
                </div>
                <div style={styles.checkboxRow}>
                  <input type="checkbox" id="cookies" />
                  <label htmlFor="cookies">Am luat la cunoștință Politica cookie</label>
                </div>
                <button type="submit" style={styles.submitButton}>
                  Programează-te acum
                </button>
                <span style={styles.meter}>Timp estimat de răspuns: max. 30 minute</span>
              </form>
            </div>
          </section>
        </div>
        <SiteFooter palette={palette} />
      </main>
  );
}
