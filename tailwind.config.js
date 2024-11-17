/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        domine: ['Domine', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
    },
},
  plugins: [],
}

