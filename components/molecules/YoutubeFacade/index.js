import { useState } from "react";

export default function YoutubeFacade({ videoId, title }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className="w-[350px] h-[262px] sm:w-[500px] sm:h-[375px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[600px]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play video: ${title}`}
      className="group relative w-[350px] h-[262px] sm:w-[500px] sm:h-[375px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[600px] cursor-pointer overflow-hidden"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width="480"
        height="360"
      />
      <span
        className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/50"
        aria-hidden="true"
      >
        <svg
          className="w-20 h-20 text-white drop-shadow-lg transition-transform group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
