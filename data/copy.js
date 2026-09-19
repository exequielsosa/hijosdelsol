/**
 * Todo el texto visible del sitio, en los dos idiomas.
 *
 * Fuente única: ningún componente debe tener texto hardcodeado. Para agregar
 * un string, agregarlo en las DOS claves — si falta en una, esa versión del
 * sitio queda con un hueco.
 *
 * Lo que NO vive acá y no se traduce nunca:
 *  - Las letras (`data/tracks.js`): son el archivo del 98, en su idioma original.
 *  - Los títulos de los temas y el nombre del disco.
 *  - El texto del marquee.
 *
 * El castellano usa voseo: es una banda argentina hablándole a su gente.
 */
export const COPY = {
  es: {
    nav: {
      record: "El disco",
      lyrics: "Letras",
      ensayos: "Ensayos",
      video: "Video",
      channel: "Canal",
      history: "Historia",
      subscribe: "Suscribite",
      subscribeAria: "Suscribite al canal de YouTube de HIJOS DEL SOL",
      main: "Principal",
    },
    hero: {
      eyebrow: "Metal · Argentina · Desde 1993",
      line: "Trece temas grabados en cinta, enterrados veinticinco años y desenterrados enteros. Así sonaba.",
      listen: "Escuchá el demo",
      watch: "Mirá el video",
      scroll: "Bajá",
    },
    record: {
      eyebrow: "01 — El disco",
      blurb:
        "El disco completo de la banda: crudo, directo, sin producción de por medio. Trece temas entre la furia y la melancolía, salidos de la sala de ensayo.",
      chips: ["13 temas", "Grabado en 1998", "Descarga libre"],
      labelLyrics: "Letra",
      labelInstrumental: "Instrumental",
      downloadRecord: "Descargá el disco →",
      downloadRecordAria: "Descargar el Demo '98 de HIJOS DEL SOL",
      downloadArtwork: "Descargá el arte →",
      downloadArtworkAria: "Descargar el arte del Demo '98",
      artworkAlt: "Arte del Demo '98",
    },
    notebook: {
      eyebrow: "03 — Letras",
      titleLine1: "El cuaderno",
      titleLine2: "de letras",
      blurb: "Cada tema tiene su página: la letra completa y el marco para escucharlo.",
      seeTracklist: "Mirá la lista de temas →",
      readLyrics: "Leé la letra →",
      readLyricsAria: (title) => `Leé la letra de ${title}`,
    },
    video: {
      eyebrow: "04 — El video",
      blurb:
        "Un tema, una llamarada. El video abre el archivo de Hijos del Sol: crudo, sin retoques, como sonaba en la sala.",
      watchOnYoutube: "Miralo en YouTube",
      playAria: (title) => `Reproducir video: ${title}`,
    },
    channel: {
      eyebrow: "05 — El canal",
      titleLine1: "Todo el archivo",
      titleLine2: "vive en YouTube",
      blurb:
        "Temas, ensayos y material de época. Suscribite y activá la campanita — todo lo que aparece del baúl va ahí primero.",
      cta: "Ir al canal",
    },
    retro: {
      eyebrow: "Cápsula del tiempo",
      titleLine1: "Las páginas",
      titleLine2: "de antes",
      intro:
        "Antes de este sitio hubo otros: frames, contadores de visitas y una resolución ideal de 800×600. Los dejamos intactos, tal como los subimos.",
      closeAria: "Cerrar la ventana retro",
      resolutionNote: "Se ve mejor en 800×600.",
      sites: [
        {
          year: "1999",
          title: "La página de 1999",
          blurb:
            "La primera versión del sitio: optimizada para Netscape Navigator, todavía en pie de guerra con Internet Explorer.",
          cta: "Abrir la página de 1999",
          ctaAria: "Abrir la página de HIJOS DEL SOL de 1999 en una ventana",
          windowTitle: "hijosdelsol.com.ar - Netscape Navigator",
          src: "/retro90/home.htm",
        },
        {
          year: "2002",
          title: "La página de 2002",
          blurb:
            "La segunda versión: Internet Explorer ya había ganado la guerra de los navegadores, y acá se nota.",
          cta: "Abrir la página de 2002",
          ctaAria: "Abrir la página de HIJOS DEL SOL de 2002 en una ventana",
          windowTitle: "hijosdelsol.com.ar - Microsoft Internet Explorer",
          src: "/retro/home33.htm",
        },
      ],
    },
    footer: {
      contact: "Contacto",
      contactAria: "Escribile a HIJOS DEL SOL",
      onNetwork: (network) => `HIJOS DEL SOL en ${network}`,
      copyright: "© 1993–2026 Hijos del Sol",
    },
    backToTop: {
      aria: "Volver arriba",
    },
    track: {
      back: "← Volver al disco",
      langEN: "Letra en inglés",
      langES: "Letra en castellano",
      previous: "← Anterior",
      next: "Siguiente →",
      otherTracks: "Otros temas",
      listenOnYoutube: "Escuchalo en YouTube",
      seeAllLyrics: "Ver todas las letras →",
      viewArtwork: "Ver el arte →",
      closeArtwork: "Cerrar el arte",
      coverAlt: (title) => `${title} — arte del Demo '98`,
    },
    history: {
      eyebrow: "La historia",
      title: "Historia",
      lineupEyebrow: "La formación original",
      lineupTitle: "La banda",
      archiveLabel: "Archivo · 1998",
      boxCaption: "Buenos Aires · 1998 · 13 temas",
      boxAlt:
        "La caja del Demo '98 abierta: el casete, el arte, la lista de los trece temas, letras manuscritas y el recibo de la grabación",
      disasterEyebrow: "1994 / Primer estudio",
      disasterAlt:
        "Placeholder del video de la primera grabación, fallida, de \"Love Comes Tonight\"",
      disasterVideoTitle: (track) =>
        `HIJOS DEL SOL — "${track}" (primera grabación)`,
      tascamEyebrow: "Grabar sin estudio",
      tascamAlt:
        "La Tascam Porta 07 en primer plano, con la banda ensayando en el sótano de fondo y cintas apiladas alrededor",
      fullAlt:
        "Hijos del Sol en Buenos Aires a principios de los 90, ilustración basada en la foto original",
      backToRecord: "Escuchá el Demo '98 →",
      seeArchive: "Ver el archivo →",
      metaTitle:
        "Historia de Hijos del Sol — Banda de metal argentino de los 90",
      metaDescription:
        "Cómo nació Hijos del Sol en Buenos Aires a comienzos de los 90: Exequiel Sosa, Rodrigo Vieiro y Gonzalo Martinez, y el camino hasta el Demo '98.",
    },
    ensayos: {
      title: "Ensayos",
      intro: [
        "No todo terminó en un demo.",
        "Durante años quedaron cintas, grabaciones de sala, pruebas, errores y canciones en proceso. Algunas suenan mejor que otras. Todas cuentan algo.",
        "Temas en construcción, ruido, repeticiones y momentos que sobrevivieron al tiempo. No están producidos ni corregidos. Son exactamente eso: ensayos.",
      ],
      backHome: "← Volver al inicio",
      tapeTitle: "Un ensayo más — 1998",
      tapeBody: [
        "Una cinta de sala rescatada casi tres décadas después.",
        "Ruido, repeticiones, temas que todavía estaban cambiando y una banda tocando sin pensar demasiado en que alguien iba a escuchar esto en 2026.",
      ],
      readLyrics: "Leé la letra →",
      readLyricsAria: (title) => `Leé la letra de ${title}`,
      back: "← Volver a Ensayos",
      chip: "Ensayo",
      seeAll: "Ver todos los ensayos →",
      coverAlt: (title) => `${title} — arte de Un ensayo más (1998)`,
      trackDescription: (title) =>
        `${title}, de "Un ensayo más": una cinta de sala de HIJOS DEL SOL grabada en 1998. Letra completa y video.`,
      metaTitle: "Ensayos — Un ensayo más (1998) | HIJOS DEL SOL",
      metaDescription:
        "Cintas de sala de HIJOS DEL SOL rescatadas casi treinta años después: temas sin producir, en construcción, grabados en 1998.",
    },
    notFound: {
      title: "Perdido en las llamas",
      blurb: "La página que buscás no existe.",
      back: "Volver al disco",
      metaTitle: "404 — Página no encontrada | HIJOS DEL SOL",
      metaDescription:
        "La página que buscás no existe en hijosdelsol.com.ar.",
    },
  },

  en: {
    nav: {
      record: "The record",
      lyrics: "Lyrics",
      ensayos: "Rehearsals",
      video: "Video",
      channel: "Channel",
      history: "History",
      subscribe: "Subscribe",
      subscribeAria: "Subscribe to the HIJOS DEL SOL YouTube channel",
      main: "Main",
    },
    hero: {
      eyebrow: "Metal · Argentina · Since 1993",
      line: "Thirteen tracks cut to tape, buried for twenty-five years and dug up whole. This is what it sounded like.",
      listen: "Listen to the demo",
      watch: "Watch the video",
      scroll: "Scroll",
    },
    record: {
      eyebrow: "01 — The record",
      blurb:
        "The band's full record: raw, direct, no production in the way. Thirteen tracks between fury and melancholy, straight out of the room.",
      chips: ["13 tracks", "Recorded in 1998", "Free download"],
      labelLyrics: "Lyrics",
      labelInstrumental: "Instrumental",
      downloadRecord: "Download the record →",
      downloadRecordAria: "Download HIJOS DEL SOL Demo '98",
      downloadArtwork: "Download the artwork →",
      downloadArtworkAria: "Download the Demo '98 artwork",
      artworkAlt: "Demo '98 artwork",
    },
    notebook: {
      eyebrow: "03 — Lyrics",
      titleLine1: "The lyrics",
      titleLine2: "notebook",
      blurb: "Every track has its own page: the full lyrics and the frame to play it.",
      seeTracklist: "See the tracklist →",
      readLyrics: "Read the lyrics →",
      readLyricsAria: (title) => `Read the lyrics of ${title}`,
    },
    video: {
      eyebrow: "04 — The video",
      blurb:
        "One track, one blaze. The video opens the Hijos del Sol archive: raw, untouched, the way it sounded in the rehearsal room.",
      watchOnYoutube: "Watch on YouTube",
      playAria: (title) => `Play video: ${title}`,
    },
    channel: {
      eyebrow: "05 — The channel",
      titleLine1: "The whole archive",
      titleLine2: "lives on YouTube",
      blurb:
        "Tracks, rehearsals and period material. Subscribe and hit the bell — everything that turns up from the vault goes there first.",
      cta: "Go to the channel",
    },
    retro: {
      eyebrow: "Time capsule",
      titleLine1: "The old",
      titleLine2: "websites",
      intro:
        "Before this site there were others: frames, hit counters and an ideal resolution of 800×600. We left them untouched, exactly as we uploaded them.",
      closeAria: "Close the retro window",
      resolutionNote: "Best viewed at 800×600.",
      sites: [
        {
          year: "1999",
          title: "The 1999 website",
          blurb:
            "The site's first version: built for Netscape Navigator, still slugging it out with Internet Explorer.",
          cta: "Open the 1999 website",
          ctaAria: "Open the 1999 HIJOS DEL SOL website in a window",
          windowTitle: "hijosdelsol.com.ar - Netscape Navigator",
          src: "/retro90/home.htm",
        },
        {
          year: "2002",
          title: "The 2002 website",
          blurb:
            "The second version: by then Internet Explorer had won the browser wars, and it shows.",
          cta: "Open the 2002 website",
          ctaAria: "Open the 2002 HIJOS DEL SOL website in a window",
          windowTitle: "hijosdelsol.com.ar - Microsoft Internet Explorer",
          src: "/retro/home33.htm",
        },
      ],
    },
    footer: {
      contact: "Contact",
      contactAria: "Email HIJOS DEL SOL",
      onNetwork: (network) => `HIJOS DEL SOL on ${network}`,
      copyright: "© 1993–2026 Hijos del Sol",
    },
    backToTop: {
      aria: "Back to top",
    },
    track: {
      back: "← Back to the record",
      langEN: "Lyrics in english",
      langES: "Lyrics in spanish",
      previous: "← Previous",
      next: "Next →",
      otherTracks: "Other tracks",
      listenOnYoutube: "Listen on YouTube",
      seeAllLyrics: "See all lyrics →",
      viewArtwork: "View the artwork →",
      closeArtwork: "Close artwork",
      coverAlt: (title) => `${title} — Demo '98 cover art`,
    },
    history: {
      eyebrow: "The story",
      title: "History",
      lineupEyebrow: "The original lineup",
      lineupTitle: "The band",
      archiveLabel: "Archive · 1998",
      boxCaption: "Buenos Aires · 1998 · 13 tracks",
      boxAlt:
        "The Demo '98 box, open: the cassette, the artwork, the thirteen-track listing, handwritten lyrics and the studio receipt",
      disasterEyebrow: "1994 / First studio session",
      disasterAlt:
        "Placeholder for the video of the first, failed recording of \"Love Comes Tonight\"",
      disasterVideoTitle: (track) =>
        `HIJOS DEL SOL — "${track}" (early recording)`,
      tascamEyebrow: "Recording without a studio",
      tascamAlt:
        "The Tascam Porta 07 in the foreground, with the band rehearsing in the basement behind it and cassette tapes stacked around",
      fullAlt:
        "Hijos del Sol in Buenos Aires in the early 1990s, illustration based on the original photograph",
      backToRecord: "Listen to Demo '98 →",
      seeArchive: "See the archive →",
      metaTitle: "The story of Hijos del Sol — 90s Argentine metal band",
      metaDescription:
        "How Hijos del Sol started in Buenos Aires in the early 90s: Exequiel Sosa, Rodrigo Vieiro and Gonzalo Martinez, and the road to Demo '98.",
    },
    ensayos: {
      title: "Rehearsals",
      intro: [
        "Not everything ended up on a demo.",
        "For years there were leftover tapes: rehearsal room recordings, tests, mistakes and songs still taking shape. Some sound better than others. All of them say something.",
        "Tracks still under construction, noise, repetition and moments that survived the years. They're not produced or corrected. They're exactly that: rehearsals.",
      ],
      backHome: "← Back home",
      tapeTitle: "One More Rehearsal — 1998",
      tapeBody: [
        "A rehearsal room tape rescued almost three decades later.",
        "Noise, repetition, songs that were still changing, and a band playing without giving much thought to someone listening to this in 2026.",
      ],
      readLyrics: "Read the lyrics →",
      readLyricsAria: (title) => `Read the lyrics of ${title}`,
      back: "← Back to Rehearsals",
      chip: "Rehearsal",
      seeAll: "See all rehearsals →",
      coverAlt: (title) => `${title} — artwork from One More Rehearsal (1998)`,
      trackDescription: (title) =>
        `${title}, from "One More Rehearsal": a HIJOS DEL SOL rehearsal room tape recorded in 1998. Full lyrics and video.`,
      metaTitle: "Rehearsals — One More Rehearsal (1998) | HIJOS DEL SOL",
      metaDescription:
        "Rescued rehearsal room tapes from HIJOS DEL SOL, found almost thirty years later: unproduced, in-progress tracks recorded in 1998.",
    },
    notFound: {
      title: "Lost in the flames",
      blurb: "The page you're looking for doesn't exist.",
      back: "Back to the record",
      metaTitle: "404 — Page Not Found | HIJOS DEL SOL",
      metaDescription:
        "The page you are looking for does not exist on hijosdelsol.com.ar.",
    },
  },
};

export const LOCALES = ["es", "en"];
export const DEFAULT_LOCALE = "es";

/** Devuelve el copy del locale pedido, con el default como red de seguridad. */
export const getCopy = (locale) => COPY[locale] ?? COPY[DEFAULT_LOCALE];
