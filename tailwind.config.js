/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'cs': '376px',
      'sm': '500px',
      'md': '769px',
      'lg': '1025px',
      'xl': '1441px',
      '2xl': '1800px',
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};