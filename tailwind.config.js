module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        xs: "410px",
      },
      fontFamily: {
        jeju: ["JejuGothic", "sans-serif"],
        AgencyFb: ["Agency FB"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
