import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 — Page Not Found | HIJOS DEL SOL</title>
        <meta
          name="description"
          content="The page you are looking for does not exist on hijosdelsol.com.ar."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.hijosdelsol.com.ar/404" />
      </Head>
      <main className="relative isolate min-h-screen overflow-hidden bg-gray-900 flex items-center justify-center px-6">
        <Image
          src="/flames.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="-z-10 object-cover opacity-60"
          aria-hidden="true"
        />
        <div className="text-center max-w-2xl mx-auto py-24">
          <Image
            src="/hijosdelsolWhite.png"
            alt="HIJOS DEL SOL"
            width={1771}
            height={249}
            priority
            sizes="(max-width: 640px) 240px, 320px"
            className="mx-auto w-60 sm:w-80 h-auto mb-12"
          />
          <h1 className="text-4xl sm:text-6xl font-['Megrim'] text-white mb-6">
            404 — Lost in the flames
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-10">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-white/10 hover:bg-white/20 ring-1 ring-white/30 text-white px-8 py-3 rounded-full transition-colors"
          >
            Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
