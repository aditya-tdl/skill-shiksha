import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://skillshiksha.ai',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://skillshiksha.ai/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://skillshiksha.ai/programs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Adding location-specific paths to help local SEO (Offline Internships in Lucknow)
        {
            url: 'https://skillshiksha.ai/offline-internship-lucknow',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://skillshiksha.ai/offline-internship-uttar-pradesh',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
    ]
}
