import Head from "next/head";
import { useRouter } from "next/router";
import { ALBUM } from "@/data/tracks";
import {
  SITE_URL,
  CONTENT_LAST_MODIFIED,
  VIDEO_ID,
  SOCIAL_PROFILES,
} from "@/data/site";
import { getSeoCopy, localeUrl, alternates } from "@/data/seo-copy";

const SITE_LAST_MODIFIED = `${CONTENT_LAST_MODIFIED}T00:00:00+00:00`;

// La portada 2026 es el hero del sitio: sirve tambien de imagen social
const OG_IMAGE = `${SITE_URL}/portada2026.png`;
const OG_IMAGE_W = 1672;
const OG_IMAGE_H = 941;

const SeoHome = () => {
  const { locale } = useRouter();
  const seo = getSeoCopy(locale);
  const url = localeUrl(locale, "/");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": `${SITE_URL}/#organization`,
        name: "HIJOS DEL SOL",
        alternateName: "Hijos del Sol",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/hijosdelsol.png`,
          width: 512,
          height: 512,
        },
        image: {
          "@type": "ImageObject",
          url: OG_IMAGE,
          width: OG_IMAGE_W,
          height: OG_IMAGE_H,
        },
        description: seo.orgDescription,
        genre: ["Heavy Metal", "Metal", "Rock"],
        // La banda arranco alrededor de 1993; 1998 es el año del demo, no el
        // de la formacion (dato del usuario, 2026-08-22)
        foundingDate: "1993",
        foundingLocation: {
          "@type": "Place",
          name: "Buenos Aires, Argentina",
        },
        sameAs: SOCIAL_PROFILES,
        member: [
          {
            "@type": "OrganizationRole",
            roleName: ["Vocals", "Guitar"],
            member: { "@type": "Person", name: "Exequiel Sosa" },
          },
          {
            "@type": "OrganizationRole",
            roleName: "Bass",
            member: { "@type": "Person", name: "Rodrigo Vieiro" },
          },
          {
            "@type": "OrganizationRole",
            roleName: ["Drums", "Guitar"],
            member: { "@type": "Person", name: "Gonzalo Martinez" },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "HIJOS DEL SOL",
        description: seo.home.description,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["es-AR", "en-US"],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: seo.home.title,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: OG_IMAGE,
          width: OG_IMAGE_W,
          height: OG_IMAGE_H,
        },
        datePublished: "1998-01-01T00:00:00+00:00",
        dateModified: SITE_LAST_MODIFIED,
        description: seo.home.description,
        inLanguage: seo.inLanguage,
      },
      {
        "@type": "MusicAlbum",
        "@id": `${SITE_URL}/#demo98`,
        name: "Demo'98",
        byArtist: { "@id": `${SITE_URL}/#organization` },
        albumProductionType: "https://schema.org/DemoAlbum",
        albumReleaseType: "https://schema.org/AlbumRelease",
        datePublished: "1998",
        genre: ["Heavy Metal", "Metal"],
        image: `${SITE_URL}/soloTapa.png`,
        description: seo.albumDescription,
        numTracks: ALBUM.length,
        track: ALBUM.map((track) => ({
          "@type": "MusicRecording",
          ...(track.instrumental
            ? {}
            : { "@id": `${localeUrl(locale, `/lyrics/${track.slug}`)}#recording` }),
          name: track.title,
          position: Number(track.n),
          ...(track.instrumental
            ? {}
            : {
                url: localeUrl(locale, `/lyrics/${track.slug}`),
                image: `${SITE_URL}${track.cover}`,
              }),
          byArtist: { "@id": `${SITE_URL}/#organization` },
          inAlbum: { "@id": `${SITE_URL}/#demo98` },
        })),
      },
    ],
  };

  return (
    <Head>
      <title>{seo.home.title}</title>
      <meta name="description" content={seo.home.description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href={url} />

      {alternates("/").map((alt) => (
        <link
          key={alt.hrefLang}
          rel="alternate"
          hrefLang={alt.hrefLang}
          href={alt.href}
        />
      ))}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="HIJOS DEL SOL" />
      <meta property="og:locale" content={seo.ogLocale} />
      <meta property="og:title" content={seo.home.title} />
      <meta property="og:description" content={seo.home.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:secure_url" content={OG_IMAGE} />
      <meta property="og:image:width" content={String(OG_IMAGE_W)} />
      <meta property="og:image:height" content={String(OG_IMAGE_H)} />
      <meta property="og:image:alt" content="HIJOS DEL SOL — Demo '98" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:video" content={`https://www.youtube.com/watch?v=${VIDEO_ID}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.home.title} />
      <meta name="twitter:description" content={seo.home.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="HIJOS DEL SOL — Demo '98" />

      <meta name="author" content="HIJOS DEL SOL" />

      {/* Geographic Tags */}
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Argentina" />

      {/* Mobile App Meta */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="HIJOS DEL SOL" />

      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SeoHome;
