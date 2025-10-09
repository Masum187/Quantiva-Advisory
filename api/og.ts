// /api/og.ts
import { ImageResponse } from '@vercel/og';
import React from 'react';

export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Quantiva Advisory';

  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          background: '#0b1220',
          color: 'white',
          padding: '60px',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 64,
          fontFamily: 'Inter, Arial',
        },
      },
      React.createElement(
        'div',
        { style: { maxWidth: 1000, textAlign: 'center' } },
        React.createElement('div', { style: { fontWeight: 800 } }, title),
        React.createElement(
          'div',
          { style: { fontSize: 28, marginTop: 16, opacity: 0.9 } },
          'Strategie · Engineering · Enablement'
        )
      )
    ),
    { width: 1200, height: 630 }
  );
}

