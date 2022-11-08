/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
    "./components/**/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "brand":"#FBAC18"
      },
      fontFamily:{
        "body":"Montserrat, sans-serif"
      }
    },
  },
  plugins: [],
}
