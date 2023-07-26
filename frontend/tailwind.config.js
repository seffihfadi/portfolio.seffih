/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        quick: ['Quicksand', 'sans-serif'],
        tang: ['Tangerine', 'cursive'],
        arabic: ['IBM Plex Sans Arabic', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('../imgs/headpnged1.png')",
      }
    },
  },
  plugins: [],
}