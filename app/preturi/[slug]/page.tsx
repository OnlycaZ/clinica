import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/ui/SiteHeader";
import SiteFooter from "@/components/ui/SiteFooter";
import { getPriceSectionsForSlug } from "@/data/data/price-list";
import { megaMenus, navigation } from "@/data/navigation";
import { getPriceContent, getPricePreview, priceSlugs } from "@/data/data/pricing";
import { clampDescription, clampTitle, siteConfig } from "@/lib/utils/seo";

const palette = {
  navy: "#123c35",
  night: "#0f1f1b",
  teal: "#1fb67c",
  sand: "#f6fbf6",
  slate: "#6a7f74",
  border: "#d9efe3",
  light: "#ffffff"
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
    margin: 0,
    background: "linear-gradient(180deg, #f7f4ef 0%, #f6fbf6 70%)",
    color: palette.navy,
    minHeight: "100vh",
    width: "100%",
    padding: "0 16px 80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px"
  },
  hero: {
    width: "100%",
    maxWidth: "1100px",
    margin: "32px auto 0",
    borderRadius: "48px",
    padding: "48px",
    backgroundColor: palette.light,
    boxShadow: "0 45px 110px rgba(18,75,60,0.15)",
    border: `1px solid ${palette.border}`,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "32px"
  },
  heroMedia: {
    borderRadius: "32px",
    overflow: "hidden",
    border: `1px solid ${palette.border}`,
    position: "relative",
    minHeight: "320px"
  },
  heroImage: {
    objectFit: "cover"
  },
  pricePill: {
    padding: "10px 22px",
    borderRadius: "999px",
    backgroundImage: "linear-gradient(120deg, rgba(31,182,124,0.15), rgba(31,182,124,0.05))",
    border: "1px solid rgba(31,182,124,0.35)",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "8px"
  },
  sectionCard: {
    width: "100%",
    maxWidth: "1100px",
    margin: "20px auto 0",
    borderRadius: "36px",
    padding: "40px 36px",
    backgroundColor: "rgba(255,255,255,0.95)",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 25px 70px rgba(18,75,60,0.12)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
    textAlign: "center"
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "12px 0 0",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    color: palette.slate,
    alignItems: "flex-start"
  },
  listItem: {
    gap: "10px",
    display: "grid",
    gridTemplateColumns: "12px 1fr",
    alignItems: "flex-start",
    maxWidth: "320px",
    width: "100%",
    textAlign: "left"
  },
  listBullet: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: palette.teal,
    display: "inline-flex",
    marginTop: "6px"
  },
  ctaCard: {
    width: "100%",
    maxWidth: "1100px",
    margin: "30px auto 0",
    borderRadius: "36px",
    padding: "32px",
    backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.95), rgba(219,245,232,0.9))",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 25px 70px rgba(18,75,60,0.15)",
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    alignItems: "center"
  },
  button: {
    background: `linear-gradient(120deg, ${palette.teal}, #8bf2c5)`,
    border: "none",
    borderRadius: "999px",
    padding: "12px 24px",
    fontWeight: 600,
    color: palette.night,
    cursor: "pointer",
    boxShadow: "0 15px 35px rgba(31,182,124,0.35)"
  },
  priceSection: {
    width: "100%",
    maxWidth: "1100px",
    margin: "24px auto 0",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  priceCard: {
    borderRadius: "32px",
    padding: "28px",
    backgroundColor: "rgba(255,255,255,0.97)",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 20px 60px rgba(18,75,60,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  priceCardHeader: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
    alignItems: "flex-start"
  },
  priceCode: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    padding: "6px 14px",
    borderRadius: "999px",
    backgroundColor: "rgba(31,182,124,0.12)",
    border: "1px solid rgba(31,182,124,0.3)",
    color: palette.teal
  },
  priceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    alignItems: "flex-start",
    borderBottom: `1px solid ${palette.border}`,
    paddingBottom: "12px"
  },
  priceValue: {
    fontWeight: 700,
    color: palette.navy,
    whiteSpace: "nowrap"
  },
  priceInfo: {
    color: palette.slate,
    fontSize: "13px"
  },
  priceNotice: {
    width: "100%",
    maxWidth: "1100px",
    margin: "24px auto 0",
    borderRadius: "32px",
    padding: "28px",
    backgroundColor: "rgba(255,255,255,0.85)",
    border: `1px dashed ${palette.border}`,
    textAlign: "center",
    boxShadow: "0 15px 45px rgba(18,75,60,0.08)"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const preview = getPricePreview(slug);
  const rawTitle = preview ? `${preview.title} | ${siteConfig.name}` : `Preturi stomatologice | ${siteConfig.name}`;
  const rawDescription = preview?.description ?? siteConfig.description;
  const title = clampTitle(rawTitle);
  const description = clampDescription(rawDescription);
  const canonical = `${siteConfig.url}/preturi/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      images: [
        {
          url: preview?.image ?? siteConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: preview?.title ?? title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [preview?.image ?? siteConfig.defaultOgImage]
    }
  };
}

export default async function PricePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getPriceContent(slug);
  const phoneLink = siteConfig.contactPhone.replace(/\s+/g, "");
  const detailSections = getPriceSectionsForSlug(slug);

  if (!data) {
    notFound();
  }

  return (
    <main style={styles.page}>
      <SiteHeader palette={palette} navigation={navigation} megaMenus={megaMenus} />

      <section style={styles.hero}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <p style={{ margin: 0, textTransform: "uppercase", letterSpacing: "0.25em", color: palette.slate }}>{data.category}</p>
          <h1 style={{ margin: 0 }}>{data.title}</h1>
          <p style={{ margin: "0 0 6px", color: palette.slate }}>{data.subtitle}</p>
          <div style={styles.pricePill}>
            <span style={{ fontSize: "28px" }}>{data.price}</span>
          </div>
          {data.description.map((paragraph) => (
            <p key={paragraph} style={{ margin: 0, color: palette.slate }}>
              {paragraph}
            </p>
          ))}
        </div>
        <div style={styles.heroMedia}>
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 420px"
            style={styles.heroImage}
          />
        </div>
      </section>

      <section style={styles.sectionCard}>
        <div>
          <h3 style={{ fontWeight: 700 }}>Ce include</h3>
          <ul style={styles.list}>
            {data.includes.map((item) => (
              <li key={item} style={styles.listItem}>
                <span style={styles.listBullet} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 style={{ fontWeight: 700 }}>Optiuni suplimentare</h3>
          <ul style={styles.list}>
            {data.addOns.map((item) => (
              <li key={item} style={styles.listItem}>
                <span style={styles.listBullet} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 style={{ fontWeight: 700 }}>Finantare</h3>
          <ul style={styles.list}>
            {data.financing.map((item) => (
              <li key={item} style={styles.listItem}>
                <span style={styles.listBullet} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {detailSections.length > 0 ? (
        <section style={styles.priceSection} aria-labelledby="preturi-detaliate">
          <div>
            <p style={{ textTransform: "uppercase", letterSpacing: "0.25em", fontSize: "12px", color: palette.slate, margin: "0 0 8px" }}>
              Tarife detaliate
            </p>
            <h2 id="preturi-detaliate" style={{ margin: "0 0 16px" }}>
              Servicii din categoria {data.title.toLowerCase()}
            </h2>
          </div>
          {detailSections.map((section) => (
            <article key={section.code} style={styles.priceCard}>
              <div style={styles.priceCardHeader}>
                <div>
                  <span style={styles.priceCode}>{section.code}</span>
                  <h3 style={{ margin: "12px 0 4px" }}>{section.title}</h3>
                  <p style={{ margin: 0, color: palette.slate }}>{section.description}</p>
                </div>
              </div>
              <ul style={styles.priceList}>
                {section.items.map((item) => (
                  <li key={`${section.code}-${item.name}`} style={styles.priceRow}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <strong style={{ display: "block", marginBottom: item.info ? "4px" : 0 }}>{item.name}</strong>
                      {item.info && <span style={styles.priceInfo}>{item.info}</span>}
                    </div>
                    <span style={styles.priceValue}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      ) : (
        <section style={styles.priceNotice}>
          <h3 style={{ margin: "0 0 6px" }}>Solicita oferta personalizata</h3>
          <p style={{ margin: 0, color: palette.slate }}>
            Pentru categoria {data.title.toLowerCase()} costurile se stabilesc dupa consultatie si investigatii imagistice.
          </p>
        </section>
      )}

      <section style={styles.ctaCard}>
        <div style={{ flex: "2 1 320px" }}>
          <h3 style={{ margin: "0 0 6px" }}>Vrei detalii pentru {data.title.toLowerCase()}?</h3>
          <p style={{ margin: 0, color: palette.slate }}>Consilierii nostri iti trimit devizul detaliat si calendarul estimat in 30 de minute.</p>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a href={`tel:${phoneLink}`} className="btn-animate" style={styles.button}>
            Suna acum
          </a>
          <a href="/contact" className="btn-animate" style={{ ...styles.button, background: "rgba(255,255,255,0.9)" }}>
            Scrie-ne online
          </a>
        </div>
      </section>

      <SiteFooter palette={palette} />
    </main>
  );
}

export function generateStaticParams() {
  return priceSlugs.map((slug) => ({ slug }));
}


