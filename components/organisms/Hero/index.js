import Image from "next/image";
import { HERO_LINE } from "@/data/site";

/**
 * La única pantalla clara del sitio. El orden de capas importa:
 * portada → anillo → velo superior → fundido inferior a negro → scrim de
 * legibilidad detrás del texto. Sin el scrim la tipografía no se lee.
 */
export default function Hero() {
  return (
    <section id="top" className="hds-hero">
      <Image
        src="/portada2026.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="hds-hero-art"
      />
      <div className="hds-hero-ring" aria-hidden="true" />
      <div className="hds-hero-veil" aria-hidden="true" />
      <div className="hds-hero-scrim" aria-hidden="true" />
      <div className="hds-hero-fade" aria-hidden="true" />

      <div className="hds-hero-inner">
        <span className="hds-hero-eyebrow">Metal · Argentina · Since 1998</span>
        <h1 className="hds-hero-logo-wrap">
          <Image
            src="/logo-red.png"
            alt="HIJOS DEL SOL"
            width={1771}
            height={306}
            priority
            sizes="(max-width: 1064px) 92vw, 980px"
            className="hds-hero-logo"
          />
        </h1>
        <p className="hds-hero-p">{HERO_LINE}</p>
        <div className="hds-hero-buttons">
          <a href="#disco" className="hds-btn hds-btn--solid">
            Listen to the demo
          </a>
          <a href="#video" className="hds-btn hds-btn--ghost">
            Watch the video
          </a>
        </div>
      </div>

      <div className="hds-scroll" aria-hidden="true">
        Scroll
      </div>
    </section>
  );
}
