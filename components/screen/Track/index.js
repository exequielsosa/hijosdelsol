import GrainOverlay from "../../atoms/GrainOverlay";
import SiteHeader from "../../molecules/SiteHeader";
import SiteFooter from "../../molecules/SiteFooter";
import TrackPage from "../../organisms/TrackPage";
import useScrollReveal from "@/hooks/useScrollReveal";

export const Track = ({ track }) => {
  // El reveal es de todo el sitio, no solo de la home: sin el hook, cualquier
  // [data-reveal] de esta pantalla (el footer) se queda en opacity 0.
  // Depende del slug para volver a correr al navegar entre temas.
  useScrollReveal([track.slug]);

  return (
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
};

export default Track;
