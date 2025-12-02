import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import dynamic from "next/dynamic";
import { megaMenus, navigation } from "@/lib/navigation";
import { getServiceContent, getServicePreview, serviceSlugs } from "@/lib/data/services";
import { siteConfig } from "@/lib/seo";

const palette = {
  navy: "#123c35",
  night: "#0f1f1b",
  teal: "#1fb67c",
  sand: "#f6fbf6",
  slate: "#6a7f74",
  border: "#d9efe3",
  light: "#ffffff"
};

const SiteFooter = dynamic(() => import("@/components/SiteFooter"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", maxWidth: "1200px", minHeight: "360px", margin: "40px auto 0" }} aria-hidden="true" />
});

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
  pageAnimations: {
    animation: "serviceFadeIn 0.7s ease"
  },
  hero: {
    width: "100%",
    maxWidth: "1200px",
    margin: "32px auto 0",
    borderRadius: "48px",
    padding: "48px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
    gap: "32px",
    alignItems: "center",
    color: palette.light,
    backgroundColor: "rgba(8,46,39,0.9)",
    border: `1px solid rgba(255,255,255,0.2)`,
    position: "relative",
    overflow: "hidden",
    minHeight: "640px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  heroTexture: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.16), transparent 40%), linear-gradient(140deg, rgba(7,34,30,0.6), rgba(4,21,18,0.7))",
    mixBlendMode: "screen",
    opacity: 0.9,
    pointerEvents: "none"
  },
  heroCenter: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
    gap: "36px",
    alignItems: "center"
  },
  heroReverse: {
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"
  },
  heroContent: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    position: "relative",
    zIndex: 1,
    maxWidth: "540px",
    width: "100%"
  },
  heroContentCenter: {
    alignItems: "flex-start",
    textAlign: "left",
    margin: "0 auto",
    width: "100%"
  },
  heroEyebrow: {
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.25em",
    fontSize: "12px",
    color: "rgba(255,255,255,0.8)"
  },
  heroTitle: {
    margin: 0,
    fontSize: "46px",
    lineHeight: 1.1
  },
  heroSubtitle: {
    margin: 0,
    fontSize: "18px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.85)"
  },
  heroTagPanel: {
    marginTop: "12px",
    padding: "20px 24px",
    borderRadius: "36px",
    backgroundColor: "rgba(0,0,0,0.16)",
    border: "1px solid rgba(255,255,255,0.35)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "12px",
    width: "100%"
  },
  heroTag: {
    fontSize: "13px",
    letterSpacing: "0.18em",
    color: palette.light,
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    opacity: 0.95
  },
  heroTagDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: `linear-gradient(120deg, ${palette.teal}, #aaf7d7)`
  },
  heroMedia: {
    borderRadius: "32px",
    overflow: "hidden",
    border: `1px solid ${palette.border}`,
    backgroundColor: "rgba(255,255,255,0.5)",
    position: "relative",
    zIndex: 1,
    aspectRatio: "4 / 3",
    minHeight: "360px",
    willChange: "transform",
    transform: "translateZ(0)"
  },
  heroMediaCenter: {
    width: "100%",
    maxWidth: "520px"
  },
  heroImage: {
    objectFit: "cover",
    filter: "saturate(0.9)"
  },
  heroSignature: {
    marginTop: "18px",
    padding: "16px 22px",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.35)",
    backgroundColor: "rgba(3,18,15,0.7)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "12px",
    width: "100%"
  },
  heroSignatureItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  },
  heroSignatureLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    color: "rgba(255,255,255,0.7)"
  },
  heroSignatureValue: {
    fontSize: "16px",
    fontWeight: 600,
    color: palette.light
  },
  heroMediaBadge: {
    position: "absolute",
    left: "18px",
    bottom: "18px",
    padding: "12px 16px",
    borderRadius: "20px",
    backgroundColor: "rgba(18,60,53,0.92)",
    border: "1px solid rgba(255,255,255,0.35)",
    color: palette.light,
    maxWidth: "220px"
  },
  heroMediaBadgeTitle: {
    display: "block",
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.65)",
    marginBottom: "4px"
  },
  heroMediaBadgeText: {
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: 1.4
  },
  heroChipRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "14px",
    width: "100%"
  },
  heroChip: {
    padding: "12px 22px",
    borderRadius: "18px",
    background: "linear-gradient(120deg, rgba(255,255,255,0.2), rgba(31,182,124,0.2))",
    color: palette.light,
    fontWeight: 600,
    fontSize: "14px",
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0 18px 35px rgba(4,22,19,0.35)",
    backdropFilter: "blur(6px)"
  },
  statsRow: {
    width: "100%",
    maxWidth: "1100px",
    margin: "20px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px"
  },
  statsCard: {
    borderRadius: "24px",
    padding: "16px",
    backgroundColor: "rgba(255,255,255,0.85)",
    border: `1px solid ${palette.border}`,
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(18,75,60,0.08)"
  },
  section: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: "32px",
    padding: "40px",
    boxShadow: "0 25px 70px rgba(18,75,60,0.12)",
    border: `1px solid ${palette.border}`,
    display: "grid",
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
    gap: "28px"
  },
  textBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    color: palette.slate,
    lineHeight: 1.7
  },
  infoCard: {
    borderRadius: "24px",
    padding: "24px",
    backgroundColor: "rgba(31,182,124,0.08)",
    border: "1px solid rgba(31,182,124,0.3)",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  infoTitle: {
    margin: 0,
    fontSize: "18px",
    color: palette.navy
  },
  infoList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    color: palette.navy
  },
  highlightGrid: {
    width: "100%",
    maxWidth: "1200px",
    margin: "20px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    animation: "serviceFadeIn 0.6s ease"
  },
  highlightCard: {
    borderRadius: "24px",
    padding: "24px",
    backgroundColor: "rgba(255,255,255,0.85)",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 20px 50px rgba(18,75,60,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  mediaMosaic: {
    width: "100%",
    maxWidth: "1200px",
    margin: "24px auto 0",
    borderRadius: "32px",
    padding: "32px",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
    gap: "24px",
    backgroundColor: "rgba(255,255,255,0.9)",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 18px 45px rgba(18,75,60,0.08)"
  },
  mediaMosaicImage: {
    borderRadius: "24px",
    overflow: "hidden",
    border: `1px solid ${palette.border}`,
    position: "relative",
    aspectRatio: "4 / 3",
    minHeight: "320px"
  },
  mediaMosaicCopy: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    justifyContent: "center",
    color: palette.slate
  },
  stepsSection: {
    width: "100%",
    maxWidth: "1200px",
    margin: "20px auto",
    borderRadius: "32px",
    padding: "32px",
    border: `1px solid ${palette.border}`,
    backgroundColor: "rgba(255,255,255,0.92)",
    boxShadow: "0 18px 45px rgba(18,75,60,0.08)",
    animation: "serviceFadeIn 0.6s ease"
  },
  stepsList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    color: palette.navy
  },
  faqSection: {
    width: "100%",
    maxWidth: "1200px",
    margin: "20px auto 0",
    borderRadius: "32px",
    padding: "36px",
    border: `1px solid ${palette.border}`,
    backgroundColor: "rgba(255,255,255,0.9)",
    boxShadow: "0 18px 45px rgba(18,75,60,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    animation: "serviceFadeIn 0.6s ease"
  },
  faqItem: {
    borderBottom: `1px solid ${palette.border}`,
    paddingBottom: "12px"
  },
  quoteCard: {
    width: "100%",
    maxWidth: "1100px",
    margin: "20px auto",
    borderRadius: "32px",
    padding: "32px",
    backgroundColor: "rgba(255,255,255,0.92)",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 18px 45px rgba(18,75,60,0.08)",
    textAlign: "center",
    animation: "serviceFadeIn 0.6s ease"
  },
  quoteText: {
    fontSize: "20px",
    fontStyle: "italic",
    margin: "0 0 10px"
  },
  quoteAuthor: {
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: "12px",
    color: palette.slate
  },
  cta: {
    width: "100%",
    maxWidth: "1200px",
    margin: "30px auto 0",
    borderRadius: "36px",
    padding: "32px",
    backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.95), rgba(173,244,210,0.9))",
    border: `1px solid ${palette.border}`,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "20px",
    boxShadow: "0 25px 70px rgba(18,75,60,0.15)",
    animation: "serviceFadeIn 0.6s ease"
  },
  ctaButton: {
    background: `linear-gradient(120deg, ${palette.teal}, #8bf2c5)`,
    borderRadius: "999px",
    padding: "12px 26px",
    border: "none",
    fontWeight: 600,
    color: palette.night,
    cursor: "pointer",
    boxShadow: "0 15px 35px rgba(31,182,124,0.35)"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const preview = getServicePreview(slug);
  const title = preview ? `${preview.title} | ${siteConfig.name}` : `Servicii stomatologice | ${siteConfig.name}`;
  const description = preview?.description ?? siteConfig.description;
  const canonical = `${siteConfig.url}/servicii/${slug}`;

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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (process.env.NODE_ENV === "development") {
    console.log("[ServicePage] slug =", slug);
  }
  const data = getServiceContent(slug);
  const phoneLink = siteConfig.contactPhone.replace(/\s+/g, "");

  if (!data) {
    notFound();
  }

  const heroFacts = data.benefits.slice(0, 3);
  const heroSignatureItems = [
    { label: "Clinica", value: siteConfig.name },
    { label: "Specializare", value: data.category },
    { label: "Programare", value: siteConfig.contactPhone }
  ];

  const heroLayout = data.layout ?? "split";
  const heroStyle = {
    ...styles.hero,
    ...(heroLayout === "center" ? styles.heroCenter : {}),
    ...(heroLayout === "reverse" ? styles.heroReverse : {}),
    animation: "serviceHeroFade 0.6s ease"
  };
  const heroContentStyle = {
    ...styles.heroContent,
    ...(heroLayout === "center" ? styles.heroContentCenter : {}),
    animation: "serviceSlideUp 0.6s ease"
  };
  const heroMediaStyle = {
    ...styles.heroMedia,
    ...(heroLayout === "center" ? styles.heroMediaCenter : {}),
    animation: "serviceSlideUp 0.6s ease 0.1s"
  };

  const heroContentBlock = (
    <div style={heroContentStyle}>
      <p style={styles.heroEyebrow}>{data.category}</p>
      <h1 style={styles.heroTitle}>{data.title}</h1>
      <p style={styles.heroSubtitle}>{data.subtitle}</p>
      <div style={styles.heroTagPanel}>
        {data.tags.map((tag) => (
          <span key={tag} style={styles.heroTag}>
            <span style={styles.heroTagDot} aria-hidden="true" />
            {tag}
          </span>
        ))}
      </div>
      <div style={styles.heroChipRow}>
        {heroFacts.map((fact) => (
          <span key={fact} style={styles.heroChip}>
            {fact}
          </span>
        ))}
      </div>
      <div style={styles.heroSignature}>
        {heroSignatureItems.map((item) => (
          <div key={item.label} style={styles.heroSignatureItem}>
            <span style={styles.heroSignatureLabel}>{item.label}</span>
            <span style={styles.heroSignatureValue}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const heroMediaBlock = (
    <div style={heroMediaStyle}>
      <div style={styles.heroMediaBadge}>
        <span style={styles.heroMediaBadgeTitle}>Cabinet integrat</span>
        <span style={styles.heroMediaBadgeText}>Echipamente proprii + monitorizare digitala</span>
      </div>
      <Image
        src={data.heroImage}
        alt={data.title}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 520px"
        style={styles.heroImage}
      />
    </div>
  );

  const heroChildren =
    heroLayout === "reverse" ? (
      <>
        {heroMediaBlock}
        {heroContentBlock}
      </>
    ) : (
      <>
        {heroContentBlock}
        {heroMediaBlock}
      </>
    );

  return (
    <main style={styles.page}>
      <SiteHeader palette={palette} navigation={navigation} megaMenus={megaMenus} />

      <section
        style={{ ...heroStyle, backgroundImage: `${data.heroGradient}, radial-gradient(circle at top, rgba(255,255,255,0.15), transparent 60%)`, backgroundBlendMode: "soft-light" }}
      >
        <div style={styles.heroTexture} aria-hidden="true" />
        {heroChildren}
      </section>

      {data.stats && (
        <div style={styles.statsRow}>
          {data.stats.map((stat) => (
            <div key={stat.label} style={styles.statsCard}>
              <strong style={{ display: "block", fontSize: "26px" }}>{stat.value}</strong>
              <span style={{ fontSize: "13px", color: palette.slate }}>{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {data.quote && (
        <section style={styles.quoteCard}>
          <p style={styles.quoteText}>&ldquo;{data.quote.text}&rdquo;</p>
          <span style={styles.quoteAuthor}>{data.quote.author}</span>
        </section>
      )}

      <section style={styles.section}>
        <div style={styles.textBlock}>
          {data.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div style={styles.infoCard}>
          <p style={styles.infoTitle}>Beneficii principale</p>
          <ul style={styles.infoList}>
            {data.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <div style={{ ...styles.highlightGrid, animation: "serviceFadeIn 0.7s ease" }}>
        {data.highlights.map((item) => (
          <div key={item.title} style={styles.highlightCard}>
            <h3 style={{ margin: "0 0 6px" }}>{item.title}</h3>
            <p style={{ margin: 0, color: palette.slate }}>{item.description}</p>
          </div>
        ))}
      </div>

      {data.secondaryImage && (
        <section style={{ ...styles.mediaMosaic, animation: "serviceFadeIn 0.7s ease 0.1s" }}>
          <div style={styles.mediaMosaicImage}>
            <Image
              src={data.secondaryImage}
              alt={`${data.title} - laborator digital`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={styles.mediaMosaicCopy}>
            <h3 style={{ margin: 0 }}>Laborator & flux digital</h3>
            <p style={{ margin: 0 }}>{data.overview[0]}</p>
          </div>
        </section>
      )}

      <section style={{ ...styles.stepsSection, animation: "serviceFadeIn 0.7s ease 0.1s" }}>
        <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "12px", color: palette.slate, margin: "0 0 12px" }}>
          Parcursul tratamentului
        </p>
        <ul style={styles.stepsList}>
          {data.steps.map((step, index) => (
            <li key={step} style={{ borderLeft: `2px solid ${palette.teal}`, paddingLeft: "12px" }}>
              <strong style={{ display: "block", marginBottom: "6px" }}>Etapa {index + 1}</strong>
              <span style={{ color: palette.slate }}>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ ...styles.faqSection, animation: "serviceFadeIn 0.7s ease 0.2s" }}>
        <h3 style={{ margin: 0 }}>Intrebari frecvente</h3>
        {data.faq.map((item) => (
          <div key={item.question} style={styles.faqItem}>
            <strong style={{ display: "block", marginBottom: "6px" }}>{item.question}</strong>
            <p style={{ margin: 0, color: palette.slate }}>{item.answer}</p>
          </div>
        ))}
      </section>

      <section style={{ ...styles.cta, animation: "serviceFadeIn 0.7s ease 0.3s" }}>
        <div style={{ flex: "2 1 320px" }}>
          <h3 style={{ margin: "0 0 8px" }}>Programeaza-te pentru {data.title.toLowerCase()}</h3>
          <p style={{ margin: 0, color: palette.slate }}>
            Consultantii nostri iti pregatesc calendarul si iti raspund la orice intrebare in maxim 30 de minute.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href={`tel:${phoneLink}`} className="btn-animate" style={styles.ctaButton}>
            Sună acum
          </a>
          <a href="/contact" className="btn-animate" style={{ ...styles.ctaButton, background: "rgba(255,255,255,0.9)" }}>
            Completează formularul
          </a>
        </div>
      </section>

      <SiteFooter palette={palette} />
    </main>
  );
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}
const SiteFooter = dynamic(() => import("@/components/SiteFooter"), { ssr: false });
