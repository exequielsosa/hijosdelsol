import GrainOverlay from "../../atoms/GrainOverlay";
import SiteHeader from "../../molecules/SiteHeader";
import SiteFooter from "../../molecules/SiteFooter";
import TrackPage from "../../organisms/TrackPage";

export const Track = ({ track }) => (
  <div className="hds">
    <GrainOverlay />
    <SiteHeader forceDark />
    <main>
      {/* key por slug: al ir a prev/next el reproductor vuelve al poster */}
      <TrackPage key={track.slug} track={track} />
    </main>
    <SiteFooter />
  </div>
);

export default Track;
