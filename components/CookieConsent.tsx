 "use client";

import React from "react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_COOKIE = "cookie-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 6 months

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false
};

function readConsentCookie(): CookiePreferences | null {
  if (typeof document === "undefined") {
    return null;
  }
  const raw = document.cookie.split("; ").find((row) => row.startsWith(`${CONSENT_COOKIE}=`));
  if (!raw) return null;
  try {
    const value = decodeURIComponent(raw.split("=")[1]);
    return JSON.parse(value) as CookiePreferences;
  } catch {
    return null;
  }
}

function writeConsentCookie(prefs: CookiePreferences) {
  const payload = encodeURIComponent(JSON.stringify(prefs));
  document.cookie = `${CONSENT_COOKIE}=${payload}; path=/; max-age=${COOKIE_MAX_AGE}`;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showPreferences, setShowPreferences] = React.useState(false);
  const [preferences, setPreferences] = React.useState<CookiePreferences>(defaultPreferences);
  const [storedPreferences, setStoredPreferences] = React.useState<CookiePreferences>(defaultPreferences);
  const descriptionId = React.useId();
  const legalId = React.useId();

  React.useEffect(() => {
    const existing = readConsentCookie();
    if (existing) {
      setPreferences(existing);
      setStoredPreferences(existing);
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = (prefs: CookiePreferences) => {
    setPreferences(prefs);
    setStoredPreferences(prefs);
    writeConsentCookie(prefs);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    handleAccept(preferences);
  };

  if (!isVisible) {
    return null;
  }

  const containerStyle: React.CSSProperties = {
    position: "fixed",
    left: "clamp(16px, 4vw, 60px)",
    bottom: "clamp(20px, 5vh, 80px)",
    width: "min(520px, calc(100% - clamp(32px, 10vw, 200px)))",
    zIndex: 9999,
    fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
    color: "#0d2d25"
  };

  const cardStyle: React.CSSProperties = {
    background: "linear-gradient(135deg, rgba(228, 251, 242, 0.95), rgba(244, 255, 251, 0.9))",
    borderRadius: "32px",
    padding: "28px 30px",
    boxShadow: "0 45px 120px rgba(13,36,30,0.25)",
    border: "1px solid rgba(14,89,70,0.12)",
    overflow: "hidden",
    position: "relative",
    backdropFilter: "blur(8px)",
    animation: "cookieDock 0.8s cubic-bezier(0.19, 1, 0.22, 1) both",
    pointerEvents: "auto"
  };

  const accentStyle: React.CSSProperties = {
    position: "absolute",
    inset: "0",
    borderRadius: "inherit",
    background: "linear-gradient(120deg, rgba(31,182,124,0.18), rgba(78,219,180,0.08))",
    zIndex: 0,
    pointerEvents: "none"
  };

  const pillButton: React.CSSProperties = {
    borderRadius: "999px",
    padding: "14px 28px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    fontSize: "15px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    outline: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    minWidth: "140px",
    justifyContent: "center"
  };

  const actionRowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center"
  };

  const toggleLabelStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 0"
  };

  const legalNoteStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "rgba(15, 51, 41, 0.7)",
    lineHeight: 1.5,
    marginBottom: "18px"
  };

  return (
    <>
      <div style={containerStyle}>
        <div
          style={cardStyle}
          className="cookie-banner"
          role="dialog"
          aria-live="polite"
          aria-modal="true"
          aria-label="Preferinte cookie"
          aria-describedby={`${descriptionId} ${legalId}`}
        >
          <div style={accentStyle} aria-hidden="true" />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{ margin: "0 0 6px", fontSize: "18px" }}>Preferinte cookie</h3>
            <p id={descriptionId} style={{ margin: "0 0 18px", color: "#4b5b54", lineHeight: 1.6 }}>
              Folosim cookie-uri necesare pentru functionarea site-ului si, optional, cookie-uri analitice si de marketing ce imbunatatesc experienta ta.
            </p>
            <p id={legalId} style={legalNoteStyle}>
              Respectam Regulamentul (UE) 2016/679 (GDPR). Poti retrage sau modifica oricand consimtamantul folosind butonul "Personalizeaza" sau din pagina{" "}
              <a href="/politica-cookie" style={{ color: "#0f7a57", fontWeight: 600 }}>
                Politica cookie DentNow
              </a>
              .
            </p>

            {showPreferences && (
              <div
                style={{
                  marginBottom: "18px",
                  padding: "18px",
                  borderRadius: "22px",
                  backgroundColor: "rgba(31,182,124,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  border: "1px solid rgba(31,182,124,0.25)"
                }}
              >
                <label style={toggleLabelStyle}>
                  <input type="checkbox" checked disabled />
                  <span>
                    <strong>Necesare</strong> - obligatorii pentru securitate, autentificare si transmiterea formularului.
                  </span>
                </label>
                <label style={toggleLabelStyle}>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(event) => setPreferences((prev) => ({ ...prev, analytics: event.target.checked }))}
                  />
                  <span>
                    <strong>Analitice</strong> - ne arata cum este folosit site-ul pentru a imbunatati continutul.
                  </span>
                </label>
                <label style={toggleLabelStyle}>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(event) => setPreferences((prev) => ({ ...prev, marketing: event.target.checked }))}
                  />
                  <span>
                    <strong>Marketing</strong> - permit personalizarea recomandarilor si a campaniilor DentNow.
                  </span>
                </label>
              </div>
            )}

            <div style={actionRowStyle}>
              <button
                type="button"
                onClick={() => handleAccept({ necessary: true, analytics: true, marketing: true })}
                style={{
                  ...pillButton,
                  background: "linear-gradient(120deg, #1fb67c, #8bf2c5)",
                  color: "#0f1f1b",
                  boxShadow: "0 20px 45px rgba(31,182,124,0.35)"
                }}
              >
                <span aria-hidden="true">{"\u2022"}</span>
                Accept
              </button>
              <button
                type="button"
                onClick={() => handleAccept({ ...defaultPreferences })}
                style={{
                  ...pillButton,
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(18,60,53,0.15)",
                  color: "#0f3329",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)"
                }}
              >
                <span aria-hidden="true">{"\u2022"}</span>
                Reject
              </button>
              <button
                type="button"
                onClick={() =>
                  setShowPreferences((prev) => {
                    const next = !prev;
                    if (next) {
                      setPreferences(storedPreferences);
                    }
                    return next;
                  })
                }
                style={{
                  ...pillButton,
                  background: "transparent",
                  color: "#1fb67c",
                  textDecoration: "underline",
                  paddingLeft: 0
                }}
              >
                <span aria-hidden="true">{"\u2022"}</span>
                {showPreferences ? "Inchide" : "Personalizeaza"}
              </button>
            </div>

            {showPreferences && (
              <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  style={{
                    ...pillButton,
                    background: "#0f3329",
                    color: "#f6fffb",
                    boxShadow: "0 18px 35px rgba(15,51,41,0.35)"
                  }}
                >
                  Salveaza preferintele
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPreferences(false);
                    setPreferences(storedPreferences);
                  }}
                  style={{
                    ...pillButton,
                    background: "rgba(240,244,242,0.8)",
                    border: "1px solid rgba(18,60,53,0.15)",
                    color: "#0f3329"
                  }}
                >
                  Renunta
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes cookieDock {
          0% {
            opacity: 0;
            transform: translate3d(-20px, 40px, 0) scale(0.96);
          }
          60% {
            opacity: 1;
            transform: translate3d(4px, -4px, 0) scale(1.01);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        .cookie-banner button:active {
          transform: scale(0.98);
        }
      `}</style>
    </>
  );
}
