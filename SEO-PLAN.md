# Plan SEO — hijosdelsol.com.ar

_Auditoría del 2026-08-22, sobre el sitio ya rediseñado (home + 12 páginas de letras)._
_Fuente de datos de negocio: `BRIEF-SEO.md` (GSC 11/4–10/7/2026)._

---

## 1. Dónde estamos

**Lo que decía el brief (medido sobre el sitio viejo):**

| Métrica | Valor |
|---|---|
| Clics | 3 |
| Impresiones | 305 |
| Posición media | 10,3 |
| Páginas indexadas | 1 (5 sin indexar: 3 redirecciones, 1 × 404, 1 rastreada) |
| Queries | 11, todas de marca |
| Backlinks | 0 |

**Qué cambió con el rediseño (2026-08-22):**

- El sitio pasó de **1 página** a **13 URLs indexables** (home + 12 letras). Esto por sí solo ataca el "1 → 4-6 indexadas" que el brief ponía como objetivo a 3 meses.
- Cada tema tiene página propia con letra completa, arte propio y su video embebido.
- El JSON-LD ya tiene `MusicGroup` + `MusicAlbum` con los 13 temas, `member` con los 3 integrantes, `foundingDate`, `foundingLocation` y `genre` — o sea, el punto "Schema" del brief ya está hecho.
- El sitemap ya incluye las páginas nuevas.

**Lo que sigue igual de mal:** el sitio es 100% inglés para una audiencia que busca en español, no hay contenido de historia/contexto, y hay un error en `robots.txt` que le complica el rastreo a Google.

---

## 2. La decisión que bloquea todo lo demás: el idioma

Es el punto central del brief y hay que resolverlo antes de escribir contenido nuevo, porque define en qué idioma se escribe.

**El caso a favor del español** (lo que argumenta el brief): las 11 queries son de marca y en español; "hijos del sol" compite contra el Inti, una película y otras bandas homónimas, y el snippet en inglés no ayuda a desambiguar que esto es una banda de metal argentina. Las queries largas sin ambigüedad ("los hijos del sol band/banda") ya están en posición 11 sin contenido: la vara está bajísima.

**El caso a favor del inglés** (lo que hay hoy): 9 de las 12 letras están en inglés, el rediseño completo está escrito en inglés, y la decisión "inglés 100%" está documentada en `CLAUDE.md` desde 2026-05.

**Tres caminos posibles:**

| Opción | Qué implica | Esfuerzo |
|---|---|---|
| **A. Español como idioma principal** | Traducir el chrome (nav, secciones, descripciones, metadatos) y `<html lang="es">`. Las letras quedan como están: son el archivo del 98. | Medio |
| **B. Bilingüe con i18n** | `/` en español + `/en` en inglés, con `hreflang` cruzado. El doble de URLs y el doble de mantenimiento. | Alto |
| **C. Seguir en inglés** | Compensar con contenido y esperar que la marca desambigüe sola. | Bajo |

**Recomiendo A.** El sitio es el archivo de una banda argentina de los 90 y su audiencia real la busca en español. B duplica el trabajo para una audiencia internacional que hoy no existe (0 backlinks, 0 tráfico fuera de marca). C deja el problema sin resolver: es exactamente lo que ya no funcionó.

