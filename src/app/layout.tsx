import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '§§secret(LegacyShield — Protect Your Family. Build Your Legacy.',
  description:
    'Financial literacy and estate education for DC working families. Learn life insurance, estate planning, and generational wealth strategies.',
  keywords: ['life insurance', 'estate planning', 'generational wealth', 'DC families', 'financial literacy'],
  openGraph: {
    title: '§§secret(LegacyShield',
    description: 'Protect Your Family. Build Your Legacy.',
    url: 'https://legacyshielddc.com',
    siteName: '§§secret(LegacyShield',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
