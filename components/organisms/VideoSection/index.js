import Image from "next/image";
import YoutubeFrame from "../../molecules/YoutubeFrame";
import useCopy from "@/hooks/useCopy";
import { VIDEO_ID, VIDEO_TRACK_TITLE } from "@/data/site";

export default function VideoSection() {
  const { copy } = useCopy();
  const title = `HIJOS DEL SOL — "${VIDEO_TRACK_TITLE}" (Demo '98)`;

  return (
    <section
      id="video"
      className="hds-videosec"
      aria-labelledby="video-heading"
    >
      <div className="hds-videobg" aria-hidden="true">
        <Image
          src="/luna_de_fuego.jpg"
          alt=""
          fill
          quality={45}
          sizes="100vw"
          loading="lazy"
        />
        <div className="hds-videobg-veil" />
      </div>

      <div className="hds-shell hds-videoshell">
        <div className="hds-videohead" data-reveal>
          <div>
            <span className="hds-eyebrow">{copy.video.eyebrow}</span>
            {/* El titulo es el nombre del tema: no se traduce */}
            <h2 id="video-heading" className="hds-h2 hds-video-h2">
              {VIDEO_TRACK_TITLE}
            </h2>
          </div>
          <p>{copy.video.blurb}</p>
        </div>

        <div data-reveal>
          <YoutubeFrame
            videoId={VIDEO_ID}
            title={title}
            playAria={copy.video.playAria(title)}
            frameClassName="hds-videocard"
            embedClassName="hds-embed"
          >
            <span className="hds-videocard-wash" aria-hidden="true" />
            <Image
              src="/covers/01.png"
              alt=""
              aria-hidden="true"
              width={1367}
              height={1495}
              sizes="(max-width: 1180px) 60vw, 700px"
              className="hds-videocard-devil"
            />
            {/* <Image
              src="/logo-white.png"
              alt=""
              aria-hidden="true"
              width={1771}
              height={249}
              sizes="(max-width: 1180px) 46vw, 540px"
              className="hds-videocard-logo"
            /> */}
            <span className="hds-play" aria-hidden="true">
              <i />
            </span>
            <span className="hds-videocard-label">
              {copy.video.watchOnYoutube}
            </span>
          </YoutubeFrame>
        </div>
      </div>
    </section>
  );
}
