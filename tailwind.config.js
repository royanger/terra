/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx}', ,],
   theme: {
      extend: {
         colors: {
            primary: '#35572F',
            secondary: '#FFC635',
            tertiary: '#533F2C',
            black: '#000000',
            gray: '#DEDEDE',
            red: '#FF0000',
            tan: '#FFF5DC',
         },
         fontFamily: {
            epilogue: [
               'Epilogue',
               'Arial Black',
               'Franklin Gothic Medium',
               'Futura',
               'Gill Sans',
               'sans-serif',
            ],
            montserrat: [
               'Montserrat',
               'Avenir',
               'Avenir Next',
               'Calibri',
               'Candara',
               'sans-serif',
            ],
         },
         width: {
            logo: '108px',
         },
         screens: {
            '3xl': '2000px',
         },

         maxWidth: {
            sm: '390px',
         },
         minWidth: {
            sm: '398px',
         },
      },
   },
   plugins: [require('daisyui')],
}
