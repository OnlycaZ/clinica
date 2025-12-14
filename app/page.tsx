'use client';

import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import { megaMenus, navigation } from "@/lib/navigation";
import { getSeoEntry, siteConfig } from "@/lib/seo";
import { services } from "@/lib/content";
import GallerySection from "@/components/GallerySection";

const homeSeo = getSeoEntry("home");

const SiteFooter = dynamic(() => import("@/components/SiteFooter"), { ssr: false, loading: () => <div style={styles.footerPlaceholder} aria-hidden="true" /> });

const palette = {
  navy: "#123c35",
  night: "#0f1f1b",
  teal: "#1fb67c",
  sand: "#f6fbf6",
  slate: "#6a7f74",
  border: "#d9efe3",
  light: "#ffffff"
};

const stats = Object.freeze([
  { value: "25+", label: "Ani de excelenta" },
  { value: "40K", label: "Pacienti tratati" },
  { value: "30", label: "Specialisti dedicati" }
]);

type ServiceCardVariant =
  | "active"
  | "incoming-next"
  | "incoming-prev"
  | "outgoing-next"
  | "outgoing-prev";

const SLIDE_TRANSITION_MS = 520;
const AUTOPLAY_INTERVAL_MS = 6000;

const assurances = Object.freeze([
  "Consultatii interdisciplinare in aceeasi vizita",
  "Asistenta pentru pacienti internationali",
  "Suport post-tratament 24/7",
  "Planuri financiare transparente"
]);

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
    margin: 0,
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#eaf6f0",
    color: palette.navy,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: "0",
    padding: "0",
  },
  hero: {
    width: "100vw",
    maxWidth: "none",
    marginLeft: "calc(50% - 50vw)",
    minHeight: "90vh",
    padding: "120px 32px 96px",
    background: "linear-gradient(135deg, #0fac7b, #0d9770 60%, #0a6645)",
    position: "relative",
    overflow: "hidden",
    color: palette.light,
    borderRadius: 0,
    transform: "translateZ(0)",
  },
  heroInner: {
    width: "100%",
    maxWidth: "1320px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
  },
  heroContent: {
    textAlign: "center",
    maxWidth: "960px",
    margin: "0 auto",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(4, 120, 87, 0.25)), radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.45), transparent 45%)",
    pointerEvents: "none",
    zIndex: 1
  },
  heroVideoWrapper: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    zIndex: 0,
    borderRadius: 0
  },
  heroVideo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "140%",
    height: "140%",
    transform: "translate(-50%, -50%)",
    objectFit: "cover",
    filter: "brightness(0.65) saturate(1.2)"
  },
  heroEyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.4em",
    fontSize: "12px",
    color: "rgba(255,255,255,0.85)",
    marginBottom: "18px",
    fontWeight: 600,
  },
  heroTitle: {
    fontSize: "clamp(40px, 6vw, 64px)",
    lineHeight: 1.15,
    margin: "0 0 24px",
    fontWeight: 800,
    textShadow: "0 30px 60px rgba(4, 120, 87, 0.45)",
  },
  heroText: {
    fontSize: "clamp(16px, 2.2vw, 20px)",
    lineHeight: 1.75,
    color: "rgba(255,255,255,0.95)",
    margin: "0 0 32px",
    textShadow: "0 15px 30px rgba(4, 120, 87, 0.35)",
  },
  heroCtas: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "560px",
    margin: "0 auto 12px",
  },
  primaryButton: {
    background: `linear-gradient(120deg, ${palette.teal}, #9cf1d3)`,
    color: palette.night,
    padding: "14px 36px",
    borderRadius: "999px",
    fontWeight: 700,
    border: "none",
    boxShadow: "0 18px 45px rgba(31,182,124,0.35)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  secondaryButton: {
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.5)",
    color: "#fff",
    padding: "14px 34px",
    fontWeight: 600,
    background: "rgba(255,255,255,0.15)",
    transition: "background 0.3s ease, transform 0.3s ease",
  },
  heroStats: {
    width: "100%",
    maxWidth: "960px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "24px",
  },
  heroStatBlock: {
    borderLeft: "1px solid rgba(255,255,255,0.5)",
    paddingLeft: "16px",
    textAlign: "center",
  },
  heroStatValue: {
    fontSize: "36px",
    fontWeight: 700,
    margin: 0,
    color: "#fff",
  },
  heroStatLabel: {
    margin: 0,
    color: "rgba(255,255,255,0.85)",
    fontSize: "14px",
  },
  heroCard: {
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: "36px",
    padding: "34px",
    boxShadow: "0 32px 90px rgba(11,42,61,0.15)",
    maxWidth: "560px",
    margin: "32px auto 0",
    position: "relative",
    zIndex: 2,
    color: palette.navy,
    border: "none",
  },
  heroCardLabel: {
    fontSize: "20px",
    fontWeight: 700,
    margin: 0,
  },
  heroCardDetail: {
    margin: "0 0 18px",
    color: palette.slate,
    fontSize: "15px",
  },
  heroContactLink: {
    backgroundColor: "rgba(31,182,124,0.08)",
    border: "1px solid rgba(31,182,124,0.25)",
    borderRadius: "22px",
    display: "flex",
    gap: "16px",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "16px 20px",
    textDecoration: "none",
    color: palette.navy,
    fontWeight: 600,
    minWidth: "240px",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  },
  heroContactText: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.4,
    alignItems: "flex-start",
  },
  contactBadge: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    backgroundColor: palette.teal,
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "0.08em",
    fontSize: "11px",
    fontWeight: 700,
  },
  servicesSection: {
    width: "100%",
    padding: "96px 24px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(221,248,238,0.94))",
  },
  servicesContent: {
    width: "100%",
    maxWidth: "1320px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  sliderHeader: {
    marginBottom: "24px",
    textAlign: "center",
    padding: "0 20px",
  },
  sliderHeaderLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.35em",
    fontSize: "12px",
    color: palette.teal,
    marginBottom: "12px",
  },
  sliderHeaderTitle: {
    fontSize: "32px",
    lineHeight: 1.2,
    margin: "0 0 12px",
    fontWeight: 700,
    color: palette.navy,
  },
  sliderHeaderCopy: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6,
  },
  sliderWrapper: {
    position: "relative",
    borderRadius: "28px",
    overflow: "hidden",
    padding: "36px 32px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.18))",
    width: "100%",
    boxShadow: "0 40px 90px rgba(3, 55, 46, 0.35)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
  },
  carouselStage: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
    gap: "16px",
  },
  carouselRow: {
    display: "grid",
    gridTemplateColumns: "minmax(200px, 1fr) 380px minmax(200px, 1fr)",
    gap: "20px",
    alignItems: "center",
    justifyItems: "center",
  },
  sidePreview: {
    width: "285px",
    height: "315px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.08)",
    boxShadow: "0 20px 50px rgba(2, 52, 40, 0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
    position: "relative",
    overflow: "hidden",
  },
  sideOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0))",
    borderRadius: "inherit",
  },
  sidePreviewContent: {
    position: "absolute",
    inset: "20px",
    color: "#fff",
    fontSize: "14px",
    zIndex: 1,
  },
  activeCardWrapper: {
    minHeight: "320px",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "380px",
    height: "420px",
  },
  sliderArrow: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(0,0,0,0.45)",
    color: "#fff",
    fontSize: "34px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  sliderArrowSide: {
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
  },
  sliderArrowDisabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  serviceTile: {
    position: "relative",
    width: "380px",
    height: "420px",
    borderRadius: "24px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "24px",
    color: "#fff",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 35px 90px rgba(2, 52, 40, 0.45), 0 0 40px rgba(255,255,255,0.25)",
    border: "1px solid rgba(255,255,255,0.25)",
    minHeight: "420px",
  },
  previewCard: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "22px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "16px 18px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0 25px 65px rgba(2, 52, 40, 0.35)",
    backdropFilter: "blur(12px)",
  },
  previewTile: {
    width: "100%",
    height: "100%",
    padding: "18px",
    borderRadius: "22px",
    opacity: 0.76,
    filter: "blur(4px) saturate(0.78)",
    boxShadow: "inset 0 0 25px rgba(255,255,255,0.35), 0 20px 55px rgba(2,52,40,0.35)",
    position: "relative",
    zIndex: 1,
  },
  previewTileContent: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  previewTileDesc: {
    margin: 0,
    fontSize: "13px",
    lineHeight: 1.4,
    color: "rgba(255,255,255,0.8)",
  },
  previewBackground: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(12px) saturate(0.6)",
    opacity: 0.75,
    zIndex: 0,
  },
  tileGradient: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(3, 29, 30, 0.25), rgba(3, 29, 30, 0.75))",
    zIndex: 1,
  },
  tileContent: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  serviceImagePreview: {
    width: "100%",
    height: "380px",
    borderRadius: "28px",
    overflow: "hidden",
    marginTop: "16px",
    boxShadow: "0 40px 110px rgba(3,55,46,0.45)",
    border: "1px solid rgba(255,255,255,0.25)",
  },
  serviceImagePreviewMini: {
    width: "100%",
    height: "160px",
    borderRadius: "18px",
    overflow: "hidden",
    marginTop: "14px",
    boxShadow: "0 25px 60px rgba(2,52,40,0.4)",
    border: "1px solid rgba(255,255,255,0.3)",
  },
  previewTileGlass: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 20px 60px rgba(2,52,40,0.25)",
  },
  detailButton: {
    marginTop: "12px",
    color: palette.light,
    fontSize: "14px",
    lineHeight: 1.3,
    fontWeight: 600,
    letterSpacing: "0.05em",
    padding: "4px 0",
    textDecoration: "underline",
    background: "none",
    border: "none",
  },
  tileTitle: {
    margin: 0,
    fontSize: "26px",
    fontWeight: 700,
  },
  tileDescription: {
    margin: "6px 0 0",
    fontSize: "14px",
    lineHeight: 1.4,
    color: "rgba(255,255,255,0.75)",
    maxWidth: "360px",
  },
  sectionHeader: {
    maxWidth: "720px",
    marginBottom: "32px",
  },
  sectionEyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.3em",
    color: palette.teal,
    fontSize: "12px",
    marginBottom: "12px",
  },
  sectionTitle: {
    fontSize: "36px",
    lineHeight: 1.4,
    margin: "0 0 16px",
  },
  sectionCopy: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.7,
  },
  cardsGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "30px",
    padding: "28px",
    border: `1px solid rgba(31,182,124,0.12)`,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minHeight: "320px",
    boxShadow: "0 32px 80px rgba(18,60,53,0.06)",
  },
  serviceIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "18px",
    backgroundColor: "rgba(31,182,124,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: palette.teal,
  },
  cardTitle: {
    margin: 0,
    fontSize: "22px",
  },
  cardCopy: {
    margin: 0,
    color: palette.slate,
    lineHeight: 1.6,
  },
  cardList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    color: palette.navy,
  },
  cardListItem: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    fontSize: "14px",
  },
  cardBullet: {
    width: "26px",
    height: "26px",
    borderRadius: "8px",
    backgroundColor: "rgba(31,182,124,0.15)",
    color: palette.teal,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  },
  linkButton: {
    marginTop: "8px",
    background: "none",
    border: "none",
    color: palette.teal,
    fontWeight: 600,
    cursor: "pointer",
    padding: 0,
  },
  ctaSection: {
    width: "100%",
    maxWidth: "1200px",
    margin: "40px auto 80px",
    borderRadius: "36px",
    padding: "56px 48px",
    backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.95), rgba(219,245,232,0.92))",
    display: "flex",
    flexWrap: "wrap",
    gap: "32px",
    alignItems: "center",
    border: `1px solid ${palette.border}`,
    boxShadow: "0 32px 80px rgba(18,60,53,0.08)",
  },
  footerPlaceholder: {
    width: "100%",
    maxWidth: "1200px",
    minHeight: "360px",
    margin: "0 auto",
  },
  ctaContent: {
    flex: "2 1 380px",
  },
  ctaActions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "24px",
  },
  phonePill: {
    borderRadius: "999px",
    padding: "12px 20px",
    border: "1px solid rgba(31,182,124,0.3)",
    backgroundColor: "rgba(31,182,124,0.12)",
    color: palette.navy,
    fontWeight: 600,
    textDecoration: "none",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  },
  assuranceList: {
    flex: "1 1 260px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  assuranceItem: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    color: palette.slate,
  },
  assuranceBullet: {
    color: palette.teal,
    fontWeight: 700,
  },
  };
