/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts}",
    "./src/**/**/*.{js,ts}",
    "./src/**/**/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
