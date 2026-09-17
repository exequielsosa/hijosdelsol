// Fuente unica de "Un ensayo mas" (1998): una cinta de sala distinta del
// Demo'98, rescatada casi treinta anios despues. Mismo criterio que
// data/tracks.js para la letra: tal cual, sin corregir tipeos ni mayusculas.
export const ENSAYOS = [
  {
    title: "Fiorella",
    slug: "fiorella",
    video: "QX77PHY_mFY",
    short: false,
    lang: "ES",
    cover: "/ensayos/Fiorella.jpg",
    backCover: "/ensayos/back_fiorella.jpg",
    lyrics: "No estaba enamorado\nde la mujer equivocada,\nque no me daba ni la hora\nni me dejaba pensar.\n\nPero toda esa noche\ncomenzó a cambiar\ncuando escribí su nombre\ny comencé a soñar.\n\nPero ahora hay que sufrir,\nsufrir por haber amado\nmucho más que lo deseado,\ny es estar enamorado.\n\nTengo un regalo para hacerte, amor.\nQuiero tenerte entre mis brazos\ny llenarte de pasión.\n\nYo sé que tú me amas\ny que siempre me amarás,\npor eso yo te digo\nque estaré hasta el final.\n\nHasta el final,\nfinal,\nfinal.\n\nPero ahora hay que sufrir,\nsufrir por haber amado\nmucho más que lo deseado,\ny es estar enamorado.",
  },
  {
    title: "Mi Amor",
    slug: "mi-amor",
    video: "pft7mst8XiQ",
    short: true,
    lang: "ES",
    cover: "/ensayos/MiAmor.jpg",
    backCover: "/ensayos/back_miamor.jpg",
    lyrics: "1, 2, 3, va...\n\nOhhh, mi amor\n\nUna noche de verano yo te vi pasar,\nuna noche de verano te invité a soñar.\n\nUna noche de invierno yo te conocí,\nuna noche de verano yo te vi partir.\n\nOhhh, mi amor\n\nUna noche de invierno yo te conocí,\nuna noche de invierno yo te vi venir.\n\nUna noche de verano te invité a bailar,\nuna noche de verano te invité a soñar.\n\nOhhh, mi amor\n\nTodavía pienso en ti,\ntodavía vivo para ti.\nTodavía pienso en ti,\ntodavía vivo para ti.\n\nOhhh, mi amor\nOhhh, mi amor\nOhhh, mi amor",
  },
  {
    title: "Noches De Paz",
    slug: "noches-de-paz",
    video: "mjzXpLd7GAU",
    short: false,
    lang: "ES",
    cover: "/ensayos/noches_de_paz.jpg",
    backCover: "/ensayos/back_noches_de_paz.jpg",
    lyrics: "Noches de paz\ny de dolor,\nsangre y gritos,\ngritos de terror.\n\nCuerpos sin vida,\nmuertos de hambre,\ncreyendo en un Cristo\ncuya vida no vale.\n\nDespertares eternos\nen noches oscuras,\npara seguidores fieles\nde mentes puras.\n\n¿Cómo pude ser tan feliz\nteniéndolos a mi lado?\nYa no están conmigo\ny me siento aliviado.\n\nTardes enteras\nmirando el pasado,\nestando el futuro\nya destinado.\n\nAmando mis pensamientos\nde odio aplastante,\nbuscando el final\nde esa gente intolerante.\n\n¿Por qué mi vida está acabada\ny la de ellos está salvada?\n\n¿Cómo pude ser tan feliz\nteniéndolos a mi lado?\nYa no están conmigo\ny me siento aliviado.\n\n¿Cómo pude ser tan feliz?\n¿Cómo pude ser tan feliz?",
  },
];

/** Vecinos circulares dentro de los 3 ensayos (independiente del Demo'98). */
export const neighboursEnsayo = (slug) => {
  const i = ENSAYOS.findIndex((t) => t.slug === slug);
  const len = ENSAYOS.length;
  return {
    prev: ENSAYOS[(i - 1 + len) % len],
    next: ENSAYOS[(i + 1) % len],
  };
};
