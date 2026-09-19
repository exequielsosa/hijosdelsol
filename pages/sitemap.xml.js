import { LYRIC_TRACKS } from "@/data/tracks";
import { ENSAYOS } from "@/data/ensayos";
import {
  SITE_URL,
  CONTENT_LAST_MODIFIED,
  HISTORY_LAST_MODIFIED,
  ENSAYOS_LAST_MODIFIED,
  HOME_LAST_MODIFIED,
} from "@/data/site";
import { localeUrl } from "@/data/seo-copy";
import { LOCALES } from "@/data/copy";

const escape = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/**
 * Bloque <xhtml:link> que declara todas las variantes de idioma de una ruta.
 * Va dentro de CADA <url>, incluida la de la propia página: es la forma que
 * pide Google para hreflang en sitemap.
 */
const alternateLinks = (path) =>
  [
    ...LOCALES.map(
      (loc) =>
        `    <xhtml:link rel="alternate" hreflang="${loc}" href="${localeUrl(
          loc,
          path
        )}"/>`
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${localeUrl(
      "es",
      path
    )}"/>`,
  ].join("\n");

const homeImages = `    <image:image>
      <image:loc>${SITE_URL}/portada2026.png</image:loc>
      <image:title>HIJOS DEL SOL - Demo&apos;98</image:title>
      <image:caption>Arte del Demo&apos;98 de HIJOS DEL SOL, banda de metal argentina</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/soloTapa.png</image:loc>
      <image:title>HIJOS DEL SOL - Tapa del Demo&apos;98</image:title>
    </image:image>`;

/* La cronologia varia por idioma: se elige el archivo desktop de cada
   locale en vez de listar los cuatro (los dos mobile son el mismo
   contenido, recortado, no una imagen distinta). */
const historyImages = (locale) => `    <image:image>
      <image:loc>${SITE_URL}/bandFull.jpg</image:loc>
      <image:title>HIJOS DEL SOL - Buenos Aires, principios de los 90</image:title>
      <image:caption>Ilustración de HIJOS DEL SOL basada en una fotografía original de los años 90</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/perdido.jpg</image:loc>
      <image:title>HIJOS DEL SOL - La caja del Demo&apos;98</image:title>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/LOVEESTAFA.jpg</image:loc>
      <image:title>HIJOS DEL SOL - La primera grabación de &quot;Love Comes Tonight&quot;</image:title>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/headtascam.jpg</image:loc>
      <image:title>HIJOS DEL SOL - La Tascam Porta 07 del sótano</image:title>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/bravo.jpg</image:loc>
      <image:title>HIJOS DEL SOL - El estudio Bravo Paraíso</image:title>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/crono_desktop_${locale === "en" ? "EN" : "ES"}.jpg</image:loc>
      <image:title>HIJOS DEL SOL - Cronología aproximada de los hechos</image:title>
    </image:image>`;

const ensayosImages = `    <image:image>
      <image:loc>${SITE_URL}/ensayos/backheaderensatos.jpg</image:loc>
      <image:title>HIJOS DEL SOL - Sala de ensayo</image:title>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/ensayos/unensayo.jpg</image:loc>
      <image:title>HIJOS DEL SOL - Un ensayo más (1998)</image:title>
      <image:caption>Tapa de la cinta de sala &quot;Un ensayo más&quot; de HIJOS DEL SOL, 1998</image:caption>
    </image:image>`;

function buildSitemap() {
  const urls = [];

  for (const locale of LOCALES) {
    urls.push(`  <url>
    <loc>${localeUrl(locale, "/")}</loc>
    <lastmod>${HOME_LAST_MODIFIED}</lastmod>
    <priority>1.0</priority>
${alternateLinks("/")}
${homeImages}
  </url>`);

    urls.push(`  <url>
    <loc>${localeUrl(locale, "/history")}</loc>
    <lastmod>${HISTORY_LAST_MODIFIED}</lastmod>
    <priority>0.9</priority>
${alternateLinks("/history")}
${historyImages(locale)}
  </url>`);

    for (const track of LYRIC_TRACKS) {
      const path = `/lyrics/${track.slug}`;
      urls.push(`  <url>
    <loc>${localeUrl(locale, path)}</loc>
    <lastmod>${CONTENT_LAST_MODIFIED}</lastmod>
    <priority>0.8</priority>
${alternateLinks(path)}
    <image:image>
      <image:loc>${SITE_URL}${track.cover}</image:loc>
      <image:title>${escape(track.title)} - Demo&apos;98</image:title>
    </image:image>
  </url>`);
    }

    urls.push(`  <url>
    <loc>${localeUrl(locale, "/ensayos")}</loc>
    <lastmod>${ENSAYOS_LAST_MODIFIED}</lastmod>
    <priority>0.7</priority>
${alternateLinks("/ensayos")}
${ensayosImages}
  </url>`);

    for (const track of ENSAYOS) {
      const path = `/ensayos/${track.slug}`;
      urls.push(`  <url>
    <loc>${localeUrl(locale, path)}</loc>
    <lastmod>${ENSAYOS_LAST_MODIFIED}</lastmod>
    <priority>0.6</priority>
${alternateLinks(path)}
    <image:image>
      <image:loc>${SITE_URL}${track.cover}</image:loc>
      <image:title>${escape(track.title)} - Un ensayo más (1998)</image:title>
    </image:image>
  </url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=86400, must-revalidate");
  res.write(buildSitemap());
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
