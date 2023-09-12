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
        'sml': '0.5em',
        '7xl': '5rem', // Custom text size class
        '8xl': '6rem', // Another custom text size class
      },
      colors: {
        'blackbg': '#161616',
        'grey': '#656565',
        'greytext': '#BEBEBE',
        'yellow': '#FFD446',
        'greycard': '#3C3C3C',
        'greyline' : '#777777',
        'pink': '#F178B6'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
  }
}
