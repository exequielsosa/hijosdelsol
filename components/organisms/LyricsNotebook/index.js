import Image from "next/image";
import Link from "next/link";
import CoverBackdrop from "../../molecules/CoverBackdrop";
import useCoverRotation from "@/hooks/useCoverRotation";
import useCopy from "@/hooks/useCopy";
import { LYRIC_TRACKS } from "@/data/tracks";

export default function LyricsNotebook() {
  const { copy } = useCopy();
  const { sectionRef, activeIndex, pin, unpin } = useCoverRotation(
    LYRIC_TRACKS.length,
  );

  return (
    <section
      id="letras"
      className="hds-lyricssec"
      aria-labelledby="lyrics-heading"
      ref={sectionRef}
    >
      <CoverBackdrop
        covers={LYRIC_TRACKS}
        activeIndex={activeIndex}
        getSrc={(t) => t.lyricsBg}
      />
      <div className="hds-shell">
        <div className="hds-notebook-intro" data-reveal>
          <span className="hds-eyebrow">{copy.notebook.eyebrow}</span>
          <h2 id="lyrics-heading" className="hds-h2">
            {copy.notebook.titleLine1}
            <br />
            {copy.notebook.titleLine2}
          </h2>
          <p className="hds-p hds-notebook-p">{copy.notebook.blurb}</p>
          <div className="hds-linkrow hds-notebook-links">
            <a href="#disco" className="hds-textlink hds-textlink--gray">
              {copy.notebook.seeTracklist}
            </a>
          </div>
        </div>

        <div className="hds-cards" data-reveal>
          {LYRIC_TRACKS.map((track, index) => (
            <Link
              key={track.slug}
              href={`/lyrics/${track.slug}`}
              className="hds-card"
              aria-label={copy.notebook.readLyricsAria(track.title)}
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
                <span className="hds-card-n">{track.n}</span>
                <div className="hds-card-foot">
                  <span className="hds-card-title">{track.title}</span>
                  <span className="hds-card-cta">
                    {copy.notebook.readLyrics}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
