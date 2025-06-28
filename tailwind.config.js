/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tb: "640px",
      // => @media (min-width: 640px) { ... }

      lp: "1024px",
      // => @media (min-width: 1024px) { ... }

      dt: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        browntxt: "#fefae0",
        brownBg: "#bc6c25",
      },
      fontFamily: {
        custom: ["Lilita One", "sans-serif"],
        custom2: ["Press Start 2P", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
