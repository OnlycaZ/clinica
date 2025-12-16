"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/data/navigation";

type Palette = {
  navy: string;
  night: string;
  teal: string;
  sand: string;
  slate: string;
  border: string;
  light: string;
};

interface SiteHeaderProps {
  palette: Palette;
  navigation: NavigationItem[];
  megaMenus?: unknown;
}

const createHeaderStyles = (palette: Palette) => ({
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 105,
    background: "transparent"
  } as React.CSSProperties,
  inner: {
    width: "100%",
    margin: 0,
    padding: "10px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
    height: "72px"
  } as React.CSSProperties,
  brandLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none"
  } as React.CSSProperties,
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "18px",
    flex: "1 1 auto",
    fontSize: "14px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginLeft: "auto"
  } as React.CSSProperties,
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 600,
    padding: "4px 8px",
    transition: "color 0.2s ease, transform 0.2s ease",
    fontFamily: "var(--font-montserrat), var(--font-space-grotesk), var(--font-geist-sans), system-ui, sans-serif",
    letterSpacing: "0.18em"
  } as React.CSSProperties,
  navLinkPinned: {
    color: palette.navy
  } as React.CSSProperties,
  navLinkActive: {
    color: "#f0f9ff"
  } as React.CSSProperties,
  ctaButton: {
    marginLeft: "12px",
    padding: "14px 42px",
    borderRadius: "999px",
    background: "linear-gradient(120deg, #ffffff, #f8fbff)",
    color: palette.night,
    fontFamily: "var(--font-space-grotesk), var(--font-geist-sans), system-ui, sans-serif",
    fontWeight: 700,
    textDecoration: "none",
    fontSize: "16px",
    letterSpacing: "0.04em",
    boxShadow: "0 20px 40px rgba(255,255,255,0.9), 0 8px 20px rgba(31,182,124,0.35)"
  } as React.CSSProperties,
  mobileToggle: {
    background: "none",
    border: "none",
    padding: "12px",
    cursor: "pointer",
    fontSize: "24px"
  } as React.CSSProperties,
  mobileMenu: {
    position: "fixed",
    inset: 0,
    background: "rgba(4,23,20,0.85)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "120px 32px 32px",
    gap: "24px",
    transform: "translateY(-100%)",
    opacity: 0,
    pointerEvents: "none",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    zIndex: 110
  } as React.CSSProperties,
  mobileMenuVisible: {
    transform: "translateY(0)",
    opacity: 1,
    pointerEvents: "auto"
  } as React.CSSProperties,
  mobileMenuLink: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 600,
    fontSize: "20px",
    letterSpacing: "0.08em"
  } as React.CSSProperties,
  mobileMenuClose: {
    position: "absolute",
    top: "18px",
    right: "24px",
    background: "none",
    border: "none",
    fontSize: "32px",
    color: "#fff",
    cursor: "pointer"
  } as React.CSSProperties
});

const SiteHeader: React.FC<SiteHeaderProps> = ({ palette, navigation }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const styles = React.useMemo(() => createHeaderStyles(palette), [palette]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const THRESHOLD = 24;
    let rafId: number | null = null;
    const evaluate = () => {
      rafId = null;
      const next = window.scrollY > THRESHOLD;
      setIsScrolled((prev) => (prev === next ? prev : next));
    };
    const handler = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(evaluate);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const computeActive = (href: string) => {
    if (!href) {
      return false;
    }
    const [path] = href.split("#");
    const normalizedPath = path || "/";
    return pathname === normalizedPath;
  };

  return (
    <>
      <header
        aria-label="Navigare principala"
        style={styles.header}
        className={`site-header${isScrolled ? " scrolled" : ""}`}
      >
        <div style={styles.inner} className="site-header-inner">
            <Link href="/" style={styles.brandLink} aria-label="DentNow">
              <Image src="/cropped-CFT-1.webp" alt="DentNow" width={140} height={40} priority />
            </Link>
            <nav style={styles.nav} aria-label="Navigare" className="site-navigation">
              {navigation.map((item) => {
                const isActive = computeActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      ...styles.navLink,
                      ...(isScrolled ? styles.navLinkPinned : {}),
                      ...(isActive ? styles.navLinkActive : {})
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginLeft: "auto" }}>
              <Link href="/rezerva-vizita" style={styles.ctaButton} className="cta-pill">
                Rezerva vizita
              </Link>
              <button
                type="button"
                aria-label="Deschide meniul mobil"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((prev) => !prev)}
                style={styles.mobileToggle}
                className="mobile-toggle"
              >
                <span aria-hidden="true">≡</span>
              </button>
            </div>
          </div>
        <div
          style={{ ...styles.mobileMenu, ...(mobileOpen ? styles.mobileMenuVisible : {}) }}
          className="mobile-menu-panel"
        >
          <button
            type="button"
            aria-label="Inchide meniul"
            style={styles.mobileMenuClose}
            onClick={() => setMobileOpen(false)}
          >
            &times;
          </button>
          {navigation.map((item) => (
            <Link
              key={`mobile-${item.label}`}
              href={item.href}
              style={styles.mobileMenuLink}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/rezerva-vizita"
            style={{ ...styles.mobileMenuLink, marginTop: "32px" }}
            onClick={() => setMobileOpen(false)}
          >
            Rezerva vizita
          </Link>
        </div>
      </header>
        <style jsx>{`
          .site-header {
            width: 100%;
            z-index: 105;
            background: transparent;
            border-bottom: none;
            box-shadow: none;
            padding: 18px 0;
            transition:
              background 0.3s ease,
              box-shadow 0.3s ease,
              padding 0.3s ease,
              backdrop-filter 0.3s ease,
              transform 0.3s ease;
          }
          .site-header.scrolled {
            background: rgba(255, 255, 255, 0.92);
            border-bottom: 1px solid rgba(18, 60, 53, 0.12);
            box-shadow: 0 20px 50px rgba(18, 60, 53, 0.15);
            backdrop-filter: blur(14px);
            padding: 10px 0;
          }
          .site-header-inner {
            padding: 10px 32px;
            transition: padding 0.3s ease, gap 0.3s ease, transform 0.4s ease;
          }
          .site-header.scrolled .site-header-inner {
            gap: 12px;
            transform: translateY(-1px);
          }
          .site-navigation {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 18px;
            flex: 1 1 auto;
            font-size: 14px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-left: auto;
          }
          .site-navigation a:hover {
            color: ${palette.teal};
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.6);
          }
          .mobile-toggle {
            display: none;
          }
          @media (max-width: 768px) {
            .site-navigation {
              display: none;
            }
            .mobile-toggle {
              display: inline-flex;
            }
          }
          .cta-pill {
            box-shadow: 0 25px 60px rgba(31, 182, 124, 0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .cta-pill:hover {
            transform: translateY(-3px);
            box-shadow: 0 30px 70px rgba(31, 182, 124, 0.55);
          }
        `}</style>
    </>
  );
};

export default SiteHeader;
