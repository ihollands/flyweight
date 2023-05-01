/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#f8f8f8',
        black: '#0a0a0a',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
