import Image from "next/image";
import Link from "next/link";
import useCopy from "@/hooks/useCopy";
import { getHistory } from "@/data/history";

/**
 * Convierte `**texto**` en <strong>. Dos usos en todo el sitio no justifican
 * meter un parser de markdown: se parte por los delimitadores y se alterna.
 */
function renderEmphasis(text) {
  return text.split("**").map((chunk, i) =>
    i % 2 === 1 ? (
      // eslint-disable-next-line react/no-array-index-key
      <strong key={i}>{chunk}</strong>
    ) : (
      // eslint-disable-next-line react/no-array-index-key
      <span key={i}>{chunk}</span>
    )
  );
}

export default function HistoryPage() {
  const { copy, locale } = useCopy();
  const paragraphs = getHistory(locale);

  return (
    <div className="hds-trackpage">
      {/* Mismo fondo fijo en gris/sepia que las páginas de tema */}
      <div className="hds-trackpage-art hds-history-art" aria-hidden="true">
        <Image
          src="/historiaback.jpg"
          alt=""
          fill
          priority
          quality={45}
          sizes="100vw"
        />
        <div className="hds-trackpage-veil" />
      </div>

      <section className="hds-track-head hds-history-head">
        <div className="hds-track-glow" aria-hidden="true" />
        <div className="hds-shell hds-track-headinner">
          <Link href="/#disco" className="hds-back">
            {copy.track.back}
          </Link>
          <span className="hds-eyebrow hds-history-eyebrow">
            {copy.history.eyebrow}
          </span>
          <h1 className="hds-track-h1">{copy.history.title}</h1>
        </div>
      </section>

      <section className="hds-track-body">
        <div className="hds-shell">
          <div className="hds-history">
            {paragraphs.map((text, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={i}>{renderEmphasis(text)}</p>
            ))}

            <Link
              href="/#disco"
              className="hds-textlink hds-textlink--red hds-history-cta"
            >
              {copy.history.backToRecord}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
