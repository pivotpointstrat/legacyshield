import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LegacyShield | Protect Your Family. Build Your Legacy.',
  description: 'Financial literacy, life insurance education, and estate planning for DC-area working families. Join thousands protecting their family\'s future.',
  keywords: 'life insurance education, estate planning, financial literacy, DC families, generational wealth, family wealth protection',
  openGraph: {
    title: 'LegacyShield | Protect Your Family. Build Your Legacy.',
    description: 'Financial literacy and estate education for DC-area working families.',
    url: 'https://legacyshielddc.com',
    siteName: 'LegacyShield',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
