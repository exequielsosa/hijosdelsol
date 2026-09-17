import GrainOverlay from "../../atoms/GrainOverlay";
import SiteHeader from "../../molecules/SiteHeader";
import SiteFooter from "../../molecules/SiteFooter";
import BackToTop from "../../molecules/BackToTop";
import EnsayoTrackPage from "../../organisms/EnsayoTrackPage";
import useScrollReveal from "@/hooks/useScrollReveal";

export const EnsayoTrack = ({ track }) => {
  // Depende del slug para volver a correr al navegar entre temas (igual que Track)
  useScrollReveal([track.slug]);

  return (
    <div className="hds">
      <GrainOverlay />
      <SiteHeader forceDark />
      <main>
        {/* key por slug: al ir a prev/next el reproductor vuelve al poster */}
        <EnsayoTrackPage key={track.slug} track={track} />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default EnsayoTrack;
