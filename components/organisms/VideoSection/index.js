import Image from "next/image";
import YoutubeFrame from "../../molecules/YoutubeFrame";
import CoverBackdrop from "../../molecules/CoverBackdrop";
import useCopy from "@/hooks/useCopy";
import useCoverRotation from "@/hooks/useCoverRotation";
import { VIDEO_ID, VIDEO_TRACK_TITLE } from "@/data/site";

/* La escena del estudio de Bravo Paraíso, en varias tomas que rotan solas
   (mismo mecanismo que el fondo de covers del disco): nunca es "un video
   aislado", es parte de la escena completa. */
const BACKLOVE_IMAGES = [
  "/backlove/backlove01.jpg",
  "/backlove/backlove02.jpg",
  "/backlove/backlove05.jpg",
  "/backlove/backlove07.jpg",
  "/backlove/backlove08.jpg",
  "/backlove/backlove09.jpg",
  "/backlove/backloves10.jpg",
].map((src, i) => ({ slug: `backlove-${i}`, cover: src }));

export default function VideoSection() {
  const { copy } = useCopy();
  const title = `HIJOS DEL SOL — "${VIDEO_TRACK_TITLE}" (Demo '98)`;
  const { sectionRef, activeIndex } = useCoverRotation(
    BACKLOVE_IMAGES.length
  );

  return (
    <section
      ref={sectionRef}
      id="video"
      className="hds-videosec"
      aria-labelledby="video-heading"
    >
      {/* En mobile CoverBackdrop no se monta (evita bajar 7 imagenes de mas):
          una sola toma fija, con el mismo "respira" del hero y la portada
          de tema (hds-pulse-art), en vez de quedar sin fondo. */}
      <div className="hds-videosinglebg" aria-hidden="true">
        <Image
          src="/backlove/backloves10.jpg"
          alt=""
          fill
          quality={45}
          sizes="100vw"
          loading="lazy"
        />
        <div className="hds-backdrop-veil" />
      </div>

      <CoverBackdrop covers={BACKLOVE_IMAGES} activeIndex={activeIndex} />

      <div className="hds-videoshell" data-reveal>
        <span className="hds-eyebrow">{copy.video.eyebrow}</span>
        {/* El titulo es el nombre del tema: no se traduce */}
        <h2 id="video-heading" className="hds-h2 hds-video-h2">
          {VIDEO_TRACK_TITLE}
        </h2>
        <p>{copy.video.blurb}</p>

        <div className="hds-videoplay-wrap">
          <span className="hds-video-annotation" aria-hidden="true">
            {copy.video.annotation}
          </span>
          <YoutubeFrame
            videoId={VIDEO_ID}
            title={title}
            playAria={copy.video.playAria(title)}
            frameClassName="hds-videoplay"
            embedClassName="hds-embed hds-videoembed"
          >
            <span
              className="hds-play hds-play--sm hds-play--inline"
              aria-hidden="true"
            >
              <i />
            </span>
            <span className="hds-videoplay-label">{copy.video.cta}</span>
          </YoutubeFrame>
        </div>
      </div>
    </section>
  );
}
