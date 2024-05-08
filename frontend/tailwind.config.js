/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#01A651",
        secondary: "#FF0101",
      },
      fontFamily:{
        mukta: [ "'Mukta Mahee'", 'sans-serif']
      }

    },
  },
  plugins: [],
}