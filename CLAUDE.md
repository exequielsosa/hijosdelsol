# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Sitio oficial de **HIJOS DEL SOL** (banda de metal argentina) — Next.js 14 desplegado en https://www.hijosdelsol.com.ar. El foco del proyecto es **SEO y rendimiento**. Hay tres vistas: la home (una sola landing con todas las secciones), una página por tema con la letra (`/lyrics/<slug>`, 12 páginas estáticas) y la historia de la banda (`/history`).

El sitio es **bilingüe** (i18n nativo de Next, `next.config.js`): castellano en la raíz (locale por defecto, con voseo) e inglés bajo `/en`. `localeDetection: false` — el idioma lo elige el visitante, no el navegador.

## Comandos

```bash
npm run dev      # Desarrollo en http://localhost:3000
npm run build    # Build de producción
npm run start    # Servir build
npm run lint     # ESLint (NO configurado: no hay .eslintrc, el comando abre el wizard interactivo)
```

El proyecto usa **yarn** (hay `yarn.lock`) — preferir `yarn` sobre `npm` si se instalan dependencias para no mezclar lockfiles. No hay tests configurados.

## Arquitectura

### Stack
- **Next.js 14.0.4** con **Pages Router** (NO App Router) — todo en `pages/`
- **React 18**
- **TailwindCSS 3.3** — solo aporta el preflight/reset. El diseño vive en `styles/hds.css` (CSS plano con tokens), no en utilidades.
- **`sharp`** — instalado a proposito (2026-08-22): sin el, Next 14 optimiza imagenes con un fallback WASM ~10x mas lento y los fondos de covers tardaban en aparecer. No se configura, Next lo detecta al arrancar.
- **Google Analytics** vía `gtag.js` (ID `G-0HYZ4ZQYZX` hardcoded — cargado desde `_app.js` con `next/script`)
- Sin librería de animación ni de íconos: el reveal on-scroll es un `IntersectionObserver` propio (`hooks/useScrollReveal.js`) y los íconos (sol-cruz, triángulos de play, glifo de YouTube) son cajas y bordes CSS.

### Estructura de componentes (Atomic Design)
```
components/
  atoms/        GrainOverlay
  molecules/    SiteHeader, Marquee, SiteFooter, CoverBackdrop, YoutubeFrame, ArtworkModal
  organisms/    Hero, Record, LyricsNotebook, VideoSection, Channel, TrackPage, HistoryPage
  screen/       Home, Track, History
  index.js      Barrel root — re-exporta todo
data/
  tracks.js     Fuente única del disco: orden, slugs, covers y letras
  site.js       Enlaces (canal, video, redes, descargas) y copy compartido
  copy.js       TODO el texto de interfaz, en es/en. Ningún componente hardcodea texto
  seo-copy.js   Textos de <head> + helpers de i18n (localeUrl, alternates)
  history.js    La narrativa de /history en es/en, partida en bloques
  lineup.js     Los tres integrantes: ilustración, rol y frase en es/en
hooks/
  useScrollReveal.js
  useCopy.js       Copy + locale de la página actual (envuelve el router)
  useCoverRotation.js
seo/
  home.js       <Head> + JSON-LD de la home
  track.js      <Head> + JSON-LD de una página de tema
  history.js    <Head> + JSON-LD de /history (AboutPage + MusicGroup con la formación)
pages/
  index.js         Home (SeoHome + Home)
  lyrics/[slug].js Página de tema (SSG, getStaticPaths sobre los 12 temas con letra)
  history.js       Historia de la banda (SeoHistory + History)
  404.js           404 custom con noindex
  sitemap.xml.js   Sitemap dinámico via getServerSideProps
  _app.js, _document.js
```
Cada nivel tiene un `index.js` que re-exporta los componentes hijos. **Siempre importar desde el barrel**: `import { Home } from "@/components"`. El alias `@/*` → `./*` está definido en `jsconfig.json`.

