"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/seo";

type Palette = {
  navy: string;
  night: string;
  teal: string;
  sand: string;
  slate: string;
  border: string;
  light: string;
};

type MegaMenuLink = {
  label: string;
  href: string;
};

type MegaMenuSection = {
  title: string;
  links: MegaMenuLink[];
};

type MegaMenuConfig = Record<string, MegaMenuSection[]>;

type NavigationItem = {
  label: string;
  href: string;
  menuKey?: string;
};

interface SiteHeaderProps {
  palette: Palette;
  navigation: NavigationItem[];
  megaMenus?: MegaMenuConfig;
}

const createHeaderStyles = (palette: Palette) => {
  const mutedInk = "rgba(18,75,60,0.78)";
  return {
    header: {
      position: "sticky",
      top: 0,
      width: "100%",
      zIndex: 90,
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      background: "rgba(255, 255, 255, 0.88)",
      borderBottom: "1px solid rgba(31,182,124,0.25)",
      transition: "transform 0.35s ease, opacity 0.35s ease",
      boxShadow: "0 15px 30px rgba(18,75,60,0.08)",
      isolation: "isolate"
    } as React.CSSProperties,
    headerPinned: {
      boxShadow: "0 30px 80px rgba(18,75,60,0.2)",
      borderBottom: "1px solid rgba(31,182,124,0.4)",
      background: "rgba(255,255,255,0.95)"
    } as React.CSSProperties,
    headerHalo: {
      position: "absolute",
      inset: "auto 10% -32px",
      height: "64px",
      borderRadius: "50%",
      filter: "blur(30px)",
      background: "radial-gradient(circle, rgba(31,182,124,0.35), transparent 65%)",
      zIndex: -1,
      pointerEvents: "none"
    } as React.CSSProperties,
    inner: {
      maxWidth: "1320px",
      margin: "0 auto",
      padding: "8px 28px 18px",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      position: "relative"
    } as React.CSSProperties,
    utilityBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "16px",
      fontSize: "11px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: mutedInk,
      flexWrap: "wrap",
      padding: "6px 16px",
      borderRadius: "999px",
      border: "1px solid rgba(31,182,124,0.12)",
      backgroundColor: "rgba(255,255,255,0.6)"
    } as React.CSSProperties,
    utilityMeta: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      flexWrap: "wrap"
    } as React.CSSProperties,
    utilityBadge: {
      padding: "4px 14px",
      borderRadius: "999px",
      background: "rgba(31,182,124,0.12)",
      color: palette.navy,
      fontWeight: 600,
      letterSpacing: "0.18em",
      border: "1px solid rgba(31,182,124,0.3)",
      boxShadow: "0 10px 25px rgba(18,75,60,0.12)"
    } as React.CSSProperties,
    utilityActions: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      flexWrap: "wrap"
    } as React.CSSProperties,
    utilityLink: {
      color: palette.navy,
      textDecoration: "none",
      fontWeight: 700,
      padding: "4px 8px",
      borderRadius: "8px",
      background: "rgba(31,182,124,0.1)",
      border: "1px solid rgba(31,182,124,0.2)"
    } as React.CSSProperties,
    utilityDivider: {
      opacity: 0.5
    } as React.CSSProperties,
    navRow: {
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      gap: "16px",
      borderRadius: "20px",
      border: "1px solid rgba(31,182,124,0.2)",
      padding: "20px 20px 18px",
      background: "rgba(255,255,255,0.85)",
      boxShadow: "0 20px 45px rgba(18,75,60,0.12)",
      minHeight: "110px",
      marginTop: "12px"
    } as React.CSSProperties,
    brandCluster: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      flexWrap: "nowrap",
      flex: "0 0 auto"
    } as React.CSSProperties,
    brand: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      textDecoration: "none"
    } as React.CSSProperties,
    brandLogo: {
      height: "72px",
      width: "180px",
      maxWidth: "100%",
      display: "block"
    } as React.CSSProperties,
    nav: {
      display: "flex",
      gap: "12px",
      flex: "1 1 auto",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      minHeight: "100%",
      paddingTop: "14px"
    } as React.CSSProperties,
    navItem: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "6px",
      paddingBottom: "4px",
      height: "100%"
    } as React.CSSProperties,
    navItemActive: {
      color: palette.teal
    } as React.CSSProperties,
    navLink: {
      textDecoration: "none",
      color: palette.navy,
      fontWeight: 600,
      letterSpacing: "0.08em",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "12px 24px",
      borderRadius: "999px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "rgba(18,75,60,0.12)",
      background: "rgba(255,255,255,0.92)",
      fontSize: "15px",
      transition: "transform 0.25s ease, opacity 0.25s ease",
      minHeight: "48px"
    } as React.CSSProperties,
    navLinkActive: {
      color: palette.teal,
      borderColor: "rgba(31,182,124,0.3)",
      background: "rgba(31,182,124,0.12)",
      boxShadow: "0 12px 30px rgba(18,75,60,0.15)"
    } as React.CSSProperties,
    navLinkWithMenu: {
      color: palette.light,
      transition: "transform 0.35s ease, opacity 0.35s ease",
      animation: "headerNavPulse 0.45s ease"
    } as React.CSSProperties,
    navArrow: {
      width: "12px",
      height: "12px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.7,
      color: palette.teal
    } as React.CSSProperties,
    navIndicator: {
      width: "36px",
      height: "3px",
      borderRadius: "999px",
      background: `linear-gradient(90deg, transparent, ${palette.teal}, transparent)`,
      transition: "opacity 0.25s ease, transform 0.25s ease",
      opacity: 0,
      transform: "translateY(6px)"
    } as React.CSSProperties,
    megaMenu: {
      position: "absolute",
      top: "32px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "linear-gradient(120deg, rgba(255,255,255,0.98), rgba(233,247,238,0.92))",
      color: palette.navy,
      borderRadius: "26px",
      padding: "32px 40px",
      minWidth: "520px",
      boxShadow: "0 35px 70px rgba(18,75,60,0.18)",
      border: "1px solid rgba(31,182,124,0.15)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "24px",
      zIndex: 90
    } as React.CSSProperties,
    megaMenuActive: {
      animation: "headerMenuFade 0.35s ease",
      animationFillMode: "forwards"
    } as React.CSSProperties,
    megaColumn: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    } as React.CSSProperties,
    megaHeading: {
      margin: 0,
      fontSize: "12px",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: palette.slate
    } as React.CSSProperties,
    megaLink: {
      textDecoration: "none",
      color: palette.navy,
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: "6px"
    } as React.CSSProperties,
    megaLinkIcon: {
      fontSize: "12px",
      color: palette.teal
    } as React.CSSProperties,
    actions: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingLeft: "24px"
    } as React.CSSProperties,
    primaryButton: {
      background: `linear-gradient(120deg, ${palette.teal}, #8bf2c5)`,
      color: palette.night,
      padding: "14px 30px",
      borderRadius: "999px",
      fontWeight: 700,
      cursor: "pointer",
      letterSpacing: "0.08em",
      boxShadow: "0 18px 35px rgba(31,182,124,0.35)",
      border: "1px solid rgba(31,182,124,0.3)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "54px",
      minWidth: "180px"
    } as React.CSSProperties,
    secondaryButton: {
      border: `1px solid rgba(18,75,60,0.18)`,
      background: "rgba(255,255,255,0.6)",
      color: palette.navy,
      padding: "12px 18px",
      borderRadius: "999px",
      fontWeight: 600,
      cursor: "pointer",
      letterSpacing: "0.08em",
      backdropFilter: "blur(4px)"
    } as React.CSSProperties,
  };
};

