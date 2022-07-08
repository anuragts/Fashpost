/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'custom':['Source Sans Pro', 'sans-serif'],
      },
      screens: {
        sm: "450px",

        md: "768px",


        lg: "1350px",
      },
    },
  },
  plugins: [],
}
