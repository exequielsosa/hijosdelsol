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
      blurb:
        "Cada tema tiene su página: la letra completa y el marco para escucharlo. Al lado, el documento original de 1998 — crudo, tal cual se tipeó.",
      openDocument: "Abrí el documento completo →",
      seeTracklist: "Mirá la lista de temas →",
      archiveCaption: "Archivo original · 1998",
      archiveAlt: "Hoja de letras original, 1998",
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
    footer: {
      contact: "Contacto",
      contactAria: "Escribile a HIJOS DEL SOL",
      onNetwork: (network) => `HIJOS DEL SOL en ${network}`,
      copyright: "© 1993–2026 Hijos del Sol",
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
      eyebrow: "La banda",
      title: "Historia",
      backToRecord: "Escuchá el Demo '98 →",
      metaTitle:
        "Historia de Hijos del Sol — Banda de metal argentino de los 90",
      metaDescription:
        "Cómo nació Hijos del Sol en Buenos Aires a comienzos de los 90, los cambios de formación y el camino hasta el Demo '98, guardado durante más de tres décadas.",
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
      blurb:
        "Every track has its own page: the full lyrics and the frame to play it. Next to it, the original 1998 document — raw, exactly as it was typed.",
      openDocument: "Open the full document →",
      seeTracklist: "See the tracklist →",
      archiveCaption: "Original archive · 1998",
      archiveAlt: "Original lyrics page, 1998",
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
    footer: {
      contact: "Contact",
      contactAria: "Email HIJOS DEL SOL",
      onNetwork: (network) => `HIJOS DEL SOL on ${network}`,
      copyright: "© 1993–2026 Hijos del Sol",
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
      eyebrow: "The band",
      title: "History",
      backToRecord: "Listen to Demo '98 →",
      metaTitle: "The story of Hijos del Sol — 90s Argentine metal band",
      metaDescription:
        "How Hijos del Sol started in Buenos Aires in the early 90s, the lineup changes and the road to Demo '98, kept in a box for more than three decades.",
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
