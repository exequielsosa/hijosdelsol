import NavBar from "../../molecules/NavBar";
import Header from "../../organisms/Header";
import DownloadDemo from "../../organisms/DownloadDemo";
import { Youtube } from "@/components/organisms";
import { Footer } from "@/components/molecules";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <DownloadDemo />
      <Youtube />
      <Footer />
    </>
  );
};

export default Home;
