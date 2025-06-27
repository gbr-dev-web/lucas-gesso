// pages/_app.tsx
import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Título padrão (recomendado sobrescrever em cada página) */}
        <title>Lucas Gesso | Gesseiro Profissional em Fortaleza</title>

        {/* SEO base */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Gesseiro em Fortaleza com mais de 10 anos de experiência. Especialista em forro, sanca, drywall e projetos personalizados em gesso. Orçamento rápido e sem compromisso."
        />
        <meta
          name="keywords"
          content="gesseiro em Fortaleza, gesso Fortaleza, forro de gesso, sanca, drywall, gesseiro profissional, Gesseiro em maracanau"
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
          href="/lucas-gesso/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/lucas-gesso/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/lucas-gesso/favicon-16x16.png"
        />
        <link rel="icon" href="/lucas-gesso/favicon.ico" />
        <link rel="manifest" href="/lucas-gesso/site.webmanifest" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
