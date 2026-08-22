import Head from "next/head";
import { SITE_URL, watchTrackUrl } from "@/data/site";

/**
 * <head> de una página de tema. La imagen social es el arte propio del tema.
 * La letra va en el JSON-LD como MusicRecording > recordingOf > lyrics.
 */
const SeoTrack = ({ track }) => {
  const url = `${SITE_URL}/lyrics/${track.slug}`;
  const watchUrl = watchTrackUrl(track);
  const cover = `${SITE_URL}${track.cover}`;
  const title = `${track.title} — Lyrics | HIJOS DEL SOL | Demo'98`;
  const description = `Full lyrics of "${track.title}", track ${Number(
    track.n
  )} of Demo'98 by HIJOS DEL SOL, Argentine metal band. The original 1998 text, untouched.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicRecording",
        "@id": `${url}#recording`,
        name: track.title,
        url,
        image: cover,
        position: Number(track.n),
        inLanguage: track.lang === "ES" ? "es" : "en",
        byArtist: { "@id": `${SITE_URL}/#organization` },
        inAlbum: { "@id": `${SITE_URL}/#demo98` },
        recordingOf: {
          "@type": "MusicComposition",
          name: track.title,
          lyrics: {
            "@type": "CreativeWork",
            text: track.lyrics,
            inLanguage: track.lang === "ES" ? "es" : "en",
          },
        },
        sameAs: watchUrl,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#recording` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: cover,
          width: 1254,
          height: 1254,
        },
        inLanguage: "en-US",
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "HIJOS DEL SOL",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Demo'98 lyrics",
            item: `${SITE_URL}/#letras`,
          },
          { "@type": "ListItem", position: 3, name: track.title },
        ],
      },
    ],
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1"
      />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      <meta property="og:type" content="music.song" />
      <meta property="og:site_name" content="HIJOS DEL SOL" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={cover} />
      <meta property="og:image:secure_url" content={cover} />
      <meta property="og:image:width" content="1254" />
      <meta property="og:image:height" content="1254" />
      <meta
        property="og:image:alt"
        content={`${track.title} — Demo'98 cover art`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="music:album" content={`${SITE_URL}/#demo98`} />
      <meta property="music:musician" content={SITE_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hijosdelsolband" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={cover} />
      <meta
        name="twitter:image:alt"
        content={`${track.title} — Demo'98 cover art`}
      />

      <meta name="author" content="HIJOS DEL SOL" />
      <meta name="geo.region" content="AR" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="HIJOS DEL SOL" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SeoTrack;
