const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fca5a5",
          secondary: "#370079",
          accent: "#fde68a",
          neutral: "#4f46e5",
          "base-100": "#deffb7",
          info: "#7dd3fc",
          success: "#00f98d",
          warning: "#ffb300",
          error: "#f10028",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Merriweather", ...defaultTheme.fontFamily.sans],
      },
    },

    container: {
      center: true,
    },
  },
  content: ["./public/*.html"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
