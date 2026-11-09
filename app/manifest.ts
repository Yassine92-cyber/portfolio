import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yassine Kaddouri, Ph.D. | Founder & CEO of Orinavis',
    short_name: 'Yassine Kaddouri',
    description: 'Founder & CEO of Orinavis. Scientist, business developer and community builder working on clearer paths from skills to opportunity.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090B10',
    theme_color: '#090B10',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
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
