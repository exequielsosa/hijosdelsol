import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useCopy from "@/hooks/useCopy";

const OVERLAY_PADDING = 48;

/**
 * Una página vieja del sitio, servida tal cual desde /public/retro* y
 * embebida en una ventana de 800x600 — la resolución para la que se diseñó.
 *
 * Mismo patrón que ArtworkModal: cierra con Escape, con el botón o clickeando
 * fuera, bloquea el scroll del fondo y devuelve el foco al cerrar.
 *
 * La ventana nunca se recorta: si no entra en la pantalla (celular), se
 * reduce como unidad con transform: scale — como el "modo escritorio" de un
 * navegador móvil — en vez de mostrar una porción recortada con scroll.
 */
export default function RetroWindow({ site, onClose }) {
  const { copy } = useCopy();
  const closeRef = useRef(null);
  const frameRef = useRef(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const updateScale = () => {
      const el = frameRef.current;
      if (!el) return;
      const naturalWidth = el.offsetWidth;
      const naturalHeight = el.offsetHeight;
      const availableWidth = window.innerWidth - OVERLAY_PADDING;
      const availableHeight = window.innerHeight - OVERLAY_PADDING;
      setScale(
        Math.min(1, availableWidth / naturalWidth, availableHeight / naturalHeight)
      );
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

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
      className="hds-retrowin"
      role="dialog"
      aria-modal="true"
      aria-label={site.windowTitle}
      onClick={onClose}
    >
      <div
        ref={frameRef}
        className="hds-retrowin-frame"
        style={scale < 1 ? { transform: `scale(${scale})` } : undefined}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="hds-retrowin-titlebar">
          <span className="hds-retrowin-titletext">{site.windowTitle}</span>
          <div className="hds-retrowin-buttons">
            <span className="hds-retrowin-btn" aria-hidden="true">
              _
            </span>
            <span className="hds-retrowin-btn" aria-hidden="true">
              □
            </span>
            <button
              type="button"
              ref={closeRef}
              className="hds-retrowin-btn hds-retrowin-btn--close"
              onClick={onClose}
              aria-label={copy.retro.closeAria}
            >
              ×
            </button>
          </div>
        </div>
        <div className="hds-retrowin-viewport">
          <iframe
            src={site.src}
            title={site.windowTitle}
            width={800}
            height={600}
            className="hds-retrowin-iframe"
          />
        </div>
        <div className="hds-retrowin-statusbar">{copy.retro.resolutionNote}</div>
      </div>
    </div>
  );
}