Si se va por A, las letras **no se traducen** — se marcan con su idioma real (ver hallazgo #6) y listo.

> ⏸️ **Todo lo que sigue en la Fase 2 depende de esta decisión.** Las Fases 1 y 3 se pueden hacer igual.

---

## 3. Hallazgos

### 🔴 Críticos

**#1 — `robots.txt` le bloquea a Google el CSS y el JS**

```
Disallow: /_next/static/
```

Ahí viven todos los bundles de CSS y JavaScript. Google necesita rastrearlos para renderizar la página; bloqueados, ve un esqueleto sin estilos y puede evaluar mal el contenido, el layout y mobile-friendliness. Google desaconseja explícitamente bloquear recursos.

**Fix:** borrar esa línea. También `Disallow: /private/`, que apunta a una carpeta que no existe.

**#2 — Idioma** — ver sección 2.

### 🟠 Importantes

**#3 — El `SearchAction` declara un buscador que no existe**

`seo/home.js` declara `potentialAction` apuntando a `https://www.hijosdelsol.com.ar/?s={search_term_string}`. Esa URL no busca nada: el sitio no tiene buscador. Declarar una acción inexistente es una señal falsa.

**Fix:** eliminar el `potentialAction` del bloque `WebSite`.

**#4 — El `lastmod` del sitemap miente**

`pages/sitemap.xml.js` usa `new Date()`, así que **todas las URLs figuran modificadas hoy, todos los días**, aunque no se toque nada. Google detecta el patrón y termina ignorando el `lastmod` del sitio entero.

**Fix:** fecha fija por contenido. Una constante para la home y, para las letras, la fecha en que se publicó la página (o la constante `SITE_LAST_MODIFIED` que ya existe).

**#5 — Faltan los `VideoObject`: la mayor oportunidad desaprovechada**

El sitio tiene **12 videos de YouTube embebidos** (uno por tema) y **ninguno está declarado** en el schema. `VideoObject` es de los pocos tipos que dan rich result con miniatura en la búsqueda, y compite en un espacio mucho menos disputado que "hijos del sol" a secas.

**Fix:** agregar `VideoObject` en `seo/track.js` con `name`, `description`, `thumbnailUrl` (el cover del tema), `uploadDate`, `embedUrl` y `contentUrl`. Necesita la fecha de subida de cada video — dato que hay que sacar de YouTube.

**#6 — Las letras en español no están marcadas como tales**

`<html lang="en">` es global, pero verifiqué el texto real: **Nadie Escucha, Te Quiero y Don't Tell Me Lies están en español**. (Dato tranquilizador: el campo `lang` de `data/tracks.js` es correcto en los 12 temas, incluidos los dos casos donde el título engaña — La Primera es inglés, Don't Tell Me Lies es español.)

El JSON-LD ya declara el idioma correcto, pero el HTML no. Un lector de pantalla lee esas tres letras con pronunciación inglesa, y Google recibe señales contradictorias.

**Fix:** `lang="es"` en el contenedor `.hds-lyrics` cuando `track.lang === "ES"`. Es una línea en `TrackPage`.

**#7 — Contenido delgado en las páginas de letras**

Las 12 páginas son estructuralmente idénticas y su único contenido propio es la letra. Sin contexto, aportan poco y compiten entre sí.

**Fix:** 2–4 frases propias por tema (de qué habla, cuándo se grabó, alguna anécdota). Es contenido que solo puede escribir la banda; en el código ya hay dónde ponerlo. Además le da a cada página una `description` única de verdad, en vez de la plantilla actual.

**#8 — Falta `BreadcrumbList` en la home**

Las páginas de tema ya lo tienen; la home no. Ayuda a que Google muestre la jerarquía del sitio en el snippet.

**#9 — Dos `priority` compitiendo por página**

En el hero: `portada2026.png` y `logo-red.png`. En la página de tema: el fondo y el cover de la card. `priority` sirve para señalar **un** LCP; con dos, el navegador reparte el ancho de banda y ninguno gana.

**Fix:** dejar `priority` solo en el elemento que realmente es el LCP y sacarlo del otro.

**#10 — `albumReleaseType` mal tipado**

`"http://schema.org/AlbumRelease"` usa `http://` (schema.org es `https://` hace años). Y para un demo el campo correcto es otro: `albumProductionType: "https://schema.org/DemoAlbum"`, que describe exactamente lo que es el Demo'98.

### 🟡 Higiene

**#11 — Metas que no hacen nada** en `seo/home.js`:

- `keywords` — Google lo ignora desde 2009
- `name="title"` — no existe en ninguna especificación
- `copyright` — no es un meta estándar
- `httpEquiv="x-ua-compatible"` (en `_document.js`) — es para Internet Explorer

