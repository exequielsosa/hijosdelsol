import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faSquareFacebook,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer className="bg-[url('/fireFooter.jpg')]">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav
            className="-mb-6 columns-2 flex justify-center sm:space-x-12 items-center w-full"
            aria-label="Footer"
          >
            <div className="pb-6 flex items-center" data-aos="zoom-in">
              <img
                src="/hijosdelsol2crop.png"
                alt="HIJOS DEL SOL - Official band logo"
                className="w-[300px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
                loading="lazy"
                width="400"
                height="100"
              />
            </div>
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            <div className="flex flex-shrink-0 items-center">
              <div className="flex w-full items-center">
                <a
                  href="https://www.youtube.com/@hijosdelsolband"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit HIJOS DEL SOL YouTube channel"
                  data-aos="zoom-in-right"
                  data-aos-delay="700"
                >
                  <FontAwesomeIcon
                    icon={faSquareYoutube}
                    className="cardMini"
                  />
                </a>
                <a
                  href="https://twitter.com/hijosdelsolband"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow HIJOS DEL SOL on Twitter/X"
                  data-aos="zoom-in-right"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="cardMini" />
                </a>
                <a
                  href="https://www.instagram.com/hijosdelsolmusicband/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow HIJOS DEL SOL on Instagram"
                  data-aos="zoom-in-up"
                >
                  <FontAwesomeIcon icon={faInstagram} className="cardMini" />
                </a>
                <a
                  href="https://www.facebook.com/hijosdelsolmusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow HIJOS DEL SOL on Facebook"
                  data-aos="zoom-in-left"
                >
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="cardMini"
                  />
                </a>
                <a
                  href="mailto:hijosdelsolmusicband@gmail.com"
                  aria-label="Email HIJOS DEL SOL"
                  data-aos="zoom-in-left"
                  data-aos-delay="700"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="cardMini" />
                </a>
              </div>
            </div>
          </div>
          <p
            className="mt-10 text-center text-base leading-5 text-[#fff] flex flex-col"
            data-aos="zoom-out-up"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            &copy; 2025 HIJOS DEL SOL, all rights reserved.
            <span className="mt-10 text-center text-base leading-5 text-[#fff]">
              Powered by{" "}
              <a
                href="https://www.custom-xs.com"
                target="_blank"
                className="mt-10 text-center text-base leading-5 text-[#fff] hover:text-[#f9d80a]"
              >
                custom-xs
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
