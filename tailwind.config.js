/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },

    fontFamily: {
      display: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#c4cfde",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/graph.png')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
