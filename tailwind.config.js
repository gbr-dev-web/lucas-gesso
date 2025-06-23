/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{js,ts,jsx,tsx,html}", 
    "./styles/**/*.{js,ts,jsx,tsx,html,css}", 
    "./pages/**/*.{js,ts,jsx,tsx,html}", 
    "./src/**/*.{js,ts,jsx,tsx,html}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        bree: ['"Bree Serif"', "serif"],
        open: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
