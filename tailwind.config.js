/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '0.1': '0.1px',
      }
    },
    screens: {
      'xxs': '540px', // min-width
    },
  },
  plugins: [],
}