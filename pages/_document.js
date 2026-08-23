import { Html, Head, Main, NextScript } from "next/document";
import { DEFAULT_LOCALE } from "@/data/copy";

/**
 * El `lang` del <html> sale del locale de la request, no de una constante:
 * hardcodeado en "en" declaraba como inglesas todas las páginas castellanas.
 * En _document no hay router, así que el locale se lee de __NEXT_DATA__.
 */
export default function Document(props) {
  const locale = props.__NEXT_DATA__?.locale ?? DEFAULT_LOCALE;

  return (
    <Html lang={locale}>
      <Head>
        {/* Preconnect to external domains - Max 4 for optimal performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />

        {/* Fonts with display swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;600;800;900&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicons and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#050505" />
        <meta name="msapplication-TileColor" content="#050505" />

        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
