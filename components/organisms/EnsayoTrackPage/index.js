import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import YoutubeFrame from "../../molecules/YoutubeFrame";
import ArtworkModal from "../../molecules/ArtworkModal";
import useCopy from "@/hooks/useCopy";
import { toStanzas } from "@/data/tracks";
import { neighboursEnsayo } from "@/data/ensayos";

/**
 * Vista de un tema de "Un ensayo más" (1998): mismo layout que TrackPage,
 * pero es una colección propia, separada del Demo'98 — el "anterior/
 * siguiente" cicla solo entre estos 3 temas y vuelve a /ensayos, no al disco.
 * Se duplica en vez de parametrizar TrackPage para no tocar las 12 páginas
 * que ya funcionan.
 */
export default function EnsayoTrackPage({ track }) {
  const { copy } = useCopy();
  const stanzas = toStanzas(track.lyrics);
  const { prev, next } = neighboursEnsayo(track.slug);
  const [artworkOpen, setArtworkOpen] = useState(false);

  const videoTitle = `HIJOS DEL SOL — "${track.title}" (Un ensayo más, 1998)`;

  return (
    <div className="hds-trackpage">
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
          <Link href="/ensayos" className="hds-back">
            {copy.ensayos.back}
          </Link>
          <div className="hds-track-headline">
            <h1 className="hds-track-h1">{track.title}</h1>
          </div>
          <div className="hds-chips hds-track-chips">
            <span className="hds-chip">{copy.ensayos.chip} · 1998</span>
            <span className="hds-chip">
              {track.lang === "ES" ? copy.track.langES : copy.track.langEN}
            </span>
          </div>
        </div>
      </section>

      <section className="hds-track-body">
        <div className="hds-shell hds-2col hds-track-grid">
          <div>
            <div
              className="hds-lyrics"
              lang={track.lang === "ES" ? "es" : "en"}
            >
              {stanzas.map((lines, i) => (
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
              <Link href={`/ensayos/${prev.slug}`}>
                <span className="hds-prevnext-label">
                  {copy.track.previous}
                </span>
                <span className="hds-prevnext-title">{prev.title}</span>
              </Link>
              <Link href={`/ensayos/${next.slug}`} className="hds-next">
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
                alt={copy.ensayos.coverAlt(track.title)}
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
              <Link href="/ensayos" className="hds-textlink hds-textlink--red">
                {copy.ensayos.seeAll}
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
        <ArtworkModal
          track={track}
          alt={copy.ensayos.coverAlt(track.title)}
          onClose={() => setArtworkOpen(false)}
        />
      )}
    </div>
  );
}
