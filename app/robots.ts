import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/*.json', '/admin/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: ['MJ12bot', 'AhrefsBot'],
        crawlDelay: 10,
      },
      {
        userAgent: ['SemrushBot', 'DotBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://yourdomainname.com/sitemap.xml',
  }
}
