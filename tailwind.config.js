/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        '120': '120vh',
      },
      zIndex: {
        '101': '101',
        '100': '100',
        '99': '99',
      },
      minHeight: {
        '200': '200px',
      },
      maxHeight: {
        '200': '200px',
      }
    },
  },
  plugins: [],
}

