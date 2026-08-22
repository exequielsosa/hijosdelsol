const UNIT = "Demo '98 ⊕ ";
const TEXT = UNIT.repeat(6);

/** Banda infinita: dos spans idénticos y un translateX al -50% = loop sin salto. */
export default function Marquee() {
  return (
    <div className="hds-marquee" aria-hidden="true">
      <div className="hds-marquee-row">
        <span>{TEXT}</span>
        <span>{TEXT}</span>
      </div>
    </div>
  );
}
