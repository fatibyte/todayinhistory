import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Discover fascinating historical events, famous birthdays, and incredible facts for every day of the year. Updated daily." />
        <meta name="keywords" content="today in history, on this day, historical events, this day in history, what happened today" />
        <meta property="og:title" content="Today In History — What Happened On This Day" />
        <meta property="og:description" content="Discover fascinating historical events, famous birthdays, and incredible facts for every day of the year." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://todayinhistory.co" />
        <link rel="icon" href="/favicon.ico" />
        
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8957440455361726" crossOrigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
