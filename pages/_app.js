// pages/_app.tsx
import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Título padrão (recomendado sobrescrever em cada página) */}
        <title>Lucas Gesso | Gesseiro Profissional</title>

        {/* SEO base */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Serviços de gesseiro em alto padrão com Lucas Gesso. Drywall, sancas, forros e mais. Atendimento em Fortaleza e região."
        />
        <meta
          name="keywords"
          content="Gesso, Gesseiro, Drywall, Forro, Sanca, Reformas, Lucas Gesso, Fortaleza"
        />
        <meta name="author" content="Gabriel Martins" />

        {/* Open Graph (Facebook e redes sociais) */}
        <meta
          property="og:title"
          content="Lucas Gesso | Gesseiro Profissional"
        />
        <meta
          property="og:description"
          content="Transforme seu ambiente com serviços de gesso de qualidade em Fortaleza."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gbr-dev-web.github.io/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lucas Gesso | Gesseiro Profissional"
        />
        <meta
          name="twitter:description"
          content="Serviços em gesso de alta qualidade. Atendemos Fortaleza e região."
        />

        {/* Favicons para vários dispositivos */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
