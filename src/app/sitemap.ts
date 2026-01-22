import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.indicortexsolutions.com';

  const pages = [
    '/',
    '/services',
    '/portfolio',
    '/startups',
    '/about',
    '/investors',
    '/contact',
    '/case-studies',
  ];

  const sitemap = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '/' ? 1 : 0.8,
  }));

  return sitemap;
}
