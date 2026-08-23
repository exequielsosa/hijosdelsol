import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import YoutubeFrame from "../../molecules/YoutubeFrame";
import ArtworkModal from "../../molecules/ArtworkModal";
import useCopy from "@/hooks/useCopy";
import { neighbours, toStanzas } from "@/data/tracks";

/**
 * Vista de un tema: número de álbum, título, letra completa y el arte propio
 * del tema como marco de reproducción. Los vecinos son circulares sobre los 12
 * temas con letra (el anterior del 01 es el 13).
 *
 * El chrome se traduce; la letra NO: es el archivo del 98 y se muestra siempre
 * en su idioma original, sea cual sea el idioma del sitio.
 */
export default function TrackPage({ track }) {
  const { copy, locale } = useCopy();
  const stanzas = toStanzas(track.lyrics);
  const blurb = track.blurb?.[locale] ?? track.blurb?.es;
  const { prev, next } = neighbours(track.slug);
  const [artworkOpen, setArtworkOpen] = useState(false);

  const videoTitle = `HIJOS DEL SOL — "${track.title}" (Demo '98)`;

  return (
    <div className="hds-trackpage">
      {/* Fixed al viewport: el arte acompaña todo el scroll sin cortarse */}
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
            {copy.track.back}
          </Link>
          <div className="hds-track-headline">
            <span className="hds-songnum">{track.n}</span>
            <h1 className="hds-track-h1">{track.title}</h1>
          </div>
          <div className="hds-chips hds-track-chips">
            <span className="hds-chip">Demo &apos;98</span>
            <span className="hds-chip">
              {track.lang === "ES" ? copy.track.langES : copy.track.langEN}
            </span>
          </div>
          {blurb && <p className="hds-track-blurb">{blurb}</p>}
        </div>
      </section>

      <section className="hds-track-body">
        <div className="hds-shell hds-2col hds-track-grid">
          <div>
            {/* La letra lleva su propio lang, que puede no ser el del sitio */}
            <div
              className="hds-lyrics"
              lang={track.lang === "ES" ? "es" : "en"}
            >
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

            <nav className="hds-prevnext" aria-label={copy.track.otherTracks}>
              <Link href={`/lyrics/${prev.slug}`}>
                <span className="hds-prevnext-label">
                  {copy.track.previous}
                </span>
                <span className="hds-prevnext-title">{prev.title}</span>
              </Link>
              <Link href={`/lyrics/${next.slug}`} className="hds-next">
                <span className="hds-prevnext-label">{copy.track.next}</span>
                <span className="hds-prevnext-title">{next.title}</span>
              </Link>
            </nav>
          </div>

          <aside className="hds-aside">
            <YoutubeFrame
              videoId={track.video}
              title={videoTitle}
              playAria={copy.video.playAria(videoTitle)}
              frameClassName="hds-listen"
              embedClassName="hds-embed hds-embed--square"
            >
              <Image
                src={track.cover}
                alt={copy.track.coverAlt(track.title)}
                fill
                loading="eager"
                sizes="(max-width: 900px) 100vw, 440px"
              />
              <span className="hds-play hds-play--sm" aria-hidden="true">
                <i />
              </span>
              <span className="hds-listen-scrim" aria-hidden="true" />
              <span className="hds-listen-label">
                {copy.track.listenOnYoutube}
              </span>
            </YoutubeFrame>
            <div className="hds-linkrow">
              <Link href="/#letras" className="hds-textlink hds-textlink--red">
                {copy.track.seeAllLyrics}
              </Link>
              <button
                type="button"
                className="hds-textlink hds-textlink--gray"
                onClick={() => setArtworkOpen(true)}
              >
                {copy.track.viewArtwork}
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
