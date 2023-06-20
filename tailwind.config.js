/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        white:'#FFFFFF',
        gray_300:'#D1D5DB',
        green_blue:'#336965',
        gray_700:colors.gray[700],
        green_600:'#16A34A',
        gray_900:colors.gray[900],
        gray_800:colors.gray[800],
        yellow:colors.yellow[400],
        black:colors.black,
        azul:'#50A5F8',
      }
    },
  },
  plugins: [],
}

