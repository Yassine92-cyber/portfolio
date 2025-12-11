import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export const alt = 'Yassine Kaddouri | Bridge Builder & Peer Supporter'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030303',
          backgroundImage: 'radial-gradient(circle at center, #1e1b4b 0%, #030303 70%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 90,
              fontWeight: 800,
              background: 'linear-gradient(to right, #a5b4fc, #ffffff, #fda4af)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              padding: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.05em',
            }}
          >
            Yassine Kaddouri
          </h1>
          <p
            style={{
              fontSize: 42,
              color: '#94a3b8',
              margin: '20px 0 0 0',
              fontWeight: 500,
              letterSpacing: '-0.025em',
            }}
          >
            Bridge Builder & Peer Supporter
          </p>
          <p
            style={{
              fontSize: 24,
              color: '#64748b',
              marginTop: 40,
              fontWeight: 400,
            }}
          >
            yassinekaddouri.com
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

