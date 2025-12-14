import NextImage from "next/image";
import React from "react";
import styles from "./GallerySection.module.css";

const facilityFeatures = [
  {
    title: "Sterilizare trasabila",
    detail: "Circuit inchis cu etichetare QR pentru fiecare instrument, asigurand igiena maxima."
  },
  {
    title: "Radiologie 3D",
    detail: "CBCT, panorame si bitewing efectuate in clinica, cu rapoarte in 15 minute."
  },
  {
    title: "Laborator estetic",
    detail: "Studio foto-video, mock-up digital si fatete provizorii in aceeasi zi."
  },
  {
    title: "Lounge pacienti",
    detail: "Spatii dedicate familiilor si pacientilor internationali pentru relaxare."
  }
];

export default function GallerySection() {
  return (
    <section className={styles.gallerySection} aria-label="Galerie clinica">
      <div className={styles.galleryContent}>
        <div className={styles.galleryText}>
          <div className={styles.galleryMain}>
            <h2 className={styles.galleryTitle}>
              Suprafete, echipamente si cadre dedicate
              <br />
              <span className={styles.galleryTitleAccent}>stomatologiei moderne</span>
            </h2>
            <p className={styles.galleryCopy}>
              Fiecare spatiu este optimizat pentru siguranta si confort - de la blocul operator pana la
              zonele de consiliere, pentru ca tu si familia ta sa simtiti ca intr-un cabinet premium.
            </p>
            <div className={styles.galleryHighlights}>
              <article className={styles.highlightCard}>
                <span className={styles.highlightTag}>Bloc operator</span>
                <p className={styles.highlightCopy}>
                  Flux dedicat cu sterilizare trasabila si echipamente state-of-the-art pentru
                  interventii precise.
                </p>
              </article>
              <article className={styles.highlightCard}>
                <span className={styles.highlightTag}>Zona pacienti</span>
                <p className={styles.highlightCopy}>
                  Lounge confortabil si consiliere privata pentru planningul tratamentului tau.
                </p>
              </article>
            </div>
            <div className={styles.galleryFeatures}>
            {facilityFeatures.map((feature) => (
              <article key={feature.title} className={styles.featureItem}>
                <span className={styles.featureBullet} aria-hidden="true" />
                <p className={styles.featureCopy}>
                  <strong>{feature.title}</strong>
                  <span className={styles.featureDetail}>{feature.detail}</span>
                </p>
              </article>
            ))}
            </div>
          </div>
          <div className={styles.galleryFooter}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Ani de experienta combinata</span>
              <span className={styles.statValue}>15+</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Sali de tratament complet echipate</span>
              <span className={styles.statValue}>4</span>
            </div>
          </div>
        </div>
        <div className={styles.galleryMedia}>
          <NextImage
            src="/unnamed.png"
            alt="Interior cabinet dentar premium"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
