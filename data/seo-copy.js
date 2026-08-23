import { SITE_URL } from "./site.js";

/**
 * Pega el sufijo solo si la description sigue entrando en lo que Google
 * muestra (~160). Si el texto del tema ya es largo, gana el texto: es la voz
 * de la banda y va primero de todos modos.
 */
const withSuffix = (text, suffix) =>
  text.length + suffix.length <= 160 ? `${text}${suffix}` : text;

/**
 * Títulos y descripciones por idioma. Están separados de `data/copy.js` porque
 * no son texto de interfaz: son la primera impresión en el buscador y se
 * escriben con otro criterio (largo, keyword, desambiguación).
 *
 * El título en castellano sigue la propuesta del brief: el problema del sitio
 * es que "hijos del sol" compite contra el Inti, una película y otras bandas,
 * así que el título tiene que decir banda, metal, argentino y la década.
 */
export const SEO_COPY = {
  es: {
    ogLocale: "es_AR",
    inLanguage: "es-AR",
    home: {
      title:
        "Hijos del Sol — Banda de Metal Argentino de los 90 | Demo '98 completo",
      description:
        "Hijos del Sol, banda de metal argentina formada en 1993. Escuchá el Demo '98 completo: 13 temas con sus letras, el arte original y los videos. El archivo entero de la banda.",
    },
    track: {
      title: (track) =>
        `${track.title} — Letra | Hijos del Sol | Demo '98`,
      // El blurb es el texto propio del tema: hace que cada pagina tenga una
      // description unica en vez de una plantilla repetida 12 veces
      description: (track) =>
        track.blurb
          ? withSuffix(track.blurb.es, " · Letra completa del Demo '98.")
          : `Letra completa de "${track.title}", tema ${Number(
              track.n
            )} del Demo '98 de Hijos del Sol, banda de metal argentina.`,
    },
    imageAlt: (title) => `${title} — arte del Demo '98`,
    orgDescription:
      "Hijos del Sol es una banda de metal argentina formada en 1993. El Demo '98, su disco completo, son 13 temas grabados en cinta y recuperados enteros.",
    albumDescription:
      "Demo '98 de Hijos del Sol — 13 temas de metal argentino grabados en 1998.",
  },
  en: {
    ogLocale: "en_US",
    inLanguage: "en-US",
    home: {
      title: "Hijos del Sol — Argentine Metal Band (90s) | Full Demo '98",
      description:
        "Hijos del Sol, an Argentine metal band formed in 1993. Listen to the full Demo '98: 13 tracks with their lyrics, the original artwork and the videos. The band's whole archive.",
    },
    track: {
      title: (track) => `${track.title} — Lyrics | Hijos del Sol | Demo '98`,
      description: (track) =>
        track.blurb
          ? withSuffix(track.blurb.en, " · Full lyrics from Demo '98.")
          : `Full lyrics of "${track.title}", track ${Number(
              track.n
            )} of Demo '98 by Hijos del Sol, Argentine metal band.`,
    },
    imageAlt: (title) => `${title} — Demo '98 cover art`,
    orgDescription:
      "Hijos del Sol is an Argentine metal band formed in 1993. Demo '98, their full record, is 13 tracks cut to tape and recovered whole.",
    albumDescription:
      "Demo '98 by Hijos del Sol — 13 Argentine metal tracks recorded in 1998.",
  },
};

export const getSeoCopy = (locale) => SEO_COPY[locale] ?? SEO_COPY.es;

/**
 * URL absoluta de una ruta en un idioma dado.
 * El castellano vive en la raíz y el inglés bajo /en (config i18n).
 */
export const localeUrl = (locale, path = "/") => {
  const prefix = locale === "en" ? "/en" : "";
  // La home castellana lleva barra final (`/`), la inglesa es `/en` sin barra:
  // es lo que sirve Next con i18n y tiene que coincidir con el sitemap.
  if (path === "/" || path === "") return `${SITE_URL}${prefix || "/"}`;
  return `${SITE_URL}${prefix}${path}`;
};

/** Los `alternate` que toda página tiene que declarar. */
export const alternates = (path) => [
  { hrefLang: "es", href: localeUrl("es", path) },
  { hrefLang: "en", href: localeUrl("en", path) },
  { hrefLang: "x-default", href: localeUrl("es", path) },
];
