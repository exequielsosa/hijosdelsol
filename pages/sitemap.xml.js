import { LYRIC_TRACKS } from "@/data/tracks";
import { SITE_URL } from "@/data/site";

const escape = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

function buildSitemap() {
  const lastmod = new Date().toISOString().split("T")[0];

  const home = `  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${SITE_URL}/portada2026.png</image:loc>
      <image:title>HIJOS DEL SOL - Demo&apos;98 artwork</image:title>
      <image:caption>Cover artwork of Demo&apos;98 by Argentine metal band HIJOS DEL SOL</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/devil.png</image:loc>
      <image:title>HIJOS DEL SOL - Band artwork</image:title>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/letras-1998.png</image:loc>
      <image:title>HIJOS DEL SOL - Original 1998 lyrics document</image:title>
    </image:image>
  </url>`;

  const tracks = LYRIC_TRACKS.map(
    (track) => `  <url>
    <loc>${SITE_URL}/lyrics/${track.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${SITE_URL}${track.cover}</image:loc>
      <image:title>${escape(track.title)} - Demo&apos;98 cover art</image:title>
    </image:image>
  </url>`
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${home}
${tracks}
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
