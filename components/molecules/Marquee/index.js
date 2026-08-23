const UNITS = 6;

/**
 * Banda infinita: dos corridas idénticas y un translateX al -50% = loop sin
 * salto.
 *
 * El separador es la marca sol-cruz dibujada en CSS, no el glifo ⊕: ese
 * carácter no existe en Big Shoulders, lo resolvía una fuente de fallback y
 * caía desalineado respecto del texto.
 */
function Run() {
  return (
    <span className="hds-marquee-run">
      {Array.from({ length: UNITS }, (_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <span className="hds-marquee-unit" key={i}>
          Demo &apos;98
          <span className="hds-marquee-mark" />
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="hds-marquee" aria-hidden="true">
      <div className="hds-marquee-row">
        <Run />
        <Run />
      </div>
    </div>
  );
}