No hacen daño, pero son ruido que hace parecer que el head está más trabajado de lo que está.

**#12 — `X-XSS-Protection: 1; mode=block`** en `next.config.js` está obsoleto. Los navegadores modernos lo ignoran y en su momento introdujo vulnerabilidades propias. La recomendación actual es quitarlo (o mandar `0`).

**#13 — No hay `Content-Security-Policy`.** No es SEO, pero es el header de seguridad que falta y el sitio ya tiene todos los demás.

**#14 — `humans.txt` desactualizado:** dice "Last update: 2025/12/21" y "Language: Spanish / English".

**#15 — `pages/api/hello.js`** es el endpoint de ejemplo de Next, sin uso. Borrarlo.

**#16 — `letras-1998.png` pesa 3 MB y se linkea directo.** Los dos links de "Open the full document" apuntan al archivo crudo: quien haga clic se baja 3 MB. Conviene una versión reducida (~1200px de ancho).

**#17 — `SEO_OPTIMIZATIONS.md` quedó desactualizado:** describe componentes que ya no existen. O se actualiza o se marca como histórico.

---

## 4. Fuera del código (esto lo tenés que hacer vos)

**#18 — Las 3 redirecciones y el 404 de GSC.** No los puedo ver desde acá. Entrá a Search Console → Indexación → Páginas, y pasame las URLs concretas. Casi seguro son restos del sitio viejo (`/index.html`, variantes con/sin `www`, con/sin barra final).

**#19 — Backlinks: 0.** Es la carencia más grande y la que ningún cambio de código resuelve. Lo más barato y efectivo:
- Poner el link del sitio en la descripción del canal de YouTube, y en el bio de Instagram y Facebook. Son enlaces que confirman la entidad "banda" ante Google.
- El brief menciona tus fansites de metal: una nota sobre la escena metalera argentina de los 90 que linkee acá es un backlink temáticamente perfecto.

**#20 — Enviar el sitemap actualizado** en GSC después de deployar, y pedir indexación manual de 2 o 3 páginas de letras para acelerar el descubrimiento.

**#21 — Fechas de subida de los videos de YouTube**, necesarias para el `VideoObject` del hallazgo #5.

---

## 5. Plan de ejecución

### Fase 1 — Arreglos técnicos ✅ COMPLETADA (2026-08-22)

- [x] #1 `robots.txt`: fuera `Disallow: /_next/static/` y `/private/`
- [x] #3 Eliminado el `SearchAction` inexistente
- [x] #4 `lastmod` fijo: nueva constante `CONTENT_LAST_MODIFIED` en `data/site.js`, que ahora alimenta el sitemap **y** el `dateModified` del JSON-LD. **Hay que actualizarla a mano cuando cambie el contenido.**
- [x] #6 `lang="es"` en el bloque de letra cuando el tema es en castellano
- [x] #9 Un solo `priority` por página (el fondo a pantalla completa, que es el LCP real). El logo del hero y el cover de la card pasaron a `loading="eager"`: siguen sin ser lazy, pero no compiten por el preload.
- [x] #10 `albumProductionType: DemoAlbum` + `albumReleaseType` con `https://`
- [x] #11 Borradas `keywords`, `name="title"`, `copyright`, `Content-Type` y `x-ua-compatible`
- [x] #12 Sacado `X-XSS-Protection`
- [x] #14 `humans.txt` actualizado
- [x] #15 Borrado `pages/api/hello.js` (y la carpeta `pages/api`)
- [x] #16 `letras-1998.jpg`: **3,0 MB → 0,19 MB** (1200×5776, el documento completo y legible). Los dos links y el marco del archivo apuntan ahí.

**#8 descartado.** Al implementarlo se ve que no aporta: un `BreadcrumbList` de un solo nivel en la raíz es exactamente la jerarquía que Google ya infiere, y no lo muestra en el snippet de una home. Era ruido en el plan, no una mejora.

