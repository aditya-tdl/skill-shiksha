import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/offline-internship-lucknow', '/offline-internship-uttar-pradesh'],
            disallow: ['/private/', '/api/', '/admin/'],
        },
        sitemap: 'https://skillshiksha.ai/sitemap.xml',
    }
}
