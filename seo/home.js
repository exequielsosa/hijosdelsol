import Head from "next/head";

const SeoHome = () => {
  return (
    <Head>
      <title>HIJOS DEL SOL | hijosdelsol.com.ar</title>
      <meta
        name="description"
        content="Explore the raw energy of HIJOS DEL SOL, an Argentine metal band. Dive into their demo'98 for a taste of evolving Argentine metal."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.hijosdelsol.com.ar" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="HIJOS DEL SOL" />
      <meta property="og:title" content="HIJOS DEL SOL" />
      <meta
        property="og:description"
        content="Explore the raw energy of HIJOS DEL SOL, an Argentine metal band. Dive into their demo'98 for a taste of evolving Argentine metal."
      />
      <meta property="og:url" content="https://www.hijosdelsol.com.ar" />
      <meta name="title" content="HIJOS DEL SOL" />
      <meta
        name="keywords"
        content="HIJOS DEL SOL, metal band, Argentina, demo'98, Argentine metal, music, heavy metal, rock, music experience, emerging metal, metal scene, powerful sounds, intense compositions"
      />

      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="HIJOS DEL SOL" />
      <meta
        property="og:image"
        content="https://www.hijosdelsol.com.ar/devil.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hijosdelsolband" />
      <meta name="twitter:creator" content="@hijosdelsolband" />
      <meta name="twitter:title" content="HIJOS DEL SOL" />
      <meta
        name="twitter:description"
        content="Explore the raw energy of HIJOS DEL SOL, an Argentine metal band. Dive into their demo'98 for a taste of evolving Argentine metal."
      />
      <meta
        name="twitter:image"
        content="https://www.hijosdelsol.com.ar/devil.png"
      />
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Person",
          name: "HIJOS DEL SOL",
          jobTitle: "Metal Argentine Band",
          description:
            "Explore the raw energy of HIJOS DEL SOL, an Argentine metal band. Dive into their demo'98 for a taste of evolving Argentine metal.",
          url: "https://www.hijosdelsol.com.ar",
          sameAs: [
            "https://www.youtube.com/@hijosdelsolband",
            "https://twitter.com/hijosdelsolband",
            "https://www.instagram.com/hijosdelsolmusicband/",
            "https://www.facebook.com/hijosdelsolmusic",
          ],
        })}
      </script>
    </Head>
  );
};

export default SeoHome;
