import GrainOverlay from "../../atoms/GrainOverlay";
import SiteHeader from "../../molecules/SiteHeader";
import Marquee from "../../molecules/Marquee";
import SiteFooter from "../../molecules/SiteFooter";
import BackToTop from "../../molecules/BackToTop";
import Hero from "../../organisms/Hero";
import Record from "../../organisms/Record";
import LyricsNotebook from "../../organisms/LyricsNotebook";
import EnsayosTeaser from "../../organisms/EnsayosTeaser";
import VideoSection from "../../organisms/VideoSection";
import Channel from "../../organisms/Channel";
import Retro from "../../organisms/Retro";
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
        <EnsayosTeaser />
        <VideoSection />
        <Channel />
        <Retro />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default Home;
