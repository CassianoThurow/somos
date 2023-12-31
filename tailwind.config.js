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
        'primary-orange-light': '#FF8200',
        'primary-gray-light': '#F1F1F1',
        'primary-gray': "#DADADA",
        'primary-black' : "#1A1B1A",
        'primary-white': "#F6F6F6",
      },
      borderRadius: {
        '20': '20px',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'montserrat-bold': ['Montserrat-Bold', 'sans-serif']
      },
      lineHeight: {
        '48': '3rem',
      },
      backgroundImage :{
        'custom-gradient': 'linear-gradient(212deg, #000 0%, #000 1.87%, #FFF 100%)'
      },
      spacing: {
        '444': '27.75rem',
      }
    },
  },
  plugins: [],
}