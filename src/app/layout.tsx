import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HEARTATAK - Youth Culture Magazine',
  description: 'A youth-led creative magazine focused on music, photography, fashion, art, and youth culture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700;900&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
