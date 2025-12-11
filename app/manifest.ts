import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yassine Kaddouri | Bridge Builder & Peer Supporter',
    short_name: 'Yassine Kaddouri',
    description: 'Postdoc researcher turned B2B SaaS business developer and community builder, helping people and teams go from 0→1 and turning noise into signal.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030303',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

