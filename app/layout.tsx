import { Metadata } from 'next';
import Script from 'next/script';
import Layout from 'src/layouts';
import './index.css';

export const metadata: Metadata = {
  title: 'Wazy',
  description: 'Wazy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/wazy.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script id="gtm-init" strategy="beforeInteractive">
          {`(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            const f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-MJ39V9Z6')`}
        </Script>
      </head>
      <body>
        <div id="root">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
