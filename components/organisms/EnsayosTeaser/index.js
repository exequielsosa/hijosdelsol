import Image from "next/image";
import Link from "next/link";
import useCopy from "@/hooks/useCopy";

export default function EnsayosTeaser() {
  const { copy } = useCopy();

  return (
    <section
      id="ensayos-teaser"
      className="hds-ensayosteaser"
      aria-labelledby="ensayosteaser-heading"
    >
      <div className="hds-ensayosteaserbg" aria-hidden="true">
        <Image
          src="/ensayosback.jpg"
          alt=""
          fill
          quality={45}
          sizes="100vw"
          loading="lazy"
        />
        <div className="hds-ensayosteaserbg-veil" />
      </div>
      <div className="hds-ensayosteaser-glow" aria-hidden="true" />
      <div className="hds-ensayosteaser-inner" data-reveal>
        <span className="hds-eyebrow">{copy.ensayosTeaser.eyebrow}</span>
        <h2 id="ensayosteaser-heading" className="hds-h2 hds-ensayosteaser-h2">
          {copy.ensayosTeaser.titleLine1}
          <br />
          {copy.ensayosTeaser.titleLine2}
        </h2>
        <p className="hds-ensayosteaser-p">{copy.ensayosTeaser.blurb}</p>
        <Link href="/ensayos" className="hds-ensayosteaser-cta">
          {copy.ensayosTeaser.cta}
        </Link>
      </div>
    </section>
  );
}
