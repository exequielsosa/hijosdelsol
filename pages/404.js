import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GrainOverlay } from "@/components";
import useCopy from "@/hooks/useCopy";

export default function Custom404() {
  const { copy } = useCopy();

  return (
    <>
      <Head>
        <title>{copy.notFound.metaTitle}</title>
        <meta name="description" content={copy.notFound.metaDescription} />
        <meta name="robots" content="noindex, follow" />
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
            <h1 className="hds-track-h1">{copy.notFound.title}</h1>
            <p className="hds-channel-p">{copy.notFound.blurb}</p>
            <Link href="/" className="hds-channel-cta">
              {copy.notFound.back}
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