### Flujo de renderizado
- `pages/index.js` → `<SeoHome />` + `<Home />` → `.hds` > GrainOverlay + SiteHeader + `<main>`(Hero, Marquee, Record, LyricsNotebook, VideoSection, Channel) + SiteFooter.
- `pages/lyrics/[slug].js` → `<SeoTrack />` + `<Track />` → `.hds` > GrainOverlay + SiteHeader(forceDark) + `<main>`(TrackPage) + SiteFooter.
- `pages/history.js` → `<SeoHistory />` + `<History />` → `.hds` > GrainOverlay + SiteHeader(forceDark) + `<main>`(HistoryPage) + SiteFooter.

**Texto:** ningún componente hardcodea strings visibles. Se sacan de `data/copy.js` vía `useCopy()`; la narrativa larga vive en su propio archivo bilingüe (`history.js`, `lineup.js`). Para agregar un string hay que ponerlo en **las dos** claves de idioma — si falta en una, esa versión del sitio queda con un hueco.

Para añadir secciones a la home: crear el organism en `components/organisms/<Nombre>/index.js`, exportarlo desde `components/organisms/index.js` y montarlo en `components/screen/Home/index.js`.

### SEO (capa crítica)
- **`seo/home.js`** — title, description, robots, canonical, hreflang, Open Graph, Twitter Card, geo tags y **JSON-LD** (`MusicGroup`, `WebSite`, `WebPage`, `MusicAlbum` con los 13 temas; los 12 con letra apuntan a su `@id` de `/lyrics/<slug>#recording`).
- **`seo/track.js`** — por tema: `MusicRecording` + `recordingOf.lyrics`, `WebPage` y `BreadcrumbList`. La imagen social es el cover propio del tema.
- **`seo/history.js`** — `AboutPage` + `BreadcrumbList` + un `MusicGroup` completo con los tres integrantes (roles sacados de `data/lineup.js`, partidos por `" · "`). Define el nodo `#organization` en vez de referenciar el de la home, para que la página se sostenga sola. La imagen social es `bandFull.jpg`.
- **hreflang / canonical** — los arma `alternates()` y `localeUrl()` de `data/seo-copy.js`; cada página los emite con su propio `path`.
- **`pages/_document.js`** — favicons, preconnect a Google Fonts, dns-prefetch a YouTube, fuentes `Big Shoulders Display` + `Space Grotesk` con `display=swap`, `theme-color: #050505`.
- **`next.config.js`** — headers de seguridad, `Cache-Control: immutable` para imágenes, content-type de `sitemap.xml` y `robots.txt`, formatos AVIF/WebP.
- **`pages/sitemap.xml.js`** — home + `/history` + las 12 páginas de tema, en los dos idiomas.

`SEO_OPTIMIZATIONS.md` documenta la auditoría previa al rediseño (algunas referencias a componentes ya no existen). `IMAGES_GUIDE.md` lista los assets y los favicons esperados.

### Imágenes
Todas en `/public`, servidas con **`next/image`** (`images.formats: [avif, webp]`).

Patrón:
- **Fondos a sangre** (hero, covers de las cards, cover de la página de tema): `<Image fill sizes="..." />` — el padre tiene `position: relative`.
- **Logos y arte con dimensiones**: `<Image width={X} height={Y} sizes="..." />`, con `priority` solo en LCP above-the-fold (`portada2026.png` y `logo-red.png` del hero, cover de la página de tema).
- **`alt` descriptivo**; los decorativos van con `alt=""` + `aria-hidden="true"`. Los alt de contenido nuevo salen de `copy.js`/`lineup.js` y por lo tanto son bilingües; los viejos siguen hardcodeados en inglés.
- Los covers se resuelven **siempre por el campo `cover` de `data/tracks.js`**, nunca por índice: la numeración del arte no coincide con la del disco (ej. el tema 07 usa `covers/10.png`).

### Estilos
- **`styles/hds.css`** es el sistema completo: tokens en `:root` (paleta, fuentes, `--shell: 1180px`), keyframes, y una clase por pieza (`.hds-hero`, `.hds-track`, `.hds-card`, …). Todo el sitio va dentro de un contenedor `.hds`.
- **`styles/globals.css`** solo trae el preflight de Tailwind y el fondo/tipografía base.
- Reglas que no se rompen sin pedirlo: paleta negro + un solo rojo (`#FF1212`), **sin border-radius** salvo círculos (botones de play y marca sol-cruz), sin sombras (la profundidad viene de glows rojos).
- Dos detalles que cuestan encontrar si se tocan:
  - `.hds` declara `line-height: normal` para anular el `1.5` del preflight de Tailwind. Sin eso las filas del tracklist pasan de 46px a 72px.
  - El color de links va en `:where(.hds) a` — `:where()` no suma especificidad, así que cualquier clase de componente le gana (igual que el `a { }` suelto del prototipo).

