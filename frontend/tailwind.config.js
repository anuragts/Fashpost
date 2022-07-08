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
      colors: {
        'pink': '#F7B2AD',
      },
      margin: {
        '9rem': '9rem',
      },
      spacing: {
        '558': '558px',
        '15rem': '15rem',
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
