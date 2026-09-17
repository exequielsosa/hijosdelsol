import { EnsayoTrack } from "@/components";
import SeoEnsayoTrack from "../../seo/ensayo-track";
import { ENSAYOS } from "@/data/ensayos";

export default function EnsayoTrackRoute({ track }) {
  return (
    <>
      <SeoEnsayoTrack track={track} />
      <EnsayoTrack track={track} />
    </>
  );
}

/**
 * Con i18n hay que devolver una entrada por cada combinacion de slug e
 * idioma (igual que pages/lyrics/[slug].js): sin eso, fallback:false deja
 * en 404 todo lo que no sea el idioma por defecto.
 */
export function getStaticPaths({ locales }) {
  return {
    paths: locales.flatMap((locale) =>
      ENSAYOS.map((track) => ({ params: { slug: track.slug }, locale }))
    ),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const track = ENSAYOS.find((t) => t.slug === params.slug);
  if (!track) return { notFound: true };
  return { props: { track } };
}
