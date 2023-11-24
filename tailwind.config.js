/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line

  ],
  theme: {
    extend: {
      // fontFamily: {
      //   poppins: ['Poppins', 'sans'],
      // },
      screens: {
        'sm': '330px',
        maxsm: '767px'

      },
      colors: {
        primary: '#1a1f71', // Main color
        secondary: '#196dfb'// Secondary color,
      
     
      },

    },
  },
  plugins: [],
}

