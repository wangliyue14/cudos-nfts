/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    colors: {
      gray: "rgb(28, 32, 48)",
      "gray-50": "rgb(28, 32, 28)",
      blue: "rgb(82, 166, 248)",
      "blue-light": "rgb(92, 186, 248)",
      "blue-dark": "rgb(125, 135, 170)",
      "blue-dark-2": "rgb(32, 39, 62)",
      "blue-dark-3": "rgb(40, 49, 78)",
      "blue-dark-4": "rgb(85, 95, 130)",
    },
    extend: {},
  },
  plugins: [],
};