## Convenciones del proyecto

- **JS, no TypeScript** — el repo usa `.js` para todo (incluido `jsconfig.json` sin `tsconfig`).
- **Componentes funcionales** con export default (+ nombrado en las screens).
- **Enlaces externos** siempre con `target="_blank" rel="noopener noreferrer"` y `aria-label` descriptivo.
- **Todo clickeable es `<a>` o `<button>`**, nunca un `div` con onClick, y hay focus ring visible (`:focus-visible` → outline rojo).
- **Sitio bilingüe es/en.** El `lang` del `<html>` sale del locale de la request (`_document.js`), y el `inLanguage`/`ogLocale` del JSON-LD de `data/seo-copy.js`. El castellano usa **voseo**: es una banda argentina hablándole a su gente.
- **Lo que NO se traduce:** las letras, los títulos de los temas, el nombre del disco y el texto del marquee.
- **No tocar `gtag.js`** ni el `GA_TRACKING_ID` salvo pedido explícito.
- **Las letras no se corrigen.** Son el texto tal cual lo tipeó la banda en 1998 (tipeos, mayúsculas y puntuación incluidos) y el orden del disco tampoco cambia.

## Como trabajar en este repo

**El usuario corre su propio `yarn dev`.** No levantar ni matar servidores, ni correr `next build` sin avisarle: `next build` y `next dev` comparten `.next` y se pisan (paso el 2026-08-22 y le tiro el dev abajo). Si hace falta un build o un reinicio, pedirselo. Para verificar cambios visuales, el los mira con hot reload.

## Estado actual

_Última actualización: 2026-08-30 (rediseño de `/history`)_

### Rediseño de `/history` (2026-08-30)

La página pasó de una columna de 7 párrafos a un **scroll narrativo de cuatro movimientos**. La consigna del usuario: que la historia se descubra scrolleando, con nostalgia y humor, y que los integrantes formen parte del relato en vez de tener su propia sección en el menú.

1. **Apertura** — `LA HISTORIA` / *Antes del archivo, hubo una banda.* Split 42/58: texto de origen a la izquierda, `bandFull.jpg` a la derecha **sangrando hasta el borde de la pantalla**, con caption `Buenos Aires · Principios de los 90`.
2. **La banda** — `LA FORMACIÓN ORIGINAL`. Los tres retratos como portadas de fanzine (ilustración, nombre en display, rol en rojo, frase). Grid de 3 en desktop → carrusel con scroll-snap a ≤900px.
3. **El Demo '98** — `perdido.jpg` (la caja abierta) sobre `backgraf.jpg` de fondo.
4. **El cierre** — *Y después pasó la vida* → hilo del tiempo 1998–2026 → remate. Centrado a propósito: el resto del sitio alinea a la izquierda, así que el cambio de eje marca que la historia terminó.

**Archivos nuevos:** `data/lineup.js` (los tres integrantes, bilingüe). `data/history.js` reescrito como bloques (`headline`, `opening`, `caption`, `band`, `demo`, `closing` con `from`/`to`).

**Imágenes nuevas en `/public`:** `bandFull.jpg` (1672×941), `bandExe.jpg` / `bandRo.jpg` / `bandGon.jpg` (1122×1402), `backgraf.jpg` y `backtodosigue.jpg` (paredes de fondo), `perdido.jpg` (la caja). Todas ilustraciones basadas en fotos reales de los 90.

**SEO:** `seo/history.js` define un `MusicGroup` propio con los tres integrantes; los roles salen de `lineup.js` partidos por `" · "`, así que **salen en el idioma de la página** (coherente con su `inLanguage`). Los roles de `seo/home.js` se alinearon con los de la página: Rodrigo suma coros, Gonzalo pasa a guitarra + coros + batería.

