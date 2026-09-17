import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_URL, ENSAYOS_LAST_MODIFIED } from "@/data/site";
import { getCopy } from "@/data/copy";
import { getSeoCopy, localeUrl, alternates } from "@/data/seo-copy";
import { ENSAYOS } from "@/data/ensayos";

// La foto de la sala es el fondo real del header de la pagina (unensayo.jpg
// ya no se renderiza en ningun lado, solo queda como arte de cada tema).
const OG_IMAGE = `${SITE_URL}/ensayos/backheaderensatos.jpg`;
const OG_IMAGE_W = 1916;
const OG_IMAGE_H = 821;
const LAST_MODIFIED = `${ENSAYOS_LAST_MODIFIED}T00:00:00+00:00`;

/**
 * <head> de /ensayos. No define su propio nodo #organization (a diferencia
 * de /history, que si lo hace para desambiguar la marca): esta pagina
 * referencia el de la home por @id, igual que seo/track.js.
 *
 * No modela un "album Ensayos" en el JSON-LD: cada tema es un MusicRecording
 * suelto (definido en su propia pagina) sin inAlbum, para no inventar una
 * entidad que no existe.
 */
const SeoEnsayos = () => {
  const { locale } = useRouter();
  const seo = getSeoCopy(locale);
  const copy = getCopy(locale);

  const path = "/ensayos";
  const url = localeUrl(locale, path);
  const title = copy.ensayos.metaTitle;
  const description = copy.ensayos.metaDescription;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: OG_IMAGE,
          width: OG_IMAGE_W,
          height: OG_IMAGE_H,
        },
        inLanguage: seo.inLanguage,
        dateModified: LAST_MODIFIED,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        hasPart: ENSAYOS.map((track) => ({
          "@id": `${localeUrl(locale, `/ensayos/${track.slug}`)}#recording`,
        })),
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
          { "@type": "ListItem", position: 2, name: copy.ensayos.title },
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

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="HIJOS DEL SOL" />
      <meta property="og:locale" content={seo.ogLocale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:secure_url" content={OG_IMAGE} />
      <meta property="og:image:width" content={OG_IMAGE_W} />
      <meta property="og:image:height" content={OG_IMAGE_H} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <meta name="author" content="HIJOS DEL SOL" />
      <meta name="geo.region" content="AR" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SeoEnsayos;
