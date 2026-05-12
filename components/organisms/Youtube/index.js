import Image from "next/image";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YoutubeFacade from "../../molecules/YoutubeFacade";

export const Youtube = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
      aria-labelledby="youtube-heading"
    >
      <Image
        src="/flames.jpg"
        alt="Flames background representing the energy of HIJOS DEL SOL"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-right md:object-center"
      />
      <div className="mx-auto w-full px-6 lg:px-8 max-w-[70%] justify-center flex flex-col items-center">
        <h2
          id="youtube-heading"
          className="mx-auto w-full sm:w-[100%] md:w-[100%] lg:w-[100%] lg:mx-0 flex justify-center mt-[0px] mb-[30px] md:mb-[20px] lg:mb-[30px] text-[20px] sm:text-[30px] md:text-[45px] lg:text-[60px]"
          data-aos="zoom-in"
        >
          Follow us on YouTube
        </h2>
      </div>
      <div className="w-full flex justify-center mt-[0px] mb-[0px]">
        <div className="max-w-[800px]" data-aos="zoom-in" data-aos-delay="500">
          <YoutubeFacade
            videoId="u7U0ZQT4py4"
            title="HIJOS DEL SOL - Official music video on YouTube"
          />
        </div>
      </div>
      <div
        className="w-full flex justify-center mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[40px] mb-[0px] items-center text-lg sm:text-2xl"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        Subscribe and follow us on
        <a
          href="https://www.youtube.com/@hijosdelsolband"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit HIJOS DEL SOL YouTube channel"
          className="inline-flex items-center"
        >
          <FontAwesomeIcon icon={faYoutube} className="cardYT" />
        </a>
      </div>
    </section>
  );
};

export default Youtube;
