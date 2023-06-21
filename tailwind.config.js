/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#FFDD00',
        'primary-gray-dark': '#212121',
        'primary-orange': '#FF7B1C',
        'primary-gray-light': '#F1F1F1',
      },
    },
  },
  plugins: [],
}