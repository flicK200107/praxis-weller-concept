/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      colors: {
        'sage': '#8DA399',
        'forest': '#2F4F4F',
      }
    },
  },
  plugins: [],
}
