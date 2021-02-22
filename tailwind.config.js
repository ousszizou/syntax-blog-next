const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["HelveticaNeueLTRoman", "sans-serif"]
      },
      spacing: {
        base: "720px"
      },
      colors: {
        background: "var(--bg-color)",
        tgray: colors.trueGray,
        lightBlue: colors.lightBlue
      }
    }
  },
  variants: {
    extend: {
      backgroundOpacity: ["dark"],
      scale: ["hover"]
    }
  },
  plugins: []
};
