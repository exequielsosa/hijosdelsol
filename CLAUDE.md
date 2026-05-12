# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Sitio oficial de **HIJOS DEL SOL** (banda de metal argentina) — Next.js 14 single-page site desplegado en https://www.hijosdelsol.com.ar. El foco principal del proyecto es **SEO y rendimiento**, no funcionalidad: prácticamente todo el contenido vive en una sola landing page (`pages/index.js`).

## Comandos

```bash
npm run dev      # Desarrollo en http://localhost:3000
npm run build    # Build de producción
npm run start    # Servir build
npm run lint     # ESLint (config: next/core-web-vitals heredada de eslint-config-next)
```

El proyecto usa **yarn** (hay `yarn.lock`) — preferir `yarn` sobre `npm` si se instalan dependencias para no mezclar lockfiles. No hay tests configurados.

## Arquitectura

### Stack
- **Next.js 14.0.4** con **Pages Router** (NO App Router) — todo en `pages/`
- **React 18**, **TailwindCSS 3.3** (`tailwind.config.js` minimalista — usar utilidades estándar)
- **AOS** para animaciones on-scroll (inicializado en `pages/_app.js`)
- **FontAwesome** + **Headless UI** + **Heroicons** para UI/íconos
- **Google Analytics** vía `gtag.js` (ID `G-0HYZ4ZQYZX` hardcoded — cargado desde `_app.js` con `next/script`)

### Estructura de componentes (Atomic Design)
```
components/
  atoms/        (vacío actualmente)
  molecules/    NavBar, Footer, YoutubeFacade
  organisms/    Header, DownloadDemo, Youtube
  screen/       Home (compone organisms + molecules)
  index.js      Barrel root — re-exporta todo
data/
  tracks.js     Fuente única de los nombres de canciones del Demo'98
pages/
  index.js      Home (SeoHome + Home)
  404.js        404 custom con noindex
  sitemap.xml.js  Sitemap dinámico via getServerSideProps
  _app.js, _document.js
```
Cada nivel tiene un `index.js` que re-exporta los componentes hijos. **Siempre importar desde el barrel**: `import { Home } from "@/components"`. El alias `@/*` → `./*` está definido en `jsconfig.json`.

### Flujo de renderizado
`pages/index.js` → `<SeoHome />` (head/meta) + `<Home />` (NavBar → main: Header + DownloadDemo + Youtube → Footer).

Para añadir secciones nuevas a la home, crear un organism en `components/organisms/<Nombre>/index.js`, exportarlo desde `components/organisms/index.js`, y montarlo dentro de `<main>` en `components/screen/Home/index.js`.

### SEO (capa crítica)
- **`seo/home.js`** — `<Head>` completo con: title, meta description, robots, canonical, hreflang (ES/EN), Open Graph, Twitter Card, geo tags y **JSON-LD Schema.org** (`MusicGroup`, `WebSite`, `WebPage`, `MusicAlbum`). Cualquier cambio de copy, URL de imagen OG o redes sociales debe propagarse aquí.
- **`pages/_document.js`** — favicons (todos los tamaños), preconnect a fonts.googleapis.com / fonts.gstatic.com, dns-prefetch a YouTube, fuentes Google (`Kaushan Script`, `Megrim`) con `display=swap`, `theme-color: #111827`.
- **`next.config.js`** — headers de seguridad (HSTS, X-Frame-Options, CSP-adyacentes), `Cache-Control: immutable` para imágenes, content-type explícito para `sitemap.xml` y `robots.txt`, formatos AVIF/WebP en `images`.
- **`public/sitemap.xml`**, **`public/robots.txt`**, **`public/site.webmanifest`**, **`public/browserconfig.xml`** — mantener sincronizados si cambia la URL canónica.

`SEO_OPTIMIZATIONS.md` documenta el estado completo de la implementación SEO. `IMAGES_GUIDE.md` lista los íconos/favicons esperados y sus tamaños.

### Imágenes
Las imágenes viven en `/public` y se sirven vía **`next/image`** (migrado en Fase 3). `next.config.js` está configurado con `images.formats: [avif, webp]` y `deviceSizes`/`imageSizes` — el optimizador entrega AVIF/WebP responsive automáticamente.

Patrón:
- **Backgrounds absolute** (flames2/fire/flames): `<Image fill sizes="100vw" className="-z-10 object-cover" />` — el contenedor padre debe tener `relative`.
- **Logos y elementos con dimensiones**: `<Image width={X} height={Y} sizes="..." />` con `priority` solo en LCP candidates above-the-fold (`flames2.jpg`, logo del Header).
- **`alt` descriptivo en inglés** siempre. Backgrounds decorativos pueden ir con `alt=""` + `aria-hidden="true"`.
- **Excepción**: el thumbnail de YouTube en `YoutubeFacade` usa `<img>` plano (dominio externo `i.ytimg.com`, no vale la pena configurar `images.remotePatterns` para una sola imagen lazy).

### Estilos
- Utilidades de Tailwind para layout/colores.
- Clases custom en `styles/globals.css` para los íconos sociales: `.cardNav`, `.cardMini`, `.cardYT`, y la transición de fondo del navbar `.bg-color-transition`. La paleta principal es gris muy oscuro (`#151515` / `#111827`) con acentos amarillos en hover.
- Fuente base: `Megrim` (declarada en `body`).

## Convenciones del proyecto

