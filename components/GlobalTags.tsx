import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-makai.png")}
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
      <meta name="theme-color" content="#221E1F" />
      <meta name="msapplication-TileColor" content="#221E1F" />

      {
        /*
         * Include fonts
         * tip: It's always better copy fonts to the `/static/fonts` folder than serving from another
         * domain since DNS resolution times can really affect performance.
         */
      }
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${asset("/fonts/Poppins-Regular.woff")}) format('woff');
          }
          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${asset("/fonts/Poppins-Medium.woff")}) format('woff');
          }
          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(${asset("/fonts/Poppins-SemiBold.woff")}) format('woff');
          }
          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${asset("/fonts/Poppins-Bold.woff")}) format('woff');
          }
          `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
