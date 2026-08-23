import { useRouter } from "next/router";
import { getCopy } from "@/data/copy";

/**
 * Textos y locale de la página actual.
 *
 * `locale` sale del router de Next (config i18n en next.config.js): "es" en la
 * raíz y "en" bajo /en. `href()` arma links respetando el idioma actual — no
 * hace falta prefijar a mano, next/link ya lo resuelve, pero sirve para los
 * casos donde se necesita la URL completa (canonical, hreflang, sitemap).
 */
export default function useCopy() {
  const { locale, defaultLocale } = useRouter();
  return {
    locale,
    copy: getCopy(locale),
    isDefault: locale === defaultLocale,
  };
}
