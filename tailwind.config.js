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
            error: '#FF0000',
            success: '#398A2C'
         },
         fontFamily: {
            epilogue: ['Epilogue', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
         },
         width: {
            logo: '108px',
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
