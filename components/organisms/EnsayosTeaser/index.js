import Image from "next/image";
import Link from "next/link";
import CoverBackdrop from "../../molecules/CoverBackdrop";
import useCopy from "@/hooks/useCopy";
import useCoverRotation from "@/hooks/useCoverRotation";

/* Las tomas de la sala rotan solas en desktop, mismo mecanismo que el
   fondo de covers del disco y el de Bravo Paraíso en "El video". */
const ENSAYOSBACK_IMAGES = [
  "/ensayosback/ensayosback.jpg",
  "/ensayosback/ensayosback4.jpg",
  "/ensayosback/ensayosback5.jpg",
  "/ensayosback/ensayosback6.jpg",
  "/ensayosback/ensayosback7.jpg",
].map((src, i) => ({ slug: `ensayosback-${i}`, cover: src }));

export default function EnsayosTeaser() {
  const { copy } = useCopy();
  const { sectionRef, activeIndex } = useCoverRotation(
    ENSAYOSBACK_IMAGES.length
  );

  return (
    <section
      ref={sectionRef}
      id="ensayos-teaser"
      className="hds-ensayosteaser"
      aria-labelledby="ensayosteaser-heading"
    >
      {/* En mobile CoverBackdrop no se monta (evita bajar 4 imagenes de
          mas): una sola toma fija, con el mismo "respira" del resto del
          sitio en vez de quedar sin fondo. */}
      <div className="hds-ensayosteaser-singlebg" aria-hidden="true">
        <Image
          src="/ensayosback/ensayosback.jpg"
          alt=""
          fill
          quality={45}
          sizes="100vw"
          loading="lazy"
        />
        <div className="hds-backdrop-veil" />
      </div>

      <CoverBackdrop covers={ENSAYOSBACK_IMAGES} activeIndex={activeIndex} />

      <div className="hds-ensayosteaser-glow" aria-hidden="true" />
      <div className="hds-ensayosteaser-inner" data-reveal>
        <span className="hds-eyebrow">{copy.ensayosTeaser.eyebrow}</span>
        <h2 id="ensayosteaser-heading" className="hds-h2 hds-ensayosteaser-h2">
          {copy.ensayosTeaser.titleLine1}
          <br />
          {copy.ensayosTeaser.titleLine2}
        </h2>
        <p className="hds-ensayosteaser-p">{copy.ensayosTeaser.blurb}</p>
        <Link href="/ensayos" className="hds-ensayosteaser-cta">
          {copy.ensayosTeaser.cta}
        </Link>
      </div>
    </section>
  );
}
