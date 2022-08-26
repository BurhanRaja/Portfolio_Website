/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
      spanNum: ['Silkscreen', 'cursive'],
      introHello: ['Roboto Mono', 'monospace'],
      myName: ['Inter', 'sans-serif']
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