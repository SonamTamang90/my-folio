const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        bebas: ["Bebas Neue", "sans-serif"],
      },

      colors: {
        base: "#997F00",
        dark: {
          900: "#0D0D0B",
          800: "#1C1C1C",
          700: "#0C0C0B",
          500: "#21211E",
          400: "#2C2C2C",
          200: "#393939",
          100: "#6F7071",
        },
      },
    },
  },
  plugins: [],
};
