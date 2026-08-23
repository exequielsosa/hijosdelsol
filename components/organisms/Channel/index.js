import Image from "next/image";
import useCopy from "@/hooks/useCopy";
import { YOUTUBE_URL } from "@/data/site";

export default function Channel() {
  const { copy } = useCopy();

  return (
    <section id="canal" className="hds-channel" aria-labelledby="channel-heading">
      <div className="hds-channelbg" aria-hidden="true">
        <Image
          src="/backyoutube.jpg"
          alt=""
          fill
          quality={45}
          sizes="100vw"
          loading="lazy"
        />
        <div className="hds-channelbg-veil" />
      </div>
      <div className="hds-channel-glow" aria-hidden="true" />
      <div className="hds-channel-inner" data-reveal>
        <span className="hds-eyebrow">{copy.channel.eyebrow}</span>
        <h2 id="channel-heading" className="hds-h2 hds-channel-h2">
          {copy.channel.titleLine1}
          <br />
          {copy.channel.titleLine2}
        </h2>
        <p className="hds-channel-p">{copy.channel.blurb}</p>
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hds-channel-cta"
        >
          <span className="hds-yt" aria-hidden="true" />
          {copy.channel.cta}
        </a>
      </div>
    </section>
  );
}
