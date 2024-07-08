/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        "customGray-800": '#1C1D1E',
        "customGray-700": '#2A2B2C',
        "customGray-50": '#FDFDFD',
        "customGray-400": '#EDECEC',
        customTeal: '#0ABAB5',
        customRed: '#9C0A0A',
        customYellow: '#FFCE31'
      },
    },
  },
  plugins: [],
};
