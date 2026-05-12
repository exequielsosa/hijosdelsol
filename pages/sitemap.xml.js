const SITE_URL = "https://www.hijosdelsol.com.ar";

function buildSitemap() {
  const lastmod = new Date().toISOString().split("T")[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <image:image>
      <image:loc>${SITE_URL}/devil.png</image:loc>
      <image:title>HIJOS DEL SOL - Logo</image:title>
      <image:caption>Official logo of Argentine metal band HIJOS DEL SOL</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/hijosdelsol2crop.png</image:loc>
      <image:title>HIJOS DEL SOL - Band name</image:title>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/soloTapa.png</image:loc>
      <image:title>HIJOS DEL SOL - Demo'98 Cover</image:title>
      <image:caption>Cover of HIJOS DEL SOL Demo'98</image:caption>
    </image:image>
  </url>
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
