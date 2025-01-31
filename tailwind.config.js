/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        shine: "shine 5s linear infinite",
        text: "text 5s ease infinite",
        twinkle: "twinkle var(--twinkle-duration, 3s) ease-in-out infinite",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 1 },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      screens: {
        xs: "410px",
      },
      fontFamily: {
        AgencyFb: ["AgencyFb", "sans-serif"],
        bigShoulders: ["Big Shoulders Text", "AgencyFb"],
        roboto: ["Roboto", "AgencyFb"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