**Pendiente de esta fase:** `public/letras-1998.png` (3 MB) quedó sin referencias. Se puede borrar, o dejarlo como master del escaneo — es peso de repo, no de visitante.

### Fase 2 — Idioma y contenido (depende de la decisión de la sección 2)

- [ ] Definir idioma (A / B / C)
- [ ] Si A: traducir chrome, metadatos, `<html lang>`, `og:locale`, `inLanguage`, `hreflang`
- [ ] Reescribir `title` y `description` de la home. El brief propone:
      `Hijos del Sol — Banda de Metal Argentino (años 90) | Demo '98 completo`
- [x] #7 Textos de contexto por tema — resueltos con las descripciones de YouTube
- [ ] Página de historia de la banda: formación, integrantes, fechas, anécdotas, fotos de época. Es **la** pieza que el brief pide y la que desambigua la marca.

### Fase 3 — parcialmente completada (2026-08-22)

- [x] **#5 `VideoObject` en las 24 páginas de tema.** Los datos salieron de YouTube Studio: los 12 videos se subieron el **2026-08-22** y cada uno aportó su duración. Verificado sobre el HTML generado: **24/24 con los cuatro campos obligatorios** (`name`, `description`, `thumbnailUrl`, `uploadDate`), más `duration`, `embedUrl`, `contentUrl` y `publisher`.
- [x] **#7 Textos de contexto por tema.** Las descripciones que el usuario ya había escrito para los videos de YouTube sirvieron tal cual: se guardaron en `data/tracks.js` como `blurb` (inglés original + traducción al castellano) y ahora cumplen doble función — se ven en la página, bajo los chips, y alimentan la `meta description`, que dejó de ser una plantilla repetida 12 veces.
  - Las descriptions se cortan solas: el sufijo ("· Letra completa del Demo '98") solo se agrega si el total entra en los ~160 caracteres que muestra Google. Quedó 1/12 en castellano por encima y 0/12 en inglés.

### Fase 3 — lo que sigue

- [ ] #13 CSP
- [ ] #17 Resolver `SEO_OPTIMIZATIONS.md`
- [ ] #18 Limpiar redirecciones y 404 de GSC
- [ ] #19 Backlinks desde los perfiles sociales
- [ ] Validar todo en validator.schema.org y en el Rich Results Test
- [ ] Lighthouse completo post-deploy

---

## 6. Cómo medimos

Objetivos a 3 meses, tomados del brief y ajustados a que el sitio ahora tiene 13 URLs:

| Métrica | Hoy | Objetivo |
|---|---|---|
| Páginas indexadas | 1 | 10+ |
| Clics | 3 / trimestre | 30+ |
| "hijos del sol banda/band" | pos. 11 | top 3 |
| Queries que no son de marca | 0 | 5+ (nombres de temas, "metal argentino 90s") |
| Backlinks | 0 | 3+ |

Lo más medible a corto plazo es la indexación: si en 2 semanas post-deploy las 13 URLs no están indexadas, algo del lado técnico sigue mal y hay que volver acá.

---

## Notas de validación

Lo que verifiqué directamente sobre el código, no de memoria:

- Las 15 imágenes con `next/image` tienen `alt`; las decorativas van con `alt=""` + `aria-hidden`.
- Jerarquía de headings correcta: un solo `<h1>` por página (en la home es el logo, con `alt="HIJOS DEL SOL"`; en las de tema, el título del tema) y `<h2>` por sección.
- Enlazado interno sano: la home linkea a las 12 letras por dos caminos (tracklist y grilla de covers), y cada letra vuelve a la home por cuatro (back, prev/next, "see all lyrics", wordmark).
- `canonical`, `og:url` y las URLs del sitemap son consistentes: sin barra final en las de tema, con barra en la home.
- El idioma declarado en `data/tracks.js` coincide con el texto real en los 12 temas.
