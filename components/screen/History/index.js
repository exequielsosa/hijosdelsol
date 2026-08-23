import GrainOverlay from "../../atoms/GrainOverlay";
import SiteHeader from "../../molecules/SiteHeader";
import SiteFooter from "../../molecules/SiteFooter";
import HistoryPage from "../../organisms/HistoryPage";
import useScrollReveal from "@/hooks/useScrollReveal";

export const History = () => {
  // Igual que en Track: sin el hook, el footer queda en opacity 0
  useScrollReveal();

  return (
    <div className="hds">
      <GrainOverlay />
      <SiteHeader forceDark />
      <main>
        <HistoryPage />
      </main>
      <SiteFooter />
    </div>
  );
};

export default History;
