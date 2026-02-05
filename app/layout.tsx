import type { Metadata } from 'next';
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Thilina Jayaranga | Portfolio',
  description:
    'Official portfolio of Thilina Jayaranga, Computer Science undergraduate and software developer.',
  metadataBase: new URL('https://thilinaj.me'),
  alternates: {
    canonical: 'https://thilinaj.me/'
  },
  openGraph: {
    title: 'Thilina Jayaranga | Portfolio',
    description:
      'Official portfolio of Thilina Jayaranga, Computer Science undergraduate and software developer.',
    url: '/',
    siteName: 'Thilina Jayaranga Portfolio',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thilina Jayaranga | Portfolio',
    description:
      'Official portfolio of Thilina Jayaranga, Computer Science undergraduate and software developer.'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