const fadeIn = (delay = 0): React.CSSProperties => ({
  animation: "fadeInUp 0.9s ease forwards",
  animationDelay: `${delay}s`
});

type SlideMotionRole = "incoming" | "outgoing";

const SERVICE_SLIDE_OFFSET = 120;
const motionLayerStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  zIndex: 1,
};

const getSlideMotionProps = (role: SlideMotionRole, direction: "next" | "prev") => {
  const transitionSettings = { duration: 0.52, ease: "easeInOut" };
  if (role === "incoming") {
    return {
      initial: {
        x: direction === "next" ? SERVICE_SLIDE_OFFSET : -SERVICE_SLIDE_OFFSET,
        opacity: 0,
        filter: "blur(4px)"
      },
      animate: { x: 0, opacity: 1, filter: "blur(0px)" },
      transition: transitionSettings
    };
  }
  return {
    initial: { x: 0, opacity: 1 },
    animate: {
      x: direction === "next" ? -SERVICE_SLIDE_OFFSET : SERVICE_SLIDE_OFFSET,
      opacity: 0,
      filter: "blur(3px)"
    },
    transition: transitionSettings
  };
};

const PREVIEW_SLIDE_OFFSET = 70;

const getPreviewMotionProps = (position: "prev" | "next") => {
  const offset = position === "prev" ? -PREVIEW_SLIDE_OFFSET : PREVIEW_SLIDE_OFFSET;
  const transition = { duration: 0.45, ease: "easeInOut" };
  return {
    initial: { x: offset, opacity: 0, filter: "blur(6px)" },
    animate: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: { x: offset, opacity: 0, filter: "blur(4px)" },
    transition
  };
};


