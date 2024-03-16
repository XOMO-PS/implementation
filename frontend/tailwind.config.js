/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blue: "#40AFD2",
        green: "#00C3C9",
        lightGreen: "#D3ECEE",
        red: "#FF6060",
        darkGreen: "#016C81",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
