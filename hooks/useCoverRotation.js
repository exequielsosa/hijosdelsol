import { useEffect, useRef, useState } from "react";

const INTERVAL = 6000;

/**
 * Rotación del fondo de covers.
 *
 * - Avanza sola cada 6s, pero solo mientras la sección está en pantalla:
 *   no tiene sentido re-renderizar por un fondo que nadie ve.
 * - El hover (o el foco) sobre una fila del tracklist manda: fija ese cover y
 *   pausa la rotación hasta que el puntero se va.
 * - Con `prefers-reduced-motion` no rota sola; el hover sigue funcionando
 *   porque es una respuesta a la acción del usuario, no movimiento automático.
 */
export default function useCoverRotation(count) {
  const sectionRef = useRef(null);
  const [auto, setAuto] = useState(0);
  const [pinned, setPinned] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || pinned !== null || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setAuto((i) => (i + 1) % count),
      INTERVAL
    );
    return () => window.clearInterval(id);
  }, [visible, pinned, count]);

  return {
    sectionRef,
    activeIndex: pinned ?? auto,
    pin: setPinned,
    unpin: () => setPinned(null),
  };
}