Auditoría posterior al rediseño, ya aplicada:
- **`HISTORY_LAST_MODIFIED` en `data/site.js`** — fecha propia de esta página, separada de `CONTENT_LAST_MODIFIED`. **Actualizarla a mano cuando cambie `/history`**, y no tocar la global: marcar las 26 URLs como modificadas porque cambió una sola es la forma de que Google deje de creerle al `lastmod`. Alimenta el `<lastmod>` del sitemap y el `dateModified` del `AboutPage`.
- **El H1 abre con `Hijos del Sol`** en cuerpo chico (`.hds-history-h1-brand`) sobre las dos líneas grandes. El H1 del rediseño (*"Antes del archivo, hubo una banda"*) no nombraba la marca, y esta es justamente la página que la desambigua. **No sacar esa primera línea.**
- **La `metaDescription` nombra a los tres integrantes** — son los términos que más desambiguan frente a los otros "hijos del sol". 144 y 137 caracteres.
- **La bajada del bloque del demo es `<h2>`, no `<p>`.** Sin ese heading la jerarquía saltaba de los H3 de los integrantes al H2 del cierre. El preflight de Tailwind deja los headings con `font-size`/`font-weight` heredados, así que manda la clase y no se ve distinto — **si se cambia a `<p>` se pierde el heading sin que se note nada en pantalla.**
- **El sitemap declara `bandFull.jpg` y `perdido.jpg`** como `image:image` de `/history`.

### Decisiones del usuario en `/history` — no revertir

- **El fondo fijo `historiaback.jpg` se queda** cubriendo toda la página. Se propuso sacarlo y dejar que cada bloque tuviera su propia textura; el usuario eligió mantenerlo.
- **La ilustración grupal conserva su 16:9** y sangra a la derecha. Recortarla a vertical dejaba a Gonzalo y a Rodrigo fuera del encuadre.
- **La caja (`perdido.jpg`) reemplazó a una etiqueta de cassette dibujada en CSS.** Antes de eso hubo una ficha con carretes y onda de audio que el usuario rechazó: se leía como un reproductor, no como material encontrado. **No volver a dibujar objetos de archivo en CSS acá.**
- **El fondo del cierre (`backtodosigue.jpg`) va SOLO detrás de la franja del hilo** — desde *"Y después pasó la vida"* hasta el `2026`. Se probó cubriendo la sección entera y el usuario lo rechazó: el remate final tiene que quedar sobre el negro.
- **El eyebrow no lleva número.** Se probó `02 — La historia` para encajar con la numeración de la home (01 disco, 03 letras, 04 video, 05 canal) y el usuario lo sacó: `/history` no es parte de esa secuencia.
- **Los años del hilo son solo 1998 y 2026, sin hitos en el medio.** En esos años no pasó nada y no se inventan.

### Notas técnicas de `/history`

- **Fondos por bloque, con máscara.** `.hds-history-demo-bg` y `.hds-history-wait-bg` usan `mask-image: linear-gradient(180deg, transparent, #000 …, transparent)` para fundirse arriba y abajo. **Los porcentajes de la máscara están calibrados contra la altura de cada bloque** — si se tocan los paddings verticales hay que recalcularlos, o el fundido se come el texto.
- **Texto sobre las paredes.** Los tres bloques de la franja del cierre llevan `text-shadow: 0 2px 26px + 0 0 10px` en negro casi opaco, más un radial oscuro en el velo. Sin eso la tipografía desaparece: las paredes tienen tanto contraste como el texto. Mismo recurso que ya salvaba el label `LYRICS` del tracklist sobre los covers.
- **Franjas full-width dentro de una sección con padding**: se resuelven con márgenes negativos (`margin: 0 -24px`, `-18px` en mobile), **no con `100vw`** — `100vw` incluye la barra de scroll y desalinea unos pixeles.
- **`.hds-history-open` alinea con el shell** usando `padding-left: max(24px, calc((100% - var(--shell)) / 2))`. El `100%` es el ancho del `<section>`, que ya excluye la barra de scroll.
- **Un `max-width` sobre `.hds-shell` centra el bloque en vez de alinearlo**, porque el shell trae `margin: 0 auto`. Pasó con el bloque del demo. El ancho de lectura se limita en cada pieza, no en el contenedor.
- **Carruseles con scroll**: el `padding-left` no compensa un `margin-left` negativo dentro de un contenedor con `overflow-x`. La primera ficha quedaba pegada al borde. Se resolvió sacando los márgenes negativos.

