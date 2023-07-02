/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDuration: {
        "3s": "3000ms",
      },
      inset: {
        "1/10": "10%",
        "1/20": "5%",
      },
      fontFamily: {
        code: [
          "Open Sans Condensed",
          "source-code-pro",
          "Menlo",
          "Monaco",
          "Consolas",
          "Courier New",
        ],
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
