import { useState } from "react";
import Image from "next/image";
import useCopy from "@/hooks/useCopy";
import RetroWindow from "../../molecules/RetroWindow";

export default function Retro() {
  const { copy } = useCopy();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="retro" className="hds-retro" aria-labelledby="retro-heading">
      <div className="hds-retrobg" aria-hidden="true">
        <Image
          src="/backold.jpg"
          alt=""
          fill
          quality={45}
          sizes="100vw"
          loading="lazy"
        />
        <div className="hds-retrobg-veil" />
      </div>
      <div className="hds-retro-glow" aria-hidden="true" />
      <div className="hds-retro-inner" data-reveal>
        <span className="hds-eyebrow">{copy.retro.eyebrow}</span>
        <h2 id="retro-heading" className="hds-h2 hds-retro-h2">
          {copy.retro.titleLine1}
          <br />
          {copy.retro.titleLine2}
        </h2>
        <p className="hds-retro-p">{copy.retro.intro}</p>
        <div className="hds-retro-grid">
          {copy.retro.sites.map((site, index) => (
            <div className="hds-retro-card" key={site.year}>
              <span className="hds-retro-card-year">{site.year}</span>
              <h3 className="hds-retro-card-title">{site.title}</h3>
              <p className="hds-retro-card-p">{site.blurb}</p>
              <button
                type="button"
                className="hds-retro-cta"
                onClick={() => setOpenIndex(index)}
                aria-label={site.ctaAria}
              >
                {site.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
      {openIndex !== null && (
        <RetroWindow
          site={copy.retro.sites[openIndex]}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
