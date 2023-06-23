/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js}"],
  theme: {
    colors:{
      ...colors,
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
    },
    extend: {
      backgroundImage:{
        'sanFrancisco':"url('../img/sanFrancisco.jpg')",
        'sanFrancisco-Desktop':"url('../img/sanFranciscoDesktop.jpg')",
        'chicago':"url('../img/chicago.jpg')",
        'bali':"url('../img/bali.jpg')",
        'europe':"url('../img/europe.jpg')",
        'iceland':"url('../img/iceland.jpg')",
        'LA':"url('../img/LA.jpg')",
        'miami':"url('../img/miami.jpg')",
        'newyork':"url('../img/new_york.jpg')",
        'norway':"url('../img/norway.jpg')",
        'seattle':"url('../img/seattle.jpg')",
        'switzerland':"url('../img/switzerland.jpg')",
        'sydney':"url('../img/sydney.jpg')",
        'yosemite':"url('../img/yosemite.jpg')",
      },
      backgroundColor:{
        gray_900:colors.gray[900],
        green_blue:'#336965',
        azul:'#50A5F8',
        green_600:'#16A34A',
      },
      textColor:{
        white:'#FFFFFF',
        gray_300:'#D1D5DB',
        green_blue:'#336965',
        black:colors.black,
        gray_700:colors.gray[700],
      },
      fontFamily:{
        Montserrat:['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}

