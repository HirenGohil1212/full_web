import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.indicortexsolutions.com'),
  title: {
    default: 'Indicortex Solutions LLP - AI, Web & Mobile Development',
    template: '%s | Indicortex Solutions LLP',
  },
  description:
    'Indicortex Solutions LLP delivers cutting-edge AI, web, and mobile app development services. We build scalable, intelligent software solutions to drive business growth.',
  keywords: [
    'AI development',
    'web development',
    'mobile app development',
    'software solutions',
    'startup funding',
    'IT services',
    'Indicortex',
  ],
  openGraph: {
    title: 'Indicortex Solutions LLP - AI, Web & Mobile Development',
    description:
      'Pioneering intelligent digital solutions in AI, web, and mobile development to empower businesses worldwide.',
    url: 'https://www.indicortexsolutions.com',
    siteName: 'Indicortex Solutions LLP',
    images: [
      {
        url: '/logo.png',
        width: 32,
        height: 32,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Indicortex Solutions LLP - AI, Web & Mobile Development',
    description:
      'Indicortex Solutions LLP delivers cutting-edge AI, web, and mobile app development services. We build scalable, intelligent software solutions to drive business growth.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://embed.tawk.to" />
        <link rel="preconnect" href="https://va.tawk.to" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased flex flex-col'
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
        <Script id="tawk-to-script" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/696dd9c244009b19824d7ea7/1jfahl8if';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
