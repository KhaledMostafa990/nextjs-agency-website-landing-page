import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en-US'>
      <Head>
        <title>Agency landing page</title>

        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
