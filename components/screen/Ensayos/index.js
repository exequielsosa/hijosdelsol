import GrainOverlay from "../../atoms/GrainOverlay";
import SiteHeader from "../../molecules/SiteHeader";
import SiteFooter from "../../molecules/SiteFooter";
import BackToTop from "../../molecules/BackToTop";
import EnsayosPage from "../../organisms/EnsayosPage";
import useScrollReveal from "@/hooks/useScrollReveal";

export const Ensayos = () => {
  // Igual que en History: sin el hook, el footer queda en opacity 0
  useScrollReveal();

  return (
    <div className="hds">
      <GrainOverlay />
      <SiteHeader forceDark />
      <main>
        <EnsayosPage />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default Ensayos;
