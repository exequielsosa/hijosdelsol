import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { YOUTUBE_URL } from "@/data/site";
import useCopy from "@/hooks/useCopy";

/**
 * Header fijo con dos temas: claro mientras se ve el hero (la única pantalla
 * clara del sitio) y oscuro en todo lo demás. En las páginas de tema arranca
 * y se queda oscuro (forceDark).
 */
export default function SiteHeader({ forceDark = false }) {
  const [dark, setDark] = useState(forceDark);
  const { locale, copy } = useCopy();
  const router = useRouter();

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

  // Desde una página interna los anclas vuelven a la home
  const anchor = (hash) => (forceDark ? `/${hash}` : hash);

  const sections = [
    { href: anchor("#disco"), label: copy.nav.record },
    { href: anchor("#letras"), label: copy.nav.lyrics },
    { href: anchor("#video"), label: copy.nav.video },
    { href: anchor("#canal"), label: copy.nav.channel },
    // Página propia, no un ancla
    { href: "/history", label: copy.nav.history },
  ];

  return (
    <header className="hds-nav" data-theme={dark ? "dark" : "light"}>
      <Link href={forceDark ? "/" : "#top"} className="hds-brand">
        <span className="hds-mark" aria-hidden="true" />
        <span className="hds-wordmark">Hijos del Sol</span>
      </Link>
      <nav className="hds-navlinks" aria-label={copy.nav.main}>
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="hds-navlink"
          >
            {section.label}
          </Link>
        ))}

        {/* Mantiene la misma página al cambiar de idioma */}
        <span className="hds-lang">
          <Link
            href={router.asPath}
            locale="es"
            className="hds-lang-option"
            aria-current={locale === "es" ? "true" : undefined}
            hrefLang="es"
          >
            ES
          </Link>
          <Link
            href={router.asPath}
            locale="en"
            className="hds-lang-option"
            aria-current={locale === "en" ? "true" : undefined}
            hrefLang="en"
          >
            EN
          </Link>
        </span>

        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hds-navcta"
          aria-label={copy.nav.subscribeAria}
        >
          {copy.nav.subscribe}
        </a>
      </nav>
    </header>
  );
}
