import NextImage from "next/image";
import React from "react";
import styles from "./GallerySection.module.css";

const featureCards = [
  {
    title: "Sterilizare trasabila",
    detail:
      "Circuit inchis cu etichetare QR pentru fiecare instrument, asigurand igiena maxima si siguranta pacientului.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAl6CZdA7KS4VSF8x8GZ0tejUi285u-kshRe8iEhCsLCs7Sme1KOKh-fi2wEExRgDXPdzz0Fi6py0v13h1B1oIgUjsWg5zx8Cwwmz1DAko_egJKXHwGRcthyNlT0TomXspd-L8gD6a-fAHu3SH849XAwYgEmqhfYULrtWho03-BiSGz7p1a4JC0gGeTI435EkLhRCNQps2bj0Vib6a9xP9HHtVbPqtvVrhz3zfsEjw1mypvwAIZvB2Gxb-TkjyJ5heSGzQax9Y7pBbU",
    offset: false
  },
  {
    title: "Radiologie 3D",
    detail:
      "CBCT, panorame si bitewing efectuate direct in clinica, cu rapoarte detaliate in 15 minute.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXchXP3Uj3a952nujAzhm6X4tnympuvFS7Trk164wQ0tYWshs3C62D6tkil-Vt4V49AZLlG4mISusYYaZQzsYSoSjwVKGFiCGrRr0_XaNYNyy2JvSuM7K2LWO19XufAuomOpsSAA0wH4gp-8YxF7kgFPjlv116IgDbiy4XHu9TQQjrGC8WwZbIzDBVneI7kCWnk22S1pT7IrJ8duJ23nlIU5a4aa1QdgHdhL-2pOYr5M4JPIHh_JmG9kwUzEBDgyAfn14DtgDteZq7",
    offset: true
  },
  {
    title: "Laborator estetic",
    detail:
      "Studio foto-video, mock-up digital avansat si fatete provizorii realizate in aceeasi zi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFBhWFGNI5HUgDJL9_erCts7tAcdtg8TKqXA73juD8PQ5YmHK77ZFIkchrKTWw3IK0B9lDZ65YwkQWtKpWz2C5TtoBEMA_WD5o4qmNxc64s3fYskrlgQW3ATasU2oOr4UiXdbgTpvmjzQbP5ouVad7mLLFJdv7ZyZ4C3QFjTjXEO6OpAIBe4T6MpZdf_tGSOH79QRhRYYVYm-HKx5Ti6ChggnXJuoiEMKkkWfyJZjMcNse0QhdTxkX8oVAJsjKNqPnm-SvR3LJwqlL",
    offset: false
  },
  {
    title: "Lounge pacienti",
    detail:
      "Spatii confortabile dedicate familiilor si pacientilor internationali, pentru relaxare intre vizite.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0DsflM22Uou5yk8iXerxXvG5Ne-DJLKW58esCZPD6VBzQVkpPAvSmWbY9g3fhuqbBBijAoUtXfKPcqEVQXTvBL92FGfABxb8xQGeLVQXSWeozfYl2SwuaOyZhBz4kscosDcXUwBIMOUoFjyociGHQJv31NCo6UVWc-kBTzS6fDvT11KYAXdTISI6nncd6PDPntbnFEKjHc41972OrKL4T4-T45TyYRkW7MzeRA3czzQRFulq_X7hpG43mmO9slrNa9B3QsTxiFjE3",
    offset: true
  }
];

export default function GallerySection() {
  return (
    <section className={styles.gallerySection} aria-label="Galerie clinica">
      <div className={styles.galleryContent}>
        <div className={styles.galleryText}>
          <div className={styles.galleryMain}>
            <div className={styles.galleryIntro}>
              <h2 className={styles.galleryTitle}>
                <span className={styles.galleryTitleLine}>SPAȚII</span>
                <span className={styles.galleryTitleLine}>GÂNDITE</span>
                <span className={styles.galleryTitleAccent}>
                  PENTRU
                  <br />
                  TINE
                </span>
              </h2>
              <p className={styles.galleryCopy}>
                Fiecare spațiu este gândit pentru <strong>siguranță și confort</strong>, astfel încât tu
                și familia ta să vă simțiți bine de la prima vizită.
              </p>
              <a href="/galerie" className={`${styles.galleryCta} btn-animate`}>
                <span className={styles.galleryCtaIcon} aria-hidden="true" />
                <span className={styles.galleryCtaLabel}>Vezi galeria</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.galleryMedia}>
          <div className={styles.cardGrid}>
            {featureCards.map((card) => (
              <article
                key={card.title}
                className={`${styles.card} ${card.offset ? styles.cardOffset : ""}`}
              >
                <div className={styles.cardGradient} />
                <NextImage
                  src={card.image}
                  alt={card.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleRow}>
                    <span className={styles.cardDot} aria-hidden="true" />
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>
                  <p className={styles.cardText}>{card.detail}</p>
                  <div className={styles.cardBar} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
