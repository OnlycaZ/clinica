"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/lib/navigation";

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
    width: "100vw",
    zIndex: 105,
    background: "transparent",
    borderBottom: "none",
    transition: "background 0.4s ease, box-shadow 0.4s ease",
    padding: "8px 0",
    boxShadow: "none"
  } as React.CSSProperties,
  headerPinned: {
    background: "rgba(255,255,255,0.8)",
    boxShadow: "0 25px 60px rgba(18,60,53,0.18)",
    borderBottom: "1px solid rgba(18,60,53,0.12)"
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
  const [isPinned, setIsPinned] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const styles = React.useMemo(() => createHeaderStyles(palette), [palette]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsPinned(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      <header aria-label="Navigare principala">
        <nav
          style={{ ...styles.header, ...(isPinned ? styles.headerPinned : {}) }}
          className="fixed top-0 left-0 w-full z-50 site-nav"
        >
          <div style={styles.inner}>
            <Link href="/" style={styles.brandLink} aria-label="DentNow">
              <Image src="/cropped-CFT-1.png" alt="DentNow" width={140} height={40} priority />
            </Link>
            <nav style={styles.nav} aria-label="Navigare" className="site-nav">
              {navigation.map((item) => {
                const isActive = computeActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{ ...styles.navLink, ...(isActive ? styles.navLinkActive : {}) }}
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
        </nav>
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
          .site-nav a:hover {
            color: ${palette.teal};
          }
          @media (max-width: 768px) {
            nav.site-nav {
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
          .site-nav a:hover {
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.6);
          }
          `}</style>
    </>
  );
};

export default SiteHeader;
