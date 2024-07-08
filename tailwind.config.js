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
      'xxxs': '340px',
      '3xxs': '436px',
      '2xxs': '500px',
      'xxs': '540px',
      'xss' : '547px',
      'xs': '577px',
      'sm': '640px',
      'sm2': '844px',
      'md': '768px',
      'md2': '878px',
      'md2': '991px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    zIndex: {
      '100': '100',
      '50': '50',
    },
  },
  plugins: [],
}