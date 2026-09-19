import Image from "next/image";
import Link from "next/link";
import YoutubeFrame from "../../molecules/YoutubeFrame";
import useCopy from "@/hooks/useCopy";
import { getHistory } from "@/data/history";
import { getLineup } from "@/data/lineup";
import { DISASTER_VIDEO_ID } from "@/data/site";

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
  const isEnglish = locale === "en";

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

      {/* ------------------------------------------ 3. el primer desastre */}
      <section className="hds-history-disaster">
        {/* Mismo tratamiento que el fondo del demo: pared propia, de punta
            a punta, con mascara arriba y abajo para fundirse con lo que
            viene antes y despues. */}
        <div className="hds-history-disaster-bg" aria-hidden="true">
          <Image
            src="/backLOVEESTAFA.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={55}
          />
          <div className="hds-history-disaster-veil" />
        </div>

        <div className="hds-shell hds-history-disaster-inner">
          <span className="hds-eyebrow" data-reveal>
            {copy.history.disasterEyebrow}
          </span>
          <h2 className="hds-history-disaster-title" data-reveal>
            {history.disaster.title}
          </h2>
          <p className="hds-history-disaster-lead" data-reveal>
            {history.disaster.lead}
          </p>

          {history.disaster.body.map((text, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i} className="hds-history-disaster-body" data-reveal>
              {renderEmphasis(text)}
            </p>
          ))}

          <div className="hds-history-disaster-video" data-reveal>
            <YoutubeFrame
              videoId={DISASTER_VIDEO_ID}
              title={copy.history.disasterVideoTitle("Love Comes Tonight")}
              playAria={copy.video.playAria(
                copy.history.disasterVideoTitle("Love Comes Tonight")
              )}
              frameClassName="hds-history-disaster-frame"
              embedClassName="hds-embed"
            >
              <Image
                src="/LOVEESTAFA.jpg"
                alt={copy.history.disasterAlt}
                fill
                sizes="(max-width: 900px) 100vw, 960px"
              />
              <span className="hds-listen-scrim" aria-hidden="true" />
              <span className="hds-play hds-play--sm" aria-hidden="true">
                <i />
              </span>
              <span className="hds-listen-label">
                {copy.video.watchOnYoutube}
              </span>
            </YoutubeFrame>
          </div>
        </div>
      </section>

      {/* --------------------------------------------- 4. la máquina del sótano */}
      <section className="hds-history-tascam">
        {/* Mismo tratamiento de pared que el desastre y el demo: fondo propio
            de punta a punta, con mascara arriba y abajo. */}
        <div className="hds-history-tascam-bg" aria-hidden="true">
          <Image
            src="/backtascam.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={55}
          />
          <div className="hds-history-tascam-veil" />
        </div>

        <div className="hds-shell hds-history-tascam-inner">
          <span className="hds-eyebrow" data-reveal>
            {copy.history.tascamEyebrow}
          </span>
          <h2 className="hds-history-tascam-title" data-reveal>
            {history.tascam.title}
          </h2>

          <div className="hds-history-tascam-grid">
            <div className="hds-history-tascam-text">
              {history.tascam.body.map((text, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={i} className="hds-history-tascam-body" data-reveal>
                  {renderEmphasis(text)}
                </p>
              ))}
            </div>

            <figure className="hds-history-tascam-figure" data-reveal>
              <Image
                src="/headtascam.jpg"
                alt={copy.history.tascamAlt}
                width={1448}
                height={1086}
                sizes="(max-width: 900px) 100vw, 560px"
              />
            </figure>
          </div>

          <p className="hds-history-tascam-slogan" data-reveal>
            {history.tascam.slogan}
          </p>
        </div>
      </section>

      {/* --------------------------------------------------- 5. la segunda vez */}
      <section className="hds-history-bravo">
        {/* Mismo tratamiento de pared que el desastre y el sotano: fondo
            propio de punta a punta, con mascara arriba y abajo. */}
        <div className="hds-history-bravo-bg" aria-hidden="true">
          <Image
            src="/backbravo.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={55}
          />
          <div className="hds-history-bravo-veil" />
        </div>

        <div className="hds-shell hds-history-bravo-grid">
          <div className="hds-history-bravo-text" data-reveal>
            <span className="hds-eyebrow">{copy.history.bravoEyebrow}</span>
            <h2 className="hds-history-bravo-title">
              <span>{history.bravo.title[0]}</span>
              <span>{history.bravo.title[1]}</span>
              <span>{history.bravo.studio}</span>
            </h2>
            <div className="hds-history-bravo-body">
              {history.bravo.body.map((text, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={i}>{renderEmphasis(text)}</p>
              ))}
            </div>
            <Link href="/#video" className="hds-textlink hds-textlink--red">
              {copy.history.bravoCta}
            </Link>
          </div>

          <figure className="hds-history-bravo-figure" data-reveal>
            <div className="hds-history-bravo-figure-frame">
              <Image
                src="/bravo.jpg"
                alt={copy.history.bravoAlt}
                width={1672}
                height={941}
                sizes="(max-width: 900px) 100vw, 558px"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* --------------------------------------------------- 6. el demo del 98 */}
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
          <h2 className="hds-history-demo-title" data-reveal>
            <span>{history.demo.title[0]}</span>
            <span>{history.demo.title[1]}</span>
          </h2>
          <p className="hds-history-demo-intro" data-reveal>
            {history.demo.intro}
          </p>

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
                sizes="(max-width: 900px) 100vw, 1180px"
              />
            </div>
            <figcaption>
              <span>{copy.history.archiveLabel}</span>
              <span>{copy.history.boxCaption}</span>
            </figcaption>
          </figure>

          {history.demo.body.map((text, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i} className="hds-history-demo-body" data-reveal>
              {renderEmphasis(text)}
            </p>
          ))}

          <p className="hds-history-demo-slogan" data-reveal>
            {history.demo.slogan}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------ 7. el cierre */}
      <section className="hds-history-end">
        {/* El halo crece detrás del remate y engancha con la sección del disco */}
        <div className="hds-history-end-glow" aria-hidden="true" />

        {/* La espera: la frase que la abre y, donde antes iba el hilo con
            los años, la cronologia ilustrada — una imagen por idioma y otra
            por ancho de pantalla, nunca las dos a la vez. La oculta por CSS
            ni siquiera llega a pedirse: el lazy-loading nativo no dispara
            sobre un elemento en display:none.

            La franja sale del shell y lleva su propio fondo, fundido arriba
            y abajo, igual que siempre. */}
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

            <div className="hds-shell hds-history-crono">
              <Image
                src={
                  isEnglish ? "/crono_desktop_EN.jpg" : "/crono_desktop_ES.jpg"
                }
                alt={copy.history.cronoAlt}
                width={2172}
                height={724}
                sizes="(max-width: 900px) 0px, 1180px"
                className="hds-history-crono-img hds-history-crono-img--desktop"
              />
              <Image
                src={
                  isEnglish ? "/crono_mobile_EN.jpg" : "/crono_mobile_ES.jpg"
                }
                alt={copy.history.cronoAlt}
                width={941}
                height={1672}
                sizes="(max-width: 900px) 100vw, 0px"
                className="hds-history-crono-img hds-history-crono-img--mobile"
              />
            </div>
          </div>
        </div>

        <div className="hds-shell">
          <h2 className="hds-history-end-last" data-reveal>
            <span>{history.closing.last[0]}</span>
            <span>{history.closing.last[1]}</span>
          </h2>

          <div className="hds-linkrow hds-history-cta">
            <Link href="/#disco" className="hds-textlink hds-textlink--red">
              {copy.history.backToRecord}
            </Link>
            <Link href="/ensayos" className="hds-textlink hds-textlink--gray">
              {copy.history.seeArchive}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
