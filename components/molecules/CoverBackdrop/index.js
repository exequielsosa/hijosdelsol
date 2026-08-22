import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Fondo de la sección del disco: los covers apilados, todos montados, con
 * cross-fade entre el activo y el resto. Decorativo puro (aria-hidden).
 *
 * Solo se monta en desktop: en mobile no aporta y evita bajar 12 imágenes de
 * más. Como el montaje depende de matchMedia, no se renderiza en SSR — no
 * importa, no hay nada que indexar acá.
 */
export default function CoverBackdrop({ covers, activeIndex }) {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 901px)").matches) return;
    setEnabled(true);
    // Un frame de gracia para que el primer cover entre con fade y no de golpe
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!enabled) return null;

  return (
    <div className="hds-backdrop" aria-hidden="true">
      {covers.map((track, i) => (
        <div
          key={track.slug}
          className={
            ready && i === activeIndex
              ? "hds-backdrop-layer is-active"
              : "hds-backdrop-layer"
          }
        >
          <Image
            src={track.cover}
            alt=""
            fill
            quality={35}
            sizes="1400px"
            loading="lazy"
          />
        </div>
      ))}
      <div className="hds-backdrop-veil" />
    </div>
  );
}
