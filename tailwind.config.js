/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'canvas': '#10171E',
          'gold': '#CCA65B',
          'mahogany': '#281611',
          'burgundy': '#541520',
          'parchment': '#F5EFE6',
          'muted': '#8A959E',
          'border': 'rgba(204, 166, 91, 0.24)'
        }
      },
      fontFamily: {
        'display': ['Cinzel Decorative', 'serif'],
        'sub': ['Marcellus', 'serif'],
        'body': ['Cardo', 'serif']
      }
    },
  },
  plugins: [],
}
