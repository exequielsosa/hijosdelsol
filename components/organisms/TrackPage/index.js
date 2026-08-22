import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import YoutubeFrame from "../../molecules/YoutubeFrame";
import ArtworkModal from "../../molecules/ArtworkModal";
import { neighbours, toStanzas } from "@/data/tracks";

const LANG_LABEL = {
  EN: "Lyrics in english",
  ES: "Lyrics in spanish",
};

/**
 * Vista de un tema: número de álbum, título, letra completa y el arte propio
 * del tema como marco de reproducción. Los vecinos son circulares sobre los 12
 * temas con letra (el anterior del 01 es el 13).
 */
export default function TrackPage({ track }) {
  const stanzas = toStanzas(track.lyrics);
  const { prev, next } = neighbours(track.slug);
  const [artworkOpen, setArtworkOpen] = useState(false);

  return (
    <div className="hds-trackpage">
      {/* Sticky de 100vh con margin negativo: el arte queda fijo detrás de
          toda la página sin ocupar lugar en el flujo ni salirse al footer. */}
      <div className="hds-trackpage-art" aria-hidden="true">
        <Image
          src={track.cover}
          alt=""
          fill
          priority
          quality={40}
          sizes="100vw"
        />
        <div className="hds-trackpage-veil" />
      </div>

      <section className="hds-track-head">
        <div className="hds-track-glow" aria-hidden="true" />
        <div className="hds-shell hds-track-headinner">
          <Link href="/#disco" className="hds-back">
            ← Back to the record
          </Link>
          <div className="hds-track-headline">
            <span className="hds-songnum">{track.n}</span>
            <h1 className="hds-track-h1">{track.title}</h1>
          </div>
          <div className="hds-chips hds-track-chips">
            <span className="hds-chip">Demo &apos;98</span>
            <span className="hds-chip">{LANG_LABEL[track.lang]}</span>
          </div>
        </div>
      </section>

      <section className="hds-track-body">
        <div className="hds-shell hds-2col hds-track-grid">
          <div>
            <div className="hds-lyrics">
              {stanzas.map((lines, i) => (
                // Las estrofas no tienen id propio; el índice es su identidad
                // eslint-disable-next-line react/no-array-index-key
                <div className="hds-stanza" key={i}>
                  {lines.map((line, j) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={j}>{line}</span>
                  ))}
                </div>
              ))}
            </div>

            <nav className="hds-prevnext" aria-label="Other tracks">
              <Link href={`/lyrics/${prev.slug}`}>
                <span className="hds-prevnext-label">← Previous</span>
                <span className="hds-prevnext-title">{prev.title}</span>
              </Link>
              <Link href={`/lyrics/${next.slug}`} className="hds-next">
                <span className="hds-prevnext-label">Next →</span>
                <span className="hds-prevnext-title">{next.title}</span>
              </Link>
            </nav>
          </div>

          <aside className="hds-aside">
            <YoutubeFrame
              videoId={track.video}
              title={`HIJOS DEL SOL — "${track.title}" (Demo '98)`}
              frameClassName="hds-listen"
              embedClassName="hds-embed hds-embed--square"
            >
              <Image
                src={track.cover}
                alt={`${track.title} — Demo '98 cover art`}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 440px"
              />
              <span className="hds-play hds-play--sm" aria-hidden="true">
                <i />
              </span>
              <span className="hds-listen-scrim" aria-hidden="true" />
              <span className="hds-listen-label">Listen on YouTube</span>
            </YoutubeFrame>
            <div className="hds-linkrow">
              <Link href="/#letras" className="hds-textlink hds-textlink--red">
                See all lyrics →
              </Link>
              <button
                type="button"
                className="hds-textlink hds-textlink--gray"
                onClick={() => setArtworkOpen(true)}
              >
                View the artwork →
              </button>
            </div>
          </aside>
        </div>
      </section>

      {artworkOpen && (
        <ArtworkModal track={track} onClose={() => setArtworkOpen(false)} />
      )}
    </div>
  );
}
