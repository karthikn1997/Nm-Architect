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
      fontFamily: {
        lora: ['Lora', 'serif'], // Add 'Lora' font
        allura: ['Allura', 'cursive'],
        bitter: ['Bitter', 'serif'],
        caveat: ['Caveat', 'cursive'],
        smooch: ['Smooch Sans', 'sans-serif'],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 140s linear infinite",
        bounceSlow: 'bounceSlow 4s ease-in-out infinite',
        bounceMedium: 'bounceSlow 2s ease-in-out infinite',
        spinBorder: 'spinBorder 6s linear infinite',
      },
    },
  },
  plugins: [],
}
