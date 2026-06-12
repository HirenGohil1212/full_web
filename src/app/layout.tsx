import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next"

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
    'GrowKrishi',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Indicortex Solutions LLP - AI, Web & Mobile Development',
    description:
      'Pioneering intelligent digital solutions in AI, web, and mobile development to empower businesses worldwide.',
    url: 'https://www.indicortexsolutions.com',
    siteName: 'Indicortex Solutions LLP',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Indicortex Solutions Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
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
        <Analytics />
        
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Indicortex Solutions",
              "url": "https://www.indicortexsolutions.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.indicortexsolutions.com/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        <Script id="suppress-tawk-noise" strategy="afterInteractive">
          {`
            (function() {
              var oldError = console.error;
              console.error = function() {
                if (arguments[0] === true || (typeof arguments[0] === 'string' && (arguments[0].includes('tawk.to') || arguments[0].includes('twk-chunk')))) {
                  return;
                }
                oldError.apply(console, arguments);
              };
            })();
          `}
        </Script>

        <Script 
          id="tawk-to-integration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/696dd9c244009b19824d7ea7/1jfahl8if';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
