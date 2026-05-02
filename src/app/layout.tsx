import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/portfolio/Navbar';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
