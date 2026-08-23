import { Track } from "@/components";
import SeoTrack from "../../seo/track";
import { LYRIC_TRACKS } from "@/data/tracks";

export default function TrackRoute({ track }) {
  return (
    <>
      <SeoTrack track={track} />
      <Track track={track} />
    </>
  );
}

/**
 * Con i18n, Next NO replica solo los paths dinámicos a los demás idiomas:
 * hay que devolver una entrada por cada combinación de slug e idioma, con su
 * campo `locale`. Sin eso, `fallback: false` deja en 404 todo lo que no sea el
 * idioma por defecto.
 */
export function getStaticPaths({ locales }) {
  return {
    paths: locales.flatMap((locale) =>
      LYRIC_TRACKS.map((track) => ({ params: { slug: track.slug }, locale }))
    ),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const track = LYRIC_TRACKS.find((t) => t.slug === params.slug);
  if (!track) return { notFound: true };
  return { props: { track } };
}
