/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
   
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',},
      center: true,
    },
    extend: {
      fontFamily: {
        'instrument': ["Instrument Sans", 'sans-serif'],
        'inter':["Inter", 'sans-serif']
      },
      colors: {
        primary: {
          950: '#09B850',
          850:'#202124',
          750:'#606261'
        },
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

