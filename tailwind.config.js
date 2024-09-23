/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    colors: {
      light: {
        'white': '#F3F2FF', //#FEFEFF
        'black': '#000000', //#010405
        'blue': '#857DFF',
        'blue-light': '#B4BAFF',
        'beige': '#FFD5BA',
        'beige-light': '#FFEBD8',
      },
      dark: {

      }
      // 'gray': '#EBE3F5',
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
    },
    // extend: {
    //   spacing: {
    //     '128': '32rem',
    //     '144': '36rem',
    //   },
    //   borderRadius: {
    //     '4xl': '2rem',
    //   }
    // }
  },
  plugins: [],
}