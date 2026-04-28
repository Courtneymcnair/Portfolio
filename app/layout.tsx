import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Courtney McNair — Product Designer',
  description:
    'Product Designer with a background in neuroscience and human behavior, designing tools that turn complex systems into clear, intuitive workflows.',
  openGraph: {
    title: 'Courtney McNair — Product Designer',
    description:
      'Product Designer with a background in neuroscience and human behavior, designing tools that turn complex systems into clear, intuitive workflows.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fontshare CDN — active until local /public/fonts/satoshi/ files are added */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400,400i&display=swap"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
