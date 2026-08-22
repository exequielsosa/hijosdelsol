import Image from "next/image";
import { YOUTUBE_URL } from "@/data/site";

export default function Channel() {
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
        <span className="hds-eyebrow">05 — The channel</span>
        <h2 id="channel-heading" className="hds-h2 hds-channel-h2">
          The whole archive
          <br />
          lives on YouTube
        </h2>
        <p className="hds-channel-p">
          Tracks, rehearsals and period material. Subscribe and hit the bell —
          everything that turns up from the vault goes there first.
        </p>
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hds-channel-cta"
        >
          <span className="hds-yt" aria-hidden="true" />
          Go to the channel
        </a>
      </div>
    </section>
  );
}
