/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
      cursive: ['Silkscreen', 'cursive'],
      roboto: ['Roboto Mono', 'monospace'],
      interBold: ['Inter', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif']
    },
    maxWidth: {
      400: '400px',
      760: '760px',
      780: '780px',
      800: '800px',
      1000: '1000px',
      1200: '1200px',
      1400: '1400px',
    },
  },
  plugins: [],
};