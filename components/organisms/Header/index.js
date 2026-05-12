import Image from "next/image";

export default function Header() {
  return (
    <header className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <h1 className="sr-only">
        HIJOS DEL SOL — Argentine Metal Band — Demo&apos;98
      </h1>
      <Image
        src="/flames2.jpg"
        alt="Burning flames background representing the energy of metal"
        fill
        sizes="100vw"
        priority
        className="-z-10 object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto w-full px-6 lg:px-8 max-w-[70%] justify-center flex flex-col items-center">
        <div className="mx-auto w-full lg:w-[80%] lg:mx-0" data-aos="fade-down">
          <Image
            src="/hijosdelsol2crop.png"
            alt="HIJOS DEL SOL - Official band logo"
            width={3560}
            height={480}
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex justify-center">
          <div
            className="sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%]"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Image
              src="/devil.png"
              alt="HIJOS DEL SOL emblematic symbol - Devil figure representing the essence of metal"
              width={1367}
              height={1495}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 40vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
