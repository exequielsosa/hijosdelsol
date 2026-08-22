import Link from "next/link";
import { useEffect, useState } from "react";
import { YOUTUBE_URL } from "@/data/site";

const SECTIONS = [
  { href: "#disco", label: "The record" },
  { href: "#letras", label: "Lyrics" },
  { href: "#video", label: "Video" },
  { href: "#canal", label: "Channel" },
];

/**
 * Header fijo con dos temas: claro mientras se ve el hero (la única pantalla
 * clara del sitio) y oscuro en todo lo demás. En las páginas de tema arranca
 * y se queda oscuro (forceDark).
 */
export default function SiteHeader({ forceDark = false }) {
  const [dark, setDark] = useState(forceDark);

  useEffect(() => {
    if (forceDark) {
      setDark(true);
      return;
    }
    let frame = 0;
    const evaluate = () => {
      frame = 0;
      setDark(window.scrollY > window.innerHeight * 0.72);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(evaluate);
    };
    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [forceDark]);

  // Desde una página de tema los anclas vuelven a la home
  const anchor = (hash) => (forceDark ? `/${hash}` : hash);

  return (
    <header className="hds-nav" data-theme={dark ? "dark" : "light"}>
      <Link href={forceDark ? "/" : "#top"} className="hds-brand">
        <span className="hds-mark" aria-hidden="true" />
        <span className="hds-wordmark">Hijos del Sol</span>
      </Link>
      <nav className="hds-navlinks" aria-label="Main">
        {SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={anchor(section.href)}
            className="hds-navlink"
          >
            {section.label}
          </Link>
        ))}
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hds-navcta"
          aria-label="Subscribe to the HIJOS DEL SOL YouTube channel"
        >
          Subscribe
        </a>
      </nav>
    </header>
  );
}
