/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#2B2929",
      red: "#FF4F4F",
      white: "#FFFFFF",
      dark: "#464646",
    },
    extend: {
      colors: {
        gray: {
          100: '#F8F8F8',
          200: '#EFEFEF',
          300: '#E1E1E1',
          400: '#BABABA',
          500: '#716969'
        },
        yellow: {
          100: "#FFF0BA",
          200: "#F1BF5D"
        }
      },
      backgroundImage: {
        grad1: "radial-gradient(243.03% 191.83% at 102.27% -3.07%, rgb(110, 47, 158) 0%, rgb(142, 154, 225) 24.47916716337204%, rgb(221, 97, 175) 56.77083134651184%, rgb(238, 242, 168) 74.47916865348816%)",
        grad2: "linear-gradient(244deg, #efefef 0%, #cb9a63 29.17%, #d76598 42.71%, #46527f 56.77%, #1e9190 70.83%, #4a5976 86.46%, #5f3f6b 100%)",
		"grad-yellow": "linear-gradient(225deg, #fff385 2.97%, #fff0ba 100%)"
      },
      screens: {
        'xsm': '400px'
      }
    },

  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}