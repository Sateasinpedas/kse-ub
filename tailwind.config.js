/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#9655FF',
      'orange': '#FF7A42',
      'black': '#1A191A',
      'cream': '#E2EECD',
      'white': '#FFFFFF',
      'gray': '#d9d9d9',
      'transparent': '#00FFFFFF'
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
    extend: {},
  },
  plugins: [],
}