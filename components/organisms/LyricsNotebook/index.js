import Image from "next/image";
import Link from "next/link";
import useCopy from "@/hooks/useCopy";
import { LYRIC_TRACKS } from "@/data/tracks";

export default function LyricsNotebook() {
  const { copy } = useCopy();

  return (
    <section
      id="letras"
      className="hds-lyricssec"
      aria-labelledby="lyrics-heading"
    >
      <div className="hds-shell">
        <div className="hds-2col hds-notebook-grid">
          <div data-reveal>
            <span className="hds-eyebrow">{copy.notebook.eyebrow}</span>
            <h2 id="lyrics-heading" className="hds-h2">
              {copy.notebook.titleLine1}
              <br />
              {copy.notebook.titleLine2}
            </h2>
            <p className="hds-p hds-notebook-p">{copy.notebook.blurb}</p>
            <div className="hds-linkrow hds-notebook-links">
              <a
                href="/letras-1998.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="hds-textlink hds-textlink--red"
              >
                {copy.notebook.openDocument}
              </a>
              <a href="#disco" className="hds-textlink hds-textlink--gray">
                {copy.notebook.seeTracklist}
              </a>
            </div>
          </div>

          <a
            href="/letras-1998.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hds-archive"
            data-reveal
          >
            <Image
              src="/letras-1998.jpg"
              alt={copy.notebook.archiveAlt}
              width={1200}
              height={5776}
              sizes="(max-width: 900px) 100vw, 420px"
              loading="lazy"
            />
            <div className="hds-archive-fade" aria-hidden="true" />
            <span className="hds-archive-caption">
              {copy.notebook.archiveCaption}
            </span>
          </a>
        </div>

        <div className="hds-cards" data-reveal>
          {LYRIC_TRACKS.map((track) => (
            <Link
              key={track.slug}
              href={`/lyrics/${track.slug}`}
              className="hds-card"
              aria-label={copy.notebook.readLyricsAria(track.title)}
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
