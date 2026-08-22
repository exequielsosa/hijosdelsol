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

export function getStaticPaths() {
  return {
    paths: LYRIC_TRACKS.map((track) => ({ params: { slug: track.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const track = LYRIC_TRACKS.find((t) => t.slug === params.slug);
  if (!track) return { notFound: true };
  return { props: { track } };
}
