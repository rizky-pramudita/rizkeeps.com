/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        sml: '0.5em',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      colors: {
        blackbg: '#161616',
        surface: '#1e1e1e',
        grey: '#656565',
        greytext: '#BEBEBE',
        yellow: '#FFD446',
        greycard: '#3C3C3C',
        greyline: '#777777',
        border: '#2a2a2a',
        pink: '#F178B6',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.6)',
        glow: '0 0 0 1px rgba(255,212,70,0.25), 0 8px 30px -10px rgba(255,212,70,0.25)',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    base: false,
  },
}
