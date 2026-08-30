import Image from "next/image";
import Link from "next/link";
import useCopy from "@/hooks/useCopy";
import { getHistory } from "@/data/history";
import { getLineup } from "@/data/lineup";

/**
 * Convierte `**texto**` en <strong>. Tres usos en todo el sitio no justifican
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
  const history = getHistory(locale);
  const lineup = getLineup(locale);

  return (
    <div className="hds-trackpage hds-historypage">
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

      {/* --------------------------------------- 1. la banda y de dónde salió */}
      <section className="hds-track-head hds-history-head">
        <div className="hds-track-glow" aria-hidden="true" />
        <div className="hds-history-open">
          <div className="hds-history-open-text">
            <Link href="/#disco" className="hds-back">
              {copy.track.back}
            </Link>
            <span className="hds-eyebrow hds-history-eyebrow">
              {copy.history.eyebrow}
            </span>
            {/* El nombre de la banda abre el H1: es el heading de la página
                que desambigua la marca, y sin él el H1 no la nombraba.
                No se traduce, igual que los títulos de los temas. */}
            <h1 className="hds-history-h1">
              <span className="hds-history-h1-brand">Hijos del Sol</span>
              <span>{history.headline[0]}</span>
              <span>{history.headline[1]}</span>
            </h1>
            <div className="hds-history-lead">
              {history.opening.map((text, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={i}>{renderEmphasis(text)}</p>
              ))}
            </div>
          </div>

          {/* La ilustración sale del shell hasta el borde derecho. Su 16:9
              queda intacto: recortarla a vertical dejaba a Gonzalo y a
              Rodrigo fuera del encuadre. */}
          <figure className="hds-history-figure">
            <div className="hds-history-figure-frame">
              <Image
                src="/bandFull.jpg"
                alt={copy.history.fullAlt}
                width={1672}
                height={941}
                sizes="(max-width: 900px) 100vw, 58vw"
                priority
              />
            </div>
            <figcaption>{history.caption}</figcaption>
          </figure>
        </div>
      </section>

      {/* -------------------------------------------------- 2. la formación */}
      <section className="hds-band">
        <div className="hds-shell">
          <div className="hds-band-head" data-reveal>
            <span className="hds-eyebrow">{copy.history.lineupEyebrow}</span>
            <h2 className="hds-h2">{copy.history.lineupTitle}</h2>
            <p className="hds-band-line">{history.band.line}</p>
          </div>

          <div className="hds-band-grid">
            {lineup.map((member, i) => (
              <article key={member.id} className="hds-member" data-reveal>
                <div className="hds-member-art">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    width={1122}
                    height={1402}
                    sizes="(max-width: 700px) 76vw, (max-width: 900px) 44vw, 360px"
                  />
                  {/* Cinta de papel en la esquina: la ilustración queda
                      pegada a la página, como en un fanzine */}
                  <span className="hds-member-tape" aria-hidden="true" />
                  <span className="hds-member-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="hds-member-name">{member.name}</h3>
                <p className="hds-member-role">{member.role}</p>
                <p className="hds-member-line">{member.line}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- 3. el demo del 98 */}
      <section className="hds-history-demo">
        {/* Fondo propio del bloque, de punta a punta. Se funde arriba y
            abajo con una mascara: no hay corte con lo que viene antes
            ni con el cierre. */}
        <div className="hds-history-demo-bg" aria-hidden="true">
          <Image
            src="/backgraf.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={55}
          />
          <div className="hds-history-demo-veil" />
        </div>

        <div className="hds-shell hds-history-demo-inner">
          <h2 className="hds-history-demo-intro" data-reveal>
            {history.demo.intro}
          </h2>

          {/* La caja abierta. Reemplaza a la etiqueta que estaba dibujada
              en CSS: la ilustración trae el casete, el arte, la lista de
              temas y el recibo, y engancha con el remate del cierre. */}
          <figure className="hds-box" data-reveal>
            <div className="hds-box-frame">
              <Image
                src="/perdido.jpg"
                alt={copy.history.boxAlt}
                width={1672}
                height={941}
                sizes="(max-width: 900px) 100vw, 760px"
              />
            </div>
            <figcaption>
              <span>{copy.history.archiveLabel}</span>
              <span>{copy.history.boxCaption}</span>
            </figcaption>
          </figure>

          <p className="hds-history-demo-body" data-reveal>
            {renderEmphasis(history.demo.body)}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------ 4. el cierre */}
      <section className="hds-history-end">
        {/* El halo crece detrás del remate y engancha con la sección del disco */}
        <div className="hds-history-end-glow" aria-hidden="true" />

        {/* La espera: la frase que la abre, los dos extremos y el hilo que
            los une. Sin hitos inventados en el medio.

            La franja sale del shell y lleva su propio fondo, fundido arriba
            y abajo. Termina en el 2026: el remate final va sobre el negro,
            solo con el halo. */}
        <div className="hds-history-wait" data-reveal>
          <div className="hds-history-wait-bg" aria-hidden="true">
            <Image
              src="/backtodosigue.jpg"
              alt=""
              fill
              sizes="100vw"
              quality={55}
            />
            <div className="hds-history-wait-veil" />
          </div>

          <div className="hds-history-wait-inner">
            <p className="hds-history-end-first">{history.closing.first}</p>
            <span className="hds-history-year">{history.closing.from}</span>
            <span className="hds-history-thread" aria-hidden="true" />
            <p className="hds-history-end-mid">{history.closing.middle}</p>
            <span className="hds-history-thread" aria-hidden="true" />
            <span className="hds-history-year hds-history-year--now">
              {history.closing.to}
            </span>
          </div>
        </div>

        <div className="hds-shell">
          <h2 className="hds-history-end-last" data-reveal>
            <span>{history.closing.last[0]}</span>
            <span>{history.closing.last[1]}</span>
          </h2>

          <Link
            href="/#disco"
            className="hds-textlink hds-textlink--red hds-history-cta"
          >
            {copy.history.backToRecord}
          </Link>
        </div>
      </section>
    </div>
  );
}