const SiteHeader: React.FC<SiteHeaderProps> = ({ palette, navigation, megaMenus }) => {
  const pathname = usePathname();
  const [activeMenuState, setActiveMenuState] = React.useState<string | null>(null);
  const [isPinned, setIsPinned] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isDesktopWidth, setIsDesktopWidth] = React.useState(() =>
    typeof window === "undefined" ? true : window.matchMedia("(min-width: 769px)").matches
  );
  const styles = React.useMemo(() => createHeaderStyles(palette), [palette]);
  const [currentHash, setCurrentHash] = React.useState<string>("#hero");
  const [, startMenuTransition] = React.useTransition();
  const activeMenu = activeMenuState;

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const target = document.body;
    if (mobileOpen) {
      target.classList.add("nav-open");
    } else {
      target.classList.remove("nav-open");
    }
    return () => target.classList.remove("nav-open");
  }, [mobileOpen]);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const mq = window.matchMedia("(min-width: 769px)");
    const updateDesktop = () => {
      const matches = mq.matches;
      setIsDesktopWidth(matches);
      if (matches) {
        setMobileOpen(false);
      }
    };
    updateDesktop();
    mq.addEventListener("change", updateDesktop);
    return () => mq.removeEventListener("change", updateDesktop);
  }, []);

  const updateActiveMenu = React.useCallback(
    (value: string | null | ((prev: string | null) => string | null)) => {
      startMenuTransition(() => {
        setActiveMenuState((prev) => (typeof value === "function" ? value(prev) : value));
      });
    },
    []
  );

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const handleScroll = () => {
      setIsPinned(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "#hero");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (pathname !== "/") {
      setCurrentHash("");
      return;
    }
    const nextHash = window.location.hash || "#hero";
    setCurrentHash(nextHash);
  }, [pathname]);

  const resolvedMegaMenus = megaMenus ?? {};

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, menuKey?: string, hasMenu?: boolean) => {
    if (!hasMenu) {
      return;
    }
    event.preventDefault();
    updateActiveMenu((value) => (value === menuKey ? null : menuKey ?? null));
  };

  const computeActive = (href: string) => {
    if (!href) {
      return false;
    }
    if (href.startsWith("#")) {
      const effectiveHash = currentHash || "#hero";
      return pathname === "/" && effectiveHash === href;
    }
    const [segment, hashPart] = href.split("#");
    const normalizedPath = segment || "/";
    const normalizedHash = hashPart ? `#${hashPart}` : null;
    if (normalizedPath === "/") {
      if (normalizedHash) {
        const effectiveHash = currentHash || "#hero";
        return pathname === "/" && effectiveHash === normalizedHash;
      }
      return pathname === "/";
    }
    return pathname.startsWith(normalizedPath);
  };

  return (
    <>
      <nav className="mobile-trident-nav" aria-label="Navigare mobilă">
        <div className="mobile-trident-logo">
          <Image src="/cropped-CFT-1.png" alt="DentNow" width={120} height={32} priority />
        </div>
        <div className="mobile-trident-actions">
          <button type="button" aria-label="Schimbă limba în engleză" className="mobile-trident-icon">
            🇬🇧
          </button>
          <a aria-label="Sună-ne" href={`tel:${siteConfig.contactPhone.replace(/ /g, "")}`} className="mobile-trident-icon">
            📞
          </a>
          <button type="button" aria-label="Deschide meniul" className="mobile-trident-icon" onClick={() => setMobileOpen((prev) => !prev)}>
            ☰
          </button>
        </div>
      </nav>
      <header className="site-header" style={{ ...styles.header, ...(isPinned ? styles.headerPinned : {}) }}>
        <div style={styles.inner}>
        <div style={styles.headerHalo} aria-hidden="true" />
        <div style={styles.utilityBar} className="utility-bar">
          <div style={styles.utilityMeta}>
            <span style={styles.utilityBadge}>DentNow Concierge</span>
            <span>Program extins 08:00 - 21:00</span>
          </div>
          <div style={styles.utilityActions}>
            <a href={`tel:${siteConfig.contactPhone.replace(/ /g, "")}`} style={styles.utilityLink}>
              {siteConfig.contactPhone}
            </a>
            <span style={styles.utilityDivider}>/</span>
            <a href={`mailto:${siteConfig.contactEmail}`} style={styles.utilityLink}>
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>

        <div className="nav-row" style={styles.navRow}>
          <div style={styles.brandCluster}>
            <Link href="/" style={styles.brand} aria-label="DentNow">
              <Image
                src="/cropped-CFT-1.png"
                alt="DentNow"
                width={180}
                height={72}
                priority
                style={styles.brandLogo}
              />
            </Link>
          </div>

          <nav className="main-nav" style={styles.nav} aria-label="Navigare principala">
            {navigation.map((item) => {
              const menuItems = item.menuKey ? resolvedMegaMenus[item.menuKey] : undefined;
              const isActive = computeActive(item.href);
              const isMenuExpanded = activeMenu === item.menuKey;
              return (
                <div
                  key={item.label}
                  style={{ ...styles.navItem, ...(isActive ? styles.navItemActive : {}) }}
                  onMouseEnter={() => menuItems && updateActiveMenu(item.menuKey!)}
                  onMouseLeave={() => updateActiveMenu((value) => (value === item.menuKey ? null : value))}
                >
                  <Link
                    href={item.href}
                    style={{
                      ...styles.navLink,
                      ...(isActive ? styles.navLinkActive : {}),
                      ...(menuItems && isMenuExpanded ? styles.navLinkWithMenu : {})
                    }}
                    aria-haspopup={menuItems ? "true" : undefined}
                    aria-expanded={menuItems ? (isMenuExpanded ? "true" : "false") : undefined}
                    onClick={(event) => handleNavLinkClick(event, item.menuKey, Boolean(menuItems))}
                    onFocus={() => menuItems && updateActiveMenu(item.menuKey!)}
                    onBlur={() => updateActiveMenu((value) => (value === item.menuKey ? null : value))}
                  >
                    {item.label}
                    {menuItems && (
                      <span style={styles.navArrow} aria-hidden="true">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M1 1.25L5 4.75L9 1.25" />
                        </svg>
                      </span>
                    )}
                  </Link>
                  <span
                    style={{
                      ...styles.navIndicator,
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(6px)"
                    }}
                    aria-hidden="true"
                  />
                {menuItems && isMenuExpanded && (
                  <div style={{ ...styles.megaMenu, ...styles.megaMenuActive }}>
                      {menuItems.map((section) => (
                        <div key={section.title} style={styles.megaColumn}>
                          <p style={styles.megaHeading}>
                            {section.title}
                          </p>
                          {section.links.map((link, index) => (
                            <Link
                              key={`${section.title}-${link.href}-${index}`}
                              href={link.href}
                              style={styles.megaLink}
                            >
                              {link.label}
                              <span style={styles.megaLinkIcon} aria-hidden="true">
                                &gt;
                              </span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="actions" style={styles.actions}>
            <div className="desktop-actions">
              <Link href="/rezerva-vizita" style={styles.primaryButton}>
                Rezerva vizita
              </Link>
            </div>
            <div className="mobile-actions">
              <a
                href={`tel:${siteConfig.contactPhone.replace(/ /g, "")}`}
                className="mobile-phone"
                aria-label="Sună-ne"
              >
                <span aria-hidden="true">&#128222;</span>
                <span className="sr-only">Sună-ne</span>
              </a>
              <button
                type="button"
                className="nav-toggle"
                aria-label="Deschide meniul mobil"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                <span className="sr-only">Deschide meniul mobil</span>
                <span className="nav-toggle__bar" aria-hidden="true" />
                <span className="nav-toggle__bar" aria-hidden="true" />
                <span className="nav-toggle__bar" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className={`mobile-menu${mobileOpen ? " open" : ""}`} aria-hidden={!mobileOpen}>
          <div className="mobile-menu__panel">
            <button
              type="button"
              className="mobile-menu-close"
              aria-label="Închide meniul"
              onClick={() => setMobileOpen(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="mobile-menu__search">
              <label className="sr-only" htmlFor="search-navigation">
                Caută în meniu
              </label>
              <input
                id="search-navigation"
                type="search"
                placeholder="Ce vrei să cauți?"
                className="mobile-menu__search-input"
              />
              <span aria-hidden="true" className="mobile-menu__search-icon">
                🔍
              </span>
            </div>
            <div className="mobile-menu__links">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="mobile-menu__link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true" className="mobile-menu__link-arrow">
                    &#9656;
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/rezerva-vizita"
              className="mobile-menu__cta"
              onClick={() => setMobileOpen(false)}
            >
              Rezerva vizita
            </Link>
          </div>
        </div>
      </div>
      </header>
            <style jsx global>{`
        @keyframes headerMenuFade {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes headerNavPulse {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          60% {
            transform: translateY(-2px);
            opacity: 0.95;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        body.nav-open {
          overflow: hidden;
          touch-action: none;
        }

        .desktop-actions {
          display: flex;
        }

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 12px;
        }

        .nav-toggle {
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 8px;
          display: none;
          align-items: center;
          justify-content: center;
        }

        .nav-toggle__bar {
          width: 22px;
          height: 2px;
          background: ${palette.navy};
          border-radius: 1px;
          display: block;
          margin: 3px 0;
        }

        .mobile-phone {
          display: inline-flex;
          align-items: center;
          font-size: 20px;
          color: ${palette.teal};
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
          border: 0;
        }

        .mobile-menu {
          display: none;
        }

        .mobile-menu__search {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 14px;
          padding: 12px 16px;
          gap: 8px;
          border: 1px solid rgba(11, 42, 61, 0.08);
          box-shadow: 0 8px 18px rgba(11, 42, 61, 0.08);
        }

        .mobile-menu__search-input {
          flex: 1;
          border: none;
          font-size: 15px;
          font-weight: 500;
          background: transparent;
        }

        .mobile-menu__search-input:focus {
          outline: none;
        }

        .mobile-menu__search-icon {
          font-size: 18px;
        }

        .mobile-menu__links {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-menu__link {
          font-size: 20px;
          font-weight: 600;
          color: ${palette.navy};
          text-decoration: none;
          padding: 16px 18px;
          border-radius: 12px;
          background: ${palette.light};
          box-shadow: inset 0 -1px 0 0 rgba(11, 42, 61, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .mobile-menu__link:hover {
          transform: translateX(4px);
          box-shadow: inset 0 -1px 0 0 rgba(11, 42, 61, 0.15);
        }

        .mobile-menu__link-arrow {
          font-size: 22px;
          color: rgba(11, 42, 61, 0.5);
        }

        .mobile-menu__cta {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 20px;
          border-radius: 999px;
          background: ${palette.teal};
          color: ${palette.light};
          font-weight: 700;
          letter-spacing: 0.08em;
          text-decoration: none;
          margin-top: 12px;
          box-shadow: 0 15px 35px rgba(0, 194, 199, 0.35);
        }

        .mobile-menu-close {
          position: absolute;
          top: 18px;
          right: 18px;
          border: none;
          background: transparent;
          font-size: 30px;
          line-height: 1;
          cursor: pointer;
          color: ${palette.navy};
        }

        @media (max-width: 768px) {
          .nav-row {
            grid-template-columns: auto 1fr auto;
          }

          .main-nav {
            display: none !important;
          }

          .desktop-actions {
            display: none;
          }

          .mobile-actions {
            display: inline-flex;
          }

          .nav-toggle {
            display: inline-flex;
            width: 48px;
            height: 48px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(11, 42, 61, 0.12);
            box-shadow: 0 8px 20px rgba(11, 42, 61, 0.1);
          }

          .mobile-menu {
            display: flex;
            position: fixed;
            inset: 0;
            z-index: 60;
            background: rgba(11, 42, 61, 0.02);
            padding: 0;
            justify-content: center;
            align-items: stretch;
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.25s ease, visibility 0.25s ease;
          }

          .mobile-menu.open {
            visibility: visible;
            opacity: 1;
            pointer-events: auto;
          }

          .mobile-menu__panel {
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;
            background: ${palette.light};
            padding: 26px 24px 24px;
            gap: 28px;
            min-height: 100vh;
            overflow-y: auto;
          }

        .mobile-menu__links {
          margin-top: 8px;
        }
      }

      .utility-bar {
        display: flex;
      }

      @media (max-width: 768px) {
        .utility-bar {
          display: none !important;
        }
      }

        .mobile-trident-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: none;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          z-index: 95;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        }

        .mobile-trident-logo img {
          height: 36px;
          width: auto;
          display: block;
        }

        .mobile-trident-actions {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .mobile-trident-icon {
          font-size: 22px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px;
          line-height: 1;
        }

        .mobile-trident-icon:focus-visible {
          outline: 2px solid rgba(31, 182, 124, 0.6);
          outline-offset: 2px;
        }

        @media (min-width: 769px) {
          .mobile-trident-nav {
            display: none;
          }
          .site-header {
            display: flex !important;
          }
          .hero-section {
            margin-top: 30px !important;
          }
        }

        @media (max-width: 768px) {
          .mobile-trident-nav {
            display: flex;
          }
          .site-header {
            display: none;
          }
          .hero-section {
            margin-top: 70px !important;
          }
        }
      `}</style>

    </>
  );
};

export default SiteHeader;
