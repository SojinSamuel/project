/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      colors: {
        nude: "	hsl(38, 90%, 81%)",
        nude1: "#EED180",
        gray1: "hsl(218, 11%, 65%)",
      },
    },
  },
  plugins: [],
};
