/**
 * La historia de la banda, escrita por el usuario. Texto propio: es el
 * contenido que desambigua la marca frente a los otros "hijos del sol".
 *
 * Desde el rediseño de la sección (2026-08-30) no es una lista de párrafos
 * sino cuatro movimientos, que el componente monta como bloques distintos:
 *
 *   opening → la banda y de dónde salió   (texto + ilustración grupal)
 *   demo    → el Demo '98                  (ficha de archivo)
 *   closing → el paso del tiempo           (aire creciente + remate)
 *
 * Los títulos vienen partidos en líneas porque el display los quiebra a mano:
 * dejarlos al azar del ancho rompía la composición.
 *
 * `**texto**` marca negrita — lo resuelve `renderEmphasis` en el componente,
 * sin meter un parser de markdown por tres usos.
 */
export const HISTORY = {
  es: {
    headline: ["Antes del archivo,", "hubo una banda."],
    opening: [
      "Hijos del Sol nació en Buenos Aires a comienzos de los años 90, cuando cuatro amigos empezaron a tocar juntos sin demasiados planes y con bastante más entusiasmo que presupuesto.",
      "Al principio la banda tuvo otro nombre, pero duró poco. Había que cambiarlo y apareció **Hijos del Sol**, un nombre que terminó sobreviviendo mucho más que varias salas de ensayo, bateristas, amplificadores y decisiones dudosas.",
      "Durante los años siguientes llegaron los primeros estudios, demos, recitales, cambios de formación y una buena cantidad de canciones grabadas como se podía, cuando se podía y donde se podía.",
    ],
    caption: "Buenos Aires · Principios de los 90",
    band: {
      line: "Tres amigos, demasiadas canciones y muchísima menos plata de la que costaba la sala.",
    },
    demo: {
      intro:
        "Algunas quedaron en cintas, otras en cajas, otras directamente en la memoria.",
      body: "En 1998, después de grabar **“Love Comes Tonight”** para un compilado de Taps Records, parte de ese material terminó reunido en **Demo ’98**: trece canciones guardadas como una pequeña cápsula de tiempo.",
    },
    closing: {
      first: "Y después pasó la vida.",
      middle: "El demo quedó ahí, esperando.",
      from: "1998",
      to: "2026",
      last: ["Más de tres décadas después,", "alguien volvió a abrir la caja."],
    },
  },
  en: {
    headline: ["Before the archive,", "there was a band."],
    opening: [
      "Hijos del Sol was born in Buenos Aires in the early 1990s, when four friends started playing together with no real plan and considerably more enthusiasm than budget.",
      "At first, the band had another name, but it didn’t last long. A change was needed, and **Hijos del Sol** appeared — a name that would end up surviving rehearsal rooms, drummers, amplifiers and more than a few questionable decisions.",
      "Over the following years came the first studio sessions, demos, live shows, lineup changes and a growing collection of songs recorded however they could, whenever they could, wherever they could.",
    ],
    caption: "Buenos Aires · Early 1990s",
    band: {
      line: "Three friends, too many songs and nowhere near enough rehearsal-room money.",
    },
    demo: {
      intro:
        "Some ended up on tape, some in boxes, and some simply in memory.",
      body: "In 1998, after recording **“Love Comes Tonight”** for a Taps Records compilation, part of that material was finally gathered into **Demo ’98**: thirteen songs preserved as a small time capsule.",
    },
    closing: {
      first: "Then life happened.",
      middle: "The demo stayed there, waiting.",
      from: "1998",
      to: "2026",
      last: ["More than three decades later,", "someone opened the box again."],
    },
  },
};

export const getHistory = (locale) => HISTORY[locale] ?? HISTORY.es;
