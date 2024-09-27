/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        'PulseSize': 'zoomInOut 2s linear infinite',
      },
      keyframes: {
        zoomInOut:{
          '0% , 100%' : {scale : '1.1'},
          '50%' : {scale:'1'},
        }
      }
    },
  },
  plugins: [],
}

