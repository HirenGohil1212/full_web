import type {NextConfig} from 'next';

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https://*.tawk.to https://embed.tawk.to https://va.tawk.to https://www.google-analytics.com https://ssl.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.tawk.to https://embed.tawk.to;
    font-src 'self' https://fonts.gstatic.com https://*.tawk.to https://embed.tawk.to;
    img-src 'self' blob: data: https://images.unsplash.com https://picsum.photos https://lh3.googleusercontent.com https://placehold.co https://*.tawk.to https://embed.tawk.to https://va.tawk.to;
    connect-src 'self' blob: https://*.tawk.to https://va.tawk.to https://embed.tawk.to https://www.google-analytics.com wss://*.tawk.to wss://embed.tawk.to;
    frame-src 'self' https://*.tawk.to https://embed.tawk.to;
    media-src 'self' https://*.tawk.to https://embed.tawk.to;
    worker-src 'self' blob: https://*.tawk.to;
    upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: cspHeader.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
];

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
