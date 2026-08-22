/** Enlaces y textos que se repiten en todo el sitio. Fuente única. */

export const SITE_URL = "https://www.hijosdelsol.com.ar";

export const YOUTUBE_URL = "https://www.youtube.com/@hijosdelsolband";
export const VIDEO_ID = "FGoVHU16uAk";
export const TWITTER_URL = "https://twitter.com/hijosdelsolband";
export const INSTAGRAM_URL = "https://www.instagram.com/hijosdelsolmusicband/";
export const FACEBOOK_URL = "https://www.facebook.com/hijosdelsolmusic";
export const CONTACT_EMAIL = "hijosdelsolmusicband@gmail.com";

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

export const HERO_LINE =
  "Thirteen tracks cut to tape, buried for twenty-five years and dug up whole. This is what it sounded like.";

export const ALBUM_BLURB =
  "The band's full record: raw, direct, no production in the way. Thirteen tracks between fury and melancholy, straight out of the room.";
