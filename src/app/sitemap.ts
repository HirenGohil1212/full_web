import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { caseStudies } from '@/lib/case-studies-data';

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

  const mainPages = [
    { url: '', priority: 1.0 },
    { url: '/services', priority: 0.8 },
    { url: '/portfolio', priority: 0.8 },
    { url: '/startups', priority: 0.8 },
    { url: '/about', priority: 0.8 },
    { url: '/investors', priority: 0.8 },
    { url: '/contact', priority: 0.8 },
    { url: '/case-studies', priority: 0.8 },
    { url: '/blog', priority: 0.8 },
  ];

  const staticSitemap = mainPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page.priority,
  }));

  const serviceSitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const caseStudySitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogSitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticSitemap, ...serviceSitemap, ...caseStudySitemap, ...blogSitemap];
}
