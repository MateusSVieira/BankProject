/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Orange-Web" : "#FFA400",
        "Yale-Blue" : "#054A91",
        "Steel-Blue" : "#3E7CB1",
        "Platinum" : "#E0E1DD",
        "Black" : "#000100"
      },
    },
  },
  plugins: [],
}