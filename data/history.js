/**
 * La historia de la banda, escrita por el usuario. Texto propio: es el
 * contenido que desambigua la marca frente a los otros "hijos del sol".
 *
 * Desde el rediseño de la sección (2026-08-30) no es una lista de párrafos
 * sino varios movimientos, que el componente monta como bloques distintos:
 *
 *   opening  → la banda y de dónde salió   (texto + ilustración grupal)
 *   disaster → el primer intento fallido   (texto + video, 2026-09-14)
 *   tascam   → el sótano y la Porta 07     (texto + imagen, 2026-09-19)
 *   demo     → el Demo '98                  (ficha de archivo)
 *   closing  → el paso del tiempo           (aire creciente + remate)
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
      "Hijos del Sol nació en Buenos Aires entre 1992 y 1993, cuando cuatro amigos empezaron a tocar juntos sin demasiados planes y con bastante más entusiasmo que presupuesto.",
      "Al principio la banda se llamaba Sin Sentido. Éramos cuatro, hasta que uno de nosotros se fue a vivir a otro país —sigue siendo amigo hasta hoy— y quedamos tres. Poco después descubrimos que ya existía otra banda con ese nombre, así que hubo que cambiarlo. Ahí apareció **Hijos del Sol**, un nombre que terminó sobreviviendo mucho más que varias salas de ensayo, bateristas, amplificadores y decisiones dudosas.",
      "Durante los años siguientes llegaron los primeros estudios, demos, recitales, cambios de formación y una cantidad bastante absurda de canciones grabadas como se podía, cuando se podía y donde se podía. Algunas quedaron en estudios. Muchas otras nacieron en un sótano, entre cintas, cables, micrófonos prestados y una portaestudio de cuatro canales que terminó siendo bastante más importante de lo que imaginábamos.",
    ],
    caption: "Buenos Aires · Principios de los 90",
    band: {
      line: "Tres amigos, demasiadas canciones y muchísima menos plata de la que costaba la sala.",
    },
    disaster: {
      title: "El primer desastre",
      lead: "Antes de Demo ’98 hubo un primer intento. Y salió mal.",
      body: [
        "Grabamos una primera versión de **“Love Comes Tonight”** en estudio cuando todavía no teníamos demasiada idea de cómo funcionaba todo eso.",
        "Las guitarras casi no se escuchan, las voces quedaron absurdamente fuertes y la voz principal con los coros se grabaron juntos, en la misma pista y en una sola toma.",
        "El resultado fue, siendo generosos, bastante desastroso.",
        "La cinta sobrevivió durante décadas, apareció de nuevo y la digitalizamos. Hoy la subimos a YouTube no porque suene bien, sino porque también forma parte de la historia.",
        "Algunas grabaciones se remasterizan. Otras se conservan como prueba.",
      ],
    },
    tascam: {
      title: "La máquina del sótano",
      body: [
        "No teníamos un estudio.",
        "Teníamos un sótano.",
        "En el subsuelo de la inmobiliaria de la mamá de Gonzalo instalábamos instrumentos, cables, los micrófonos que había y nuestra gran pieza de tecnología:",
        "Una **Tascam Porta 07** de cassette y cuatro canales.",
        "Con eso grabamos una cantidad bastante absurda de canciones, pruebas, versiones, ideas y cosas que probablemente era mejor no volver a escuchar.",
        "Pero algunas quedaron.",
        "Y muchas de ellas terminaron convirtiéndose, años después, en **Demo ’98**.",
      ],
      slogan: "4 canales. Un sótano. Demasiadas canciones.",
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
      "Hijos del Sol was born in Buenos Aires between 1992 and 1993, when four friends started playing together with no real plan and considerably more enthusiasm than budget.",
      "At first the band was called Sin Sentido. There were four of us, until one of us moved abroad — still a friend to this day — and we were down to three. Not long after, we found out another band already had that name, so it had to change. That's when **Hijos del Sol** appeared, a name that would end up surviving rehearsal rooms, drummers, amplifiers and more than a few questionable decisions.",
      "Over the following years came the first studio sessions, demos, live shows, lineup changes and a fairly absurd amount of songs recorded however they could, whenever they could, wherever they could. Some ended up in studios. Many others were born in a basement, among tapes, cables, borrowed microphones and a four-track recorder that turned out to matter a lot more than we ever imagined.",
    ],
    caption: "Buenos Aires · Early 1990s",
    band: {
      line: "Three friends, too many songs and nowhere near enough rehearsal-room money.",
    },
    disaster: {
      title: "The first disaster",
      lead: "Before Demo ’98, there was a first attempt. It went badly.",
      body: [
        "We recorded an early studio version of **“Love Comes Tonight”** back when we didn’t really know how any of this worked yet.",
        "The guitars are almost inaudible, the vocals came out absurdly loud, and the lead vocal and backing vocals were recorded together, on the same track, in a single take.",
        "The result was, to put it kindly, pretty disastrous.",
        "The tape survived for decades, turned up again, and we digitized it. We’re putting it on YouTube now not because it sounds good, but because it’s part of the story too.",
        "Some recordings get remastered. Others get kept as evidence.",
      ],
    },
    tascam: {
      title: "The basement machine",
      body: [
        "We didn’t have a studio.",
        "We had a basement.",
        "In the basement of Gonzalo’s mom’s real estate office, we’d set up instruments, cables, whatever microphones we could find, and our one real piece of technology:",
        "A **Tascam Porta 07**, a four-channel cassette four-track.",
        "With that we recorded a fairly absurd number of songs, tests, versions, ideas and things that were probably better left unheard again.",
        "But some survived.",
        "And years later, many of them ended up becoming **Demo ’98**.",
      ],
      slogan: "4 channels. One basement. Too many songs.",
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
