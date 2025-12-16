import React from "react";
import Link from "next/link";
import Image from "next/image";

type Palette = {
  navy: string;
  night: string;
  teal: string;
  sand: string;
  slate: string;
  border: string;
  light: string;
};

const footerServices = [
  "Chirurgie",
  "Estetica dentara",
  "Implantologie",
  "Ortodontie",
  "Protetica dentara",
  "Radiologie digitala"
];

const footerLinks = [
  { label: "Politica de confidentialitate", href: "/politica-confidentialitate" },
  { label: "Politica cookie", href: "/politica-cookie" },
  { label: "ANPC", href: "https://anpc.ro/" },
  { label: "Cariere", href: "/contact" }
];


const socialPlatforms = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/dentnow.ro",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15 8h3V5h-3c-2.2 0-4 1.8-4 4v2H8v3h3v8h3v-8h3.1l.9-3H14V8c0-.6.4-1 1-1z" />
      </svg>
    )
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dentnow.ro",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dentnow-clinic",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6 9h3v9H6zM7.5 4.9a1.9 1.9 0 110 3.8 1.9 1.9 0 010-3.8zM11 9h2.8v1.5h.1c.4-.7 1.5-1.5 3-1.5 3.1 0 3.7 2 3.7 4.6V18h-3.2v-4c0-1-.1-2.2-1.4-2.2-1.4 0-1.6 1.1-1.6 2.1V18H11z" />
      </svg>
    )
  }
];

export default function SiteFooter({ palette }: { palette: Palette }) {
  const styles: { [key: string]: React.CSSProperties } = {
    wrap: {
      width: "100%",
      backgroundColor: "rgba(255,255,255,0.95)",
      color: palette.navy,
      borderRadius: "50px 50px 0 0",
      padding: "60px 24px 32px",
      marginTop: "60px",
      boxShadow: "0 -20px 60px rgba(18,75,60,0.08)",
      borderTop: `1px solid ${palette.border}`
    },
    columns: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "32px"
    },
    logo: {
      width: "160px",
      height: "auto",
      display: "block",
      marginBottom: "12px"
    } as React.CSSProperties,
    title: {
      fontSize: "12px",
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      margin: "0 0 16px",
      color: palette.slate
    },
    text: {
      margin: "0 0 12px",
      lineHeight: 1.6,
      color: palette.slate
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    },
    contactList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      color: palette.navy
    },
    newsletter: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    },
    input: {
      borderRadius: "16px",
      border: `1px solid ${palette.border}`,
      padding: "12px 16px",
      backgroundColor: "rgba(31,182,124,0.05)",
      color: palette.navy,
      width: "100%"
    },
    checkboxRow: {
      display: "flex",
      gap: "8px",
      alignItems: "flex-start",
      fontSize: "13px",
      color: palette.slate
    },
    newsletterButton: {
      backgroundColor: palette.teal,
      color: palette.night,
      border: "none",
      padding: "12px 20px",
      borderRadius: "14px",
      fontWeight: 600,
      cursor: "pointer",
      boxShadow: "0 18px 35px rgba(31,182,124,0.3)"
    },
    metaRow: {
      marginTop: "32px",
      maxWidth: "1200px",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: `1px solid ${palette.border}`,
      paddingTop: "24px",
      gap: "16px",
      color: palette.slate
    },
    socialRow: {
      display: "flex",
      gap: "12px"
    },
    socialIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "rgba(31,182,124,0.12)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 600,
      letterSpacing: "0.08em",
      color: palette.navy,
      border: "1px solid rgba(31,182,124,0.3)"
    }
  };

  return (
    <footer style={styles.wrap}>
      <div style={styles.columns}>
        <div>
          <Image src="/cropped-CFT-1.webp" alt="DentNow" width={160} height={60} style={styles.logo} />
          <p style={styles.title}>DentNow</p>
          <p style={styles.text}>
            Clinicile stomatologice DentNow ofera tratamente pentru intreaga familie in inima cartierului Dristor, cu echipe
            dedicate implantologiei, esteticii si pedodontiei.
          </p>
          <ul style={styles.contactList}>
            <li>Telefon: +40 720 509 802</li>
            <li>Luni - Vineri: 08:00 - 21:00</li>
            <li>Sambata: 09:00 - 17:00</li>
          </ul>
        </div>

        <div>
          <p style={styles.title}>Servicii</p>
          <ul style={styles.list}>
            {footerServices.map((service) => (
              <li key={service}>
                <Link href="/#servicii" className="footer-link">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p style={styles.title}>Linkuri utile</p>
          <ul style={styles.list}>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="footer-link" target={link.href.startsWith("http") ? "_blank" : "_self"} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p style={styles.title}>Newsletter</p>
          <div style={styles.newsletter}>
            <p style={styles.text}>Aboneaza-te pentru studii de caz si noutati despre tehnologii.</p>
            <input type="email" placeholder="Emailul tau" style={styles.input} />
            <label style={styles.checkboxRow}>
              <input type="checkbox" aria-label="Accept termeni" />
              <span>
                Sunt de acord cu{" "}
                <Link href="/politica-confidentialitate" className="footer-link">
                  termenii si conditiile
                </Link>
                .
              </span>
            </label>
            <button type="button" style={styles.newsletterButton} className="btn-animate">
              Aboneaza-te
            </button>
          </div>
        </div>
      </div>

      <div style={styles.metaRow}>
        <p>&copy; {new Date().getFullYear()} DentNow &middot; Clinica familiei tale</p>
        <div style={styles.socialRow}>
          {socialPlatforms.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={`Urmareste-ne pe ${item.label}`}
              className="social-pill"
              style={styles.socialIcon}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
