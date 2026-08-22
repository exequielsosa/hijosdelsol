import GrainOverlay from "../../atoms/GrainOverlay";
import SiteHeader from "../../molecules/SiteHeader";
import Marquee from "../../molecules/Marquee";
import SiteFooter from "../../molecules/SiteFooter";
import Hero from "../../organisms/Hero";
import Record from "../../organisms/Record";
import LyricsNotebook from "../../organisms/LyricsNotebook";
import VideoSection from "../../organisms/VideoSection";
import Channel from "../../organisms/Channel";
import useScrollReveal from "@/hooks/useScrollReveal";

export const Home = () => {
  useScrollReveal();

  return (
    <div className="hds">
      <GrainOverlay />
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Record />
        <LyricsNotebook />
        <VideoSection />
        <Channel />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Home;
