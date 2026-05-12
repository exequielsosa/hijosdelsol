import Head from "next/head";
import { TRACKS } from "@/data/tracks";

const SeoHome = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": "https://www.hijosdelsol.com.ar/#organization",
        name: "HIJOS DEL SOL",
        alternateName: "Hijos del Sol",
        url: "https://www.hijosdelsol.com.ar",
        logo: {
          "@type": "ImageObject",
          url: "https://www.hijosdelsol.com.ar/hijosdelsol.png",
          width: 512,
          height: 512,
        },
        image: {
          "@type": "ImageObject",
          url: "https://www.hijosdelsol.com.ar/devil.png",
          width: 1200,
          height: 630,
        },
        description:
          "HIJOS DEL SOL is an Argentine metal band founded in the 90s. Explore the raw energy and powerful sound of their music with Demo'98, a testament to the evolution of Argentine metal.",
        genre: ["Heavy Metal", "Metal", "Rock"],
        foundingDate: "1998",
        foundingLocation: {
          "@type": "Place",
          name: "Argentina",
        },
        sameAs: [
          "https://www.youtube.com/@hijosdelsolband",
          "https://twitter.com/hijosdelsolband",
          "https://www.instagram.com/hijosdelsolmusicband/",
          "https://www.facebook.com/hijosdelsolmusic",
        ],
        member: [
          {
            "@type": "OrganizationRole",
            roleName: ["Vocals", "Guitar"],
            member: {
              "@type": "Person",
              name: "Exequiel Sosa",
            },
          },
          {
            "@type": "OrganizationRole",
            roleName: "Bass",
            member: {
              "@type": "Person",
              name: "Rodrigo Vieiro",
            },
          },
          {
            "@type": "OrganizationRole",
            roleName: ["Drums", "Guitar"],
            member: {
              "@type": "Person",
              name: "Gonzalo Martinez",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.hijosdelsol.com.ar/#website",
        url: "https://www.hijosdelsol.com.ar",
        name: "HIJOS DEL SOL - Argentine Metal Band",
        description: "Official website of HIJOS DEL SOL, Argentine metal band",
        publisher: {
          "@id": "https://www.hijosdelsol.com.ar/#organization",
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.hijosdelsol.com.ar/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.hijosdelsol.com.ar/#webpage",
        url: "https://www.hijosdelsol.com.ar",
        name: "HIJOS DEL SOL | Argentine Metal Band | Demo'98",
        isPartOf: {
          "@id": "https://www.hijosdelsol.com.ar/#website",
        },
        about: {
          "@id": "https://www.hijosdelsol.com.ar/#organization",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.hijosdelsol.com.ar/devil.png",
          width: 1200,
          height: 630,
        },
        datePublished: "1998-01-01T00:00:00+00:00",
        dateModified: new Date().toISOString(),
        description:
          "HIJOS DEL SOL is an Argentine metal band founded in the 90s. Explore the raw energy and powerful sound of their music with Demo'98, a testament to the evolution of Argentine metal.",
        inLanguage: "en-US",
      },
      {
        "@type": "MusicAlbum",
        "@id": "https://www.hijosdelsol.com.ar/#demo98",
        name: "Demo'98",
        byArtist: {
          "@id": "https://www.hijosdelsol.com.ar/#organization",
        },
        albumReleaseType: "http://schema.org/AlbumRelease",
        datePublished: "1998",
        genre: ["Heavy Metal", "Metal"],
        image: "https://www.hijosdelsol.com.ar/soloTapa.png",
        description:
          "Demo'98 by HIJOS DEL SOL - A testament to the evolution of Argentine metal in the 90s",
        numTracks: TRACKS.length,
        track: TRACKS.map((title) => ({
          "@type": "MusicRecording",
          name: title,
          byArtist: {
            "@id": "https://www.hijosdelsol.com.ar/#organization",
          },
          inAlbum: {
            "@id": "https://www.hijosdelsol.com.ar/#demo98",
          },
        })),
      },
    ],
  };

  return (
    <Head>
      <title>
        HIJOS DEL SOL | Argentine Metal Band | Demo'98 | hijosdelsol.com.ar
      </title>
      <meta
        name="description"
        content="HIJOS DEL SOL is an Argentine metal band founded in the 90s. Explore the raw energy and powerful sound of their music with Demo'98, a testament to the evolution of Argentine metal."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href="https://www.hijosdelsol.com.ar/" />

      {/* Alternate Languages */}
      <link
        rel="alternate"
        hrefLang="en"
        href="https://www.hijosdelsol.com.ar/"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://www.hijosdelsol.com.ar/"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="HIJOS DEL SOL" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:title"
        content="HIJOS DEL SOL | Argentine Metal Band | Demo'98"
      />
      <meta
        property="og:description"
        content="HIJOS DEL SOL is an Argentine metal band founded in the 90s. Explore the raw energy and powerful sound of their music with Demo'98, a testament to the evolution of Argentine metal."
      />
      <meta property="og:url" content="https://www.hijosdelsol.com.ar/" />
      <meta
        property="og:image"
        content="https://www.hijosdelsol.com.ar/devil.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://www.hijosdelsol.com.ar/devil.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="HIJOS DEL SOL - Argentine metal band logo"
      />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hijosdelsolband" />
      <meta name="twitter:creator" content="@hijosdelsolband" />
      <meta
        name="twitter:title"
        content="HIJOS DEL SOL | Argentine Metal Band | Demo'98"
      />
      <meta
        name="twitter:description"
        content="HIJOS DEL SOL is an Argentine metal band founded in the 90s. Explore the raw energy and powerful sound of their music with Demo'98, a testament to the evolution of Argentine metal."
      />
      <meta
        name="twitter:image"
        content="https://www.hijosdelsol.com.ar/devil.png"
      />
      <meta
        name="twitter:image:alt"
        content="HIJOS DEL SOL - Argentine metal band logo"
      />

      {/* Additional Meta Tags */}
      <meta
        name="title"
        content="HIJOS DEL SOL | Argentine Metal Band | Demo'98"
      />
      <meta
        name="keywords"
        content="HIJOS DEL SOL, hijos del sol, Argentine metal, metal band, Argentina, demo'98, heavy metal, Argentine rock, metal music, 90s metal, Argentine band, Latin metal, hard rock, thrash metal, Argentine music, Argentine metal scene, heavy rock, underground metal"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content="HIJOS DEL SOL" />
      <meta name="copyright" content="HIJOS DEL SOL" />

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
