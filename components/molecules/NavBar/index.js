import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faSquareFacebook,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "fixed top-0 z-40 w-full",
        navbar
          ? "bg-[#151515] bg-color-transition bg-opacity-60"
          : "bg-transparent"
      )}
    >
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
            </div>
            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              <div
                className={`${
                  navbar ? "flex" : "hidden"
                } "flex flex-shrink-0 items-center"`}
                data-aos="zoom-in"
              >
                <img
                  className={`h-6 sm:h-8 w-auto`}
                  src="/hijosdelsolWhite.png"
                  alt="Your Company"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex justify-center space-x-10">
                <div className="flex flex-shrink-0 items-center">
                  <div className="flex w-full items-center">
                    <p
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/@hijosdelsolband",
                          "_blank"
                        )
                      }
                      data-aos="zoom-in"
                    >
                      <FontAwesomeIcon
                        icon={faSquareYoutube}
                        className="cardNav"
                      />
                    </p>
                    <p
                      onClick={() =>
                        window.open(
                          "https://twitter.com/hijosdelsolband",
                          "_blank"
                        )
                      }
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <FontAwesomeIcon icon={faXTwitter} className="cardNav" />
                    </p>
                    <p
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/hijosdelsolmusicband/",
                          "_blank"
                        )
                      }
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="cardNav" />
                    </p>
                    <p
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/hijosdelsolmusic",
                          "_blank"
                        )
                      }
                      data-aos="zoom-in"
                      data-aos-delay="900"
                    >
                      <FontAwesomeIcon
                        icon={faSquareFacebook}
                        className="cardNav"
                      />
                    </p>
                    <a
                      href="mailto:hijosdelsolmusicband@gmail.com"
                      target="_blank"
                      data-aos="zoom-in"
                      data-aos-delay="1200"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="cardNav" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
