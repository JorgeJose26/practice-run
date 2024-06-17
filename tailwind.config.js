/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        browntxt: "#fefae0",
        brownBg: "#bc6c25",
      },
      fontFamily: {
        custom: ["Lilita One", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
