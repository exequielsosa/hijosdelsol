/** Enlaces y textos que se repiten en todo el sitio. Fuente única. */

export const SITE_URL = "https://www.hijosdelsol.com.ar";

/**
 * Fecha de ultima modificacion real del contenido (YYYY-MM-DD).
 * Alimenta el <lastmod> del sitemap y el dateModified del JSON-LD.
 * ACTUALIZAR A MANO cuando cambie contenido de verdad: si sale la fecha del
 * request, todas las URLs figuran modificadas todos los dias y Google termina
 * ignorando el lastmod del sitio entero.
 */
export const CONTENT_LAST_MODIFIED = "2026-08-22";

/**
 * `/history` tiene su propia fecha: se reescribió entera el 2026-08-30 y el
 * resto del contenido no se tocó. Marcar todas las URLs como modificadas
 * cuando cambió una sola es la forma de que el lastmod deje de valer.
 */
export const HISTORY_LAST_MODIFIED = "2026-08-30";

export const YOUTUBE_URL = "https://www.youtube.com/@hijosdelsolband";
export const VIDEO_ID = "FGoVHU16uAk";
/** Tema al que corresponde VIDEO_ID. Es el <h2> de la seccion "El video":
    si cambia el id, cambiar tambien esto o el titulo deja de coincidir. */
export const VIDEO_TRACK_TITLE = "Loves Comes Tonight";

/** Fecha en que se subieron los 12 videos a YouTube (todos el mismo dia).
    Es campo obligatorio del VideoObject de schema.org. */
export const VIDEOS_UPLOAD_DATE = "2026-08-22";
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61593492067967";
export const CONTACT_EMAIL = "hijosdelsolmusicband@gmail.com";

/** Perfiles oficiales. Alimenta el `sameAs` del JSON-LD, que es la señal con
    la que Google confirma que la entidad "Hijos del Sol" es esta banda.
    Solo perfiles que existen de verdad: uno inexistente es una señal falsa.
    (No hay Twitter/X ni Instagram — 2026-08-22.) */
export const SOCIAL_PROFILES = [YOUTUBE_URL, FACEBOOK_URL];

export const DOWNLOAD_RECORD_URL = "https://files.catbox.moe/y8r65l.rar";
export const DOWNLOAD_ARTWORK_URL = "https://files.catbox.moe/z8ale0.rar";

/**
 * Link directo al video del tema en YouTube. Los que se subieron como Shorts
 * usan /shorts/ para que abran en el reproductor vertical.
 * Sin video cae al canal, para no dejar un link roto.
 */
export const watchTrackUrl = (track) => {
  if (!track.video) return YOUTUBE_URL;
  return track.short
    ? `https://www.youtube.com/shorts/${track.video}`
    : `https://www.youtube.com/watch?v=${track.video}`;
};
