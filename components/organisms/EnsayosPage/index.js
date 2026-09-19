import Image from "next/image";
import Link from "next/link";
import CoverBackdrop from "../../molecules/CoverBackdrop";
import useCoverRotation from "@/hooks/useCoverRotation";
import useCopy from "@/hooks/useCopy";
import { ENSAYOS } from "@/data/ensayos";

/**
 * /ensayos: header de apertura (la idea general) y despues la seccion de
 * temas, que trae su propio titulo ("Un ensayo más — 1998") igual que
 * LyricsNotebook trae "El cuaderno de letras" antes de sus cards. Mismo
 * fondo con cover + hover que usa la sección de Letras del home, pero sin
 * el carrusel automático: acá el fondo por defecto es siempre
 * unensayo.jpg, y el hover sobre una tapa lo reemplaza por su back — no
 * hay rotación sola entre las tres tapas.
 */
export default function EnsayosPage() {
  const { copy } = useCopy();
  const { sectionRef, activeIndex, pin, unpin } = useCoverRotation(
    ENSAYOS.length,
    { autoRotate: false },
  );

  return (
    <div className="hds-ensayospage">
      <section className="hds-track-head hds-ensayos-hero">
        <div className="hds-ensayos-hero-bg" aria-hidden="true">
          <Image
            src="/ensayos/backheaderensatos.jpg"
            alt=""
            fill
            priority
            quality={55}
            sizes="100vw"
          />
          <div className="hds-ensayos-hero-veil" />
        </div>
        <div className="hds-shell hds-ensayos-hero-inner">
          <Link href="/" className="hds-back">
            {copy.ensayos.backHome}
          </Link>
          <h1 className="hds-h2 hds-ensayos-h1">{copy.ensayos.title}</h1>
          {copy.ensayos.intro.map((text, i) => (
            <p
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={
                i === 0 ? "hds-ensayos-subtitle" : "hds-ensayos-lead"
              }
            >
              {text}
            </p>
          ))}
        </div>
      </section>

      <section
        id="ensayos-temas"
        className="hds-lyricssec hds-ensayos-grid"
        aria-labelledby="ensayos-tape-heading"
        ref={sectionRef}
      >
        <CoverBackdrop
          covers={ENSAYOS}
          activeIndex={activeIndex}
          getSrc={(t) => t.backCover}
          defaultSrc="/ensayos/ensayoun.jpg"
        />
        <div className="hds-shell">
          <div className="hds-notebook-intro hds-ensayos-tape-intro" data-reveal>
            <h2
              id="ensayos-tape-heading"
              className="hds-h2 hds-ensayos-tape-title"
            >
              {copy.ensayos.tapeTitle}
            </h2>
            {copy.ensayos.tapeBody.map((text, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={i} className="hds-ensayos-lead">
                {text}
              </p>
            ))}
          </div>

          <div className="hds-cards hds-ensayos-cards" data-reveal>
            {ENSAYOS.map((track, index) => (
              <Link
                key={track.slug}
                href={`/ensayos/${track.slug}`}
                className="hds-card hds-card--nonum"
                aria-label={copy.ensayos.readLyricsAria(track.title)}
                onMouseEnter={() => pin(index)}
                onMouseLeave={unpin}
                onFocus={() => pin(index)}
                onBlur={unpin}
              >
                <Image
                  src={track.cover}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1180px) 34vw, 300px"
                  loading="lazy"
                />
                <div className="hds-card-legibility" aria-hidden="true" />
                <div className="hds-card-flash" aria-hidden="true" />
                <div className="hds-card-rule" aria-hidden="true" />
                <div className="hds-card-body">
                  <div className="hds-card-foot">
                    <span className="hds-card-title">{track.title}</span>
                    <span className="hds-card-cta">
                      {copy.ensayos.readLyrics}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
