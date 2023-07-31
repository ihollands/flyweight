/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#f8f8f8',
        black: '#0a0a0a',
        accent: {
          blue: '#a2bcc9',
          pink: '#e3bfcd',
        },
      },
      fontSize: {
        '3xl': ['2rem', 1.0625],
        '4xl': ['4rem', 1],
      },
      screens: {
        xs: '500px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
