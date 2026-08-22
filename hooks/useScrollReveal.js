import { useEffect } from "react";

/**
 * Revela con un fade+translate los elementos marcados con [data-reveal].
 * Una sola pasada: al entrar en viewport se les agrega .is-revealed y se
 * dejan de observar. El hero queda excluido (nunca lleva data-reveal).
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll("[data-reveal]:not(.is-revealed)")
    );
    if (!targets.length) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
