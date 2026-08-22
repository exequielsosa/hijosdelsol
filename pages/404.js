import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GrainOverlay } from "@/components";

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
      <div className="hds">
        <GrainOverlay />
        <main className="hds-404">
          <div className="hds-404-glow" aria-hidden="true" />
          <div className="hds-404-inner">
            <Image
              src="/logo-white.png"
              alt="HIJOS DEL SOL"
              width={1771}
              height={249}
              priority
              sizes="(max-width: 640px) 260px, 380px"
              className="hds-404-logo"
            />
            <span className="hds-songnum">404</span>
            <h1 className="hds-track-h1">Lost in the flames</h1>
            <p className="hds-channel-p">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/" className="hds-channel-cta">
              Back to the record
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
