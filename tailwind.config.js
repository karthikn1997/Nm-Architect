/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'xxs': '375px'
      },
      colors: {
        'primary': '#0F0F0F',
        'secondary': '#EBCFA7',
        'gold': '#D2B77A'
      },
    },
  },
  plugins: [],
}
