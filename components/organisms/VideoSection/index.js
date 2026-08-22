import Image from "next/image";
import YoutubeFrame from "../../molecules/YoutubeFrame";
import { VIDEO_ID } from "@/data/site";

const TITLE = 'HIJOS DEL SOL — "Loves Comes Tonight" (Demo \'98)';

export default function VideoSection() {
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
            <span className="hds-eyebrow">04 — The video</span>
            <h2 id="video-heading" className="hds-h2 hds-video-h2">
              Loves Comes Tonight
            </h2>
          </div>
          <p>
            Love, desire and contradiction. A song about wanting someone even
            when everything around you feels a lot less romantic.
          </p>
        </div>

        <div data-reveal>
          <YoutubeFrame
            videoId={VIDEO_ID}
            title={TITLE}
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
            <span className="hds-videocard-label">Watch on YouTube</span>
          </YoutubeFrame>
        </div>
      </div>
    </section>
  );
}
