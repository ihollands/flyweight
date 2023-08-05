import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          property="og:url"
          content="https://www.flyweight.xyz/"
        />

        <meta
          property="og:title"
          content="Flyweight"
        />

        <meta
          property="og:description"
          content="Leaner and meaner brand design"
        />

        <meta
          property="og:image"
          content="https://www.flyweight.xyz/opengraph-image.png"
        />

        <meta
          property="og:site_name"
          content="Flyweight"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
