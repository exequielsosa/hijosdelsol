/**
 * La formación original de la banda, tal como aparece en /history.
 *
 * Vive acá y no en `copy.js` por el mismo criterio que `history.js`: es
 * contenido narrativo bilingüe, no labels de interfaz. Los nombres y las
 * ilustraciones no se traducen; el rol y la frase sí.
 *
 * Las ilustraciones (`/band*.jpg`) están basadas en las fotos originales de
 * los 90 y traen su propio fondo de papel crema — por eso en la card van
 * sobre negro cálido, sin recortes ni máscaras que les saquen el borde.
 */
export const LINEUP = [
  {
    id: "exequiel",
    name: "Exequiel Sosa",
    image: "/bandExe.jpg",
    role: {
      es: "Guitarra · Voz",
      en: "Guitar · Vocals",
    },
    line: {
      es: "Voz, guitarras y una cantidad sospechosa de pelo largo.",
      en: "Voice, guitars and a suspicious amount of long hair.",
    },
    alt: {
      es: "Exequiel Sosa con su guitarra, ilustración basada en una foto de los años 90",
      en: "Exequiel Sosa with his guitar, illustration based on a 1990s photograph",
    },
  },
  {
    id: "rodrigo",
    name: "Rodrigo Vieiro",
    image: "/bandRo.jpg",
    role: {
      es: "Bajo · Coros",
      en: "Bass · Backing vocals",
    },
    line: {
      es: "Sosteniendo todo desde abajo.",
      en: "Holding everything together from the low end.",
    },
    alt: {
      es: "Rodrigo Vieiro tocando el bajo, ilustración basada en una foto de los años 90",
      en: "Rodrigo Vieiro playing bass, illustration based on a 1990s photograph",
    },
  },
  {
    id: "gonzalo",
    name: "Gonzalo Martinez",
    image: "/bandGon.jpg",
    role: {
      es: "Guitarra · Coros · Batería",
      en: "Guitar · Backing vocals · Drums",
    },
    line: {
      es: "Empezó con seis cuerdas. Terminó atrás de la batería, nadie sabe bien cómo.",
      en: "Started with six strings. Somehow ended up behind the drums.",
    },
    alt: {
      es: "Gonzalo Martinez en la batería, ilustración basada en una foto de los años 90",
      en: "Gonzalo Martinez behind the drums, illustration based on a 1990s photograph",
    },
  },
];

/** Los tres integrantes con el rol, la frase y el alt ya resueltos al locale. */
export const getLineup = (locale) => {
  const lang = locale === "en" ? "en" : "es";
  return LINEUP.map((member) => ({
    id: member.id,
    name: member.name,
    image: member.image,
    role: member.role[lang],
    line: member.line[lang],
    alt: member.alt[lang],
  }));
};
