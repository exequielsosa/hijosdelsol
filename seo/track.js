import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_URL, watchTrackUrl, VIDEOS_UPLOAD_DATE } from "@/data/site";
import { getSeoCopy, localeUrl, alternates } from "@/data/seo-copy";

/**
 * <head> de una página de tema. La imagen social es el arte propio del tema.
 *
 * `inLanguage` del MusicRecording sale del idioma de LA LETRA (`track.lang`),
 * no del idioma del sitio: la misma letra se muestra igual en las dos
 * versiones y no cambia de idioma según quién la mire.
 */
const SeoTrack = ({ track }) => {
  const { locale } = useRouter();
  const seo = getSeoCopy(locale);

  const path = `/lyrics/${track.slug}`;
  const url = localeUrl(locale, path);
  const watchUrl = watchTrackUrl(track);
  const cover = `${SITE_URL}${track.cover}`;
  const title = seo.track.title(track);
  const description = seo.track.description(track);
  const lyricsLang = track.lang === "ES" ? "es" : "en";
  const imageAlt = seo.imageAlt(track.title);
  const blurb = track.blurb?.[locale] ?? track.blurb?.es;
  const videoName = `HIJOS DEL SOL — ${track.title} (Demo '98)`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      ...(track.video
        ? [
            {
              "@type": "VideoObject",
              "@id": `${url}#video`,
              name: videoName,
              description: blurb ?? description,
              thumbnailUrl: cover,
              // Los 12 se subieron el mismo dia; -03:00 es Argentina
              uploadDate: `${VIDEOS_UPLOAD_DATE}T00:00:00-03:00`,
              ...(track.duration ? { duration: track.duration } : {}),
              embedUrl: `https://www.youtube.com/embed/${track.video}`,
              contentUrl: watchUrl,
              publisher: { "@id": `${SITE_URL}/#organization` },
              inLanguage: lyricsLang,
            },
          ]
        : []),
      {
        "@type": "MusicRecording",
        "@id": `${url}#recording`,
        name: track.title,
        url,
        image: cover,
        position: Number(track.n),
        inLanguage: lyricsLang,
        byArtist: { "@id": `${SITE_URL}/#organization` },
        inAlbum: { "@id": `${SITE_URL}/#demo98` },
        recordingOf: {
          "@type": "MusicComposition",
          name: track.title,
          lyrics: {
            "@type": "CreativeWork",
            text: track.lyrics,
            inLanguage: lyricsLang,
          },
        },
        sameAs: watchUrl,
        ...(track.video ? { video: { "@id": `${url}#video` } } : {}),
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
        inLanguage: seo.inLanguage,
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Hijos del Sol",
            item: localeUrl(locale, "/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Demo '98",
            item: `${localeUrl(locale, "/")}#letras`,
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

      {alternates(path).map((alt) => (
        <link
          key={alt.hrefLang}
          rel="alternate"
          hrefLang={alt.hrefLang}
          href={alt.href}
        />
      ))}

      <meta property="og:type" content="music.song" />
      <meta property="og:site_name" content="HIJOS DEL SOL" />
      <meta property="og:locale" content={seo.ogLocale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={cover} />
      <meta property="og:image:secure_url" content={cover} />
      <meta property="og:image:width" content="1254" />
      <meta property="og:image:height" content="1254" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:type" content="image/png" />
      <meta property="music:album" content={`${SITE_URL}/#demo98`} />
      <meta property="music:musician" content={SITE_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={cover} />
      <meta name="twitter:image:alt" content={imageAlt} />

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
