import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/portfolio/Navbar';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..800;1,8..60,300..800&family=Geist:wght@300..700&family=JetBrains+Mono:wght@400;500;600&family=Pacifico&display=swap"
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
