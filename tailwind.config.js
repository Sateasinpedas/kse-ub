/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: 'jit',
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#9655FF',
        'orange': '#FF7A42',
        'black': '#1A191A',
        'cream': '#E2EECD',
        'white': '#FFFFFF',
        'gray': '#d9d9d9',
        'purple-light': '#6362e7',
        'purple-extralight': 'rgba(99,98,231,0.15)',
        'transparent': '#00FFFFFF',
      },
      fontFamily: {
        sans: ['Maven Pro','sans-serif']
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
    },
  },
  plugins: [],
}