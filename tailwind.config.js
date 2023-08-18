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
      colors: {
        'blackbg': '#161616',
        'grey': '#656565',
        'greytext': '#BEBEBE',
        'yellow': '#FFD446',
        'greycard': '#3C3C3C',
        'greyline' : '#777777'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
  }
}
