import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils/seo";

export const metadata: Metadata = {
  title: "Informatii ANPC pentru pacienti | DentNow",
  description:
    "Date ANPC si modalitati de sesizare pentru pacientii clincii stomatologice DentNow din Bucuresti.",
  alternates: {
    canonical: `${siteConfig.url}/anpc`
  },
  openGraph: {
    title: "Informatii ANPC pentru pacienti | DentNow",
    description:
      "Afla cum poti contacta ANPC si ce optiuni de sesizare ai ca pacient al clinicii stomatologice DentNow din Romania.",
    url: `${siteConfig.url}/anpc`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "article",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Clinica stomatologica DentNow din Bucuresti"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Informatii ANPC pentru pacienti | DentNow",
    description:
      "Date ANPC si modalitati de sesizare pentru pacientii DentNow, clinica stomatologica din Bucuresti.",
    images: [siteConfig.defaultOgImage]
  }
};

export default function AnpcInfo() {
  return (
    <main style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto", fontFamily: "'Inter','Segoe UI',sans-serif" }}>
      <h1>ANPC &amp; modalitati de sesizare</h1>
      <p>
        Pentru orice nelamuriri sau reclamatii, ne poti contacta direct la{" "}
        <a href="mailto:office@dentnow.ro">office@dentnow.ro</a> sau la +40 720 509 802. Daca situatia necesita interventia
        autoritatilor, gasesti datele ANPC pe{" "}
        <a href="https://anpc.ro" target="_blank" rel="noreferrer">
          anpc.ro
        </a>
        .
      </p>
      <p>Adresa Comisariatului pentru Protectia Consumatorului Bucuresti: Bd. Ferdinand I nr. 38, Sector 2.</p>
    </main>
  );
}
