import { useState } from "react";

import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
  "Loves Comes Tonight",
  "Cry",
  "All",
  "Noise",
  "My Fault",
  "Nadie Escucha",
  "La Primera",
  "Te Quiero",
  "Inside Tomorrow",
  "Nadie Escucha",
  "Don't Tell Me Lies",
  "Mama",
  "Never Know",
  "Excellent",
];

export default function DownloadDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50"></header>

      <div className="relative isolate overflow-hidden pt-20 pb-20">
        <img
          src="/fire.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="relative isolate" data-aos="fade-up">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="/soloTapa.png"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="600"
              />
              <div className="w-full flex-auto">
                <h2
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-['Kaushan_Script']"
                  data-aos="zoom-in"
                >
                  Demo'98
                </h2>
                <p
                  className="mt-6 text-lg leading-8 text-gray-300"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  🤘 Unleash the power of metal with our exclusive demo
                  "Demo'98." Dive into the raw intensity and resonant melancholy
                  of our early sounds. Revolutionize your metal experience now!
                  🎸🔥
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="h-7 w-5 flex-none"
                        aria-hidden="true"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-start">
                  <div
                    className="mt-10 flex"
                    data-aos="zoom-in"
                    data-aos-delay="1200"
                  >
                    <a
                      href="https://files.catbox.moe/y8r65l.rar"
                      className="text-sm font-semibold leading-6 text-indigo-400 hover:underline"
                    >
                      Download record <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                  <div
                    className="mt-10 flex ml-10"
                    data-aos="zoom-in"
                    data-aos-delay="1500"
                  >
                    <a
                      href="https://files.catbox.moe/z8ale0.rar"
                      className="text-sm font-semibold leading-6 text-indigo-400 hover:underline"
                    >
                      Download artwork <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
