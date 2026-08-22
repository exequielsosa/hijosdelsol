import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Muestra el arte del tema a tamaño completo y a color: es el único lugar
 * donde se puede ver, porque la card del aside pasó a ser el reproductor.
 *
 * Cierra con Escape, con el botón o clickeando fuera. Al abrir bloquea el
 * scroll del fondo y al cerrar devuelve el foco a donde estaba.
 */
export default function ArtworkModal({ track, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  return (
    <div
      className="hds-artmodal"
      role="dialog"
      aria-modal="true"
      aria-label={`${track.title} — artwork`}
      onClick={onClose}
    >
      <div
        className="hds-artmodal-inner"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={track.cover}
          alt={`${track.title} — Demo '98 cover art`}
          width={1254}
          height={1254}
          sizes="(max-width: 900px) 92vw, 900px"
          className="hds-artmodal-img"
        />
        <button
          type="button"
          ref={closeRef}
          className="hds-artmodal-close"
          onClick={onClose}
          aria-label="Close artwork"
        >
          ×
        </button>
      </div>
    </div>
  );
}