export default function Home() {
  const sanitizedPhone = siteConfig.contactPhone.replace(/\s+/g, "");
  const bookingEmail = siteConfig.contactEmail;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [transitionDirection, setTransitionDirection] = React.useState<"idle" | "next" | "prev">("idle");
  const [activeArrow, setActiveArrow] = React.useState<"none" | "prev" | "next">("none");
  const [transitionTarget, setTransitionTarget] = React.useState<number | null>(null);
  const [previewAnimationKey, setPreviewAnimationKey] = React.useState(0);
  const prevIndex = (currentIndex - 1 + services.length) % services.length;
  const nextIndex = (currentIndex + 1) % services.length;
  const previewCenterIndex = transitionTarget ?? currentIndex;
  const previewPrevIndex = (previewCenterIndex - 1 + services.length) % services.length;
  const previewNextIndex = (previewCenterIndex + 1) % services.length;
  const activeSlideLabel = services[currentIndex]?.title ?? "serviciu";
  const liveRegionText = `Slide ${currentIndex + 1} din ${services.length}: ${activeSlideLabel}`;
  const isTransitioning = transitionDirection !== "idle" && transitionTarget !== null;
  const motionDirection: "next" | "prev" = transitionDirection === "next" ? "next" : "prev";

  const triggerArrow = (direction: "prev" | "next") => {
    setActiveArrow(direction);
    setTimeout(() => setActiveArrow("none"), 220);
  };

  const changeSlide = React.useCallback(
    (direction: "prev" | "next") => {
      if (transitionDirection !== "idle") {
        return;
      }
      const target = direction === "next" ? nextIndex : prevIndex;
      setTransitionDirection(direction);
      setTransitionTarget(target);
      setPreviewAnimationKey((value) => value + 1);
      setTimeout(() => {
        setCurrentIndex(target);
        setTransitionDirection("idle");
        setTransitionTarget(null);
      }, SLIDE_TRANSITION_MS);
    },
    [nextIndex, prevIndex, transitionDirection]
  );

  const changeSlideRef = React.useRef(changeSlide);
  React.useEffect(() => {
    changeSlideRef.current = changeSlide;
  }, [changeSlide]);

  const goPrev = () => {
    triggerArrow("prev");
    changeSlide("prev");
  };

  const goNext = () => {
    triggerArrow("next");
    changeSlide("next");
  };

  React.useEffect(() => {
    if (services.length <= 1) {
      return undefined;
    }
    const autoplayTimer = setInterval(() => changeSlideRef.current("next"), AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(autoplayTimer);
  }, [services.length]);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }
    const targets = [currentIndex, nextIndex, prevIndex];
    const loadedImages: HTMLImageElement[] = [];
    targets.forEach((index) => {
      const src = services[index]?.image;
      if (src) {
        if (typeof window === "undefined") return;
        const image = new window.Image();
        image.src = src;
        loadedImages.push(image);
      }
    });
    return () => {
      loadedImages.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, [currentIndex, nextIndex, prevIndex]);

  const renderServiceCard = (serviceIndex: number, variant: ServiceCardVariant = "active") => {
    const service = services[serviceIndex];
    if (!service) return null;
    const variantClass = `service-tile--${variant}`;
    const isOutgoing = variant.startsWith("outgoing");
    return (
      <article
        style={styles.serviceTile}
        className={`service-tile ${variantClass}`}
        data-variant={variant}
        aria-hidden={isOutgoing}
      >
        <div style={styles.tileGradient} aria-hidden="true" />
        <div style={styles.tileContent}>
          <h3 style={styles.tileTitle}>{service.title}</h3>
          <p style={styles.tileDescription}>{service.description}</p>
        </div>
        {service.image && (
          <div
            style={{
              ...styles.serviceImagePreview,
              backgroundImage: `url(${service.image})`
            }}
            aria-hidden="true"
          />
        )}
        <Link
          href={service.href ?? "/servicii"}
          style={styles.detailButton}
          className="btn-animate"
          aria-label={`Vezi detalii pentru ${service.title}`}
        >
          Vezi detalii
        </Link>
      </article>
    );
  };

  const renderServicePreview = (serviceIndex: number) => {
    const service = services[serviceIndex];
    if (!service) return null;
    return (
      <article
        className="preview-panel"
        style={{ ...styles.previewCard, ...styles.previewTile, ...styles.previewTileGlass }}
        aria-hidden="true"
      >
        <div style={styles.tileGradient} aria-hidden="true" />
        <div style={styles.tileContent}>
          <h4 style={{ ...styles.tileTitle, fontSize: "16px" }}>{service.title}</h4>
          <p style={{ ...styles.tileDescription, margin: "6px 0 0", fontSize: "13px" }}>{service.description}</p>
        </div>
        {service.image && (
          <div
            style={{
              ...styles.serviceImagePreviewMini,
              backgroundImage: `linear-gradient(180deg, rgba(3,29,30,0), rgba(3,29,30,0.45)), url(${service.image})`
            }}
            aria-hidden="true"
          />
        )}
      </article>
    );
  };

  return (
    <>
      <Head>
        <title>{homeSeo.title}</title>
        <meta name="description" content={homeSeo.description} />
        <meta name="keywords" content={homeSeo.keywords.join(", ")} />
        <link rel="canonical" href={homeSeo.canonical} />
        <meta property="og:title" content={homeSeo.title} />
        <meta property="og:description" content={homeSeo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={siteConfig.locale} />
        <meta property="og:url" content={homeSeo.canonical} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:image" content={homeSeo.image} />
        <meta property="og:image:alt" content={homeSeo.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homeSeo.title} />
        <meta name="twitter:description" content={homeSeo.description} />
        <meta name="twitter:image" content={homeSeo.image} />
      </Head>
      <main style={styles.page} className="home-page w-screen overflow-x-hidden">
        <SiteHeader palette={palette} navigation={navigation} megaMenus={megaMenus} />

        <section
          id="hero"
          aria-labelledby="hero-title"
          className="hero-section w-full px-0"
          style={{ ...styles.hero, ...fadeIn(0.05) }}
        >
          <div style={styles.heroVideoWrapper} aria-hidden="true">
            <video
              src="/Dental_Clinic_Video_Presentation_Request.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={styles.heroVideo}
            />
          </div>
          <div style={styles.heroOverlay} aria-hidden="true" />
          <div style={styles.heroInner} className="hero-inner">
            <div style={styles.heroContent}>
              <p style={styles.heroEyebrow}>Clinica dentara integrata</p>
              <h1 id="hero-title" style={styles.heroTitle}>
                DentNow este clinica familiei tale din Dristor
              </h1>
              <p style={styles.heroText}>
                DentNow imbina expertiza medicala cu tehnologii digitale si finantare usor de accesat. Tratam adulti si
                copii cu aceeasi grija, astfel incat fiecare vizita sa se termine cu un zambet relaxat.
              </p>
              <div style={styles.heroCtas}>
                <a href="/rezerva-vizita" style={styles.primaryButton} className="hero-primary btn-animate">
                  Programeaza consultatia
                </a>
                <a href="/portofoliu" style={styles.secondaryButton} className="btn-animate">
                  Vezi portofoliul
                </a>
              </div>
              <dl style={styles.heroStats} className="hero-stats">
                {stats.map((stat) => (
                  <div key={stat.label} style={styles.heroStatBlock}>
                    <dt style={styles.heroStatValue}>{stat.value}</dt>
                    <dd style={styles.heroStatLabel}>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div style={styles.heroCard} role="complementary" aria-label="Informatii pentru programari">
              <p style={styles.heroCardLabel}>Programam pacienti din tara si din strainatate</p>
              <p style={styles.heroCardDetail}>Program cabinet: Luni - Sambata, 08:00 - 21:00</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a href={`tel:${sanitizedPhone}`} style={styles.heroContactLink} className="btn-animate">
                  <span aria-hidden="true" style={styles.contactBadge}>
                    TEL
                  </span>
                  <span style={styles.heroContactText}>
                    {siteConfig.contactPhone}
                    <br />
                    <small style={{ fontWeight: 400, color: palette.slate }}>Linie prioritara</small>
                  </span>
                </a>
                <a href={`mailto:${bookingEmail}`} style={styles.heroContactLink} className="btn-animate">
                  <span aria-hidden="true" style={styles.contactBadge}>
                    MAIL
                  </span>
                  <span style={styles.heroContactText}>
                    {bookingEmail}
                    <br />
                    <small style={{ fontWeight: 400, color: palette.slate }}>Raspuns in max. 2 ore</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <GallerySection />

        <section
          id="servicii"
          aria-labelledby="servicii-title"
          className="services-section w-full px-4 lg:px-0"
          style={{ ...styles.servicesSection, ...fadeIn(0.25) }}
        >
          <div style={styles.servicesContent}>
            <div style={styles.sliderHeader}>
              <p style={styles.sliderHeaderLabel}>Servicii complete</p>
              <h2 id="servicii-title" style={styles.sliderHeaderTitle}>
                Tratamente fauritoare de bucurie
              </h2>
              <p style={styles.sliderHeaderCopy}>
                De la estetica dentara pana la reabilitari complexe, coordonam fiecare specializare in acelasi loc pentru a-ti oferi siguranta si confort.
              </p>
            </div>
        <div style={styles.sliderWrapper}>
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-announcement"
          >
            {liveRegionText}
          </div>
          <div style={styles.carouselStage}>
            <button
              type="button"
              onClick={goPrev}
                  className={activeArrow === "prev" ? "sliderArrow button-press" : "sliderArrow"}
                  style={{
                    ...styles.sliderArrow,
                    ...styles.sliderArrowSide,
                    ...(services.length <= 1 ? styles.sliderArrowDisabled : {}),
                  }}
                  aria-label="Slide anterior"
                >
                  {"<"}
                </button>
                <div style={styles.carouselRow}>
                  <div style={styles.sidePreview} className="side-preview-panel" key={`preview-prev-${previewAnimationKey}`}>
                    <motion.div
                      key={`preview-motion-prev-${previewAnimationKey}-${previewPrevIndex}`}
                      {...getPreviewMotionProps("prev")}
                      style={{ width: "100%", height: "100%", display: "flex" }}
                    >
                      {renderServicePreview(previewPrevIndex)}
                    </motion.div>
                  </div>
                <div style={styles.activeCardWrapper}>
                  {isTransitioning && transitionTarget !== null ? (
                    <>
                      <motion.div
                        key={`outgoing-${currentIndex}`}
                        {...getSlideMotionProps("outgoing", motionDirection)}
                        style={motionLayerStyle}
                      >
                        {renderServiceCard(
                          currentIndex,
                          transitionDirection === "next" ? "outgoing-next" : "outgoing-prev"
                        )}
                      </motion.div>
                      <motion.div
                        key={`incoming-${transitionTarget}`}
                        {...getSlideMotionProps("incoming", motionDirection)}
                        style={motionLayerStyle}
                      >
                        {renderServiceCard(
                          transitionTarget,
                          transitionDirection === "next" ? "incoming-next" : "incoming-prev"
                        )}
                      </motion.div>
                    </>
                  ) : (
                    <div style={motionLayerStyle}>{renderServiceCard(currentIndex, "active")}</div>
                  )}
                </div>
                  <div style={styles.sidePreview} className="side-preview-panel" key={`preview-next-${previewAnimationKey}`}>
                    <motion.div
                      key={`preview-motion-next-${previewAnimationKey}-${previewNextIndex}`}
                      {...getPreviewMotionProps("next")}
                      style={{ width: "100%", height: "100%", display: "flex" }}
                    >
                      {renderServicePreview(previewNextIndex)}
                    </motion.div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  className={activeArrow === "next" ? "sliderArrow button-press" : "sliderArrow"}
                  style={{
                    ...styles.sliderArrow,
                    ...styles.sliderArrowSide,
                    ...(services.length <= 1 ? styles.sliderArrowDisabled : {}),
                  }}
                  aria-label="Slide urmator"
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="programare"
          aria-labelledby="programare-title"
          className="cta-section w-full px-4 lg:px-0"
          style={{ ...styles.ctaSection, ...fadeIn(0.45) }}
        >
          <div style={styles.ctaContent}>
            <p style={styles.sectionEyebrow}>Programari rapide</p>
            <h2 id="programare-title" style={{ margin: "0 0 12px", fontSize: "32px" }}>
              Ramai conectat cu echipa ta medicala
            </h2>
            <p style={{ margin: 0, lineHeight: 1.6 }}>
              Coordonatorii DentNow iti confirma vizita in cel mult 30 de minute. Trimite-ne istoricul tau medical in siguranta si
              pregatim traseul optim inaintea sosirii.
            </p>
            <div style={styles.ctaActions}>
              <a href={`tel:${sanitizedPhone}`} style={styles.phonePill} className="btn-animate">
                Suna acum
              </a>
              <button type="button" style={{ ...styles.primaryButton, boxShadow: "none" }} className="btn-animate">
                Trimite mesaj
              </button>
            </div>
          </div>
          <ul style={styles.assuranceList} className="assurance-list">
            {assurances.map((item) => (
              <li key={item} style={styles.assuranceItem}>
                <span aria-hidden="true" style={styles.assuranceBullet}>
                  {">"}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <React.Suspense fallback={<div style={styles.footerPlaceholder} aria-hidden="true" />}>
          <SiteFooter palette={palette} />
        </React.Suspense>

        <style jsx global>{`
          .home-page {
            background: transparent;
            padding: 0;
          }
          .hero-section {
            background: none !important;
          }
          .interactive-card,
          .interactive-panel {
            transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
            box-shadow: 0 20px 45px rgba(18, 60, 53, 0.08);
          }
          .interactive-card:hover,
          .interactive-panel:hover {
            transform: translateY(-3px) scale(1.01);
            box-shadow: 0 30px 60px rgba(18, 60, 53, 0.16);
          }
          .sr-announcement {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            clip-path: inset(50%);
            border: 0;
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translate3d(0, 18px, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          .slider-card-layer {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: stretch;
            justify-content: center;
            pointer-events: none;
          }
          .slider-card-layer.incoming {
            z-index: 3;
          }
          .slider-card-layer.outgoing {
            z-index: 2;
          }
          .service-tile {
            transition: transform 0.85s ease-in-out, opacity 0.85s ease-in-out, filter 0.85s ease-in-out,
              box-shadow 0.85s ease-in-out;
            will-change: transform, opacity, filter;
          }
          .service-tile::after {
            content: "";
            position: absolute;
            inset: 12px;
            border-radius: 18px;
            background: radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.4), transparent 55%);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.6s ease;
          }
          .service-tile:hover::after {
            opacity: 0.45;
          }
          .service-tile--active {
            transform: scale(1);
            opacity: 1;
            filter: blur(0px) saturate(1.1);
            box-shadow: 0 40px 90px rgba(6, 78, 51, 0.45), 0 0 40px rgba(255, 255, 255, 0.35);
          }
          .service-tile--incoming-next,
          .service-tile--incoming-prev {
            animation: sliderIncomingFade 0.54s ease forwards;
          }
          .service-tile--outgoing-next,
          .service-tile--outgoing-prev {
            animation: sliderOutgoingFade 0.45s ease forwards;
          }
          .gallery-split-wrapper {
            position: relative;
          }
          .gallery-visual-panel {
            transition: transform 0.5s ease;
          }
          .gallery-visual-panel img {
            transition: transform 0.5s ease;
          }
          .gallery-visual-panel:hover img {
            transform: translateX(4%) scale(1.02);
          }
          .side-preview-panel {
            transition: transform 0.35s ease, box-shadow 0.35s ease;
          }
          .side-preview-panel:hover {
            transform: translateY(-4px) scale(1.04);
            box-shadow: 0 30px 75px rgba(18, 60, 53, 0.25);
          }
          @keyframes sliderIncomingFade {
            0% {
              transform: translate3d(0, 6px, 0);
              opacity: 0;
              filter: blur(4px);
            }
            50% {
              opacity: 0.65;
            }
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 1;
              filter: blur(0px);
            }
          }
          @keyframes sliderOutgoingFade {
            0% {
              opacity: 1;
              filter: blur(0px);
            }
            100% {
              transform: translate3d(0, -6px, 0);
              opacity: 0;
              filter: blur(3px);
            }
          }
          .preview-panel {
            animation: previewFade 0.65s ease forwards;
            filter: blur(5px);
            will-change: opacity, transform;
          }
          .sliderArrow:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
          }
          .active-card-wrapper::before {
            content: "";
            position: absolute;
            inset: 8px;
            border-radius: 28px;
            background: radial-gradient(circle at 50% 25%, rgba(31, 182, 124, 0.35), rgba(31, 182, 124, 0));
            opacity: 0.5;
            pointer-events: none;
            z-index: 0;
            animation: activeGlow 7s ease-in-out infinite;
          }
          .active-card-wrapper > * {
            z-index: 1;
          }
          @keyframes previewFade {
            0% {
              opacity: 0;
              transform: translate3d(0, 12px, 0);
            }
            50% {
              opacity: 0.6;
              transform: translate3d(0, 6px, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          @keyframes activeGlow {
            0%, 100% {
              transform: scale(1);
              opacity: 0.45;
            }
            50% {
              transform: scale(1.08);
              opacity: 0.65;
            }
          }
          @keyframes sideGlow {
            0%,
            100% {
              filter: blur(6px) brightness(0.7);
            }
            50% {
              filter: blur(4px) brightness(0.85);
            }
          }
          @media (max-width: 768px) {
            .home-page {
              padding: 0 12px 60px !important;
            }
            .hero-section {
              padding: 80px 18px 60px !important;
            }
            .heroCtas,
            .hero-stats,
            .hero-info-card {
              margin: 0 auto !important;
            }
          .hero-stats {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
          }
          .services-section,
          .gallery-section,
          .cta-section,
          .section-bg {
            padding: 56px 16px !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-split-wrapper {
            flex-direction: column !important;
          }
          .gallery-copy-panel,
          .gallery-visual-panel {
            clip-path: none !important;
          }
        }
        `}</style>
      </main>
    </>
  );
}
