import { ImageResponse } from 'next/server'
import { siteConfig } from '@/lib/site-config'

export const runtime = 'edge'
export const alt = siteConfig.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#161616',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', color: '#FFD446', fontSize: 32, fontWeight: 700 }}>
          rizkeeps
        </div>
        <div
          style={{
            display: 'flex',
            color: '#ffffff',
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.1,
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          {siteConfig.name} — Fullstack web developer
        </div>
        <div style={{ display: 'flex', color: '#BEBEBE', fontSize: 30, marginTop: 28, maxWidth: 900 }}>
          Fast, reliable web apps — designed, shipped, and maintained end to end.
        </div>
      </div>
    ),
    size
  )
}
