import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.indicortexsolutions.com';

  const services = [
    'mobile-app-development',
    'web-development',
    'ai-agent-development',
    'managed-it-services',
    'cloud-solutions',
    'ai-and-machine-learning',
  ];

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

  const staticSitemap = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '/' ? 1 : 0.8,
  }));

  const serviceSitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticSitemap, ...serviceSitemap];
}
