/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray': 'rgb(245 245 245)',
      'titulo': '#6e0c0c',
      'subtitulo': '#444444',
      'paragrafo': '#556b2f',
      'fundo': '#eaeaea',
      'white': '#fff',
    },
    fontFamily: {
      'bebas': ['Bebas Neue', 'sans-serif'],
    },
  },
  plugins: [],
}