import Image from "next/image";
import Link from "next/link";
import CoverBackdrop from "../../molecules/CoverBackdrop";
import useCoverRotation from "@/hooks/useCoverRotation";
import useCopy from "@/hooks/useCopy";
import { ALBUM, LYRIC_TRACKS } from "@/data/tracks";
import { DOWNLOAD_ARTWORK_URL, DOWNLOAD_RECORD_URL } from "@/data/site";

/** slug → posición en el fondo de covers (Noise no tiene, queda fuera). */
const COVER_INDEX = new Map(LYRIC_TRACKS.map((track, i) => [track.slug, i]));

/** Una fila del tracklist. "Noise" es instrumental: no tiene página ni link. */
function TrackRow({ track, copy, onEnter, onLeave }) {
  const content = (
    <>
      <span className="hds-track-n">{track.n}</span>
      <span className="hds-track-title">{track.title}</span>
      <span className="hds-track-label">
        {track.instrumental ? copy.labelInstrumental : copy.labelLyrics}
      </span>
    </>
  );

  if (track.instrumental) {
    return (
      <li>
        <span className="hds-track">{content}</span>
      </li>
    );
  }

  const index = COVER_INDEX.get(track.slug);

  return (
    <li>
      <Link
        href={`/lyrics/${track.slug}`}
        className="hds-track"
        onMouseEnter={() => onEnter(index)}
        onMouseLeave={onLeave}
        onFocus={() => onEnter(index)}
        onBlur={onLeave}
      >
        {content}
      </Link>
    </li>
  );
}

export default function Record() {
  const { copy } = useCopy();
  const { sectionRef, activeIndex, pin, unpin } = useCoverRotation(
    LYRIC_TRACKS.length,
  );

  return (
    <section
      id="disco"
      className="hds-record"
      aria-labelledby="record-heading"
      ref={sectionRef}
    >
      <CoverBackdrop covers={LYRIC_TRACKS} activeIndex={activeIndex} />

      <div className="hds-shell hds-2col hds-record-grid">
        <div data-reveal>
          <div className="hds-album">
            <div className="hds-album-wash" aria-hidden="true" />
            <Image
              src="/soloTapa.png"
              alt={copy.record.artworkAlt}
              width={1367}
              height={1495}
              sizes="(max-width: 900px) 90vw, 440px"
              className="hds-album-devil"
            />
            {/* <Image
              src="/logo-white.png"
              alt=""
              aria-hidden="true"
              width={1771}
              height={249}
              sizes="(max-width: 900px) 76vw, 370px"
              className="hds-album-logo"
            /> */}
            {/* <span className="hds-album-stamp">Demo &apos;98</span> */}
          </div>
          <div className="hds-chips hds-album-chips">
            {copy.record.chips.map((chip) => (
              <span key={chip} className="hds-chip">
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div data-reveal>
          <span className="hds-eyebrow">{copy.record.eyebrow}</span>
          <h2 id="record-heading" className="hds-h2 hds-record-h2">
            Demo &apos;98
          </h2>
          <p className="hds-p">{copy.record.blurb}</p>

          <ol className="hds-tracks">
            {ALBUM.map((track) => (
              <TrackRow
                key={track.slug}
                track={track}
                copy={copy.record}
                onEnter={pin}
                onLeave={unpin}
              />
            ))}
          </ol>

          <div className="hds-linkrow hds-record-links">
            <a
              href={DOWNLOAD_RECORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hds-textlink hds-textlink--red"
              aria-label={copy.record.downloadRecordAria}
            >
              {copy.record.downloadRecord}
            </a>
            <a
              href={DOWNLOAD_ARTWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hds-textlink hds-textlink--gray"
              aria-label={copy.record.downloadArtworkAria}
            >
              {copy.record.downloadArtwork}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
