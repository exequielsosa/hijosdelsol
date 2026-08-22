import Image from "next/image";
import Link from "next/link";
import { LYRIC_TRACKS } from "@/data/tracks";

export default function LyricsNotebook() {
  return (
    <section
      id="letras"
      className="hds-lyricssec"
      aria-labelledby="lyrics-heading"
    >
      <div className="hds-shell">
        <div className="hds-2col hds-notebook-grid">
          <div data-reveal>
            <span className="hds-eyebrow">03 — Lyrics</span>
            <h2 id="lyrics-heading" className="hds-h2">
              The lyrics
              <br />
              notebook
            </h2>
            <p className="hds-p hds-notebook-p">
              Every track has its own page: the full lyrics and the frame to
              play it. Next to it, the original 1998 document — raw, exactly as
              it was typed.
            </p>
            <div className="hds-linkrow hds-notebook-links">
              <a
                href="/letras-1998.png"
                target="_blank"
                rel="noopener noreferrer"
                className="hds-textlink hds-textlink--red"
              >
                Open the full document →
              </a>
              <a href="#disco" className="hds-textlink hds-textlink--gray">
                See the tracklist →
              </a>
            </div>
          </div>

          <a
            href="/letras-1998.png"
            target="_blank"
            rel="noopener noreferrer"
            className="hds-archive"
            data-reveal
          >
            <Image
              src="/letras-1998.png"
              alt="Original lyrics page, 1998"
              width={3404}
              height={16384}
              sizes="(max-width: 900px) 100vw, 420px"
              loading="lazy"
            />
            <div className="hds-archive-fade" aria-hidden="true" />
            <span className="hds-archive-caption">Original archive · 1998</span>
          </a>
        </div>

        <div className="hds-cards" data-reveal>
          {LYRIC_TRACKS.map((track) => (
            <Link
              key={track.slug}
              href={`/lyrics/${track.slug}`}
              className="hds-card"
              aria-label={`Read the lyrics of ${track.title}`}
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
                  <span className="hds-card-cta">Read the lyrics →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
