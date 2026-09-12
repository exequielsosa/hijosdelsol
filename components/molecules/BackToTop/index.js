import { useEffect, useState } from "react";
import useCopy from "@/hooks/useCopy";

const SHOW_AFTER = 220;

/** Aparece apenas se empieza a scrollear, se retrae al volver arriba. */
export default function BackToTop() {
  const { copy } = useCopy();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className="hds-totop"
      data-visible={visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={copy.backToTop.aria}
    >
      <span className="hds-totop-arrow" aria-hidden="true" />
    </button>
  );
}
