import { useState } from "react";

/**
 * Marco click-to-play: muestra el poster diseñado (children) y recién al hacer
 * click monta el iframe de YouTube en el mismo recuadro, con autoplay. Así la
 * página no arrastra el JS del player de entrada.
 */
export default function YoutubeFrame({
  videoId,
  title,
  playAria,
  frameClassName,
  embedClassName,
  children,
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={embedClassName}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={frameClassName}
      onClick={() => setPlaying(true)}
      aria-label={playAria ?? title}
    >
      {children}
    </button>
  );
}