### Rediseño 2026 (completado 2026-08-22)
Implementación del handoff en `G:/design_handoff_hijos_del_sol` (README + prototipo `.dc.html` + `tracks.json` + assets). Se recreó el diseño en el stack del proyecto; el runtime del prototipo (`support.js`, `<x-dc>`, `{{ }}`) **no** se portó.

- **Home nueva**: hero claro a pantalla completa con la portada 2026 → corte duro a negro, marquee `DEMO '98 ⊕`, sección del disco con tracklist de 13 filas, cuaderno de letras (marco de archivo + 12 covers), video y canal, footer.
- **12 páginas de tema** en `/lyrics/<slug>`, estáticas (SSG), con letra completa, cover propio, prev/next circular y JSON-LD por tema.
- **Componentes viejos eliminados**: NavBar, Footer, Header, DownloadDemo, Youtube, YoutubeFacade.
- **`data/tracks.js` regenerado** desde `tracks.json`: 13 temas con `n`, `title`, `slug`, `instrumental`, `lang`, `cover`, `lyrics` + helpers `LYRIC_TRACKS`, `TRACKS`, `toStanzas`, `neighbours`.
- **`data/site.js` (NUEVO)**: los "open items" del README resueltos con los valores reales que ya usaba el sitio (canal `@hijosdelsolband`, video `u7U0ZQT4py4`, IG/FB, mail, los dos `.rar` de catbox).
- **Fuentes cambiadas**: `Kaushan Script`/`Megrim` → `Big Shoulders Display` + `Space Grotesk`. `theme-color` `#111827` → `#050505` (también en `site.webmanifest`).
- **AOS eliminado** de `_app.js`; el reveal ahora es `hooks/useScrollReveal.js`, que respeta `prefers-reduced-motion` (igual que el resto de las animaciones, apagadas por media query en `hds.css`).
- **`seo/home.js`**: OG/Twitter/`primaryImageOfPage` pasan a `portada2026.png` (1672×941, la relación correcta); `MusicAlbum.track[]` ahora sale de `ALBUM` con `position`, `url` e `image` por tema. `SITE_LAST_MODIFIED` actualizado a 2026-08-22.
- **404** rediseñado con la paleta y las fuentes nuevas.

Verificado contra el prototipo con Playwright: la fila del tracklist mide 46px y sus tres spans caen en los mismos offsets (15/13/17) que la referencia; hover de fila (padding 4→12px) y coreografía completa de la card (scale 1.07, flash, regla al 100%, título `#FF3A3A`, CTA a `.34em`) funcionando; header claro→oscuro a `0.72 × innerHeight`; `next build` pasa con 12 páginas de tema estáticas.

### Ajustes posteriores al handoff (decisiones del usuario)
Nada de esto estaba en el handoff: son pedidos del usuario ya validados visualmente por el. **No revertirlos al spec original.**

- **Marco del archivo del 98** (`.hds-archive`): alto 620px → **440px**. El spec pedía 620 pero el recuadro dominaba la sección frente al bloque de texto. El breakpoint de ≤900px sigue en 360px.
- **Reproductor por tema**: la card cuadrada reproduce el video embebido en el mismo recuadro, no manda a YouTube.
- **Fondo de covers en la seccion del disco** (`#disco`): los 12 covers apilados de fondo, rotando cada 6s con cross-fade, y el hover sobre una fila del tracklist fija ese cover. Ver `components/molecules/CoverBackdrop` + `hooks/useCoverRotation`.
- **Fondo de la pagina de tema**: el cover del tema cubre toda la vista, `position: fixed`.
- **Tratamiento comun de los dos fondos**: `filter: grayscale(1) sepia(0.55) contrast(1.05)` y **sin blur**. Se probaron versiones con `blur(34px)` y `blur(12px)` y el usuario las rechazo: quedaban como manchas grises. El unico color de esas zonas tiene que seguir siendo la card del cover y el rojo de la marca.
- **Label `LYRICS` del tracklist**: subio de `--gray-4` a `--gray-2` + `text-shadow`. Con el fondo de covers detras, el gris del spec se perdia.

