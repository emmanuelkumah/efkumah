/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      display: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "my-gradient":
          "linear-gradient(102deg, rgba(3, 5, 29, 0.85) 2.11%, rgba(255, 0, 0, 0.85) 100%)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
