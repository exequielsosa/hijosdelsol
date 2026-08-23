import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_URL } from "@/data/site";
import { getCopy } from "@/data/copy";
import { getSeoCopy, localeUrl, alternates } from "@/data/seo-copy";

const OG_IMAGE = `${SITE_URL}/portada2026.png`;

/**
 * <head> de la página de historia. Es la pieza que desambigua la marca, así
 * que el título nombra explícitamente banda, metal, argentino y década.
 */
const SeoHistory = () => {
  const { locale } = useRouter();
  const seo = getSeoCopy(locale);
  const copy = getCopy(locale);

  const path = "/history";
  const url = localeUrl(locale, path);
  const title = copy.history.metaTitle;
  const description = copy.history.metaDescription;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        mainEntity: { "@id": `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: OG_IMAGE,
          width: 1672,
          height: 941,
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
          { "@type": "ListItem", position: 2, name: copy.history.title },
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

      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="HIJOS DEL SOL" />
      <meta property="og:locale" content={seo.ogLocale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:secure_url" content={OG_IMAGE} />
      <meta property="og:image:width" content="1672" />
      <meta property="og:image:height" content="941" />
      <meta property="og:image:alt" content="HIJOS DEL SOL — Demo '98" />

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

export default SeoHistory;