### Notas técnicas relevantes para futuras sesiones
- **Miembros de la banda** hardcoded en `seo/home.js` dentro de `member`. **No usar `formerMember`: no existe en schema.org** (rompió el validador en 2026-05). La banda figura como vigente (hiato, no separación) — no añadir `dissolutionDate`.
- **`SITE_LAST_MODIFIED`** en `seo/home.js` es una constante a mano; actualizarla cuando cambie contenido significativo (no usar `new Date()`: el validador detectaba dos valores en el mismo render).
- **Video de la home**: el id vive en `data/site.js` (`VIDEO_ID`). El usuario lo viene cambiando a mano; **no coincide necesariamente con el `<h2>` de la seccion**, que es "All" y esta hardcodeado en `components/organisms/VideoSection`. Si se cambia el id, revisar tambien el titulo y el parrafo.
- **Video por tema**: cada tema con letra tiene su `video` (id de YouTube) en `data/tracks.js`. La card cuadrada del aside reproduce el video **embebido en el mismo recuadro** (click-to-play). `watchTrackUrl()` en `data/site.js` ya no alimenta la UI: solo arma el `sameAs` del JSON-LD, y ahi si distingue `short: true` (La Primera, Te Quiero) para linkear a `/shorts/`.
- **`components/molecules/YoutubeFrame`**: el patron poster → iframe esta unificado ahi. Lo usan la seccion de video de la home (marco 16:9) y la pagina de tema (marco 1:1, clase `hds-embed--square`). El `key={track.slug}` en `components/screen/Track` hace que al ir a prev/next el reproductor vuelva al poster.
- **Sitemap**: `buildSitemap()` en `pages/sitemap.xml.js`, cache 24h.
- **Covers**: `public/covers/01–12.png`, ~0,7–1,2 MB c/u. `next/image` sirve versiones chicas, así que es peso de repo, no de visitante.
- **El fondo de la pagina de tema es `position: fixed`**, no `sticky`. Con sticky + `margin-bottom: -100vh` la capa se despegaba a media pagina y dejaba el resto en negro. Como contrapartida, `.hds-footer` lleva `position: relative; z-index: 1` para taparla al final — **si se saca ese z-index, el arte se derrama sobre el footer.**
- **Dos variantes de la misma imagen**: la card del tema pide `sizes="...440px"` y el fondo `sizes="100vw"`, o sea dos archivos generados y dos descargas por pagina. Si hace falta acelerar mas, igualar los `sizes` deja una sola (el fondo se veria algo menos nitido, pero esta desaturado y con velo).

### Pendientes futuros (no prioritarios)
- Lighthouse post-deploy (LCP del hero: `portada2026.png` pesa 2 MB sin optimizar).
- **`/history` carga cinco imágenes grandes**: el fondo fijo, las dos paredes de bloque, la caja y la ilustración grupal (más los tres retratos). Ninguna es enorme por separado, pero conviene medirla con Lighthouse antes de darla por cerrada. Solo `bandFull.jpg` y `historiaback.jpg` llevan `priority`.
- **Discrepancia en `perdido.jpg`**: la ilustración dice `TAPES RECORDS` y el texto de `data/history.js` dice `Taps Records`; además el listado de temas que se ve en la imagen no coincide con el tracklist real del Demo '98. El usuario iba a revisar la imagen — si la cambia, no hace falta tocar código (mismo nombre, mismo 16:9).
- Dependencias que quedaron sin uso en `package.json`: `aos`, `@fortawesome/*`, `@headlessui/react`, `@heroicons/react`, `react-device-detect`, `@uidotdev/usehooks`, `@tailwindcss/typography`. No entran al bundle (nadie las importa), pero se pueden sacar con `yarn remove`. **`sharp` no entra en esa lista: se usa.**
- Imágenes del sitio anterior sin uso en `public/` (ver `IMAGES_GUIDE.md`).
- No hay `.eslintrc`: `npm run lint` abre el wizard interactivo en vez de correr.
- `SEO_OPTIMIZATIONS.md` quedó desactualizado respecto del rediseño.
