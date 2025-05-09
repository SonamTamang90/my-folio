import { keyframes } from "framer-motion";

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        bebas: ["Bebas Neue", "serif"],
      },

      colors: {
        // base: "#997F00",
        dark: {
          900: "#161616",
          700: "#1C1C1C",
          400: "#858585",
          300: "#242424",
          200: "#2C2C2C",
          100: "#393939",
        },
      },

      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: { shine: "shine 5s linear infinite" },
    },
  },
  plugins: [],
};
