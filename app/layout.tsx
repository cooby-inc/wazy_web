import Layout from '@/layouts/index';
import { GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wazy',
  description: 'Wazy',
  icons: '/favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-MJ39V9Z6" />
      <body suppressHydrationWarning>
        <div id="root">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