- **JS, no TypeScript** — el repo usa `.js` para todo (incluido `jsconfig.json` sin `tsconfig`).
- **Componentes funcionales** con export default + export nombrado cuando aplica (ver `components/screen/Home/index.js`).
- **Enlaces externos** siempre con `target="_blank" rel="noopener noreferrer"` y `aria-label` descriptivo.
- **Idioma del HTML**: `_document.js` declara `lang="en"` pero el contenido visible es mayormente en inglés con algunos textos en español. El SEO declara `inLanguage: "en-US"`. Antes de "corregir" esto, confirmar con el usuario qué idioma debería ser canónico — hay inconsistencia histórica documentada en `SEO_OPTIMIZATIONS.md`.
- **No tocar `gtag.js`** ni el `GA_TRACKING_ID` salvo pedido explícito.

## Estado actual

_Última actualización: 2026-05-12 (auditoría SEO Fase 2 + Fase 3 completadas)_

### Decisión de idioma
Idioma canónico del sitio: **inglés 100%**. No hay versión `/es`. Los meta tags y JSON-LD declaran `en_US`. Si en el futuro se añade contenido en español, hay que crear `pages/es/index.js` y re-añadir el hreflang correspondiente.

### Fase 2 (completada 2026-05-12)
- **`seo/home.js`**: `formerMember` (3 integrantes con `OrganizationRole`) en `MusicGroup`; `track[]` + `numTracks` en `MusicAlbum`; eliminado `hreflang="es"` roto; eliminados meta tags obsoletos (`revisit-after`, `distribution`, `rating`, `language`); añadido `og:locale: en_US` y `apple-mobile-web-app-capable: yes`; alts traducidos al inglés.
- **`components/organisms/Header`**: `<h1 className="sr-only">` añadido; `fetchPriority="high"` solo en `flames2.jpg` (LCP).
- **`components/molecules/Footer`**: `rel="noopener noreferrer"` en link `custom-xs`.
- **`public/robots.txt`**: limpieza completa (sin bloqueos Ahrefs/Semrush/DotBot/MJ12bot, sin `Host`, sin `Crawl-delay`).

### Hotfix post-deploy (2026-05-12)
Después del primer deploy, validator.schema.org reportó 12 errores + 162 derivados. Causa: usé `formerMember` que **no existe en schema.org** (lo confundí con propiedad estándar). Fix aplicado:
- `formerMember` → `member` en [seo/home.js:39](seo/home.js#L39). La banda figura semánticamente como vigente porque nunca se disolvió formalmente (decisión del usuario — está en hiato indefinido, no hay separación). **No añadir `dissolutionDate` ni revertir a `formerMember`.**
- `dateModified` en WebPage: pasado de `new Date().toISOString()` a constante `SITE_LAST_MODIFIED` en [seo/home.js:4](seo/home.js#L4). Razón: el validator detectaba dos valores diferentes en el mismo render (probablemente por re-execution). **Actualizar manualmente esa constante cuando cambie contenido significativo.**

### Fase 3 (completada 2026-05-12)
- **`data/tracks.js`** (NUEVO): fuente única de los 13 nombres de canciones del Demo'98. Importado desde `seo/home.js` y `components/organisms/DownloadDemo`. Eliminó el duplicado `Nadie Escucha` que había en `DownloadDemo`.
- **Migración `<img>` → `next/image`** en Header, DownloadDemo, NavBar, Footer, Youtube (8 imágenes). Backgrounds usan `fill`, logos usan `width`/`height` fijos. `priority` solo en LCP candidates.
- **`components/molecules/YoutubeFacade`** (NUEVO): facade del iframe de YouTube. Muestra thumbnail (`hqdefault.jpg`) hasta que el usuario hace click → entonces monta el iframe real con `autoplay=1`. Reduce ~500 KB de JS de inicio.
- **`pages/sitemap.xml.js`** (NUEVO): sitemap dinámico via `getServerSideProps`, `lastmod` = fecha actual del request. `public/sitemap.xml` estático eliminado.
- **`pages/404.js`** (NUEVO): 404 custom con `noindex,follow`, fondo `flames.jpg`, logo, "404 — Lost in the flames", link a home.
- **`public/browserconfig.xml`** eliminado (Microsoft Tiles deprecadas en Win11).
- **`IMAGES_GUIDE.md`** actualizado.

Build verificado: `next build` pasa, `/` y `/404` static, `/sitemap.xml` dynamic.

### Notas técnicas relevantes para futuras sesiones
- **Miembros de la banda** hardcoded en [seo/home.js:39-64](seo/home.js#L39-L64) como `formerMember`. Si cambia, mover a `data/members.js`.
- **Tracks** en [data/tracks.js](data/tracks.js) — fuente única. Cambios automáticos en JSON-LD y UI.
- **`next/image` con `fill`**: el padre debe ser `position: relative` (todos los backgrounds están dentro de `relative isolate`).
- **`YoutubeFacade`**: si se cambia el video, actualizar `videoId` en [components/organisms/Youtube/index.js](components/organisms/Youtube/index.js#L24). El thumbnail viene auto de `i.ytimg.com/vi/{id}/hqdefault.jpg`.
- **Sitemap**: para añadir URLs, editar `buildSitemap()` en [pages/sitemap.xml.js](pages/sitemap.xml.js). El cache es 24h (`max-age=86400`).
- El sitio sigue siendo **inglés-only**.

### Pendientes futuros (no prioritarios)
- Lighthouse audit completo post-deploy para validar mejoras de LCP/CLS.
- Considerar `prefers-reduced-motion` en la inicialización de AOS (`_app.js`) para usuarios con preferencia de menos animaciones.
- `Disclosure` de Headless UI en NavBar sin uso real — podría eliminarse y reducir bundle.
