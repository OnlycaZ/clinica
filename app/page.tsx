'use client';

import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import SiteHeader from "@/components/ui/SiteHeader";
import { megaMenus, navigation } from "@/data/navigation";
import { getSeoEntry, siteConfig } from "@/lib/utils/seo";
import { services } from "@/data/content";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { homePalette } from "@/lib/utils/theme";

const homeSeo = getSeoEntry("home");

const SiteFooter = dynamic(() => import("@/components/ui/SiteFooter"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        ...styles.footerPlaceholder,
        borderRadius: "28px",
        overflow: "hidden"
      }}
      className="skeleton"
      aria-hidden="true"
    />
  ),
});

const ClinicMap = dynamic(() => import("@/components/sections/ClinicMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full rounded-2xl skeleton" aria-hidden="true" />,
});

const palette = homePalette;

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
    background: "transparent",
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
    marginBottom: "32px",
    textAlign: "center",
    padding: "0 20px",
  },
  sliderHeaderLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.35em",
    fontSize: "11px",
    color: palette.teal,
    marginBottom: "18px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 20px",
    borderRadius: "999px",
    border: "1px solid rgba(31,182,124,0.18)",
    background: "rgba(255,255,255,0.85)",
    boxShadow: "0 12px 30px rgba(15,81,50,0.08)",
  },
  sliderHeaderTitle: {
    fontSize: "36px",
    lineHeight: 1.15,
    margin: "0 0 16px",
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

const slideTransitionSettings = {
  duration: 0.52,
  ease: [0.42, 0, 0.58, 1] as const,
};

const getSlideMotionProps = (role: SlideMotionRole, direction: "next" | "prev") => {
  if (role === "incoming") {
    return {
      initial: {
        x: direction === "next" ? SERVICE_SLIDE_OFFSET : -SERVICE_SLIDE_OFFSET,
        opacity: 0,
        filter: "blur(4px)",
      },
      animate: { x: 0, opacity: 1, filter: "blur(0px)" },
      transition: slideTransitionSettings,
    };
  }
  return {
    initial: { x: 0, opacity: 1 },
    animate: {
      x: direction === "next" ? -SERVICE_SLIDE_OFFSET : SERVICE_SLIDE_OFFSET,
      opacity: 0,
      filter: "blur(3px)",
    },
    transition: slideTransitionSettings,
  };
};

const PREVIEW_SLIDE_OFFSET = 70;

const previewTransition = {
  duration: 0.45,
  ease: [0.42, 0, 0.58, 1] as const,
};

const getPreviewMotionProps = (position: "prev" | "next") => {
  const offset = position === "prev" ? -PREVIEW_SLIDE_OFFSET : PREVIEW_SLIDE_OFFSET;
  return {
    initial: { x: offset, opacity: 0, filter: "blur(6px)" },
    animate: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: { x: offset, opacity: 0, filter: "blur(4px)" },
    transition: previewTransition,
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
  const leftService = services[prevIndex];
  const centerService = services[currentIndex];
  const rightService = services[nextIndex];
  const [carouselIndex, setCarouselIndex] = React.useState(0);
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

  const rotateCarousel = (direction: "prev" | "next") => {
    setCarouselIndex((value) => {
      const total = 3;
      if (direction === "next") {
        // La sageata din dreapta aducem cardul din dreapta in centru
        return (value + total - 1) % total;
      }
      // La sageata din stanga aducem cardul din stanga in centru
      return (value + 1) % total;
    });
  };

  const goPrev = () => {
    triggerArrow("prev");
    changeSlide("prev");
    rotateCarousel("prev");
  };

  const goNext = () => {
    triggerArrow("next");
    changeSlide("next");
    rotateCarousel("next");
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
              preload="metadata"
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
                  <div key={stat.label} style={styles.heroStatBlock} className="hero-stat-reveal">
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
          className="relative w-full px-4 lg:px-0 py-20 overflow-hidden"
        >
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0f5132]/5 rounded-full blur-3xl pointer-events-none hero-orb-right" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none hero-orb-left" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white text-[#0f5132] text-xs font-bold tracking-[0.2em] uppercase mb-5 border border-emerald-900/10 shadow-sm">
                Servicii complete
              </span>
              <h2
                id="servicii-title"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight"
              >
                Tratamente care îți redau{" "}
                <span className="text-[#0f5132] relative inline-block">
                  zâmbetul
                  <svg
                    className="absolute w-full h-2.5 -bottom-1 left-0 text-teal-500/30 -z-10"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 10"
                  >
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                De la estetica dentară până la reabilitări complexe, coordonăm fiecare specializare într-un
                singur loc pentru siguranța și confortul tău.
              </p>
            </div>

            <div className="perspective-container relative h-[620px] md:h-[580px] w-full max-w-6xl mx-auto flex items-center justify-center">
              <button
                type="button"
                onClick={goPrev}
                disabled={isTransitioning}
                aria-label="Vezi tratamentul anterior"
                className="absolute left-2 md:left-8 z-40 w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg text-slate-400 hover:text-[#0f5132] hover:scale-105 transition-all border border-slate-100 disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                <svg
                  className="w-7 h-7 transform group-hover:-translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 6L8 12L14 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="8"
                    y1="12"
                    x2="19"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={isTransitioning}
                aria-label="Vezi urmatorul tratament"
                className="absolute right-2 md:right-8 z-40 w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg text-slate-400 hover:text-[#0f5132] hover:scale-105 transition-all border border-slate-100 disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                <svg
                  className="w-7 h-7 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6L16 12L10 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="5"
                    y1="12"
                    x2="16"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Left card */}
              <div
                className={`card-3d absolute w-[340px] md:w-[380px] h-[480px] bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl group cursor-pointer ${
                  carouselIndex === 0
                    ? "card-center"
                    : carouselIndex === 1
                    ? "card-right"
                    : "card-left"
                }`}
              >
                <div className="h-[220px] relative overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-emerald-900/60 mix-blend-multiply z-10" />
                  <div className="absolute inset-0 bg-[url('/cropped-CFT-1.webp')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex flex-col h-[260px] relative">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                    Implantologie globală
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Intervenții confortabile cu planificare 3D și precizie maximă pentru rezultate imediate.
                    Tehnologie avansată pentru un zâmbet perfect.
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <span className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-teal-500 transition-colors">
                      Află mai multe
                      <span className="ml-1 text-base">↗</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Center card */}
              <div
                className={`card-3d absolute w-[360px] md:w-[440px] h-[540px] bg-gradient-to-br from-[#0f5132] to-[#052e16] rounded-3xl overflow-hidden text-white border-2 border-white/20 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.35)] ${
                  carouselIndex === 1
                    ? "card-center"
                    : carouselIndex === 2
                    ? "card-right"
                    : "card-left"
                }`}
              >
                <div className="relative h-full flex flex-col">
                  <div className="absolute inset-0 overflow-hidden opacity-70 mix-blend-overlay">
                    <NextImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7FHQ3_E5Is8Uuv5ZNme4FojBHeFSWR3uPLxUULYAkZo6w9yXei2lCsrXzfbZwu-WCsNEYA3yximQwWjt11eJ4XmWVP9hjwSfWZWSW3WVKfNfGWNW2KjuIwZS2_j_UJF1lv2ly2LclT_SRPOtIIMaYAY2BusiSbBo3Tm6L5ghQ-aCeV7i9W_Z1XgQi1uky0X0cxEpk6I4AQkHw7USliwPpv6c-tJAWSuYtLnpZLywS3n75ZMerS8NEKhMrzj5DE-Wf18pc65yXH3M7"
                      alt={centerService?.title ?? "Reabilitare complexa"}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 440px, 100vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f5132] via-[#0f5132]/80 to-transparent z-0" />
                  <div className="relative z-10 flex flex-col h-full p-10">
                    <div className="flex justify-between items-start mb-auto">
                      <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10 shadow-sm">
                        Recomandat
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <span>★</span>
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        Reabilitare complexă
                      </h3>
                      <p className="text-white/90 text-base leading-relaxed mb-8 font-light border-l-2 border-teal-400 pl-4">
                        Tratamente funcționale pentru ATM, ortodonție invizibilă și reabilitări totale pentru o
                        sănătate perfectă.
                      </p>
                      <div className="flex items-center gap-4">
                        <button className="flex-1 bg-white text-[#0f5132] font-bold py-4 px-6 rounded-2xl hover:bg-teal-500 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2">
                          Vezi detalii
                          <span className="text-lg">↗</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right card */}
              <div
                className={`card-3d absolute w-[340px] md:w-[380px] h-[480px] bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl group cursor-pointer ${
                  carouselIndex === 2
                    ? "card-center"
                    : carouselIndex === 0
                    ? "card-right"
                    : "card-left"
                }`}
              >
                <div className="h-[220px] relative overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-teal-500/10 mix-blend-multiply transition-opacity group-hover:opacity-0 z-10" />
                  <NextImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Q5-THPuBWbklEEwWD-D8LQ8l31e6qK5GHPbkbRNB1scbrqJx6apb-1kasI3dnyHSHZTiCemkNrOLziSeqMgYNOtKUELRfbcu9d4wbJPDEg5VipiOwdozCniYiaaELZ67Zlysm6yQfQPTyF0oDZgjOXzrZdDAaGe2uaaMhsMku8er82PgnmFHGDmiBbEzC6R48THm1B7aWxFE38oe9w6kjyb8JLlmjpxjfhDbc5aSzCA1YaRQQhT0Rfn6Bqblc0-EeTjuMZtLqPuR"
                    alt="Estetica dentara"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(min-width: 1024px) 380px, 100vw"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-600 uppercase tracking-wide">
                    Estetică
                  </div>
                </div>
                <div className="p-8 flex flex-col h-[260px] relative">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                    Estetică dentară integrată
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Design digital al zâmbetului, fațete dentare și albire ghidată clinic pentru o estetică
                    impecabilă.
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <span className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-[#0f5132] transition-colors">
                      Află mai multe
                      <span className="ml-1 text-base">↗</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReviewsSection />

        <section
          id="programare"
          aria-labelledby="programare-title"
          className="relative w-full min-h-[520px] md:min-h-[620px] flex items-center justify-center lg:justify-start overflow-hidden"
        >
          {/* Map background */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full opacity-95">
              <ClinicMap />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/75" />
          </div>

          {/* Card */}
          <div className="container mx-auto px-4 relative z-10 pointer-events-none h-full flex items-center">
            <div className="pointer-events-auto bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 md:p-10 border-t-4"
              style={{ borderTopColor: palette.teal }}>
              <h2
                id="programare-title"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#123c35] mb-5 leading-tight"
              >
                Făuritorii de bucurie din clinica DentNow
              </h2>
              <p className="text-sm md:text-base text-[#6a7f74] mb-8 leading-relaxed">
                Făuritorii de bucurie te așteaptă la DentNow, în București. Bucură-te de servicii stomatologice
                la aceleași standarde, într-o locație ușor de ajuns pentru tine și familia ta.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center text-[#1fb67c]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
                    </svg>
                  </span>
                  <a
                    href={`tel:${sanitizedPhone}`}
                    className="text-[#1fb67c] font-semibold text-sm md:text-base hover:underline"
                  >
                    {siteConfig.contactPhone}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center text-[#1fb67c]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 119 9a2.5 2.5 0 013 2.5z" />
                    </svg>
                  </span>
                  <span className="text-sm md:text-base text-[#0f1f1b]">
                    Str. Louis Pasteur, nr. 1A, București
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center text-[#1fb67c]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 119 9a2.5 2.5 0 013 2.5z" />
                    </svg>
                  </span>
                  <span className="text-sm md:text-base text-[#0f1f1b]">
                    Str. Ghețarilor, nr. 15, București
                  </span>
                </div>
              </div>

              <a
                href={`tel:${sanitizedPhone}`}
                className="inline-flex items-center justify-center bg-[#1fb67c] hover:bg-[#159764] text-[#0f1f1b] font-semibold py-3 px-8 rounded-md text-sm md:text-base transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Vreau o programare
                <span className="ml-2 text-xs">➜</span>
              </a>
            </div>
          </div>
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
          .hero-section::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.2), transparent 55%),
              radial-gradient(circle at 100% 100%, rgba(15, 81, 50, 0.35), transparent 60%);
            opacity: 0;
            pointer-events: none;
            animation: heroGlow 14s ease-in-out infinite;
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
          .hero-stat-reveal {
            opacity: 0;
            transform: translateY(12px);
            animation: statReveal 0.85s ease forwards;
          }
          .hero-stat-reveal:nth-child(2) {
            animation-delay: 0.06s;
          }
          .hero-stat-reveal:nth-child(3) {
            animation-delay: 0.12s;
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
          @keyframes statReveal {
            0% {
              opacity: 0;
              transform: translate3d(0, 12px, 0);
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
          @keyframes heroGlow {
            0%,
            100% {
              opacity: 0;
              transform: scale(1);
            }
            30% {
              opacity: 0.9;
              transform: scale(1.02);
            }
            60% {
              opacity: 0.4;
              transform: scale(1.05);
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
