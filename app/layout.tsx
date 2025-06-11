import Layout from '@/layouts/index';
import { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wazy',
  description: 'Wazy',
  icons: '/favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
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
      </Head>
      <body>
        <div id="root">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
